## What happened

My previous `vite.config.ts` change set `noExternal: true` on both `resolve` and `ssr`. That forces Vite's dev SSR runner to inline every dependency through its ESM evaluator — including React, which ships as CommonJS. The result is the dev SSR crash now showing in the right-side preview:

```
ReferenceError: module is not defined
  at eval (/dev-server/node_modules/react/index.js:6:3)
```

So the right-side preview was working before because dev SSR was correctly externalizing `react`. The new-tab/published URL is a separate, pre-existing problem and was not actually fixed by that change — it just appeared to work because the published build hadn't been redeployed yet.

## Plan

1. **Revert `vite.config.ts`** back to the minimal form (no custom `resolve.noExternal` / `ssr.noExternal`), so the dev preview renders again:

   ```ts
   import { defineConfig } from "@lovable.dev/vite-tanstack-config";

   export default defineConfig({
     tanstackStart: {
       server: { entry: "server" },
       client: { entry: "client" },
     },
   });
   ```

2. **Restart the dev server** and confirm the right-side preview is back to working.

3. **Reinvestigate the hosted 500 properly** without touching externalization:
   - Pull published worker logs (`stack_modern--server-function-logs` with `deployment: 'published'`) to get the real stack trace from the live failure — the wrapper in `src/server.ts` + `error-capture.ts` should now be surfacing the underlying error.
   - Review `src/server.ts`, `src/lib/error-capture.ts`, `src/lib/error-page.ts`, `src/routes/__root.tsx`, and `src/lib/seo.ts` for hosted-only failure modes (module-init throws, head/SEO helpers reading missing env, etc.).
   - Fix the actual root cause in app code, not in the bundler config.

4. **Verify by republishing** and loading both `https://sapiencehcm.lovable.app/` and the new-tab preview URL.

## Note

No app feature code changes in this step — only `vite.config.ts` is reverted. The hosted fix comes after we have the real stack trace from worker logs.