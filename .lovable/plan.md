# Build #1, #2, #3 — Homepage Conversion Enhancements

Add three new sections to the Sapience HCM homepage, ordered immediately after the hero:

1. **Trust Band** — customer logos + animated stats counters
2. **Interactive Product Tour** — tabbed module showcase with screenshots
3. **ROI Calculator** — interactive savings estimator (lead magnet)

All three follow existing patterns: `useScrollAnimation` for entrance, brand colors (navy / bright-blue / vibrant-orange), `useT()` i18n strings, shadcn primitives.

---

## 1. Trust Band (`src/components/shared/TrustBand.tsx`)

Compact section placed directly under the hero. Two rows:

- **Logo strip**: auto-scrolling marquee of 6–8 customer logos (grayscale, hover → color). Uses CSS `@keyframes marquee` in `styles.css`, duplicated set for seamless loop.
- **Stats row**: 4 animated counters that count up on scroll-into-view using `requestAnimationFrame` + `useScrollAnimation`.
  - `10M+` Employees managed
  - `500+` Companies
  - `50+` Countries
  - `99.9%` Uptime SLA

Each stat: large navy number, small muted label below. Separated by vertical dividers on desktop.

Logos: use placeholder SVG/text-based logos (Acme, Globex, Initech, Umbrella, Stark, Wayne, Hooli, Pied Piper) — clearly marked in code as replaceable. No external image deps.

---

## 2. Interactive Product Tour (`src/components/shared/ProductTour.tsx`)

Tabbed showcase placed between the Features grid and Why Sapience sections.

- 5 tabs (using shadcn `Tabs`): **Core HR**, **Payroll**, **Performance**, **Engagement**, **Analytics**
- Each tab shows: left side = title + 3 bullet points + "Learn more →" link to corresponding `/features/*` route; right side = product screenshot in a tilted browser-frame mock
- Auto-advance every 6 seconds (pauses on hover/interaction)
- Smooth fade transition between panels
- Screenshots: reuse existing dashboard image URL plus 4 sourced from unsplash/zillancer placeholder set; clearly marked replaceable

---

## 3. ROI Calculator (`src/components/shared/ROICalculator.tsx` + `src/routes/roi-calculator.tsx`)

Two placements:
- **Compact preview** on homepage (just before CTA banner): 2 inputs + headline result + "See full breakdown →"
- **Full standalone route** at `/roi-calculator` with detailed breakdown

Inputs (homepage compact):
- Number of employees (slider 10–5000)
- Average HR admin hours/employee/month (slider 1–10, default 4)

Computed outputs (real-time, no submit):
- Hours saved/year = `employees × hours × 12 × 0.6` (60% efficiency assumption)
- Cost saved/year = `hours × $35/hr` (configurable assumed loaded HR cost)
- Payback period vs. assumed Sapience price ($8/user/mo yearly)

Full `/roi-calculator` route adds:
- Industry dropdown (multiplier)
- Current HRMS spend input
- Detailed line-item table (admin time, payroll errors, compliance risk, turnover)
- "Get this report by email" CTA → `/request-demo`
- Page-level `head()` with own SEO metadata

---

## Homepage layout after changes

```text
Hero (aurora)
TrustBand               ← NEW #1
Dashboard tilt section
Features grid
ProductTour             ← NEW #2
Why Sapience
ROICalculator (compact) ← NEW #3
Testimonial
CTABanner
```

---

## Technical Details

**New files**
- `src/components/shared/TrustBand.tsx`
- `src/components/shared/ProductTour.tsx`
- `src/components/shared/ROICalculator.tsx` (accepts `variant: "compact" | "full"`)
- `src/components/shared/AnimatedCounter.tsx` (reused by stats)
- `src/routes/roi-calculator.tsx`

**Edited files**
- `src/routes/index.tsx` — insert the three new sections in the order above
- `src/styles.css` — add `.marquee`, `.marquee-track`, `@keyframes marquee` (40s linear infinite); `.trust-logo` already exists
- `src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/ar.ts` — add `home.trust.*`, `home.tour.*`, `home.roi.*`, `pages.roiCalculator.*` keys (English authoritative; Spanish/Arabic mirror with same English text as placeholder, consistent with how some existing keys are seeded)

**Dependencies**: none new. Uses existing `@/components/ui/{tabs,slider,card,button}`, `lucide-react`, `useScrollAnimation`, `useT`.

**Accessibility**: counters use `aria-live="polite"`; tour tabs use shadcn `Tabs` (already a11y-correct); calculator inputs have proper `<label>` associations.

**Performance**: marquee paused via `prefers-reduced-motion`; counters skip animation when reduced motion set; ROI compute is pure inline.

**SEO**: new `/roi-calculator` route gets own `head()` with title, description, og:title, og:description, and `getHreflangLinks("/roi-calculator")`.

---

## Out of scope (saved for later)

- Backend logging of ROI inputs (no DB; could add later via Lovable Cloud)
- Real customer logos (placeholder text logos shipped; user replaces with real assets)
- Header link to `/roi-calculator` (can add after review)
