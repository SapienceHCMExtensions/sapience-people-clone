## Status
- Fixed: `h3-v2` is now bundled into the worker (no more 502).
- New error: `No such module "assets/rou3"` — `rou3` is a transitive dep of `h3-v2` and the bundler still leaves it as a runtime import. The custom error page in `src/server.ts` is correctly catching the SSR crash, which is why you see the branded "Something went wrong" page instead of a raw 502.

## Fix
Add the `h3-v2` transitive dependencies to the SSR `noExternal` list in `vite.config.ts` so they get inlined into the worker bundle:
- `rou3`
- `srvx`
- `crossws` (optional peer dep of h3-v2)
- `cookie-es`, `fetchdts` (other h3-v2 deps)

Then republish and re-check the new-tab URL and worker logs.

## Validation
- `GET /` returns 200 with real HTML
- Worker logs no longer show `No such module "..."`
- New-tab preview renders the actual site instead of the fallback error page