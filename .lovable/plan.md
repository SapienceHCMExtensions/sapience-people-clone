

# Create Dedicated ERP Integrations and Biometric Device Integration Pages

Currently, ERP and Biometric are just numbered items on the single `/features/integrations` page. We'll create two new dedicated feature pages following the same rich pattern as Core HR and Payroll (hero, numbered features, more reasons, FAQ, CTA).

## New Route Files

### 1. `src/routes/features/erp-integrations.tsx`
Full feature page at `/features/erp-integrations` with:
- HeroSection (badge, headline, sub-headline)
- NumberedFeatureBlock with 5-6 features covering: Sage 300 connector, SAP S/4HANA & Business One, Dynamics 365 Business Central, Sage X3, GL/journal sync, real-time data sync
- More Reasons checklist section
- FAQ accordion (3-4 items about ERP integration process, data mapping, sync frequency)
- CTA banner

### 2. `src/routes/features/biometric-integrations.tsx`
Full feature page at `/features/biometric-integrations` with:
- HeroSection (badge, headline, sub-headline)
- NumberedFeatureBlock with 5-6 features covering: fingerprint devices, facial recognition, RFID/proximity cards, geo-fencing/GPS attendance, real-time sync, multi-location support
- More Reasons checklist section
- FAQ accordion (3-4 items about supported devices, setup, offline sync)
- CTA banner

## i18n Updates (all 3 language files)

### `src/i18n/en.ts`
Add new sections under `features`:
- `features.erpIntegrations.*` — hero, badge, 5-6 feature titles+descriptions, moreReasons array, faq array
- `features.biometricIntegrations.*` — hero, badge, 5-6 feature titles+descriptions, moreReasons array, faq array

Add to `features.allFeatures`:
- `erpIntegrations` / `erpIntegrationsDesc`
- `biometricIntegrations` / `biometricIntegrationsDesc`

Add to `header`:
- `erpIntegrations`, `biometricIntegrations`

### `src/i18n/ar.ts` and `src/i18n/es.ts`
Same structure with Arabic and Spanish translations.

## Navigation Updates

### `src/routes/features/index.tsx`
Add two new FeatureCard entries (with appropriate icons like `Server` for ERP and `Fingerprint` for Biometric) linking to the new routes.

### `src/components/layout/Header.tsx`
Add the two new pages under the Features mega menu dropdown, before the "All Features" link.

## SEO
Both routes get `head()` with unique title, description, og:title, og:description, and `getHreflangLinks()` — same pattern as all other feature pages.

## Files changed
- **New:** `src/routes/features/erp-integrations.tsx`, `src/routes/features/biometric-integrations.tsx`
- **Edit:** `src/i18n/en.ts`, `src/i18n/ar.ts`, `src/i18n/es.ts`, `src/routes/features/index.tsx`, `src/components/layout/Header.tsx`

