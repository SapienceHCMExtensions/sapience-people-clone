## Goal

Convert the two CTAs on `/partner-with-us` into dedicated routes, and add a Partner contact form on the "Become a Partner" page. The page should have bright colors with smooth animation.

## Routes to create

### 1. `src/routes/partner-with-us.find-a-partner.tsx` → `/partner-with-us/find-a-partner`

Static directory page listing Sapience HCM partners (uses the same placeholder logo list as the parent page, expanded into cards with country/region + partner type tags).

Sections:

- **Hero** — "Find a Partner" + intro copy.
- **Filter chips** (static, non-functional v1) — All / GCC / Levant / Africa / Asia. Region filter is client-state only; no URL params.
- **Partner grid** — cards with logo placeholder block, partner name, region, partner type (Channel / Referral / Implementation), short blurb, "Contact" mailto link.
- **CTA band** — "Don't see the right fit? Become a partner" → links to `/partner-with-us/become-a-partner`.

### 2. `src/routes/partner-with-us.become-a-partner.tsx` → `/partner-with-us/become-a-partner`

Page that recaps the program tracks briefly and hosts the partner application form.

Sections:

- **Hero** — "Become a Partner" + intro.
- **Quick program recap** — three compact cards (reuses translation keys from `partner.programs.*`).
- **Application form** (main focus) with fields:
  - Company name *
  - Contact full name *
  - Business email *
  - Phone (with country code) *
  - Country *
  - Website (optional)
  - Partner type * — radio: Channel / Referral / Implementation
  - Company size — select: 1–10 / 11–50 / 51–200 / 201–1000 / 1000+
  - Target markets — multi-checkbox: GCC / Levant / Africa / Asia / Other
  - Years in HR / HR-tech business — number
  - Message / why you want to partner — textarea
  - Consent checkbox *
- **What happens next** — 3-step process (Review → Intro call → Onboarding).

## Form behaviour

- Client validation with `zod` + `react-hook-form` (already standard in the project; verify and reuse the same pattern as `request-demo.tsx` / `request-quote.tsx`).
- Submit calls a TanStack server function `submitPartnerApplication` in `src/lib/partner.functions.ts` that:
  - Re-validates input server-side with the same zod schema.
  - Sends an email notification to a fixed inbox (`partners@sapiencehcm.com`) using whatever mailer the existing `request-demo` / `request-quote` flow uses. If those routes don't actually send email yet (static project), match their behaviour exactly — log + return `{ success: true }` — so this stays consistent with the rest of the site.
- On success, show inline success state ("Thanks — our partner team will be in touch within 2 business days.").
- On error, show inline error toast/banner.

Will inspect `src/routes/request-demo.tsx` and any existing `*.functions.ts` first to mirror the exact pattern (mailer vs. static), so this page behaves like the other Sapience HCM forms.

## Edits to existing files

- `**src/routes/partner-with-us.tsx**`
  - Change hero "Find a Partner" button from `<a href="#partners">` to `<Link to="/partner-with-us/find-a-partner">`.
  - Change hero "Become a Partner" button from `<a href="#become-a-partner">` to `<Link to="/partner-with-us/become-a-partner">`.
  - Update the three program cards' "Learn more" link from `#become-a-partner` → `/partner-with-us/become-a-partner`.
  - Update the bottom How-to-become-a-partner step CTA / "Our Global Partners" `Find a Partner` link if any → the new routes.
  - Keep the in-page `#partners` and `#become-a-partner` sections as-is for now (they still work as overview), OR remove them if redundant. Decision: **keep them** as marketing recap on the hub page; the new routes are the deep pages.
- `**src/components/layout/Header.tsx**`
  - Under the Resources mega-dropdown "Connect with Us" column, add sub-links for `Find a Partner` and `Become a Partner` directly under the existing `Partner with Us` link. Mobile menu: add the two child links indented under the existing one.
- `**src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/ar.ts**` — add (in all three locales together):
  - `common.nav.findAPartner`, `common.nav.becomeAPartner`
  - `partner.find.*` (hero title/subtitle, filter labels, regionLabel, typeLabel, contactCta, ctaTitle/Subtitle/Button)
  - `partner.become.*` (hero title/subtitle, formTitle, all field labels + placeholders, partnerType options, companySize options, marketsOptions, consent text, submit, success, error, nextStepsTitle + 3 step items)
- `**public/llms.txt**` — add the two new URLs under the Partner with Us entry.
- `**src/routes/sitemap[.]xml.ts**` — register `/partner-with-us/find-a-partner` and `/partner-with-us/become-a-partner`.
- `src/routeTree.gen.ts` is auto-generated — do not edit.

## New file (server)

- `**src/lib/partner.functions.ts**` — `submitPartnerApplication` server function with zod schema. Implementation mirrors whatever existing form server functions do (real email vs. static stub).

## Out of scope

- No real partner database (cards remain static).
- No real filter logic beyond client-side `useState` chips.
- No CRM integration; email-only as per project rule.
- No edits to other unrelated pages.