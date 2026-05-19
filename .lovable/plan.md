## What’s actually wrong
The app is currently failing before it hydrates in Preview/New Tab because the TanStack Start client bootstrap module is not loading:

`Failed to fetch dynamically imported module: /@id/virtual:tanstack-start-client-entry`

That means the current problem is not the homepage render logic. The earlier fixes targeted published SSR/worker bundling, which is why they did not resolve this preview failure.

## Files involved
- `vite.config.ts`
- `package.json`
- lockfiles (`bun.lock`, `package-lock.json`)
- missing local client bootstrap file: `src/client.tsx`
- existing server wrapper: `src/server.ts`

## Plan
1. Add an explicit local TanStack client entry in `src/client.tsx` so the app no longer depends on the problematic virtual client entry resolution path.
2. Align TanStack package versions in `package.json` so `@tanstack/react-start`, `@tanstack/react-router`, and related runtime/plugin pieces are on a compatible patch set instead of the current mixed versions.
3. Keep the existing SSR/server wrapper in place, but stop treating it as the root cause for this preview issue.
4. Validate the fix against the actual failing symptom by checking that Preview/New Tab loads without the dynamic import error.

## Technical details
- The installed TanStack packages are currently mixed across multiple patch lines, and the project has no `src/client.tsx` override.
- The web evidence for this exact error points to TanStack Start virtual client entry resolution bugs/regressions, especially in proxied/preview environments.
- A local `src/client.tsx` is the most targeted workaround because it bypasses the failing `virtual:tanstack-start-client-entry` resolution.
- After that, package alignment reduces the chance that plugin/runtime mismatches keep reproducing the same bootstrap problem.

## Expected outcome
- Preview in new tab opens the real app instead of the generic error page.
- We stop debugging the wrong layer and address the actual bootstrap failure first.