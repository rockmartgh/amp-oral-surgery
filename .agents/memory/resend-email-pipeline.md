---
name: Resend email pipeline
description: How the contact-form email pipeline works and the verified-domain constraint that governs the FROM address.
---

# Resend email pipeline (contact forms)

Contact form submissions email the practice via Resend, accessed through the
Replit connectors SDK proxy (`connectors.proxy("resend", "/emails", ...)`), not
a raw Resend API key.

## Verified sending domain constraint
The Resend account does NOT have `ampomfs.com` verified. Only
`pinpointmailer.com` and `jimbagby4walton.com` are verified (sending enabled).
The FROM address MUST be on a verified domain or Resend rejects the send.

**Why:** Sends from `noreply@ampomfs.com` fail because the domain is unverified.
**How to apply:** FROM defaults to `noreply@pinpointmailer.com` (override via
`RESEND_FROM`). `reply_to` carries the submitter's address so the team replies
to the real person. If the client wants branded `@ampomfs.com` sender, they must
verify that domain in Resend first — then change `RESEND_FROM`.

## Proxy return shape gotcha
`connectors.proxy(...)` returns a raw `fetch` `Response`, NOT parsed JSON.
Must `await response.json()` and check `response.ok` — otherwise a failed send
(non-2xx) looks like success. `JSON.stringify` on the Response prints `{}`.

## Abuse protection
Public unauthenticated email endpoints are a spam surface.

**Defense layers (in order):**
1. Content heuristics in `api/contact/_lib.js` (Vercel) and
   `artifacts/api-server/src/lib/spam.ts` (Express/local) — gibberish names,
   excessive-dot Gmail locals, digits-only messages, honeypot, min form fill time.
   Matches are **silently discarded** (`200 { success: true }`) so bots don't adapt.
2. Hidden honeypot (`website`) + `formStartedAt` from the contact page.
3. Express-only: `express-rate-limit` (5 req / 15 min). Requires
   `app.set("trust proxy", 1)` behind Replit's reverse proxy.

**Spam pattern observed Sep 2026:** random mixed-case names with no spaces,
highly dotted Gmail addresses, message = phone digits only.
