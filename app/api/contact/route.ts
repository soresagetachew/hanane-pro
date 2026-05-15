import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface Payload {
  name?: string;
  email?: string;
  organisation?: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  message?: string;
}

function esc(s: string | undefined): string {
  if (!s) return "";
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Payload;

    const { name, email, eventType, message } = body;
    if (!name || !email || !eventType || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "hanane@hanane.co";
    const from = process.env.CONTACT_FROM_EMAIL || "noreply@hanane.pro";

    const html = `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#1C1C1C;max-width:560px;">
        <h2 style="font-family:Georgia,serif;font-weight:400;color:#1C1C1C;margin:0 0 16px;">New booking enquiry</h2>
        <p style="color:#8C8884;font-size:12px;letter-spacing:1px;text-transform:uppercase;margin:0 0 20px;">hanane.pro · /contact</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          <tbody>
            ${[
              ["Name", name],
              ["Email", email],
              ["Organisation", body.organisation],
              ["Event Type", eventType],
              ["Event Date", body.eventDate],
              ["Location", body.location],
            ]
              .map(
                ([k, v]) => `
              <tr>
                <td style="padding:8px 12px;border-bottom:1px solid #E8E6E1;color:#8C8884;width:140px;">${esc(k as string)}</td>
                <td style="padding:8px 12px;border-bottom:1px solid #E8E6E1;color:#1C1C1C;">${esc(v as string) || "&mdash;"}</td>
              </tr>`
              )
              .join("")}
          </tbody>
        </table>
        <h3 style="font-family:Georgia,serif;font-weight:400;margin:28px 0 8px;color:#1C1C1C;">Brief</h3>
        <p style="white-space:pre-wrap;line-height:1.7;color:#3D3D3D;">${esc(message)}</p>
      </div>
    `;

    if (!apiKey) {
      // Allow local dev / preview without Resend configured.
      console.warn("[contact] RESEND_API_KEY not set — enquiry logged only.");
      console.log("[contact] payload:", body);
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Hanane.pro <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New booking enquiry from ${name} — ${eventType}`,
      html,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
