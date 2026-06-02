# AMP Oral Surgery

A modern, professional marketing website for AMP Oral Surgery — a full-service oral and maxillofacial surgery practice.

## Run & Operate

- `pnpm --filter @workspace/amp-oral-surgery run dev` — run the frontend (port assigned by workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, shadcn/ui, wouter (routing), framer-motion
- Fonts: Montserrat, Overlock, Commissioner (Google Fonts)
- API: Express 5 (backend, minimal — site is largely static)
- Build: esbuild (API), Vite (frontend)

## Where things live

- `artifacts/amp-oral-surgery/src/pages/` — all page components (home, procedures, about, new-patients, insurance, contact)
- `artifacts/amp-oral-surgery/src/components/layout/` — Navbar and Footer
- `artifacts/amp-oral-surgery/src/index.css` — global CSS, theme tokens (HSL vars), Google Fonts
- `attached_assets/` — logo (`amp-logo.png`), generated hero image (`hero-surgery.png`), team image (`about-team.png`)

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, stats, why us, procedures overview, about, testimonials, CTA |
| `/procedures` | Procedures — all 9 oral surgery procedures |
| `/about` | About — mission, values, surgeon team |
| `/new-patients` | New Patients — first visit steps, what to bring, sedation prep |
| `/insurance` | Insurance — accepted plans, payment options (CareCredit, etc.) |
| `/contact` | Contact — form, hours, address, map placeholder |

## Brand

- Primary: `#1863DC` (blue) → HSL `217 80% 48%`
- Secondary: `#CC3366` (rose/pink) → HSL `340 60% 50%`
- Accent: `#0091FF` → HSL `206 100% 50%`
- Dark navy (footer/hero): `#0B1A30`
- Fonts: Montserrat (display/headings), Commissioner (body), Overlock (accent)

## User preferences

- Filler images for now — client will supply real photos later
- Site should feel modern, professional, warm — not cold/clinical
- No emojis in the UI

## Gotchas

- Logo (`amp-logo.png`) is small (2398 bytes) — displayed inverted in dark footer via `filter: brightness(0) invert(1)`
- Images in `attached_assets/` are available via `@assets/` Vite alias in the frontend
- The site is static/frontend-only — no DB or backend routes needed for this use case

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
