# Frontend implementation plan

This document turns the brainstormed frontend improvements into an ordered implementation plan with checklists. Use the checkboxes to track progress as you work through each area.

**Scope:** Frontend only (content, layout, links to external tools, meta/SEO, a11y). No custom backend.

---

## How to use this doc

1. Work phases in order unless a task is blocked on content (e.g. real calendar URL).
2. Check items when done. Add notes or dates in a team journal if helpful.
3. Skip or defer items marked optional if time-boxed.

---

## Phase 1 — Branding, metadata, and “not a template” signals

**Goal:** Remove generic placeholder signals and align the tab title, social previews, and on-page copy with the real product or personal brand.

| Task | Done |
|------|------|
| Replace `[YourCo]` in footer and trust section with final company or personal brand name | [x] |
| Replace `[Your Name]` and title line in trust section with final copy | [x] |
| Add real headshot (or intentional illustration) and remove “Your Photo Here” placeholder state | [x] |
| Update `index.html`: `<title>`, default meta `description`, `author` | [x] |
| Update Open Graph: `og:title`, `og:description`, `og:image` (host a real image or use a canonical URL) | [x] |
| Update Twitter card meta to match (or remove if unused) | [x] |
| Add or verify `favicon` and app icon links in `index.html` | [x] |
| Review `lang` on `<html>`; keep `en` or set correctly | [x] |

---

## Phase 2 — Site chrome and navigation

**Goal:** Give users persistent context and fast paths to services and booking on long-scroll mobile and desktop.

| Task | Done |
|------|------|
| Add a minimal header: logo/wordmark + primary nav links to in-page anchors (`#services`, `#results` or equivalent, `#book`) | [x] |
| Ensure anchor targets exist and IDs are stable across section refactors | [x] |
| Optional: sticky header on scroll with subtle background/blur for readability | [x] |
| Optional: compact “Book” control in header that matches final CTA styling | [x] |
| Keyboard: tab order through nav matches visual order; focus visible on all links | [x] |

---

## Phase 3 — Calls to action (CTA) and booking flow

**Goal:** Remove jarring UX, repeat the main action where it helps, and connect booking to a real external flow when available.

| Task | Done |
|------|------|
| Remove `alert()` from booking; replace with link/button to Calendly, Cal.com, or similar (opens in new tab with `rel` as appropriate) | [x] |
| Until a scheduler exists: use `mailto:` with prefilled subject/body, or a single clear “Get in touch” target | [x] |
| Add optional short “After you book” copy under primary CTA (what to expect, timezone, duration) | [x] |
| Add a mid-page CTA block after high-trust sections (e.g. after testimonials)—single primary button, no duplicate long copy | [x] |
| Optional: floating or sticky bottom “Book” bar on small viewports only | [ ] |
| Align hero primary button, service card buttons, mid-page CTA, and final `#book` section on label + destination | [x] |

---

## Phase 4 — Section-level UX and visual hierarchy

**Goal:** Break visual monotony, strengthen differentiation between offers, and balance trust vs. placeholder content.

| Task | Done |
|------|------|
| Introduce one “credibility strip” or stats row (e.g. after hero): metrics, logos-as-text, or one-line proof—static content is fine | [x] |
| Optional: step timeline for engagement (“Discover → Scope → Build → Handoff”)—layout-only, can live in or near Logistics | [ ] |
| Services: reduce icon repetition or assign distinct metaphors per offering | [x] |
| Optional: visually distinguish one flagship service (border, span, or subtle emphasis) if product strategy allows | [x] |
| Trust section: if photo is still light, lead with bullets/metrics or reorder so imagery + proof carry the first screen | [ ] |
| Social proof: strengthen cards—e.g. outcome headline + quote, or a single stat callout per card (content still static) | [x] |
| Optional: Embla carousel for testimonials on mobile if cards feel cramped | [ ] |

---

## Phase 5 — Footer and ancillary pages

**Goal:** Legitimacy and continuity when users leave the main funnel or hit errors.

| Task | Done |
|------|------|
| Expand footer: year, brand, optional static links (email, LinkedIn, privacy policy URL if you have one hosted) | [ ] |
| Align `NotFound` page colors/typography with main `background` / `foreground` tokens for brand consistency | [ ] |
| 404: keep home link; optional secondary link to `#book` on main page | [ ] |
| Replace or gate `console.error` in 404 if you prefer no client noise in production (optional polish) | [ ] |

---

## Phase 6 — Accessibility and motion

**Goal:** WCAG-minded basics and respectful motion.

| Task | Done |
|------|------|
| Verify visible focus styles on buttons, links, and outline variants (do not rely on browser default only if it disappears on Tailwind reset) | [ ] |
| Run a quick heading-order pass (`h1` in hero once; section `h2`; subheads `h3`) after any new blocks | [ ] |
| Optional: `prefers-reduced-motion: reduce` for any scroll or entrance animations added later | [ ] |
| Images: keep meaningful `alt` text; decorative images `alt=""` or CSS background as appropriate | [ ] |

---

## Phase 7 — Performance and polish (optional)

**Goal:** Fast perceived load and subtle delight without hurting a11y.

| Task | Done |
|------|------|
| Confirm large hero/section images use appropriate dimensions and `loading="lazy"` where below the fold (hero may stay eager) | [ ] |
| Optional: light scroll-reveal on sections (respect reduced motion) | [ ] |
| Optional: preload only critical font/assets if you add custom fonts later | [ ] |

---

## Master checklist (rollup)

Use this for a single glance at overall progress.

- [x] Phase 1 — Branding & metadata
- [x] Phase 2 — Header & navigation
- [x] Phase 3 — CTAs & booking
- [ ] Phase 4 — Sections & hierarchy
- [ ] Phase 5 — Footer & 404
- [ ] Phase 6 — Accessibility & motion
- [ ] Phase 7 — Performance & polish (optional)

---

## Notes

- **Blocked items:** Calendar URL, final copy, headshot, and legal pages are common blockers; keep mailto or a simple contact link until unblocked.
- **No backend required:** External schedulers, static privacy PDFs, and mailto all satisfy “frontend only.”
