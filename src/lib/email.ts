import { Resend } from "resend";
import type {
  ContactFormData,
  CareerApplicationData,
  PartnerFormData,
} from "./validations";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "info@cybitsolutions.net";
const COMPANY_NAME = "CybitSolutions";
const FROM_EMAIL = "noreply@cybitsolutions.net"; // Must be verified in Resend
const PHONE = "+ (771) 233-1379";
const ADDRESS = "Washington D.C. Metropolitan Area";

// ---------------------------------------------------------------------------
// Resend client (lazy — returns null when the key is not configured)
// ---------------------------------------------------------------------------
function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[email] RESEND_API_KEY is not set — skipping email send.");
    return null;
  }
  return new Resend(key);
}

// ---------------------------------------------------------------------------
// Shared HTML helpers
// ---------------------------------------------------------------------------
function signature(): string {
  return `
    <br/>
    <p style="margin:0;color:#5C6B7A;font-size:14px;">
      Best regards,<br/>
      <strong>${COMPANY_NAME}</strong><br/>
      ${PHONE}<br/>
      ${ADDRESS}<br/>
      <a href="https://cybitsolutions.net" style="color:#13C0F5;">cybitsolutions.net</a>
    </p>
  `;
}

function wrapHtml(body: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/></head>
<body style="font-family:'Source Sans 3',Arial,sans-serif;color:#0B1C2E;line-height:1.6;padding:24px;max-width:640px;margin:0 auto;">
  ${body}
</body>
</html>`;
}

// ---------------------------------------------------------------------------
// 1. Contact form — notification to admin
// ---------------------------------------------------------------------------
export async function sendContactNotification(
  data: ContactFormData,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = wrapHtml(`
    <h2 style="color:#0B1C2E;">New Contact Form Submission</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${data.name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;">${data.phone || "—"}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${data.company || "—"}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Subject</td><td style="padding:6px 12px;">${data.subject}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Message</h3>
    <div style="background:#F4F7FA;padding:16px;border-radius:8px;white-space:pre-wrap;">${data.message}</div>
  `);

  await resend.emails.send({
    from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[Contact] ${data.subject || "General Inquiry"} — ${data.name}`,
    html,
  });
}

// ---------------------------------------------------------------------------
// 2. Contact form — auto-reply confirmation to user
// ---------------------------------------------------------------------------
export async function sendConfirmationEmail(
  to: string,
  name: string,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = wrapHtml(`
    <h2 style="color:#0B1C2E;">Thank You, ${name}!</h2>
    <p>We have received your message and a member of our team will respond within one business day.</p>
    <p>If your inquiry is urgent, please call us directly at <strong>${PHONE}</strong>.</p>
    ${signature()}
  `);

  await resend.emails.send({
    from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
    to: [to],
    subject: `We received your message — ${COMPANY_NAME}`,
    html,
  });
}

// ---------------------------------------------------------------------------
// 3. Career application — notification to admin
// ---------------------------------------------------------------------------
export async function sendApplicationNotification(
  data: CareerApplicationData,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = wrapHtml(`
    <h2 style="color:#0B1C2E;">New Career Application</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${data.name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Phone</td><td style="padding:6px 12px;">${data.phone}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Position</td><td style="padding:6px 12px;">${data.position}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">LinkedIn</td><td style="padding:6px 12px;">${data.linkedin ? `<a href="${data.linkedin}">${data.linkedin}</a>` : "—"}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Cover Letter</h3>
    <div style="background:#F4F7FA;padding:16px;border-radius:8px;white-space:pre-wrap;">${data.coverLetter}</div>
  `);

  await resend.emails.send({
    from: `${COMPANY_NAME} Careers <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[Application] ${data.position} — ${data.name}`,
    html,
  });
}

// ---------------------------------------------------------------------------
// 4. Partner inquiry — notification to admin
// ---------------------------------------------------------------------------
export async function sendPartnerNotification(
  data: PartnerFormData,
): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = wrapHtml(`
    <h2 style="color:#0B1C2E;">New Partner Inquiry</h2>
    <table style="border-collapse:collapse;width:100%;">
      <tr><td style="padding:6px 12px;font-weight:bold;">Name</td><td style="padding:6px 12px;">${data.name}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Email</td><td style="padding:6px 12px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Company</td><td style="padding:6px 12px;">${data.company}</td></tr>
      <tr><td style="padding:6px 12px;font-weight:bold;">Partnership Type</td><td style="padding:6px 12px;">${data.partnershipType || "—"}</td></tr>
    </table>
    <h3 style="margin-top:24px;">Message</h3>
    <div style="background:#F4F7FA;padding:16px;border-radius:8px;white-space:pre-wrap;">${data.message}</div>
  `);

  await resend.emails.send({
    from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
    to: [ADMIN_EMAIL],
    subject: `[Partner Inquiry] ${data.company} — ${data.name}`,
    html,
  });
}

// ---------------------------------------------------------------------------
// 5. Newsletter — welcome / confirmation email
// ---------------------------------------------------------------------------
export async function sendNewsletterConfirmation(to: string): Promise<void> {
  const resend = getResend();
  if (!resend) return;

  const html = wrapHtml(`
    <h2 style="color:#0B1C2E;">Welcome to ${COMPANY_NAME} Insights!</h2>
    <p>You have been subscribed to our newsletter. You will receive updates on:</p>
    <ul>
      <li>Government contracting news and opportunities</li>
      <li>Technology insights and whitepapers</li>
      <li>Upcoming events and webinars</li>
      <li>Company news and announcements</li>
    </ul>
    <p>If you did not sign up for this newsletter, you can safely ignore this email.</p>
    ${signature()}
  `);

  await resend.emails.send({
    from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
    to: [to],
    subject: `Welcome to ${COMPANY_NAME} Insights`,
    html,
  });
}
