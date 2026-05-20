## Goal

Create a new **Partner With Sapience** page at `/partner-with-us` that mirrors the structure and content sections of the ZingHR partner page, fully styled in Sapience HCM brand (Navy / Blue / Orange) and translated across en/es/ar.

## Page structure (sections, top → bottom)

1. **Hero**
  - H1: "Partner With Sapience"
  - Sub: "We've teamed up with leading organizations to help your business grow."
  - Two CTAs: `Find a Partner` (→ `#partners`) and `Become a Partner` (→ `/request-demo?type=partner` or anchor to form)
  - Right-side illustration (use existing brand asset / generated SVG; no new image generation unless needed)
2. **Why partner with us**
  - Paragraph explaining Sapience's HCM partner program, regional reach (GCC, Levant, Africa, Asia), and shared growth model.
  - Supporting visual (decorative panel).
3. **Choose the Right Partner Program** (2–3 program cards)
  - **Channel Partner** — sells and markets Sapience HCM; owns lead pipeline.
  - **Referral Partner** — shares qualified leads; Sapience closes.
  - **Implementation Partner** (added; common for HCM) — delivers onboarding, payroll configuration, country-specific compliance.
  - Each card: icon (lucide), title, description, "Learn more" link → `#become-a-partner`.
4. **Benefits of partnering** (4–6 small benefit tiles)
  - Recurring revenue share, co-marketing, dedicated partner manager, sales & product enablement, certification, regional market access.
5. **Our Global Partners** (`#partners`)
  - Logo grid placeholder (6–8 monochrome logo tiles). Use neutral placeholder logo blocks with partner-name text since we don't have real partner logos.
6. **How to become a partner** (`#become-a-partner`)
  - 3-step process: Apply → Onboard & Certify → Go to market.
7. **CTA band**
  - "Ready to grow with Sapience HCM?" + button → `/request-demo`.

## Files to create / edit

- **Create** `src/routes/partner-with-us.tsx` — TanStack route with `createFileRoute("/partner-with-us")`, `head()` SEO metadata (title, description, og:title, og:description, canonical), and all sections above using existing design tokens and the `useT()` i18n hook.
- **Edit** `src/components/layout/Header.tsx` — add "Partner with us" nav entry (Company / top-level menu — match existing nav grouping).
- **Edit** `src/components/layout/Footer.tsx` (if it exists) — add link under appropriate column.
- **Edit** `src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/ar.ts` — add a `partner` namespace (hero, why, programs, benefits, partners, howTo, cta) in all three locales together (per i18n parity rule).
- **Edit** `public/llms.txt` and `src/routes/sitemap[.]xml.ts` — register the new URL.
- `src/routeTree.gen.ts` is auto-generated — do not edit.

## Out of scope

- No backend form submission (CTAs link to existing `/request-demo`).
- No real partner logos (placeholder tiles).
- No new generated imagery unless an existing brand asset cannot fill the hero — will use CSS/SVG decorative panel first.
- No changes to other pages.