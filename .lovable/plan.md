## Make Recent Routes Respect the Language Switcher

### What's actually broken

All recently added components/routes (`TrustBand`, `ProductTour`, `ROICalculator`, `roi-calculator.tsx`, and the four legal pages via `LegalPage`) already call `useT()` correctly — the wiring is fine.

The real issue is that the **new translation keys were only added to `src/i18n/en.ts`**, never to `es.ts` or `ar.ts`. `useT()` silently falls back to English when a key is missing, so switching to Spanish or Arabic leaves these blocks in English.

Missing namespaces in `es.ts` and `ar.ts`:
- `home.trust.*` (eyebrow + 4 stat labels)
- `home.tour.*` (eyebrow, title, subtitle, learnMore + 5 tabs × 5 strings each)
- `home.roi.*` (~18 keys for the calculator UI)
- `pages.roiCalculator.*` (eyebrow, title, subtitle)

(`legal.*` was added to all three locales already and works.)

### Fix

**1. `src/i18n/es.ts`** — add Spanish translations for the four missing namespaces, mirroring the exact key shape in `en.ts` (lines 136–650 for `home.trust/tour/roi`, lines 800–870 for `pages.roiCalculator`). Insert `trust`, `tour`, `roi` inside the existing `home: { ... }` block; insert `roiCalculator` inside the existing `pages: { ... }` block.

**2. `src/i18n/ar.ts`** — same additions in Arabic, same structure. Arabic RTL flips automatically because `LanguageProvider` already sets `dir="rtl"` on `<html>`.

**3. Verification step** — after edits, run a small script to diff key paths between `en.ts` and each of `es.ts` / `ar.ts` and confirm zero missing keys.

### Future-proofing rule (the "make sure future routes work too" part)

Add a short authoring rule to project memory so every future feature stays multilingual:

> **i18n rule**: All user-visible strings must come from `useT()` / `useTranslatedArray()`. Any new key added to `src/i18n/en.ts` must be added to `src/i18n/es.ts` and `src/i18n/ar.ts` in the same change. Never hard-code text in components/routes. Arrays of content (sections, bullets, tabs) go through `useTranslatedArray` so locale-specific length is supported.

Saved as `mem://preferences/i18n-parity` and referenced from the index Core block so it applies to every future change automatically.

### Out of scope

- Professional translation review (the added Spanish/Arabic strings are functional translations, flagged for native-speaker review later, same convention used for the existing locales).
- Refactoring older routes that are already translated.
- Number/currency localization in `ROICalculator` (currently hard-coded to `en-US`/USD — separate request if desired).

### Files touched
- edit `src/i18n/es.ts`
- edit `src/i18n/ar.ts`
- create `mem://preferences/i18n-parity`
- edit `mem://index.md` (add Core line + memory reference)
