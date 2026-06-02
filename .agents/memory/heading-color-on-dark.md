---
name: Heading color on colored surfaces
description: Why white headings render dark on gradient/dark cards in this app
---

The global base layer in `index.css` sets `h1,h2,h3,h4,h5,h6 { ... text-foreground }` (dark). This is an explicit color, so it BREAKS color inheritance — a heading inside a `text-white` parent (e.g. a blue gradient banner or dark navy card) renders dark, not white.

**Why:** base-layer utilities lose to regular utilities in the cascade, but they still override plain inheritance from a parent's `text-white`.

**How to apply:** any `<h1>`–`<h6>` placed on a colored/dark surface must carry an explicit text color class (e.g. `text-white`) directly on the element. Do not rely on inheriting it from a wrapping `text-white` div.
