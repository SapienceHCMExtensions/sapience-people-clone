// VPS / Node SSR build target.
// The Lovable preset emits a Cloudflare Worker bundle by default; passing
// `cloudflare: false` switches the build to a Node SSR bundle at
// .output/server/index.mjs which can be run with `node` (or PM2 / systemd)
// behind any reverse proxy (Nginx, IIS, Caddy) on a private VPS.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({ cloudflare: false });
