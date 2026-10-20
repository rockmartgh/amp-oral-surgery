/**
 * Content + bot heuristics for public contact forms.
 * Silent-discard matches (return true) so bots don't learn from status codes.
 */

const MIN_FORM_MS = 2500;

function asRecord(body: unknown): Record<string, unknown> {
  if (!body || typeof body !== "object" || Array.isArray(body)) return {};
  return body as Record<string, unknown>;
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Random letter-soup names with no spaces (e.g. jGjFBXCcXetLfppPsgpUGbxY). */
export function looksLikeGibberishName(name: string): boolean {
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

/** Gmail-style dotted local parts used by spam farms (e.g. e.z.o.x.im.u.gt.44.7@gmail.com). */
export function looksLikeDotSpamEmail(email: string): boolean {
  const local = email.trim().split("@")[0] || "";
  const dots = (local.match(/\./g) || []).length;
  if (dots >= 4) return true;

  const parts = local.split(".");
  const shortParts = parts.filter((p) => p.length <= 1).length;
  return dots >= 3 && shortParts >= 3;
}

/** Message is only a phone-like number with no real text. */
export function looksLikeDigitsOnlyMessage(message: string): boolean {
  const trimmed = message.trim();
  if (!trimmed) return false;
  if (/[a-zA-Z]/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, "");
  return digits.length >= 7 && digits.length === trimmed.replace(/[\s\-().+]/g, "").length;
}

function honeypotFilled(body: Record<string, unknown>): boolean {
  for (const key of ["website", "company", "url", "fax"]) {
    if (asString(body[key]).length > 0) return true;
  }
  return false;
}

function submittedTooFast(body: Record<string, unknown>): boolean {
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

export type SpamCheckResult = {
  spam: boolean;
  reasons: string[];
};

export function checkAppointmentSpam(rawBody: unknown): SpamCheckResult {
  const body = asRecord(rawBody);
  const reasons: string[] = [];

  if (honeypotFilled(body)) reasons.push("honeypot");
  if (submittedTooFast(body)) reasons.push("too-fast");

  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);

  if (looksLikeGibberishName(name)) reasons.push("gibberish-name");
  if (looksLikeDotSpamEmail(email)) reasons.push("dot-spam-email");
  if (looksLikeDigitsOnlyMessage(message)) reasons.push("digits-only-message");

  return { spam: reasons.length > 0, reasons };
}

export function checkReferralSpam(rawBody: unknown): SpamCheckResult {
  const body = asRecord(rawBody);
  const reasons: string[] = [];

  if (honeypotFilled(body)) reasons.push("honeypot");
  if (submittedTooFast(body)) reasons.push("too-fast");

  for (const key of ["practiceName", "referringDoctor", "patientName"] as const) {
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
