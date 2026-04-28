## Goal

Swap the placeholder text logos in the home page TrustBand ticker for the actual 18 client logos from sapiencetechnology.com. **The marquee animation, speed, gap, mask fade, and overall layout stay exactly as they are today** — only the content of each item changes from a text label to an image.

## What I confirmed

The sapiencetechnology.com `/about.html` page exposes 18 client logos at:

- Default: `https://www.sapiencetechnology.com/assets/img/partner-img/partner-{1..18}.png`
- Hover variant: `https://www.sapiencetechnology.com/assets/img/partner-img/partner-hover{1..18}.png`

Both URLs return HTTP 200 (`image/png`) and can be referenced directly via remote `<img src>` — no upload required. Logos are anonymous on the source site (no company names published), so alt text will be a generic "Sapience client logo".

## Changes

### 1. `src/components/shared/TrustBand.tsx`
- Replace the `CUSTOMER_LOGOS` string array with a `PARTNER_LOGOS` array of 18 `{ default, hover }` objects pointing to the remote URLs above.
- Keep the exact same `marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS]` duplication for the seamless loop.
- Keep the same wrapper structure (`<div class="marquee"><div class="marquee-track">…items…</div></div>`).
- Each marquee item stays a `<span class="trust-logo-item">` (so the existing animation/gap/spacing are untouched) but its content becomes a stacked pair of `<img>` elements: a default image and a hover image absolutely overlaid for the color-on-hover swap, matching the source site's interaction.
- Add `loading="lazy"` and `decoding="async"` on the images; alt = `"Sapience client logo"`.

### 2. `src/styles.css`
- **Do not touch** `.marquee`, `.marquee-track`, `@keyframes marquee`, the duration (40s), gap (3rem), or the mask fade — animation behavior is preserved verbatim.
- Update only the per-item visuals on `.trust-logo-item`:
  - Make it a fixed-size container (~140px × 40px), `position: relative`, remove the serif/text styling (no longer needed).
  - Add `.trust-logo-img` (default, `filter: grayscale(1); opacity: 0.55`) and `.trust-logo-img--hover` (absolutely positioned over the default, `opacity: 0`, fades to `1` on `:hover` of the parent item).
- Reduced-motion rule stays as-is.

### 3. No i18n changes
The "Trusted by leading organizations" heading and stats already use `useT()`. Logos are visual-only.

## Out of scope
- Not downloading the images into the repo — using the remote URLs directly keeps things simple and matches the source. We can self-host them later if you want offline resilience.
- No changes to the stats row, heading, or surrounding section.

## Result
Same ticker, same speed, same seamless loop — just real Sapience client logos instead of text, with a subtle grayscale-to-color hover swap mirroring sapiencetechnology.com.
