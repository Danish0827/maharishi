import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = Record<string, string>;

const FIELD_LABELS: Record<string, string> = {
  formType: "Form",
  firstName: "First name",
  phone: "Phone",
  concern: "Primary concern",
  date: "Preferred date",
  city: "City",
  email: "Email",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const firstName = (body.firstName || "").trim();
  const phone = (body.phone || "").trim();
  if (!firstName || !phone) {
    return NextResponse.json(
      { error: "Please provide your name and phone number." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "danish@healthus.ai";
  const from =
    process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || to;

  const rows = Object.entries(FIELD_LABELS)
    .filter(([key]) => body[key])
    .map(
      ([key, label]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#5B481A;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#2C2A24">${escapeHtml(
          body[key]
        )}</td></tr>`
    )
    .join("");

  const html = `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto">
    <div style="background:#5B481A;color:#fff;padding:18px 20px;border-radius:8px 8px 0 0">
      <h2 style="margin:0;font-size:18px">New enquiry - Maharishi Ayurveda Hospital</h2>
      <p style="margin:4px 0 0;font-size:13px;color:#E7D9B6">${escapeHtml(
        body.formType || "Website form"
      )}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #E6DBC2;border-top:none;font-size:14px">
      ${rows}
    </table>
    <p style="font-size:12px;color:#8A8377;margin-top:12px">Submitted via the website contact form.</p>
  </div>`;

  const text = Object.entries(FIELD_LABELS)
    .filter(([key]) => body[key])
    .map(([key, label]) => `${label}: ${body[key]}`)
    .join("\n");

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If SMTP isn't configured yet, don't fail the user flow in development —
  // log the submission and return success so the thank-you flow still works.
  if (!host || !user || !pass) {
    console.warn(
      "[contact] SMTP not configured. Submission received but not emailed:\n" +
        text
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Maharishi Ayurveda Website" <${from}>`,
      to,
      replyTo: body.email || undefined,
      subject: `New enquiry: ${firstName} (${body.concern || "General"})`,
      text,
      html,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Email send failed:", err);
    return NextResponse.json(
      { error: "Could not send your enquiry. Please call us or try again." },
      { status: 502 }
    );
  }
}
