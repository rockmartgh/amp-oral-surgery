function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function isEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function blankToUndefined(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return body;
  const result = {};
  for (const [key, value] of Object.entries(body)) {
    result[key] = value === "" ? undefined : value;
  }
  return result;
}

function asRecord(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return {};
  return body;
}

function asString(value) {
  return typeof value === "string" ? value.trim() : "";
}

const MIN_FORM_MS = 2500;

function looksLikeGibberishName(name) {
  const n = name.trim();
  if (!n || /\s/.test(n)) return false;
  if (n.length < 12) return false;

  const letters = n.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 10) return false;

  const vowels = (letters.match(/[aeiouAEIOU]/g) || []).length;
  const vowelRatio = vowels / letters.length;
  if (vowelRatio < 0.28) return true;

  const midCaps = (n.slice(1).match(/[A-Z]/g) || []).length;
  if (n.length >= 15 && midCaps >= 3) return true;

  return false;
}

function looksLikeDotSpamEmail(email) {
  const local = email.trim().split("@")[0] || "";
  const dots = (local.match(/\./g) || []).length;
  if (dots >= 4) return true;

  const parts = local.split(".");
  const shortParts = parts.filter((p) => p.length <= 1).length;
  return dots >= 3 && shortParts >= 3;
}

function looksLikeDigitsOnlyMessage(message) {
  const trimmed = message.trim();
  if (!trimmed) return false;
  if (/[a-zA-Z]/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length === trimmed.replace(/[\s\-().+]/g, "").length;
}

function honeypotFilled(body) {
  for (const key of ["website", "company", "url", "fax"]) {
    if (asString(body[key]).length > 0) return true;
  }
  return false;
}

function submittedTooFast(body) {
  const raw = body.formStartedAt;
  const started =
    typeof raw === "number"
      ? raw
      : typeof raw === "string" && raw.trim()
        ? Number(raw)
        : NaN;
  if (!Number.isFinite(started) || started <= 0) return false;
  const elapsed = Date.now() - started;
  return elapsed >= 0 && elapsed < MIN_FORM_MS;
}

function checkAppointmentSpam(rawBody) {
  const body = asRecord(rawBody);
  const reasons = [];

  if (honeypotFilled(body)) reasons.push("honeypot");
  if (submittedTooFast(body)) reasons.push("too-fast");
  if (looksLikeGibberishName(asString(body.name))) reasons.push("gibberish-name");
  if (looksLikeDotSpamEmail(asString(body.email))) reasons.push("dot-spam-email");
  if (looksLikeDigitsOnlyMessage(asString(body.message))) reasons.push("digits-only-message");

  return { spam: reasons.length > 0, reasons };
}

function checkReferralSpam(rawBody) {
  const body = asRecord(rawBody);
  const reasons = [];

  if (honeypotFilled(body)) reasons.push("honeypot");
  if (submittedTooFast(body)) reasons.push("too-fast");

  for (const key of ["practiceName", "referringDoctor", "patientName"]) {
    if (looksLikeGibberishName(asString(body[key]))) {
      reasons.push(`gibberish-${key}`);
    }
  }
  if (looksLikeDotSpamEmail(asString(body.referralEmail))) {
    reasons.push("dot-spam-email");
  }
  const text = [asString(body.reason), asString(body.notes)].filter(Boolean).join(" ");
  if (text && looksLikeDigitsOnlyMessage(text)) {
    reasons.push("digits-only-message");
  }

  return { spam: reasons.length > 0, reasons };
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(title, fields) {
  const rows = fields
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#0B1A30;white-space:nowrap;vertical-align:top">${escapeHtml(
          label,
        )}</td><td style="padding:6px 12px;color:#334155">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
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

function buildEmailText(title, fields) {
  const lines = fields
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `${label}: ${value}`);
  return `${title}\n\n${lines.join("\n")}`;
}

const FORM_RECIPIENTS = ["info@ampomfs.com", "lenneia.batiste@ampomfs.com"];
const FROM_ADDRESS =
  process.env.RESEND_FROM || "AMP Oral Surgery <noreply@pinpointmailer.com>";

async function sendEmail({ to, subject, html, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }
  const payload = { from: FROM_ADDRESS, to, subject, html, text };
  if (replyTo) payload.reply_to = replyTo;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok) {
    console.error("Resend email failed", response.status, result);
    throw new Error(`Resend returned ${response.status}`);
  }
  return result;
}

async function handleAppointment(rawBody) {
  const spam = checkAppointmentSpam(rawBody);
  if (spam.spam) {
    console.warn("Blocked spam appointment submission", spam.reasons);
    return { status: 200, json: { success: true } };
  }

  const body = blankToUndefined(rawBody) || {};
  if (!isNonEmptyString(body.name) || !isEmail(body.email) || !isNonEmptyString(body.message)) {
    return { status: 400, json: { error: "Invalid submission" } };
  }
  const fields = [
    ["Name", body.name],
    ["Email", body.email],
    ["Phone", body.phone],
    ["Preferred Contact", body.preferredContact],
    ["Message", body.message],
  ];
  try {
    await sendEmail({
      to: FORM_RECIPIENTS,
      replyTo: body.email,
      subject: `New Appointment Request — ${body.name}`,
      html: buildEmailHtml("New Appointment Request", fields),
      text: buildEmailText("New Appointment Request", fields),
    });
    return { status: 200, json: { success: true } };
  } catch (error) {
    console.error("failed to send appointment email", error);
    return { status: 502, json: { success: false, error: "Failed to send email" } };
  }
}

async function handleReferral(rawBody) {
  const spam = checkReferralSpam(rawBody);
  if (spam.spam) {
    console.warn("Blocked spam referral submission", spam.reasons);
    return { status: 200, json: { success: true } };
  }

  const body = blankToUndefined(rawBody) || {};
  if (
    !isNonEmptyString(body.practiceName) ||
    !isNonEmptyString(body.referringDoctor) ||
    !isEmail(body.referralEmail) ||
    !isNonEmptyString(body.patientName) ||
    !isNonEmptyString(body.reason)
  ) {
    return { status: 400, json: { error: "Invalid submission" } };
  }
  const fields = [
    ["Practice", body.practiceName],
    ["Referring Doctor", body.referringDoctor],
    ["Doctor Email", body.referralEmail],
    ["Office Phone", body.referralPhone],
    ["Patient Name", body.patientName],
    ["Patient Phone", body.patientPhone],
    ["Reason", body.reason],
    ["Urgency", body.urgency],
    ["Clinical Notes", body.notes],
  ];
  try {
    await sendEmail({
      to: FORM_RECIPIENTS,
      replyTo: body.referralEmail,
      subject: `New Patient Referral — ${body.patientName} (from ${body.practiceName})`,
      html: buildEmailHtml("New Patient Referral", fields),
      text: buildEmailText("New Patient Referral", fields),
    });
    return { status: 200, json: { success: true } };
  } catch (error) {
    console.error("failed to send referral email", error);
    return { status: 502, json: { success: false, error: "Failed to send email" } };
  }
}

function createHandler(run) {
  return async function handler(req, res) {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, error: "Method not allowed" });
      return;
    }
    const result = await run(req.body);
    res.status(result.status).json(result.json);
  };
}

module.exports = {
  handleAppointment,
  handleReferral,
  createHandler,
  checkAppointmentSpam,
  checkReferralSpam,
  looksLikeGibberishName,
  looksLikeDotSpamEmail,
  looksLikeDigitsOnlyMessage,
};
