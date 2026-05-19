## Goal
Restore `https://sapiencehcm.lovable.app` so it no longer returns **Internal server error** after publish.

## What I found
The live site is failing in production with:
- `Error: No such module "h3-v2" imported from "server.js"`
- Live requests to `/` are returning **502**
- The preview/local app structure looks fine, so this is a **published SSR/server-entry issue**, not a page-content issue

## Plan
1. **Wire a custom server entry through Vite**
   - Update `vite.config.ts` so TanStack Start uses a custom server entry instead of the default published SSR entry.
   - This ensures the published build goes through our own error-handling wrapper.

2. **Add a production-safe server wrapper**
   - Create `src/server.ts`.
   - Lazily import the TanStack server entry.
   - Catch top-level SSR boot/import failures.
   - Detect framework-swallowed 500 JSON responses and convert them into a real HTML fallback while logging the underlying error.

3. **Add minimal error-capture utilities**
   - Create `src/lib/error-capture.ts` to record uncaught runtime errors and unhandled promise rejections.
   - Create `src/lib/error-page.ts` with a dependency-light fallback HTML page so error rendering still works even if app imports fail.

4. **Strengthen route-level SSR error handling**
   - Add a root-route `errorComponent` in `src/routes/__root.tsx` so render/load errors inside the React route tree show a usable fallback instead of collapsing the request.
   - Keep the existing router-level default error boundary in `src/router.tsx` as a backup.

5. **Validate after implementation**
   - Recheck published server logs for the `h3-v2` error.
   - Verify `GET /` returns 200 instead of 502.
   - Open the published URL in the browser to confirm the site renders.

## Technical details
Files to change/add:
- `vite.config.ts`
- `src/server.ts` (new)
- `src/lib/error-capture.ts` (new)
- `src/lib/error-page.ts` (new)
- `src/routes/__root.tsx`

Expected outcome:
- Published builds stop crashing at the server-entry boundary
- Hidden SSR failures become catchable/loggable
- The live site can render again after the next publish

## Note
Once these changes are implemented, the frontend will need to be **published again** for the live domain to recover.