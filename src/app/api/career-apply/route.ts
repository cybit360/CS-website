import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { careerApplicationSchema } from "@/lib/validations";
import { sendApplicationNotification } from "@/lib/email";

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
  const result = careerApplicationSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { success: false, error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const data = result.data;

  // TODO: Handle resume file upload — store in S3 or Vercel Blob
  // and attach the URL / key to the notification email.

  // 6. Send notification email (non-blocking)
  try {
    await sendApplicationNotification(data);
  } catch (err) {
    console.error("[api/career-apply] Email send error:", err);
  }

  // 7. Success
  return NextResponse.json({
    success: true,
    message:
      "Your application has been submitted. Our team will review it and reach out soon.",
  });
}
