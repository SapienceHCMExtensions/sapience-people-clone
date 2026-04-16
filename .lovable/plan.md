

# Implement Page Transitions, Sticky Feature Nav, and Multi-language SEO

## 1. Page Transition Animations

Wrap `<Outlet />` in `__root.tsx` with a transition component that cross-fades on route change. Uses `useLocation` from TanStack Router to detect route changes and applies a CSS fade transition.

**Files:** `src/components/layout/PageTransition.tsx` (new), `src/routes/__root.tsx` (edit), `src/styles.css` (add keyframes)

- Create `PageTransition` component that wraps children, listens to `useLocation().pathname`, and on change applies a brief opacity 0 → 1 fade-up animation via a CSS class toggle with a key-based remount or `useEffect` class toggle
- Use a simple approach: set `key={pathname}` on a wrapper div with CSS `animation: page-enter 0.35s ease-out` to get a cross-fade on every navigation
- Add `@keyframes page-enter` to `styles.css`

## 2. Sticky Feature Navigation

Add a sticky horizontal tab bar at the top of feature pages that highlights the current section as you scroll. Each `NumberedFeatureBlock` section gets an `id`, and the tab bar uses `IntersectionObserver` to track which section is active.

**Files:** `src/components/shared/StickyFeatureNav.tsx` (new), `src/components/shared/NumberedFeatureBlock.tsx` (edit to add section IDs)

- `StickyFeatureNav` accepts `features: { number, title }[]`, renders a sticky bar below the header (`top: 64px` to clear the header)
- Each tab is a link that smooth-scrolls to the corresponding section ID
- Uses `IntersectionObserver` to highlight the currently visible section
- Active tab gets `bright-blue` underline/highlight
- Bar appears only when scrolled past the hero (uses scroll position check)
- Feature pages pass the features array to this component

**Feature page changes:** All 14 feature pages get `<StickyFeatureNav>` added after `<HeroSection>` and before `<NumberedFeatureBlock>`

## 3. Multi-language SEO Meta Tags

Currently all `head()` metadata is hardcoded in English. Since `head()` runs outside React context (no hooks), we need a different approach: add `hreflang` alternate links in the root route, and make each feature/solution/main page's `head()` include language-specific meta via a helper that reads from the translation files directly.

**Files:** `src/lib/seo.ts` (new), `src/routes/__root.tsx` (edit for hreflang), all route files with `head()` (edit)

- Create `src/lib/seo.ts` with a helper `getLocalizedHead(path, enMeta)` that:
  - Returns hreflang `<link>` alternates for en, ar, es pointing to the same path
  - Since `head()` is static (no access to current locale), we add all three hreflang alternates as `links`
- Add hreflang links in root route: `{ rel: "alternate", hreflang: "en", href: "https://..." }` etc.
- Since the site is client-rendered SPA where locale is stored in localStorage (not URL-based), hreflang links point to the same URL with `x-default`. The og:title/og:description stay in English for the static SSR pass (this is correct since crawlers see the default language).

**Pragmatic approach:** Add a `getHreflangLinks(path: string)` utility that returns alternate link tags for all supported locales. Add these to each route's `head()`. The base URL will use the preview/published URL.

## Technical Details

### New files (2)
1. **`src/components/layout/PageTransition.tsx`** — Wrapper with fade animation keyed on pathname
2. **`src/components/shared/StickyFeatureNav.tsx`** — Sticky horizontal tab bar with IntersectionObserver

### New utility (1)
3. **`src/lib/seo.ts`** — `getHreflangLinks(path)` returns hreflang link tags

### Modified files
- **`src/routes/__root.tsx`** — Wrap Outlet with PageTransition, add hreflang links to root head
- **`src/styles.css`** — Add `@keyframes page-enter` for route transition
- **`src/components/shared/NumberedFeatureBlock.tsx`** — Add `id` attributes to each feature section for scroll targeting
- **All 14 feature route files** — Add `<StickyFeatureNav>` component, add hreflang links to head
- **Other route files** (index, pricing, customers, solutions) — Add hreflang links to head

### Sticky Nav Behavior
- Horizontal scrollable tabs on mobile, full bar on desktop
- Appears fixed below header (top: 64px, z-index 40)
- Smooth scroll on tab click
- Active section highlighted with blue underline
- Hides when scrolled above the features section

