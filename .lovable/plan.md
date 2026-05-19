## Problem

`vite.config.ts` currently forces `cloudflare: false`, producing a Node SSR bundle. Lovable's preview and published environments run on Cloudflare Workers, which can't load the Node bundle — every request returns 502 "Internal Server Error".

## Fix

Make the build target switchable via env var. Default = Lovable-compatible (Worker). VPS opts in.

### 1. `vite.config.ts`

```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Default: Cloudflare Worker bundle (Lovable preview + published).
// For VPS deploy, run: LOVABLE_BUILD=vps npm run build
// → emits Node SSR bundle at .output/server/index.mjs
export default defineConfig({
  cloudflare: process.env.LOVABLE_BUILD !== "vps",
});
```

### 2. `DEPLOYMENT.md`

Update Section 3.1 build commands from `npm run build` to `LOVABLE_BUILD=vps npm run build` (Linux) and `$env:LOVABLE_BUILD="vps"; npm run build` (PowerShell). Same change in the Section 3.5 update flow and the Section 4.2 static-export flow. Add a one-line note at the top of Section 3 explaining the env var.

## Result

- Lovable preview + `sapiencehcm.lovable.app` → recover (502 → 200).
- VPS deploys → unchanged steps except the build command now has `LOVABLE_BUILD=vps` prefix.
- No source code changes; only build config + docs.
