
# B2B Discovery Call Landing Page

Single-page, dark-themed landing page designed to convert operations/transformation leaders into booked discovery calls.

## Brand & Style

- Placeholder company name (e.g. "[YourCo]") throughout — easy to swap later
- Dark base (deep navy / off-black) with **electric blue** accent for CTAs, highlights, and availability tags
- Strong typographic hierarchy, clean grid, generous spacing
- Mobile-first, fast-loading

## Page Sections (top to bottom)

### 1. Hero
- Outcome-driven headline (efficiency, cost reduction, competitive edge)
- One-line subtitle identifying the target audience
- Subtle mention of advisory + implementation services
- Primary CTA button: "Book a Discovery Call" (scrolls to bottom CTA)
- Secondary text link: "See Use Cases" (scrolls to services)

### 2. Services / Use Cases
- Timetable/catalogue-style grid layout — feels operational, not salesy
- 4–5 service cards, each showing: service name, business outcome, delivery tag (Remote Advisory / Embedded Implementation), engagement length, availability status ("2 slots this month"), and a booking action button

### 3. Trust — Founder Profile
- Placeholder portrait area (clean bordered box with "Your Photo" label)
- Consultant name placeholder and title
- 3 credible bullets (years in AI/ML, industries, deployments)
- AI-generated dashboard/workflow visuals alongside (using Nano banana image generation)

### 4. Social Proof
- 3 short testimonials (1–2 lines each), realistic tone
- First name, title, company size/sector
- Metric callouts (e.g. "reduced ops time by 40%")

### 5. Logistics
- Clean info grid: timezone, engagement format, typical length
- "What to bring" checklist
- Brief "who this is / isn't for" qualifier

### 6. Repeat Booking CTA
- Large, clean section with "Book Your Discovery Call" button
- All CTA buttons scroll to this section or trigger a placeholder modal

## Images
- **Consultant portrait**: Placeholder box (you'll add your own photo)
- **Dashboard / workflow / data visuals**: AI-generated using Nano banana, styled to feel operational and business-credible — no abstract AI imagery

## Technical Details
- Built as a single `Index.tsx` page with component sections
- CSS variables updated for dark navy base + electric blue accent
- AI images generated via Lovable AI Gateway, saved as base64 or to public assets
- Smooth scroll behavior for internal navigation
- Responsive grid layouts using Tailwind
