---
name: AMP Oral Surgery content facts
description: Durable business/content constraints for the AMP Oral Surgery marketing site
---

# AMP Oral Surgery — content constraints

- **One board-certified surgeon: Dr. Jonathan Elmore.** Do NOT bring attention to the number of surgeons.
  - **Why:** Client stated there is only 1 board-certified surgeon and explicitly does not want the count emphasized.
  - **How to apply:** Avoid plural "our surgeons" / numeric surgeon stats. Use team-neutral phrasing ("our surgical team", "our care team") or singular. The About "Meet Our Team" section features Dr. Elmore as a single centered card.
- **Two locations:** Orlando (Main Office, 3861 Avalon Park E Blvd, Orlando, FL 32828) and Clermont (Satellite, by appointment only, 2607 S US Highway 27, Suite 102, Clermont, FL 34711). Same phone (407) 544-0139, email info@ampomfs.com.
- **No reply-time promises** (e.g. "replies within 1 business day") anywhere on the contact page — client removed this wording.

## Brand blue
Primary blue updated to #1C90FB (HSL 209 96% 55%). All tokens (--primary light/dark, --ring, glow shadows rgba(28,144,251,...)) and hardcoded hex values updated. Accent (#0091FF) intentionally left unchanged.

## Images
Hero background was image_1780388571436.png (2.2MB). Compressed to .jpg (245KB). Import in home.tsx updated to use .jpg. Other office JPGs stripped and re-optimized.

## Dr. Elmore — real bio now in about.tsx
Bio, quote, credentials all from client-supplied text. No fabricated details. Credentials panel: Morehouse College B.S., Columbia University CDM D.D.S., Brooklyn Hospital Center OMFS Residency, Board-Certified OMFS. NPI 1144812348 (from original bio, removed from display per minimal-fabrication rule — not shown in UI).
