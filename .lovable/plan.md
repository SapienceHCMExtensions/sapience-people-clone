# Add Google Play + App Store Badges to Footer

## Steps

1. Save badge assets to `src/assets/`:
   - `google-play-badge.png` (Google Play badge)
   - `app-store-badge.svg` (App Store badge from uploaded SVG)

2. Update `src/components/layout/Footer.tsx`:
   - Import both badges.
   - Add a "Get the mobile app" block in the brand column (under the "powered by" line) with both badges side-by-side.
   - Google Play link: `https://play.google.com/store/apps/details?id=com.sapience.hcm`
   - App Store link: `#` (placeholder, with TODO comment)
   - Both links open in new tab with `rel="noopener noreferrer"`.
   - Badges sized at `h-10`.

3. Add `common.footer.getTheApp` translation key to:
   - `src/i18n/en.ts` → "Get the mobile app"
   - `src/i18n/ar.ts` → "احصل على تطبيق الجوال"
   - `src/i18n/es.ts` → "Obtén la app móvil"
