

# Add Rich Animations to the Home Page

## Overview

Add a combination of scroll-triggered entrance animations, interactive hover effects, and continuous micro-animations across all sections of the home page. The goal is a polished, modern SaaS feel with subtle interactivity.

## Animation Breakdown by Section

### 1. Hero Section (`HeroSection.tsx`)
- **Badge**: Fade-in + slight scale-up on load (200ms delay)
- **Headline**: Fade-up from below with 400ms delay
- **Subheadline**: Fade-up with 600ms delay (staggered after headline)
- **CTA buttons**: Slide-up with 800ms delay; primary button gets a subtle continuous pulse glow on its shadow
- **Screenshot**: Fade-up + scale from 0.95 to 1.0 with 1000ms delay; on hover, slight 3D tilt effect using CSS perspective + rotateX/rotateY (interactive — follows cursor position via a lightweight mouse-move handler)
- **Background**: Add subtle floating gradient orbs that drift slowly (CSS animation, purely decorative)

### 2. Dashboard Screenshot Section (in `index.tsx`)
- **Heading + description**: Scroll-triggered fade-up using `useScrollAnimation`
- **Dashboard image**: Scroll-triggered scale-in (0.9 to 1.0) with parallax-lite effect — the image translates slightly on scroll (CSS `transform: translateY(calc(...))` via a scroll listener or pure CSS with `scroll-timeline` fallback)
- **Interactive**: On hover, the image lifts with increased shadow (3D card lift)

### 3. Feature Cards Grid (in `index.tsx` + `FeatureCard.tsx`)
- **Section heading**: Scroll-triggered fade-up
- **Cards**: Staggered scroll-triggered fade-up (each card delayed by 100ms * index)
- **Interactive hover** (enhance existing): Icon container rotates 360 degrees on hover; card border gets a gradient sweep animation (a moving highlight along the border); card lifts with `translateY(-4px)` and shadow increase
- **Icon pulse**: On card hover, the icon does a single "bounce" keyframe

### 4. Why Sapience Section (in `index.tsx`)
- **Each stat block**: Scroll-triggered fade-up with stagger
- **Interactive**: Icon circles scale + rotate slightly on hover; a counting/number animation if any numeric stats are added later
- **Connecting line**: A subtle horizontal line or dot pattern that draws itself in on scroll (CSS `stroke-dashoffset` animation on an SVG)

### 5. Testimonial Block (`TestimonialBlock.tsx`)
- **Quote icon**: Scroll-triggered rotate-in (starts rotated -12deg, animates to 0)
- **Quote text**: Scroll-triggered fade-in with a typewriter-style reveal (words fade in sequentially using staggered `<span>` wrappers — interactive feel)
- **Author info**: Fade-up after quote finishes

### 6. CTA Banner (`CTABanner.tsx`)
- **Heading**: Scroll-triggered fade-up
- **Buttons**: Scroll-triggered slide-up with stagger
- **Interactive**: Primary button shimmer effect — a diagonal light sweep that plays on hover (CSS gradient animation)
- **Background**: Subtle particle/dot grid pattern that shifts on scroll

## Technical Approach

### Files to modify (5)
1. **`src/components/shared/HeroSection.tsx`** — Add load animations (CSS classes + `useState` for mount trigger), floating gradient orbs, interactive tilt on screenshot via `onMouseMove`
2. **`src/components/shared/FeatureCard.tsx`** — Enhanced hover animations (icon spin, border gradient sweep), accept `delay` prop for staggered entrance
3. **`src/components/shared/TestimonialBlock.tsx`** — Scroll-triggered entrance with `useScrollAnimation`
4. **`src/components/shared/CTABanner.tsx`** — Scroll-triggered entrance, button shimmer effect
5. **`src/routes/index.tsx`** — Add `useScrollAnimation` to dashboard and feature sections, pass stagger delays to cards

### Files to create (0) — reuses existing `useScrollAnimation` hook

### CSS additions (`src/styles.css`)
- `@keyframes float` — slow vertical drift for background orbs
- `@keyframes shimmer` — diagonal light sweep for CTA button
- `@keyframes icon-bounce` — single bounce for feature card icons on hover
- `@keyframes border-sweep` — moving highlight along card border
- `.tilt-card` — perspective container for 3D hover tilt
- Utility classes for staggered delays (`.delay-100`, `.delay-200`, etc.)

## What Will NOT Change
- Page structure and content
- Translation keys
- Route configuration
- Component prop interfaces (only additive changes)
- Feature page animations (already done)

## Interactive vs Passive Summary

| Animation | Type | Trigger |
|-----------|------|---------|
| Hero text stagger | Passive | Page load |
| Screenshot 3D tilt | **Interactive** | Mouse move |
| CTA pulse glow | Passive | Continuous |
| Feature card icon spin | **Interactive** | Hover |
| Feature card border sweep | **Interactive** | Hover |
| CTA button shimmer | **Interactive** | Hover |
| Dashboard parallax lift | **Interactive** | Hover |
| All section entrances | Passive | Scroll into view |
| Quote icon rotate-in | Passive | Scroll into view |

