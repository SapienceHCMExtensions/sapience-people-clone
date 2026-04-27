## Add opt-in visual effects to HeroSection

Extend `HeroSection` so each page can choose its visual style without rewriting the component. Defaults preserve current behavior.

### New props (all optional)

```ts
variant?: "default" | "gradient-mesh" | "spotlight" | "aurora" | "grid";
backgroundImage?: string;          // photo/illustration backdrop
overlayOpacity?: number;           // 0–1, used with backgroundImage
showOrbs?: boolean;                // default true
showGrid?: boolean;                // animated grid overlay
showNoise?: boolean;               // subtle film-grain texture
showSpotlight?: boolean;           // cursor-follow radial highlight
align?: "center" | "left";         // text alignment
size?: "md" | "lg" | "xl";         // vertical padding scale
eyebrowIcon?: LucideIcon;          // icon next to badge
trustLogos?: { src: string; alt: string }[]; // logo strip under CTAs
```

### Effects added to `src/styles.css`

- `.hero-mesh` — multi-stop conic/radial gradient mesh (blue/orange/navy)
- `.hero-aurora` — animated aurora blobs (slow translate + hue-rotate)
- `.hero-grid` — fading dot/line grid using `background-image`
- `.hero-noise` — SVG noise data-URI overlay at low opacity
- `.hero-spotlight` — radial-gradient mask following CSS vars `--mx`/`--my`
- `@keyframes aurora-drift`, `grid-pan` for slow ambient motion
- Respect `prefers-reduced-motion` — disable drift, keep static look

### HeroSection changes

- Wire `variant` to apply the matching background class on the section root.
- Add a spotlight handler (`onMouseMove` updating CSS vars) gated by `showSpotlight`.
- Render optional `backgroundImage` as an `<img>` with `overlayOpacity` scrim.
- Render optional `trustLogos` strip below CTAs with grayscale → color hover.
- Keep existing orbs, shimmer button, pulse glow, tilt screenshot intact (toggleable via `showOrbs`).
- Add `align` (left vs center) and `size` (padding scale) to support hero variations across pages.

### Homepage usage

Update `src/routes/index.tsx` to demo a richer look:
```tsx
<HeroSection
  variant="aurora"
  showSpotlight
  showGrid
  ...existing props
/>
```

### Files

- `src/styles.css` — append new effect classes + keyframes (with reduced-motion guards)
- `src/components/shared/HeroSection.tsx` — extend props, render new layers
- `src/routes/index.tsx` — opt into one or two new effects as a showcase

### Notes

- All new visuals are additive and default-off (except where noted) so existing pages using `HeroSection` are unaffected.
- No new dependencies; pure CSS + small inline handlers.
