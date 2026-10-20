import { Router, type IRouter } from "express";
import rateLimit from "express-rate-limit";
import {
  handleAppointmentSubmission,
  handleReferralSubmission,
} from "./contact-handlers";

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
  const result = await handleAppointmentSubmission(req.body);
  if (result.error) {
    req.log.error({ err: result.error }, "failed to send appointment email");
  }
  res.status(result.status).json(result.json);
});

router.post("/contact/referral", contactLimiter, async (req, res) => {
  const result = await handleReferralSubmission(req.body);
  if (result.error) {
    req.log.error({ err: result.error }, "failed to send referral email");
  }
  res.status(result.status).json(result.json);
});

export default router;
