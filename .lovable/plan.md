## The actual cause

The 502 on `/favicon.ico` (and every other URL) is **not a favicon problem**. The preview deployment's server logs show every request failing with:

```
Error: No such module "h3-v2".
  imported from "server.js"
```

The browser only highlights `/favicon.ico` because that's an automatic browser request — `/`, `/about`, anything else returns the same 502. `vite.config.ts` is fine; the previous `LOVABLE_BUILD` switch is not the issue.

### Why `h3-v2` is missing at runtime

`@tanstack/start-server-core` (a transitive dep of `@tanstack/react-start@1.167`) imports from the package name `h3-v2`:

```js
// node_modules/@tanstack/start-server-core/dist/esm/request-response.js
import { H3Event, ... } from "h3-v2";
```

`h3-v2` is an npm alias for `h3@2.x` (still in RC). It exists in our `node_modules/h3-v2/` locally, but it is **not listed in our `package.json` dependencies** — it's only there transitively. When the Cloudflare Worker build runs in the Lovable preview environment, the bundler treats the `h3-v2` import as external (because the project doesn't directly depend on it), so the emitted `server.js` references a module that doesn't exist at runtime → 502 on every route.

This also explains why `npm run dev` works locally (Node resolves transitive deps freely) but the published Worker bundle fails.

## The fix

Add `h3-v2` as a direct dependency in `package.json` so the Worker bundler includes it in the output:

```json
"dependencies": {
  ...
  "h3-v2": "npm:h3@^2.0.1-rc.20",
  ...
}
```

Then reinstall (`bun install` / `npm install`) and let Lovable rebuild the preview. After rebuild, `/`, `/favicon.ico`, and every other route should return 200.

## Why this is the right fix (not the SSR error wrapper)

The TanStack SSR error-handling wrapper (server.ts + error-capture.ts) is designed for the case where the Worker runs but throws an error rendering a route. Here the Worker can't even start — `server.js` fails at module-init because of the unresolved import. No wrapper can intercept that. We need the import to resolve, which means adding the dep.

## Steps

1. Add `"h3-v2": "npm:h3@^2.0.1-rc.20"` to `package.json` dependencies.
2. Run `bun add 'h3-v2@npm:h3@^2.0.1-rc.20'` to update lockfile.
3. Lovable auto-rebuilds the preview; verify `/` returns 200 and the 502 in the console is gone.

No source code, route, or vite config changes needed.
