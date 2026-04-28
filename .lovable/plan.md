## Goal

Update the TrustBand counter metrics on the home page with new values and rename the "Companies" label to "Clients".

## Changes

### 1. `src/components/shared/TrustBand.tsx` — update stat values
| Metric | Before | After |
|---|---|---|
| Employees managed | 10M+ | **1.5M+** (one decimal) |
| Companies → Clients | 500+ | **250+** |
| Countries | 50+ | **17+** |
| Uptime | 99.9% | unchanged |

### 2. Rename `home.trust.companies` label across all three locales (i18n parity rule)
- `src/i18n/en.ts` line 139: `"Companies"` → `"Clients"`
- `src/i18n/es.ts` line 139: `"Empresas"` → `"Clientes"`
- `src/i18n/ar.ts` line 139: `"شركات"` → `"عملاء"`

The translation key (`companies`) stays the same to avoid touching the consumer; only the display strings change.

## Out of scope
No layout, animation, or other content changes.
