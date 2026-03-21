import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { contactFormSchema } from "@/lib/validations";
import {
  sendContactNotification,
  sendConfirmationEmail,
} from "@/lib/email";

export async function POST(request: NextRequest) {
  // 1. IP extraction
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // 2. Rate limit — 5 requests per IP per 15 minutes
  const limit = rateLimit(ip, 5, 15 * 60 * 1000);
  if (!limit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please try again later.",
        retryAfterMs: limit.retryAfterMs,
      },
      { status: 429 },
    );
  }

  // 3. Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  // 4. Honeypot check
  const raw = body as Record<string, unknown>;
  if (raw.website || raw.honeypot || raw.url) {
    // Silently accept to avoid tipping off bots
    return NextResponse.json({ success: true });
  }

  // 5. Zod validation
  const result = contactFormSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { success: false, error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const data = result.data;

  // 6. Send emails (non-blocking — fire and forget, but log failures)
  try {
    await Promise.all([
      sendContactNotification(data),
      sendConfirmationEmail(data.email, data.name),
    ]);
  } catch (err) {
    console.error("[api/contact] Email send error:", err);
    // Do not fail the request — the submission was still received
  }

  // 7. Success
  return NextResponse.json({
    success: true,
    message: "Your message has been received. We will respond within one business day.",
  });
}
