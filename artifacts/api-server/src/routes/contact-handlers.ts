import { SubmitAppointmentBody, SubmitReferralBody } from "@workspace/api-zod";
import {
  sendEmail,
  buildEmailHtml,
  buildEmailText,
  FORM_RECIPIENTS,
} from "../lib/email";
import { checkAppointmentSpam, checkReferralSpam } from "../lib/spam";

export type ContactHandlerResult = {
  status: number;
  json: Record<string, unknown>;
  error?: unknown;
};

function blankToUndefined(body: unknown): unknown {
  if (!body || typeof body !== "object" || Array.isArray(body)) return body;
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(body as Record<string, unknown>)) {
    result[key] = value === "" ? undefined : value;
  }
  return result;
}

export async function handleAppointmentSubmission(
  rawBody: unknown,
): Promise<ContactHandlerResult> {
  const spam = checkAppointmentSpam(rawBody);
  if (spam.spam) {
    console.warn("Blocked spam appointment submission", spam.reasons);
    return { status: 200, json: { success: true } };
  }

  const parsed = SubmitAppointmentBody.safeParse(blankToUndefined(rawBody));
  if (!parsed.success) {
    return {
      status: 400,
      json: { error: "Invalid submission", details: parsed.error.issues },
    };
  }
  const { name, email, phone, preferredContact, message } = parsed.data;

  const fields: Array<[string, string | undefined]> = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Preferred Contact", preferredContact],
    ["Message", message],
  ];

  try {
    await sendEmail({
      to: FORM_RECIPIENTS,
      replyTo: email,
      subject: `New Appointment Request — ${name}`,
      html: buildEmailHtml("New Appointment Request", fields),
      text: buildEmailText("New Appointment Request", fields),
    });
    return { status: 200, json: { success: true } };
  } catch (error) {
    return {
      status: 502,
      json: { success: false, error: "Failed to send email" },
      error,
    };
  }
}

export async function handleReferralSubmission(
  rawBody: unknown,
): Promise<ContactHandlerResult> {
  const spam = checkReferralSpam(rawBody);
  if (spam.spam) {
    console.warn("Blocked spam referral submission", spam.reasons);
    return { status: 200, json: { success: true } };
  }

  const parsed = SubmitReferralBody.safeParse(blankToUndefined(rawBody));
  if (!parsed.success) {
    return {
      status: 400,
      json: { error: "Invalid submission", details: parsed.error.issues },
    };
  }
  const {
    practiceName,
    referringDoctor,
    referralEmail,
    referralPhone,
    patientName,
    patientPhone,
    reason,
    urgency,
    notes,
  } = parsed.data;

  const fields: Array<[string, string | undefined]> = [
    ["Practice", practiceName],
    ["Referring Doctor", referringDoctor],
    ["Doctor Email", referralEmail],
    ["Office Phone", referralPhone],
    ["Patient Name", patientName],
    ["Patient Phone", patientPhone],
    ["Reason", reason],
    ["Urgency", urgency],
    ["Clinical Notes", notes],
  ];

  try {
    await sendEmail({
      to: FORM_RECIPIENTS,
      replyTo: referralEmail,
      subject: `New Patient Referral — ${patientName} (from ${practiceName})`,
      html: buildEmailHtml("New Patient Referral", fields),
      text: buildEmailText("New Patient Referral", fields),
    });
    return { status: 200, json: { success: true } };
  } catch (error) {
    return {
      status: 502,
      json: { success: false, error: "Failed to send email" },
      error,
    };
  }
}
