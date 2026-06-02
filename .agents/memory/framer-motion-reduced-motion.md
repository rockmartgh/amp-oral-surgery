---
name: framer-motion reduced-motion
description: Why a CSS prefers-reduced-motion block is not enough for framer-motion scroll reveals
---

# framer-motion respects reduced motion only via JS, not CSS

A global `@media (prefers-reduced-motion: reduce)` CSS block (shortening animation/transition durations) does **NOT** disable framer-motion's JS-driven animations. A `whileInView` reveal still starts at `opacity: 0` and stays hidden until the IntersectionObserver fires, so reduced-motion users can get hidden-until-scrolled content.

**Why:** framer-motion animates via JS/Web Animations, bypassing CSS transition durations entirely.

**How to apply:** In any reveal/animation wrapper, call `useReducedMotion()` from `framer-motion` and short-circuit — render a plain `<div>` (content visible immediately, no opacity/translate offset) when it returns true. Keep the CSS reduced-motion block too for non-framer CSS animations.
