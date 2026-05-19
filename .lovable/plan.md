## Goal
Restore the standalone preview (`preview--sapiencehcm.lovable.app`) so it loads the app instead of returning 500, while keeping the embedded right-side preview working.

## What I found
- The `postMessage` console warning from `lovable.js` is not the blocker.
- The real failure is server-side: preview requests to `/` and `/favicon.ico` return 500.
- Preview worker logs show repeated module-resolution crashes such as:
  - `Error: No such module "assets/h3-v2"`
  - `Error: No such module "assets/react"`
- Current `src/server.ts` uses a lazy `import("@tanstack/react-start/server-entry")`, which is the likely trigger for Worker asset code-splitting on the standalone preview host.

## Plan
1. Update `src/server.ts` to use a static top-level import of `@tanstack/react-start/server-entry` instead of the lazy `await import()` path.
2. Keep the existing error fallback behavior (`renderErrorPage()` and response normalization) as intact as possible, only removing the part that depends on lazy-loading.
3. Verify the custom TanStack server entry wiring remains correct in `vite.config.ts` and does not need extra bundler overrides.
4. Validate by checking:
   - standalone preview host `/` returns 200
   - `/favicon.ico` no longer 500s
   - preview logs stop showing `No such module` for `assets/h3-v2` / `assets/react`
   - right-side preview still renders normally

## Technical details
- File to change: `src/server.ts`
- No homepage/design changes.
- No `vite.config.ts` experimentation unless the static import alone fails.
- If the standalone preview still fails after the import change, the next fallback will be to simplify the wrapper further so it directly exports `handler.fetch` plus minimal error logging, but only if needed after the first verification.