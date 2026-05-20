# Add Legislations page under Resources

## Scope

Add a new "Legislations" entry to the Resources mega-menu (desktop + mobile) and create a `/legislations` route. Content is sourced strictly from the attached Sapience Technology Company Profile — no other site sections will be touched. Make sure it supports the language selection when we switch to a different language.

## Legislations to feature (from the PDF)

Per the "Legislative Compliance" section of the profile, Sapience HCM provides built-in compliance for:

**GCC (full labour law + payroll/WPS/EOSB/social insurance)**

- UAE — UAE Labour Law, WPS (Wages Protection System), End-of-Service Gratuity
- Saudi Arabia — Labour Law, GOSI, WPS, EOSB
- Qatar — Labour Law, WPS, EOSB
- Oman — Labour Law, PASI, WPS, EOSB
- Bahrain — Labour Law, SIO, WPS, EOSB
- Kuwait — Labour Law, PIFSS, WPS, EOSB

**Levant & Asia (tax + country-specific leave / working-hour / payroll rules)**

- Jordan, Egypt, Palestine, Iraq, Lebanon, Libya
- India, Pakistan

Cross-cutting capabilities highlighted on the page: WPS file generation, EOSB calculations, GOSI / social insurance integrations, Asia/Levant tax calculations, country-specific leave & working-hour rules, and regular compliance updates delivered via subscription.

## Changes

1. **New route** `src/routes/legislations.tsx`
  - `head()` with unique title/description/OG tags (e.g. "Legislations & Compliance — Sapience HCM").
  - Hero: title + short intro paragraph (paraphrased from the profile's Legislative Compliance section).
  - "GCC" section: 6 country cards (UAE, KSA, Qatar, Oman, Bahrain, Kuwait) each listing its specific frameworks (Labour Law, WPS, EOSB, GOSI/PASI/SIO/PIFSS as applicable).
  - "Levant & Asia" section: country cards for Jordan, Egypt, Palestine, Iraq, Lebanon, Libya, India, Pakistan with short notes (labour law, tax, leave/working-hour rules).
  - "Built-in capabilities" strip: WPS generation, EOSB, social insurance, tax engines, statutory reporting, regular regulatory updates.
  - Reuse existing primitives (`HeroSection` or local section markup, FeatureCard-style grid, semantic tokens — navy / bright-blue / vibrant-orange).
  - Standard CTA banner at the bottom linking to `/request-demo`.
2. **Navigation**
  - `src/components/layout/Header.tsx`: add a "Legislations" `<Link to="/legislations">` inside the Resources mega-dropdown. Place it under the "HR Toolkit" column (alongside Knowledge Base / Blogs / Glossary) so it surfaces as a resource.
  - Mobile menu: add a matching link in the Resources section of the mobile drawer (it currently doesn't list Resources items individually — add a single "Legislations" link near the existing resources block).
3. **i18n parity** (per project memory rule)
  - Add the following keys to `en.ts`, `es.ts`, AND `ar.ts` together:
    - `common.nav.legislations` ("Legislations")
    - `legislations.title`, `legislations.subtitle`, `legislations.intro`
    - `legislations.gccHeading`, `legislations.levantAsiaHeading`, `legislations.capabilitiesHeading`
    - Per-country labels & framework lines, plus capability bullet strings.
4. **SEO**
  - Add `/legislations` to `src/routes/sitemap[.]xml.ts` PATHS array.
  - Add to `public/llms.txt` under an appropriate section.

## Out of scope

- No changes to home, features, solutions, pricing, customers, or any other page.
- No new imagery generation, no styling changes outside the new route + the single nav link.
- No backend / data work.