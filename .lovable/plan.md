

# Redesign Feature Pages with Numbered Zigzag Layout and Animations

## Overview

Replace the current grid-of-cards layout on all feature pages with a numbered, alternating zigzag layout matching the reference screenshot. Each feature gets a large numbered block (01, 02, 03...) with title on one side and descriptive text on the other, alternating left/right. Add scroll-triggered animations throughout.

## Design Pattern (from screenshot)

```text
┌─────────────────────────────────────────────┐
│  Hero Section (badge, headline, sub, CTAs)  │
├─────────────────────────────────────────────┤
│                                             │
│  [Text: Title + Desc]    [Card: 01 Title]   │  ← odd rows
│                                             │
│  [Card: 02 Title]    [Text: Title + Desc]   │  ← even rows
│                                             │
│  [Text: Title + Desc]    [Card: 03 Title]   │  ← odd rows
│                                             │
│  [Card: 04 Title]    [Text: Title + Desc]   │  ← even rows
│                                             │
├─────────────────────────────────────────────┤
│  "More reasons" section (checkmark grid)    │
├─────────────────────────────────────────────┤
│  Testimonial                                │
├─────────────────────────────────────────────┤
│  FAQ Accordion                              │
├─────────────────────────────────────────────┤
│  CTA Banner                                 │
└─────────────────────────────────────────────┘
```

## New Components

### 1. `src/components/shared/NumberedFeatureBlock.tsx`
A reusable component that renders the zigzag numbered feature list. Props:
```ts
interface NumberedFeature {
  number: string;   // "01", "02", etc.
  title: string;
  description: string;
}

interface NumberedFeatureBlockProps {
  features: NumberedFeature[];
}
```

Each feature renders as a two-column row:
- **Numbered card**: Rounded rectangle with light teal/blue background, large number, and title beneath
- **Text side**: Bold heading + paragraph description
- Odd items: text left, card right. Even items: card left, text right
- RTL-aware (flips automatically via CSS logical properties)
- On mobile: stacks vertically

### 2. `src/hooks/useScrollAnimation.tsx`
A custom hook using Intersection Observer to trigger CSS animations when elements scroll into view. Returns a ref and a boolean `isVisible`. Each numbered block, the "more reasons" section, testimonial, and FAQ will animate in on scroll.

## Animations (CSS in `src/styles.css`)

- **Fade-up on scroll**: Each numbered feature block fades in and slides up when entering viewport
- **Staggered delays**: Each successive numbered block has a slight delay (100ms increments)
- **Card hover**: Numbered cards scale slightly on hover with a subtle shadow lift
- **Hero section**: Headline fades in, subheadline fades in with delay, CTAs slide up
- **More Reasons pills**: Staggered fade-in for each checkmark item
- **Testimonial**: Fade-in from left

## Files to Modify

### New files (2)
1. **`src/components/shared/NumberedFeatureBlock.tsx`** — Zigzag numbered layout component with scroll-triggered animations
2. **`src/hooks/useScrollAnimation.tsx`** — Intersection Observer hook

### Updated files (14 feature routes)
Each feature route will:
- Remove the `FeatureCard` grid section
- Remove the `ScreenshotSection` (replaced by the numbered blocks which are more visual)
- Add the `NumberedFeatureBlock` component with the existing feature data restructured as numbered items
- Keep Hero, MoreReasons, Testimonial, FAQ, and CTA sections

Files: `core-hr.tsx`, `payroll.tsx`, `hiring-onboarding.tsx`, `performance.tsx`, `engagement.tsx`, `hr-automation.tsx`, `hr-chatbot.tsx`, `travel-expense.tsx`, `organization-management.tsx`, `retirement-separation.tsx`, `custom-services.tsx`, `integrations.tsx`, `mobile-app.tsx`

### CSS updates (1)
3. **`src/styles.css`** — Add scroll animation keyframes (`fade-up`, `slide-in-left`, `slide-in-right`), stagger utility classes, and the numbered card styling

### Translation files (3)
No new keys needed — the existing feature titles and descriptions will be reused, just rendered in the new layout.

## Technical Details

- Intersection Observer with `threshold: 0.15` and `rootMargin: "0px 0px -50px 0px"` for natural trigger timing
- CSS `@keyframes fade-up` with transform translateY(30px) to translateY(0) + opacity 0 to 1
- Numbered card uses brand `bright-blue/10` background with `bright-blue` text for the number
- RTL support: use `flex-row-reverse` for even items, which auto-flips in RTL via the existing `[dir="rtl"] .flex-row` override, or use CSS logical order

## What Will NOT Change
- HeroSection component (stays as-is)
- CTABanner, TestimonialBlock, FAQAccordion components
- Translation dictionaries structure
- Route paths and SEO metadata

