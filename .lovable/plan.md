# Fix Legislations page: raw i18n keys + add country flag thumbnails

## Root cause of the raw labels
The `legislations` namespace was accidentally nested **inside the `legal:` block** in `src/i18n/en.ts`, `es.ts`, and `ar.ts`. The page calls `t("legislations.title")` etc., but the actual path is `legal.legislations.title`, so unresolved keys fall through to their string literals (the labels the user sees).

## Fixes

1. **Move the `legislations: { ... }` block out of `legal:` to a top-level sibling** (next to `common`, `home`, `features`, `solutions`, `pages`, `header`, `legal`) in all three files: `en.ts`, `es.ts`, `ar.ts`. No key renames; just relocate so `t("legislations.*")` resolves.

2. **Add real flag thumbnail images per country card** in `src/routes/legislations.tsx`:
   - Replace the emoji `flag` field on each entry with an ISO country code (`ae`, `sa`, `qa`, `om`, `bh`, `kw`, `jo`, `eg`, `ps`, `iq`, `lb`, `ly`, `in`, `pk`).
   - Render an `<img>` using `https://flagcdn.com/w80/{code}.png` (with `srcSet` for 2x), `width={40} height={28}`, rounded corners, subtle border, `loading="lazy"`, and descriptive `alt` text (e.g. "United Arab Emirates flag"). flagcdn.com is a free public CDN — no key required.
   - Keep the existing card layout; just swap the emoji span for the flag image.

## Out of scope
No other content/style changes, no nav/sitemap edits, no PDF re-import.
