import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import { SubmitAppointmentBody, SubmitReferralBody } from "@workspace/api-zod";
import {
  sendEmail,
  buildEmailHtml,
  buildEmailText,
  FORM_RECIPIENTS,
} from "../lib/email";

const router: IRouter = Router();

// Limit form submissions to curb automated spam to internal inboxes.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: "Too many submissions. Please try again later." },
});

router.post("/contact/appointment", contactLimiter, async (req, res) => {
  const parsed = SubmitAppointmentBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid submission", details: parsed.error.issues });
    return;
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
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "failed to send appointment email");
    res.status(502).json({ success: false, error: "Failed to send email" });
  }
});

router.post("/contact/referral", contactLimiter, async (req, res) => {
  const parsed = SubmitReferralBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid submission", details: parsed.error.issues });
    return;
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
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "failed to send referral email");
    res.status(502).json({ success: false, error: "Failed to send email" });
  }
});

export default router;
