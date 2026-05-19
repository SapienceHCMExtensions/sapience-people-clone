## Goal

1. Get the site building and running cleanly on Lovable preview + published Lovable URL (revert the VPS-only Node SSR change).
2. Kick off Google Search Console verification for `https://sapiencehcm.lovable.app`.

VPS deployment work is deferred — we'll revisit it later without touching it now.

---

## Step 1 — Restore the Lovable (Cloudflare Worker) build target

`vite.config.ts` was switched to `cloudflare: false`, which made the build emit a Node bundle. Lovable's preview + publish runtime expects the default Worker bundle.

Change `vite.config.ts` back to:

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({});
```

No other config changes. `@cloudflare/vite-plugin` and `wrangler.jsonc` were removed earlier, but they were never required at the project level — the Lovable preset wires up the Worker target internally. We confirm a clean build runs and the preview loads.

Note: `DEPLOYMENT.md` stays as-is for now (useful reference for the future VPS work). We just won't act on it.

## Step 2 — Verify preview is healthy

After the config change:
- Confirm the preview at `/` renders.
- Spot-check a couple of routes (`/pricing`, `/features/payroll`).
- Confirm `/sitemap.xml` and `/robots.txt` respond.

## Step 3 — Google Search Console verification

Flow for `https://sapiencehcm.lovable.app/`:

1. Call the GSC connector gateway to request a `META` verification token for `https://sapiencehcm.lovable.app/`.
2. Add the returned `<meta name="google-site-verification" content="..." />` tag to `src/routes/__root.tsx` `head().meta`. This makes it part of the SSR-rendered `<head>` on every page, including `/`.
3. Tell the user to click **Publish → Update** so the new meta tag is live on `sapiencehcm.lovable.app` (preview URL won't satisfy Google).
4. Once they confirm publish is done, call the GSC `siteVerification/v1/webResource?verificationMethod=META` endpoint to trigger verification.
5. On success, register the site in Search Console via `PUT /webmasters/v3/sites/{url-encoded}`.

If step 4 fails with `failedToFindMetaTag`, the most likely cause is that the publish hasn't propagated yet — wait and retry, don't remove the tag.

## Technical details

- Files touched in this plan:
  - `vite.config.ts` — revert to `defineConfig({})`.
  - `src/routes/__root.tsx` — append the GSC meta tag to the existing `head().meta` array (added after token is issued in step 3.1).
- No dependency installs, no route additions, no removals.
- `DEPLOYMENT.md`, `wrangler.jsonc` deletion, and the prior `@cloudflare/vite-plugin` removal are left untouched — the Lovable preset doesn't need them for preview/publish.

## What's explicitly out of scope

- VPS / Node SSR deployment (you'll revisit later).
- Any SEO content changes beyond the GSC meta tag.
- Google Analytics, sitemap submission inside GSC (can be done after verification succeeds).
