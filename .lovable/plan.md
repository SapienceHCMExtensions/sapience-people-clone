

# Remove PostgreSQL Form Submission Integration

## Overview

Strip out the PostgreSQL persistence layer from all 5 forms so the project no longer attempts to connect to a database. Forms will revert to showing the thank-you confirmation immediately on submit. This leaves a clean slate for a future Odoo REST API integration.

## Why

- The `pg` library and pooled DB connections are not needed without a backing database.
- Removing them now avoids deploy-time errors on Cloudflare/Vercel from a missing `DATABASE_URL` and from Node-only modules in the Worker runtime.
- Keeps the codebase clean for the upcoming Odoo integration, which will use `fetch` against Odoo's REST endpoints — a completely different shape than the current `pg` setup.

## Changes

### Files to delete
- `src/lib/db.config.ts`
- `src/lib/db.server.ts`
- `src/lib/submissions.functions.ts`
- `migrations/001_create_submissions.sql` (and the `migrations/` folder if empty)

### Files to edit (all 5 form pages)
For each of:
- `src/routes/request-demo.tsx`
- `src/routes/request-quote.tsx`
- `src/routes/webinars.tsx`
- `src/routes/training-program.tsx`
- `src/routes/getting-started.tsx`

Apply these edits:
1. Remove the `import { submitFormData } from "@/lib/submissions.functions"` line.
2. Remove the `import { toast } from "sonner"` line (no longer needed since there's no async failure path). Keep it only if the file uses toast elsewhere.
3. Replace the async `handleSubmit` body so it just sets `submitted = true` after a brief simulated delay (or immediately). Drop the `submitting` state and the try/catch entirely, OR keep `submitting` for UI consistency but resolve immediately.
4. Keep all form fields, validation, the privacy checkbox gate, and the thank-you screen exactly as they are.

### Dependency cleanup
- Remove `pg` and `@types/pg` from `package.json`.

### What stays
- All form UIs, fields, validation, country code dropdowns, thank-you screens, and i18n strings — untouched.
- `sonner` Toaster setup in the root remains available for future use.

## Result

After this change:
- No database connection is attempted anywhere in the app.
- Forms collect data and show the thank-you message but do not persist or transmit it.
- The codebase is ready for you to add an Odoo REST integration later (likely a new `src/lib/odoo.functions.ts` with a `createServerFn` that POSTs to your Odoo instance).
- The app deploys cleanly to Cloudflare or Vercel with no `DATABASE_URL` requirement.

## Files

| Action | File |
|--------|------|
| **Delete** | `src/lib/db.config.ts` |
| **Delete** | `src/lib/db.server.ts` |
| **Delete** | `src/lib/submissions.functions.ts` |
| **Delete** | `migrations/001_create_submissions.sql` |
| **Edit** | `src/routes/request-demo.tsx` — remove DB call from submit handler |
| **Edit** | `src/routes/request-quote.tsx` — remove DB call from submit handler |
| **Edit** | `src/routes/webinars.tsx` — remove DB call from submit handler |
| **Edit** | `src/routes/training-program.tsx` — remove DB call from submit handler |
| **Edit** | `src/routes/getting-started.tsx` — remove DB call from submit handler |
| **Edit** | `package.json` — remove `pg` and `@types/pg` |

