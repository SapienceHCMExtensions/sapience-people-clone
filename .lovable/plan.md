## Goal

Make the homepage feel brighter, more colorful, and more energetic — while staying true to the existing brand (Navy #011B3D, Bright Blue #1E90FF, Orange #F05A28) and keeping Inter as the font.

The current homepage is mostly white/very-pale-blue with a single navy ROI card at the bottom. Color only shows up in tiny accents. The plan injects color in a controlled, brand-aligned way so it feels designed, not random.

## Direction (chosen for you)

- Palette: extend the existing brand with brighter sky/peach/mint support tones so each major section has its own clear color identity (no neon, no off-brand).
- Layout: keep the current section order but switch to a **full-width colored bands** rhythm — alternating white, sky-tint, peach-tint, navy — so color carries the eye down the page.
- Typography: keep Inter; just lean on heavier weights and larger display sizes in the hero and section headers for more impact.

## What changes on the homepage

1. **Hero** — replace the pale aurora with a brighter gradient (sky-blue → soft peach → white) plus a vivid orange highlight on the headline keyword. Add subtle floating colored blobs for liveliness.
2. **Trust band** — give it a thin sky-tint background and colorize each stat number (blue, orange, navy, mint) instead of all-black.
3. **Dashboard section** — soft peach-tinted background band so the screenshot pops; add a colored gradient border/glow around the dashboard image.
4. **Features grid** — give each of the 6 feature cards its own pastel accent (sky, peach, mint, lavender, sun-yellow, coral) on the icon chip + top border, instead of all blue. Cards stay white for readability.
5. **Product Tour** — light sky-tint background; active tab gets an orange underline accent.
6. **Why Sapience** — currently `bg-soft-gray`. Switch to a warm cream/peach band; icon chips alternate brand blue/orange.
7. **ROI Calculator** — keep the navy card but add a bright gradient top border so it doesn't feel isolated.
8. **Testimonial** — sky-tint band with a large orange quote mark.
9. **CTA Banner** — vibrant blue→orange gradient instead of flat navy.

## Design tokens (added to `src/styles.css`)

Add these as new semantic tokens so the whole page can use them consistently:

```text
--surface-sky        light blue tint band
--surface-peach      light peach tint band
--surface-cream      warm off-white band
--accent-mint        feature card accent
--accent-lavender    feature card accent
--accent-sun         feature card accent
--accent-coral       feature card accent
--gradient-hero      sky → peach → white
--gradient-cta       bright-blue → orange
```

All values in oklch, defined alongside existing brand tokens. No hard-coded hex inside components.

## Files touched

- `src/styles.css` — new tokens + gradient utilities
- `src/routes/index.tsx` — section background classes, hero gradient, per-card accent prop
- `src/components/shared/HeroSection.tsx` — new `bright` variant
- `src/components/shared/FeatureCard.tsx` — optional `accent` prop
- `src/components/shared/TrustBand.tsx` — colorized stat numbers
- `src/components/shared/CTABanner.tsx` — gradient background
- `src/components/shared/TestimonialBlock.tsx` — sky band + quote mark
- `src/components/shared/ProductTour.tsx` — light tint + orange active accent

## Out of scope

- No content/copy changes
- No new sections, no removed sections
- No layout restructure (full-width-section rhythm is achieved purely with backgrounds)
- No font swap (Inter stays per brand memory)
- No changes to other pages (Features, Pricing, etc.) — only `/`

## Verification

After edits, reload `/` in the right-side preview, scroll top-to-bottom, and confirm:
- alternating color bands read cleanly
- contrast stays AA on all text
- the page no longer looks "mostly white"
- mobile (375px) still looks balanced, not garish