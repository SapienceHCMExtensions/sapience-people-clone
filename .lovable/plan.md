## Goal
Restore the standalone preview/new-tab host so `/` and `/favicon.ico` stop returning `Internal server error`.

## What I found
- The live standalone preview is still returning `502 Internal server error`.
- Runtime logs still show `Error: No such module "h3-v2" imported from "server.js"`.
- `src/server.ts` already contains the intended wrapper logic.
- `vite.config.ts` already points TanStack Start at `server: { entry: "server" }`.
- There is currently no `wrangler.jsonc` in the repo, so the deployed worker can still boot the default server entry instead of `src/server.ts`.

## Plan
1. Add an explicit worker config file that points the deployment entry to `src/server.ts` and keeps the required Cloudflare compatibility settings.
2. Align `src/server.ts` with TanStack Start’s canonical custom server-entry shape so the wrapper is definitely used as the worker entry while preserving the existing 500 fallback behavior.
3. Re-check the deployed host by requesting `/` and `/favicon.ico`, then inspect runtime logs to confirm the `h3-v2` module error is gone.

## Technical details
- **Files to update:**
  - `wrangler.jsonc` (new)
  - `src/server.ts` (small alignment only if needed)
- **Key config target:** ensure deployment `main` resolves to `src/server.ts`, not the framework default entry.
- **Validation:**
  - `/` returns 200
  - `/favicon.ico` no longer 500/502s
  - logs no longer show `No such module "h3-v2"`

## Out of scope
- No homepage or styling changes
- No unrelated SSR refactors
- No backend feature work