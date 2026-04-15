

# Fix Arabic (and Spanish) Language Not Changing on Route Pages

## Problem Identified

After investigation, the core i18n wiring (`useT()` hook, LanguageProvider, translation dictionaries) is correctly set up and all route files already use `useT()` for string translations. However, there is a **critical bug in `getNestedValue`** that prevents arrays from being resolved, causing large sections of every page to appear untranslated.

### The Bug

In `src/i18n/context.tsx`, the `getNestedValue` function (line 64):
```ts
return typeof current === "string" ? current : path;
```

This **only returns strings**. When the value at the path is an array (e.g., `moreReasons`, `faq` items), it returns the path key string instead. Then `useTranslatedArray` checks `Array.isArray(value)` which is always `false`, so it returns `[]` — an empty array. This means:

- **"More Reasons" sections** on all feature pages render nothing
- **FAQ sections** on all feature pages render nothing
- These are large, visible sections on every feature route

This makes it appear as if language switching "doesn't work" on route pages, even though the hero headlines, feature card titles, and other string-based content do change.

### Secondary Issue: Duplicate Key Warnings

Console shows "Encountered two children with the same key" errors. This comes from lists using translated text as React `key` props (e.g., `key={r}` in moreReasons). When two translated items have the same text, React warns about duplicate keys.

## Fix Plan

### 1. Fix `getNestedValue` in `src/i18n/context.tsx`

Change the function to return `any` type instead of `string`, so it can return arrays and objects too. Add a separate `getNestedString` for `useT()` that preserves the string-only behavior:

```ts
function getNestedValue(obj: any, path: string): any {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return undefined;
    current = current[key];
  }
  return current;
}
```

Update `useT()` to check `typeof value === "string"` before returning.

Update `useTranslatedArray()` to work with the corrected return value.

### 2. Fix duplicate key warnings across all feature routes

In all feature route files that render `moreReasons.map((r) => ...)`, change from `key={r}` to `key={index}` (using the map index) to avoid duplicate key issues when two translated items have the same text. Similarly for FAQ items, use `key={index}` or a unique identifier.

**Files affected** (approximately 7 feature routes with moreReasons/FAQ lists):
- `src/routes/features/core-hr.tsx`
- `src/routes/features/payroll.tsx`
- `src/routes/features/hiring-onboarding.tsx`
- `src/routes/features/performance.tsx`
- `src/routes/features/engagement.tsx`
- `src/routes/features/retirement-separation.tsx`
- `src/routes/features/organization-management.tsx`
- `src/routes/features/custom-services.tsx`

### 3. Add RTL CSS adjustments in `src/styles.css`

Add `[dir="rtl"]` overrides for edge cases not handled by CSS logical properties (chevron rotation, icon positioning in the header dropdown).

## What Will NOT Change

- Translation dictionary content (en.ts, ar.ts, es.ts) — already complete
- Route file structure and component architecture
- Header language switcher functionality
- LanguageProvider setup in __root.tsx

