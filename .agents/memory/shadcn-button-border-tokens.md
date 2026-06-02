---
name: shadcn button border tokens (white ring)
description: Why primary/secondary buttons show a stray white ring, and how the @theme token wiring causes it.
---

# shadcn button default/secondary variants need `--*-border` defined

In this Replit shadcn setup, `button.tsx` default variant has `border border-primary-border`
(secondary uses `border-secondary-border`). Tailwind v4 `@theme` maps
`--color-primary-border: var(--primary-border)` **without** wrapping in `hsl()`.

**The bug:** `--primary-border` / `--secondary-border` are NOT defined out of the box, so
`border-color` falls back to `currentColor`. On a button whose text is white (e.g. primary
button on a dark hero), the border renders as a **white ring**.

**Fix:** define the tokens in BOTH `:root` and `.dark` in `index.css`. Use `transparent` to
remove the ring entirely, or a full color value (e.g. `hsl(217 80% 48%)`) for a seamless edge.
They must be full color values, not bare HSL triplets, because `@theme` does `var(--primary-border)`
directly (no `hsl()` wrap).

**Why:** the white ring was most visible on the marketing site's dark hero buttons; the user
flagged it specifically. Root cause was undefined tokens, not a focus ring or shadow.

**How to apply:** if any default/secondary shadcn button shows an unexpected border ring, check
whether `--primary-border`/`--secondary-border` (and `--button-outline`, `--destructive-border`)
are defined in index.css before touching button.tsx.
