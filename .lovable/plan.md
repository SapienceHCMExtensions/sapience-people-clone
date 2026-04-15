

# Multi-Language Support (English, Arabic, Spanish) with RTL

## Overview

Add full internationalization (i18n) to the site with a language switcher next to "Get Started" in the header. Arabic will use RTL layout. All hardcoded text across ~30 files will be replaced with translation keys.

## Architecture

- Use React Context for language state (no external i18n library needed for a static content site)
- Store language preference in localStorage, default to English
- Translation files as TypeScript objects in `src/i18n/`
- RTL handled by setting `dir="rtl"` and `lang` attribute on `<html>` dynamically

```text
src/i18n/
  ├── context.tsx        # LanguageProvider, useLanguage hook, useTranslation hook
  ├── en.ts              # English translations
  ├── ar.ts              # Arabic translations
  └── es.ts              # Spanish translations
```

## Translation Structure

Each translation file exports a nested object covering:
- **Common**: Nav items (Features, Solutions, Pricing, Customers, Resources, Sign In, Get Started), footer labels, CTA defaults
- **Home**: Hero headline/subheadline, dashboard section, feature cards, "Why Sapience" items, testimonial
- **Features**: Each feature page's hero, feature cards, more reasons, FAQs
- **Solutions**: Each solution page content
- **Pages**: Pricing, Customers, Request Demo, Request Quote, Sign In

Keys will be organized as `home.hero.headline`, `features.coreHr.title`, `common.nav.features`, etc.

## Files to Create

1. **`src/i18n/context.tsx`** — `LanguageProvider` with React Context, `useLanguage()` hook (get/set language), `useT()` hook to access translations. Persists to localStorage.

2. **`src/i18n/en.ts`** — All English strings extracted from current hardcoded content across every route and shared component.

3. **`src/i18n/ar.ts`** — Arabic translations for all keys. Professional Arabic translations for HR/HCM terminology.

4. **`src/i18n/es.ts`** — Spanish translations for all keys.

## Files to Modify

5. **`src/routes/__root.tsx`** — Wrap `RootComponent` children with `LanguageProvider`. Update `RootShell` to dynamically set `<html lang={locale} dir={dir}>` based on active language.

6. **`src/styles.css`** — Add RTL utility styles (e.g., `[dir="rtl"]` overrides for margins, paddings, and text alignment where needed).

7. **`src/components/layout/Header.tsx`** — Add language switcher dropdown (globe icon + language code) between "Sign In" and "Get Started". Dropdown shows English, العربية, Español. Replace all hardcoded nav strings with translation keys. Add language switcher to mobile nav too.

8. **`src/components/layout/Footer.tsx`** — Replace hardcoded section headers and link names with translated strings.

9. **`src/components/shared/HeroSection.tsx`** — Accept translated strings (already props-based, no change needed except default prop values).

10. **`src/components/shared/CTABanner.tsx`** — Replace default prop values with translations from context.

11. **`src/components/shared/FAQAccordion.tsx`** — FAQ items are passed as props, so callers will pass translated content.

12. **`src/components/shared/FeatureCard.tsx`** — Already props-based, no changes needed.

13. **`src/components/shared/TestimonialBlock.tsx`** — Already props-based, callers pass translated content.

14. **`src/components/layout/CookieConsent.tsx`** — Replace hardcoded text with translations.

15. **`src/routes/index.tsx`** — Replace all hardcoded strings with `useT()` calls.

16-29. **All feature routes** (14 files) — Replace hardcoded hero text, feature card titles/descriptions, more reasons lists, FAQ content, and testimonial text with `useT()` calls.

30-37. **All solution routes** (8 files) — Replace hardcoded content with translations.

38-41. **Remaining pages** (`pricing.tsx`, `customers.tsx`, `request-demo.tsx`, `request-quote.tsx`, `sign-in.tsx`) — Replace hardcoded text with translations.

## Language Switcher Design

- Position: Between "Sign In" and "Get Started" in the desktop header
- Appearance: Globe icon + current language code (EN/AR/ES), dropdown on click
- Mobile: Shown at top of mobile menu
- Selecting Arabic sets `dir="rtl"` on `<html>` and flips layout automatically via CSS logical properties and Tailwind's RTL support

## RTL Implementation

- Set `dir="rtl"` on `<html>` element when Arabic is active
- Tailwind CSS v4 logical properties (`ps-`, `pe-`, `ms-`, `me-`) handle most layout flips automatically
- Add targeted `[dir="rtl"]` CSS overrides in `styles.css` for any edge cases (e.g., chevron rotation, icon positioning)
- The mega dropdown and mobile menu will mirror correctly

## What Will NOT Change

- Route paths (no `/ar/` or `/es/` prefixes — language is client-side state)
- Page structure and layout patterns
- Images, screenshots, and visual assets
- Component architecture (props-based components stay props-based)

