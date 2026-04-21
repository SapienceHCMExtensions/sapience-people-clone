

# Fix Cloudflare Deploy: Remove `public/_redirects`

## Root Cause

Build and asset upload succeed. Deploy fails at the Cloudflare API step:

```
Invalid _redirects configuration:
Line 1: Infinite loop detected in this rule. This would cause a redirect
to strip `.html` or `/index` and end up triggering this rule again. [code: 10021]
```

The file `public/_redirects` contains:
```
/* /index.html 200
```

Two problems:
1. Cloudflare Workers Assets parses `_redirects` and rejects this rule as a self-referential loop.
2. The rule isn't needed anyway — this app is **server-side rendered** by TanStack Start on Workers, so every route is handled by the SSR worker entry. There is no SPA fallback to configure; `_redirects` is a Netlify convention that doesn't apply here.

## Fix

Delete `public/_redirects`. That's the entire change.

## Files

| Action | File |
|--------|------|
| **Delete** | `public/_redirects` |

## After the Fix

1. Push the change.
2. Cloudflare retriggers the build.
3. Build, asset upload, and `wrangler deploy` all complete.
4. Worker goes live and serves SSR for all routes (including deep links and refreshes — handled by TanStack Router server-side, no fallback file needed).

## Optional Follow-up (Not Blocking Deploy)

The build log also contained this warning, which you can ignore for now but may want to address later:

```
Failed to match Worker name. Your config file is using "tanstack-start-app",
but the CI system expected "sapiencehcm". Overriding using the CI provided name.
```

To silence it, edit `wrangler.jsonc` and change `"name": "tanstack-start-app"` to `"name": "sapiencehcm"` so the local config matches the Cloudflare project name. Not required for the deploy to succeed.

