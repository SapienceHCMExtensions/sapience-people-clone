## What is actually happening
This is not a generic auth issue and not the same runtime as the right-side preview.

- **Right-side preview** = sandbox dev server, and it loads correctly.
- **Preview in new tab / public URL** = hosted runtime, and I confirmed it returns **HTTP 500**.
- I also verified the **published URL** (`https://sapiencehcm.lovable.app/`) shows the same error state: “Something went wrong”.

So your point is correct: the mismatch is real, and it means the hosted runtime is failing while the local sandbox runtime is fine.

## Why this can happen
The right preview and the hosted URL do not execute through the exact same serving path. A hosted-only SSR/server-entry issue can break the new-tab/public site even when the in-editor preview still works.

## Plan
1. Inspect the hosted/server entry path end-to-end
   - Re-check `vite.config.ts` and `src/server.ts` to ensure the hosted build is truly using the custom server wrapper.
   - Verify the wrapper catches both module-init failures and h3-swallowed SSR failures.

2. Isolate the hosted-only failure source
   - Audit root-shell/server-rendered files for code that can fail only outside the sandbox runtime.
   - Focus on `src/routes/__root.tsx`, SEO/head generation helpers, and any module-scope imports used during SSR.
   - Remove assumptions based on the working sandbox preview.

3. Tighten the hosted SSR fallback path
   - Ensure the hosted runtime can always return a stable HTML error page instead of opaque failure behavior.
   - Confirm the server entry and error-capture setup are minimal and dependency-safe.

4. Validate against the real failing surface
   - Re-test the **published URL** and the **new-tab preview URL**, not just the right-side preview.
   - Only consider the fix complete when the hosted URL loads successfully.

## Likely fix surface
Most likely files involved:
- `vite.config.ts`
- `src/server.ts`
- `src/lib/error-capture.ts`
- `src/lib/error-page.ts`
- `src/routes/__root.tsx`
- `src/lib/seo.ts`

## Important conclusion
You were right to push back: the issue is logically consistent once we separate the two environments. The app works in the sandbox preview, but the hosted runtime is still broken, and that is the path I would fix next.