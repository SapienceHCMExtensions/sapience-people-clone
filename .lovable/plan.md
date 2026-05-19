## What is actually broken
The failure is happening before your app renders: the browser cannot load TanStack Start’s client bootstrap module (`/@id/virtual:tanstack-start-client-entry`). That means this is a client-entry/dependency-resolution problem, not an SSR page-render problem.

## Why the previous fixes didn’t solve it
The earlier changes targeted server bundling and SSR error handling. Those can help published/server crashes, but they do not fix a client bootstrap 404/fetch failure. The app never gets far enough to hydrate.

## Plan
1. Normalize the package/install state
   - Use a single package manager source of truth.
   - Remove the stale second lockfile.
   - Pin the TanStack packages to one compatible set instead of loose mixed ranges.
   - Regenerate the lockfile so preview installs the exact same versions every time.

2. Restore a canonical TanStack client bootstrap
   - Replace the current custom `src/client.tsx` with the documented TanStack Start client entry shape.
   - Keep only the minimum Vite client-entry override needed for this setup.
   - Avoid relying on any non-canonical bootstrap behavior that can break preview/new-tab loading.

3. Clean up the routing/bootstrap surface
   - Treat `src/routeTree.gen.ts` as generated and stop relying on manual edits there.
   - Verify the required TanStack shell files are intact (`src/router.tsx`, `src/routes/__root.tsx`, `src/routes/index.tsx`).
   - Keep the server wrapper only for server-side failures, not as the fix for this bootstrap issue.

4. Validate against the real failure
   - Confirm preview/new tab no longer requests a broken virtual client entry path.
   - Verify the page loads normally instead of falling into the generic error screen.
   - If the same bootstrap error remains, add targeted logging around the resolved client entry path and plugin output to isolate the remaining mismatch.

## Technical details
Files I would update:
- `package.json`
- `bun.lock`
- `package-lock.json` (remove as conflicting source of truth)
- `src/client.tsx`
- `vite.config.ts`
- `src/routeTree.gen.ts` only indirectly via regeneration, not manual editing

## Most likely root cause
Right now the project has:
- two lockfiles (`bun.lock` and `package-lock.json`)
- loose TanStack version ranges in `package.json`
- installed TanStack packages on a mixed resolved set

That combination is the strongest explanation for why the preview keeps trying to boot through a broken virtual client entry even after code-level fixes.