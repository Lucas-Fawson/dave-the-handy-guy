import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ALLOWED_HOSTS = new Set([
  "davethehandyguy.com",
  "www.davethehandyguy.com",
]);

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ipHits = new Map<string, number[]>();

function isAllowedHost(value: string | null): boolean {
  if (!value) return false;
  try {
    const { hostname } = new URL(value);
    if (hostname === "localhost") return true;
    return ALLOWED_HOSTS.has(hostname);
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const source = origin ?? referer;
  if (!isAllowedHost(source)) {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0].trim();
    if (ip) {
      const now = Date.now();
      const cutoff = now - RATE_LIMIT_WINDOW_MS;
      const recent = (ipHits.get(ip) ?? []).filter((t) => t > cutoff);
      if (recent.length >= RATE_LIMIT_MAX) {
        ipHits.set(ip, recent);
        return Response.json({ error: "Bad request" }, { status: 429 });
      }
      recent.push(now);
      ipHits.set(ip, recent);
    }
  }

  const { name, phone, email, service, message, website } = await request.json();

  if (typeof website === "string" && website.length > 0) {
    return Response.json({ success: true });
  }

  if (!name || !phone) {
    return Response.json(
      { error: "Name and phone are required" },
      { status: 400 },
    );
  }

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; color: #1a1f25;">
      <h2 style="font-size: 20px; margin: 0 0 24px;">New Estimate Request</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px; line-height: 1.6;">
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b7280; width: 160px; vertical-align: top;">Name</td>
          <td style="padding: 8px 0;"><strong>${escapeHtml(name)}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b7280; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #b8542a; text-decoration: none;">${escapeHtml(phone)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b7280; vertical-align: top;">Email</td>
          <td style="padding: 8px 0;">${email ? `<a href="mailto:${escapeHtml(email)}" style="color: #b8542a; text-decoration: none;">${escapeHtml(email)}</a>` : "Not provided"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b7280; vertical-align: top;">Service Requested</td>
          <td style="padding: 8px 0;">${service ? escapeHtml(service) : "Not specified"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b7280; vertical-align: top;">Message</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${message ? escapeHtml(message) : "No message"}</td>
        </tr>
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Dave The Handy Guy Website <noreply@nexalydigital.com>",
      to: "skierdave@gmail.com",
      replyTo: email || undefined,
      subject: `New Estimate Request from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Failed to send" }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return Response.json({ error: "Failed to send" }, { status: 500 });
  }
}

function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
