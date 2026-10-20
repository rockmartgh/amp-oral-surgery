// Resend integration (blueprint id: resend) — sends transactional email.
// On Replit, mail goes through the Connectors proxy. On Vercel (and other
// hosts) we call the Resend HTTP API with RESEND_API_KEY.
import { logger } from "./logger";

// Recipients that receive every form submission.
export const FORM_RECIPIENTS = ["info@ampomfs.com", "lenneia.batiste@ampomfs.com"];

// Sender must be on a domain verified in the Resend account.
// pinpointmailer.com is the verified sending domain; reply-to carries the
// submitter's address so the team can respond directly.
const FROM_ADDRESS = process.env.RESEND_FROM ?? "AMP Oral Surgery <noreply@pinpointmailer.com>";

interface SendEmailInput {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}

function buildResendPayload({ to, subject, html, text, replyTo }: SendEmailInput) {
  const body: Record<string, unknown> = {
    from: FROM_ADDRESS,
    to,
    subject,
    html,
    text,
  };
  if (replyTo) {
    body.reply_to = replyTo;
  }
  return body;
}

async function sendViaResendHttp(input: SendEmailInput, apiKey: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(buildResendPayload(input)),
  });

  const result = (await response.json().catch(() => null)) as { id?: string } | null;
  if (!response.ok) {
    logger.error(
      { to: input.to, subject: input.subject, status: response.status, result },
      "Resend email failed",
    );
    throw new Error(`Resend returned ${response.status}`);
  }

  logger.info({ to: input.to, subject: input.subject, id: result?.id }, "email sent via Resend");
  return result;
}

async function sendViaReplitConnectors(input: SendEmailInput) {
  const { ReplitConnectors } = await import("@replit/connectors-sdk");
  const connectors = new ReplitConnectors();

  const response = await connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildResendPayload(input)),
  });

  const result = (await response.json().catch(() => null)) as { id?: string } | null;
  if (!response.ok) {
    logger.error(
      { to: input.to, subject: input.subject, status: response.status, result },
      "Resend email failed",
    );
    throw new Error(`Resend returned ${response.status}`);
  }

  logger.info({ to: input.to, subject: input.subject, id: result?.id }, "email sent via Resend");
  return result;
}

export async function sendEmail(input: SendEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    return sendViaResendHttp(input, apiKey);
  }
  return sendViaReplitConnectors(input);
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px;font-weight:600;color:#0B1A30;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 12px;color:#334155">${escapeHtml(
    value,
  )}</td></tr>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function buildEmailHtml(title: string, fields: Array<[string, string | undefined]>) {
  const rows = fields.map(([label, value]) => row(label, value)).join("");
  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto">
    <div style="background:#0B1A30;padding:20px 24px;border-radius:12px 12px 0 0">
      <h2 style="margin:0;color:#ffffff;font-size:18px">${escapeHtml(title)}</h2>
      <p style="margin:4px 0 0;color:#94a3b8;font-size:13px">AMP Oral Surgery website</p>
    </div>
    <table style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;font-size:14px">
      ${rows}
    </table>
  </div>`;
}

export function buildEmailText(title: string, fields: Array<[string, string | undefined]>) {
  const lines = fields
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`);
  return `${title}\n\n${lines.join("\n")}`;
}
