import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { rateLimit } from "@/lib/rate-limit";

const testimonialSchema = z.object({
  name: z.string().min(2).max(100),
  role: z.string().min(2).max(100),
  company: z.string().min(2).max(200),
  content: z.string().min(20).max(2000),
  rating: z.number().min(1).max(5).default(5),
});

export async function POST(request: NextRequest) {
  // 1. IP extraction
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // 2. Rate limit — 3 per IP per 30 min
  const limit = rateLimit(ip, 3, 30 * 60 * 1000);
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
  const result = testimonialSchema.safeParse(body);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return NextResponse.json(
      { success: false, error: "Validation failed.", errors },
      { status: 422 },
    );
  }

  // 6. Log testimonial (in production, save to database)
  console.log("[Testimonial Submission]", {
    ...result.data,
    submittedAt: new Date().toISOString(),
    ip,
  });

  // 7. Return success
  return NextResponse.json({
    success: true,
    message:
      "Thank you for your testimonial! It will be reviewed and published soon.",
  });
}
