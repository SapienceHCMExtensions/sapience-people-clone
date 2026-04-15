

# Wire i18n Translations into All Page Content

## Problem
The translation dictionaries (`en.ts`, `ar.ts`, `es.ts`) and the `useT()` hook exist, but only the Header uses them. All 29 route pages and 6 shared components still render hardcoded English strings, so switching languages only changes the menu text.

## Approach
Replace hardcoded strings in every route component and shared component with `useT("key")` calls, using the translation keys already defined in the dictionaries. Props-based shared components (HeroSection, FeatureCard, etc.) stay props-based — the translation happens at the caller level in each route file.

## Files to Modify

### Shared Components (3 files)
1. **`src/components/shared/CTABanner.tsx`** — Replace default prop values with `useT()` calls for headline and subheadline
2. **`src/components/layout/Footer.tsx`** — Replace all hardcoded section headers, link labels, and tagline with `useT()` calls
3. **`src/components/layout/CookieConsent.tsx`** — Replace all cookie consent text with `useT()` calls

### Homepage (1 file)
4. **`src/routes/index.tsx`** — Replace all hardcoded hero text, dashboard section, feature cards, "Why Sapience" section, and testimonial with `useT()` calls using `home.*` keys

### Feature Routes (14 files)
5-18. Each feature route (`core-hr`, `payroll`, `hiring-onboarding`, `performance`, `travel-expense`, `engagement`, `hr-automation`, `hr-chatbot`, `integrations`, `mobile-app`, `custom-services`, `organization-management`, `retirement-separation`, `features/index`) — Import `useT`, replace all hardcoded text (hero props, FeatureCard props, MoreReasons items, FAQ items, TestimonialBlock props) with corresponding `useT("features.xxx.key")` calls

### Solution Routes (8 files)
19-26. Each solution route (`it`, `healthcare`, `education`, `finance`, `media`, `small-business`, `medium-business`, `enterprise`) — Import `useT`, replace SolutionTemplate props with `useT("solutions.xxx.key")` calls

### Other Pages (4 files)
27-30. `pricing.tsx`, `customers.tsx`, `request-demo.tsx`, `request-quote.tsx`, `sign-in.tsx` — Replace hardcoded text with `useT()` calls

### Translation File Gaps
31. **`src/i18n/en.ts`** — Verify all keys exist for every string being replaced; add any missing keys (e.g., solution page content, pricing page content)
32. **`src/i18n/ar.ts`** — Add matching Arabic translations for any new keys added to `en.ts`
33. **`src/i18n/es.ts`** — Add matching Spanish translations for any new keys added to `en.ts`

## Pattern (example for a route)
```tsx
// Before
<HeroSection headline="Manage your workforce" subHeadline="Centralize..." badge="Core HR" />

// After
const t = useT();
<HeroSection headline={t("features.coreHr.heroHeadline")} subHeadline={t("features.coreHr.heroSub")} badge={t("features.coreHr.badge")} />
```

## What Will NOT Change
- Translation file structure and `useT()` hook implementation
- Header component (already translated)
- Route paths and page structure
- Images, screenshots, and visual assets
- Component props interfaces

