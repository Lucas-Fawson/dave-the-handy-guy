import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, phone, email, service, message } = await request.json();

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
