import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { newsletterSchema } from "@/lib/validations";
import { sendNewsletterConfirmation } from "@/lib/email";

// In-memory subscriber set for deduplication.
// In production this should be backed by a database.
const subscribers = new Set<string>();

export async function POST(request: NextRequest) {
  // 1. IP extraction
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // 2. Rate limit — 3 requests per IP per hour
  const limit = rateLimit(ip, 3, 60 * 60 * 1000);
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
  const result = newsletterSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { success: false, error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  const { email } = result.data;

  // 6. Deduplication
  const normalizedEmail = email.toLowerCase().trim();
  if (subscribers.has(normalizedEmail)) {
    return NextResponse.json({
      success: true,
      message: "You are already subscribed to our newsletter.",
    });
  }

  subscribers.add(normalizedEmail);

  // 7. Send welcome email (non-blocking)
  try {
    await sendNewsletterConfirmation(email);
  } catch (err) {
    console.error("[api/newsletter] Email send error:", err);
  }

  // 8. Success
  return NextResponse.json({
    success: true,
    message: "Thank you for subscribing! Check your inbox for a confirmation.",
  });
}
