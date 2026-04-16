

# Add Country Flags to Country Code Dropdowns

## Approach

Use Unicode flag emojis derived from ISO 3166-1 alpha-2 country codes. This requires no external libraries or image assets — just adding a 2-letter `iso` field to each country entry and a small helper function to convert it to a flag emoji.

## Changes

### 1. Update `src/lib/countryCodes.ts`
- Add an `iso` field (2-letter country code) to each entry, e.g. `{ code: "+1", name: "United States", iso: "US" }`
- Add a helper function `countryFlag(iso: string): string` that converts ISO code to regional indicator emoji (e.g. "US" → 🇺🇸)

### 2. Update all 5 form pages
In each file, change the SelectItem rendering from `{c.code} {c.name}` to `{countryFlag(c.iso)} {c.code} {c.name}`:

- `src/routes/request-demo.tsx`
- `src/routes/request-quote.tsx`
- `src/routes/webinars.tsx`
- `src/routes/training-program.tsx`
- `src/routes/getting-started.tsx`

### Display format
Dropdown items will show: 🇺🇸 +1 United States, 🇬🇧 +44 United Kingdom, etc.
The selected value in the trigger will also show the flag.

