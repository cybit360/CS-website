import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { partnerFormSchema } from "@/lib/validations";
import {
  sendPartnerNotification,
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
    return NextResponse.json({ success: true });
  }

  // 5. Zod validation
  const result = partnerFormSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { success: false, error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const data = result.data;

  // 6. Send emails (non-blocking)
  try {
    await Promise.all([
      sendPartnerNotification(data),
      sendConfirmationEmail(data.email, data.name),
    ]);
  } catch (err) {
    console.error("[api/partner] Email send error:", err);
  }

  // 7. Success
  return NextResponse.json({
    success: true,
    message:
      "Thank you for your partnership inquiry. Our team will be in touch shortly.",
  });
}
