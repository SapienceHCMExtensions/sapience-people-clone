

# Full Country Code List + Three New Pages (Webinars, Training Program, Getting Started)

## 1. Shared Country Codes Data

Create `src/lib/countryCodes.ts` — a single shared file with a comprehensive list of ~240 countries. Each entry: `{ code: string, name: string }` (e.g., `{ code: "+1", name: "United States" }`). This replaces the inline partial lists in request-demo and request-quote.

Display format in the Select dropdown: `+1 United States` instead of `+1 US`.

## 2. Update Existing Pages

**`src/routes/request-demo.tsx`** and **`src/routes/request-quote.tsx`**:
- Remove inline `countryCodes` array
- Import from `@/lib/countryCodes`
- Update SelectItem rendering to show full country name

## 3. New Route Pages

All three follow the same pattern as request-demo (hero left, form right, SEO head, hreflang links):

### `src/routes/webinars.tsx`
- Form: Name, Email, Country Code + Phone, Company, Role, Webinar Topic of Interest (dropdown), Privacy checkbox
- Left side: headline about upcoming webinars, bullet points (live sessions, industry experts, Q&A, recordings available)

### `src/routes/training-program.tsx`
- Form: Name, Email, Country Code + Phone, Company, Number of Employees, Role, Training Topics (checkboxes similar to services), Preferred Schedule (dropdown), Privacy checkbox
- Left side: headline about training programs, bullet points (hands-on workshops, certified trainers, custom curriculum, flexible scheduling)

### `src/routes/getting-started.tsx`
- Form: Name, Email, Country Code + Phone, Company, Number of Employees, Role, Current HR System (dropdown like existingProviders), Services of Interest (checkboxes), Privacy checkbox
- Left side: headline about getting started, bullet points (quick setup, dedicated support, data migration, go-live in weeks)

## 4. i18n Updates

Add translation keys in all 3 language files (`en.ts`, `ar.ts`, `es.ts`) for:
- `pages.webinars.*` — all form labels, hero text, thank you message
- `pages.trainingProgram.*` — all form labels, hero text, thank you message
- `pages.gettingStarted.*` — all form labels, hero text, thank you message

## 5. Header Navigation

Update `src/components/layout/Header.tsx`:
- Change `<a href="#">` for webinars → `<Link to="/webinars">`
- Change `<a href="#">` for training → `<Link to="/training-program">`
- Add Getting Started link in the "Connect With Us" section

## Files

| Action | File |
|--------|------|
| **New** | `src/lib/countryCodes.ts` |
| **New** | `src/routes/webinars.tsx` |
| **New** | `src/routes/training-program.tsx` |
| **New** | `src/routes/getting-started.tsx` |
| **Edit** | `src/routes/request-demo.tsx` |
| **Edit** | `src/routes/request-quote.tsx` |
| **Edit** | `src/i18n/en.ts` |
| **Edit** | `src/i18n/ar.ts` |
| **Edit** | `src/i18n/es.ts` |
| **Edit** | `src/components/layout/Header.tsx` |

