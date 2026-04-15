

# Update Fonts: Aptos (EN/ES) + Cairo (AR)

## Changes

### 1. Add Cairo from Google Fonts
**File: `src/routes/__root.tsx`**
- Add Cairo font to the Google Fonts stylesheet URL: `family=Cairo:wght@400;500;600;700;800`

### 2. Update font-family in CSS
**File: `src/styles.css`**
- Change `body` font-family to: `'Aptos', 'Inter', system-ui, -apple-system, sans-serif` — Aptos renders for users who have it (Windows 11/Office 365), falls back to Inter for others
- Add `[dir="rtl"] body` rule with: `font-family: 'Cairo', 'Aptos', system-ui, sans-serif` — Cairo for Arabic, Aptos fallback for any Latin characters in Arabic pages

### 3. Remove Inter Google Font load (optional)
Keep Inter in the Google Fonts link as the web fallback for users without Aptos installed. No removal needed.

## Result
- **English/Spanish users**: See Aptos if installed locally, otherwise Inter (already loaded via Google Fonts)
- **Arabic users**: See Cairo (loaded via Google Fonts) for Arabic text, with Aptos/Inter fallback for any Latin text

