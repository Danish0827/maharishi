import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type Payload = Record<string, string>;

/* ── Docfyn Push Lead API config ───────────────────────────── */
const DOCFYN_URL =
  process.env.DOCFYN_API_URL ||
  "https://crm-api.docfyn.com/api/v1/external/leads";
const DOCFYN_MERCHANT = process.env.DOCFYN_MERCHANT;
const DOCFYN_API_KEY = process.env.DOCFYN_API_KEY;
const DOCFYN_ACCOUNT_ID = process.env.DOCFYN_ACCOUNT_ID;
const DOCFYN_LOCATION = process.env.DOCFYN_LOCATION || "epsjkrp";

/* Production landing-page URLs sent to the CRM as the lead's source page */
const PAGE_URLS: Record<string, string> = {
  panchakarma:
    "https://speciality.maharishiayurvedaindia.org/panchakarma-delhi",
  consultation:
    "https://speciality.maharishiayurvedaindia.org/ayurvedic-hospital-delhi",
};

/* Where the notification email is delivered (env overrides the default list) */
const EMAIL_RECIPIENTS = process.env.CONTACT_TO_EMAIL
  ? process.env.CONTACT_TO_EMAIL.split(",").map((s) => s.trim()).filter(Boolean)
  : ["healthusads@gmail.com", "crm@mahospital.org"];

const FIELD_LABELS: Record<string, string> = {
  formType: "Form",
  firstName: "Name",
  dialCode: "Dial code",
  phone: "Phone",
  concern: "Primary concern",
  email: "Email",
  source: "Lead source",
  pageUrl: "Page URL",
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Reduce any Indian phone input to a bare 10-digit number. */
function normalizePhone(raw: string) {
  let d = (raw || "").replace(/\D/g, "");
  if (d.startsWith("91") && d.length > 10) d = d.slice(-10);
  d = d.replace(/^0+/, "");
  return d.slice(-10);
}

async function pushToDocfyn(lead: {
  name: string;
  phone: string;
  email?: string;
  concern?: string;
  pageUrl?: string;
  liveUrl?: string;
  formType?: string;
  platform: string;
}) {
  if (!DOCFYN_MERCHANT || !DOCFYN_API_KEY || !DOCFYN_ACCOUNT_ID) {
    return { ok: false, skipped: true, reason: "CRM credentials not set" };
  }

  const payload = {
    location: DOCFYN_LOCATION,
    dial_code: "+91",
    phone_no: lead.phone,
    name: lead.name || undefined,
    email: lead.email || undefined,
    platform_source: lead.platform, // "website" | "mweb"
    lead_source: "speciality_page",
    additional_attributes: {
      page_url: lead.pageUrl || "",
      page_url_live: lead.liveUrl || "",
      primary_concern: lead.concern || "",
      form: lead.formType || "",
    },
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(DOCFYN_URL, {
      method: "POST",
      headers: {
        "api-merchant": DOCFYN_MERCHANT,
        "api-key": DOCFYN_API_KEY,
        "account-id": DOCFYN_ACCOUNT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const bodyText = await res.text().catch(() => "");
    if (!res.ok) return { ok: false, status: res.status, body: bodyText };
    return { ok: true, status: res.status, body: bodyText };
  } catch (err) {
    return {
      ok: false,
      reason: err instanceof Error ? err.message : "CRM request failed",
    };
  } finally {
    clearTimeout(timer);
  }
}

async function sendTeamEmail(body: Payload, crmNote: string) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    console.warn("[contact] SMTP not configured; skipping email.");
    return false;
  }
  const from = process.env.CONTACT_FROM_EMAIL || user;

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
      <h2 style="margin:0;font-size:18px">New lead - Maharishi Ayurveda</h2>
      <p style="margin:4px 0 0;font-size:13px;color:#E7D9B6">${escapeHtml(
        body.source || body.formType || "Website form"
      )}</p>
    </div>
    <table style="width:100%;border-collapse:collapse;border:1px solid #E6DBC2;border-top:none;font-size:14px">
      ${rows}
      <tr><td style="padding:6px 12px;font-weight:600;color:#5B481A">CRM</td><td style="padding:6px 12px;color:#2C2A24">${escapeHtml(
        crmNote
      )}</td></tr>
    </table>
    <p style="font-size:12px;color:#8A8377;margin-top:12px">Submitted via the website contact form.</p>
  </div>`;

  const text =
    Object.entries(FIELD_LABELS)
      .filter(([key]) => body[key])
      .map(([key, label]) => `${label}: ${body[key]}`)
      .join("\n") + `\nCRM: ${crmNote}`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE ?? "true") === "true",
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `"Maharishi Ayurveda Website" <${from}>`,
      to: EMAIL_RECIPIENTS,
      replyTo: body.email || undefined,
      subject: `New lead: ${body.firstName || "Unknown"} (${body.concern || "General"})`,
      text,
      html,
    });
    return true;
  } catch (err) {
    console.error("[contact] Email send failed:", err);
    return false;
  }
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
  const phone = normalizePhone(body.phone || "");

  if (!firstName) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid 10-digit mobile number." },
      { status: 400 }
    );
  }

  // Resolve the canonical production page URL for this lead
  const variant =
    body.variant === "panchakarma" ? "panchakarma" : "consultation";
  const liveUrl = body.pageUrl || "";
  const pageUrl = PAGE_URLS[variant] || liveUrl;

  // website vs mobile web
  const ua = req.headers.get("user-agent") || "";
  const platform = /Mobi|Android|iPhone|iPad/i.test(ua) ? "mweb" : "website";

  // Normalised record used for the email + labels
  const record: Payload = {
    ...body,
    firstName,
    phone,
    dialCode: "+91",
    pageUrl,
    source: body.source || body.formType || "Website",
  };

  // 1) Push the lead into the Docfyn CRM
  const crm = await pushToDocfyn({
    name: firstName,
    phone,
    email: body.email,
    concern: body.concern,
    pageUrl,
    liveUrl,
    formType: body.formType,
    platform,
  });

  const crmNote = crm.ok
    ? "Pushed to Docfyn CRM"
    : crm.skipped
    ? "CRM not configured"
    : `CRM failed (${crm.status || crm.reason || "unknown"})`;

  if (!crm.ok && !crm.skipped) {
    console.error("[contact] Docfyn push failed:", crm);
  }

  // 2) Notify the team by email (backup + instant visibility)
  const emailed = await sendTeamEmail(record, crmNote);

  // Hard-fail only if the lead reached neither the CRM nor email
  if (!crm.ok && !emailed) {
    return NextResponse.json(
      { error: "Could not submit right now. Please call us or try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, crm: crm.ok, emailed });
}
