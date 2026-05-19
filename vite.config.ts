// Build target switch.
// Default: Cloudflare Worker bundle (works on Lovable preview + published).
// For VPS deploy, run: LOVABLE_BUILD=vps npm run build
// → emits Node SSR bundle at .output/server/index.mjs which can be run with
// `node` (or PM2 / systemd) behind any reverse proxy on a private VPS.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: process.env.LOVABLE_BUILD !== "vps",
});
