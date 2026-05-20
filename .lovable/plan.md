# Split Legislations page by region

## Change
Refactor the Legislations page to render one section per region (currently "GCC" and "Levant & Asia"). The new layout uses 4 regions, driven by a single data array so future regions can be added with a one-line entry.

## New region groupings
- **GCC** — UAE, Saudi Arabia, Qatar, Oman, Bahrain, Kuwait
- **Levant** — Jordan, Lebanon, Palestine, Iraq
- **Africa** — Egypt, Libya
- **Asia** — India, Pakistan

(Existing per-country frameworks are preserved as-is.)

## Edits

1. **`src/routes/legislations.tsx`**
   - Replace the two arrays (`gccCountries`, `levantAsiaCountries`) with a single `regions: Region[]` array. Each `Region` has `{ key, countries: CountryEntry[] }` so adding a new region later means appending one object.
   - Render the page by mapping over `regions`, alternating section backgrounds (white / soft-gray) for visual rhythm.
   - Each region's heading and subheading come from i18n keys `legislations.regions.<key>.heading` / `.subheading` so they translate.

2. **i18n — add to `en.ts`, `es.ts`, AND `ar.ts` together** (memory parity rule)
   - Add `legislations.regions.gcc.{heading,subheading}` (reuse existing GCC copy).
   - Add `legislations.regions.levant.{heading,subheading}` — "Levant" / "Country-specific labour law, tax and statutory rules across the Levant."
   - Add `legislations.regions.africa.{heading,subheading}` — "Africa" / "Labour law, payroll tax and statutory leave coverage for African operations."
   - Add `legislations.regions.asia.{heading,subheading}` — "Asia" / "Labour codes, social security and income-tax payroll for South Asia."
   - Remove the now-unused `gccHeading`, `gccSubheading`, `levantAsiaHeading`, `levantAsiaSubheading` keys.

## Out of scope
No changes to nav, hero, capabilities section, CTA, country cards, or any other page. No new images — flag thumbnails continue to come from flagcdn.com.
