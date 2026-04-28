## Goal

Update the `/customers` route so the testimonials match the three real quotes shown in the "What Users Saying" section of https://www.sapiencetechnology.com.

## Source content (verbatim from sapiencetechnology.com)

1. **Maya Abdel Sater** — Country Finance / ME Payroll Lead
   > "Sapience is very user friendly with all features an organization required to perform a seamless payroll processing. Moreover, the continued support of implementation team makes the journey even easier."

2. **Abdul Nasar V.** — Head of Payroll, Middle East
   > "Sapience HCM is a user friendly, easy to set up different modules, elements, easy to define the procedures, entitlements, calculation rules etc. Good connectivity with Oracle OTL system."

3. **Rinku Doshi** — Senior Associate
   > "It's great to work with Sapience Technology Team. It is a user friendly software and the functionalities are helping process the payrolls at ease. It automates calculation and is highly flexible on the configuration."

The source page does not list company names for these quotes, so the company field will be left blank and the template adjusted to hide it gracefully.

## Changes

1. **`src/i18n/en.ts`** — Under `pages.customers`:
   - Replace `testimonial1*` (Michael Torres) with Maya Abdel Sater's quote/title.
   - Replace `testimonial2*` (Priya Sharma) with Abdul Nasar V.'s quote/title.
   - Add `testimonial3Quote / testimonial3Name / testimonial3Title / testimonial3Company` for Rinku Doshi.
   - Set all three `*Company` values to empty strings (source has none).
   - Lightly refresh `subtitle` to match the payroll/HCM tone of the real quotes.

2. **`src/i18n/es.ts`** — Mirror the exact same keys with Spanish translations of the quote text. Names stay as-is; titles translated (e.g. "Responsable de Nómina – Oriente Medio").

3. **`src/i18n/ar.ts`** — Mirror the same keys with Arabic translations of the quote text and titles. Names kept in original form. (Required by the i18n parity rule.)

4. **`src/components/shared/TestimonialBlock.tsx`** — Small tweak: only render the `, {company}` segment when `company` is a non-empty string, so the attribution line reads cleanly as "Name — Title" when no company is supplied.

5. **`src/routes/customers.tsx`** — Render a **third** `<TestimonialBlock>` for Rinku Doshi using the new `testimonial3*` keys. Keep the existing two and append the third below them. No layout/background changes needed — the existing `bg-soft-gray` block style already alternates well visually with the page background.

## Out of scope

- No changes to the home page, header, footer, or partner logos.
- No new images, icons, or routes.
- No CRM/email wiring changes.

Approve to apply these edits.