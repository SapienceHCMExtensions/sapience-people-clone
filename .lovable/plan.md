## Goal

Create a single comprehensive `DEPLOYMENT.md` at the project root covering **two deployment targets** plus a dedicated **performance-optimization** section that applies to both.

## Targets covered

1. **Cloudflare Workers** (default Lovable build target) — managed edge, cheapest path.
2. **GoDaddy hosting**, in two flavors:
   - **GoDaddy VPS / Dedicated Server (Linux or Windows)** → Node SSR build + PM2/NSSM + Nginx/IIS reverse proxy. *(Recommended for GoDaddy.)*
   - **GoDaddy cPanel shared hosting** → static export + `.htaccess`, with the trade-offs called out up front. (Shared cPanel can't run Node SSR.)

A decision matrix at the top of the guide tells the operator which path to follow before they touch anything.

## Project facts that drive the guide

- TanStack Start v1 SSR (React 19, Vite 7, Tailwind v4), no backend, no env vars.
- Default `npm run build` targets Cloudflare Workers via the Lovable preset; `defineConfig({ cloudflare: false })` switches it to a Node SSR bundle at `.output/server/index.mjs`.
- Shared cPanel = no Node, so we'd prerender to static HTML and add an SPA `.htaccess` fallback.
- TrustBand pulls partner logos from `sapiencetechnology.com` at runtime — relevant for cache and CSP headers in the perf section.

## Deliverable: `DEPLOYMENT.md` at the repo root

### 1. Pick your target — decision matrix
Cost, SSR support, TLS, complexity, recommendation. Routes the reader to Section 3, 4, or 5.

### 2. Common prerequisites
Node.js 22 + Git install on Ubuntu/Debian, RHEL/Amazon Linux, and Windows. Repo clone steps for each OS.

### 3. Path A — Cloudflare Workers
Wrangler install + login → `npm run build` → `npx wrangler deploy`. Mapping a GoDaddy-registered domain to Cloudflare (nameserver swap + Worker route). Update workflow.

### 4. Path B1 — GoDaddy VPS / Dedicated (Node SSR, recommended)
- One-time `vite.config.ts` change: `cloudflare: false`.
- `npm ci && npm run build` → `node .output/server/index.mjs`.
- **Linux:** PM2 (recommended) + systemd alternative; Nginx reverse proxy; Certbot for free TLS.
- **Windows:** NSSM to register Node as a Windows Service; IIS as reverse proxy with URL Rewrite + ARR; win-acme for TLS.
- DNS: GoDaddy A record → VPS IP.
- Update workflow.

### 5. Path B2 — GoDaddy cPanel shared hosting (static export fallback)
- Honest warning that shared = no SSR.
- Add a prerender list to `vite.config.ts` covering every TanStack route in `src/routes/**` (provide the exact snippet).
- `npm run build` → upload `.output/public/**` into `public_html` via cPanel File Manager.
- Provide the exact `.htaccess` SPA fallback snippet so deep-link refreshes don't 404.
- Caveats: every new route requires re-uploading the build.

### 6. **NEW — Performance optimization for production** (applies to all paths)
A self-contained section the operator works through after the site is live. Covers:

- **Pre-build optimizations**
  - Always run `npm run build` (production), never ship `npm run build:dev`.
  - Verify minification + tree-shaking are on (Vite default).
  - Note that `sideEffects: false` is already set in `package.json` for better tree-shaking — leave it that way.
- **Compression** (biggest single win)
  - **Cloudflare:** automatic Brotli/gzip at the edge — nothing to configure.
  - **Nginx (Linux VPS):** drop-in config block enabling `gzip`, `gzip_types`, `gzip_comp_level 6`, plus optional `brotli` (with the brotli module install one-liner).
  - **IIS (Windows VPS):** enable static + dynamic compression via Server Manager / `<httpCompression>` web.config snippet.
  - **cPanel shared:** enable "Optimize Website" → compress all content (path provided).
- **Long-term caching for hashed assets**
  - Vite already content-hashes JS/CSS/image filenames in `.output/public/_build/` — these can safely be cached forever.
  - Provide concrete `Cache-Control: public, max-age=31536000, immutable` rules for:
    - Nginx (`location ~* \.(js|css|woff2|png|jpg|svg|webp|avif)$`)
    - IIS (`<staticContent><clientCache>` web.config snippet)
    - cPanel (`.htaccess` `mod_expires` block)
  - HTML files served with `Cache-Control: no-cache` so updates roll out instantly.
- **HTTP/2 / HTTP/3**
  - Enabled automatically on Cloudflare.
  - Nginx: `listen 443 ssl http2;` (and `http3` if available).
  - IIS: HTTP/2 is on by default with TLS in IIS 10+.
- **Image optimization**
  - The hero/dashboard screenshots are loaded from external CDNs (`marketing.zillancer.com`, `gdm-catalog-fmapi-prod.imgix.net`) — note that those already serve through CDNs.
  - Local images in `src/assets/` and `public/`: convert PNGs to WebP/AVIF where possible (one-line `cwebp` / `avifenc` commands).
  - Recommend self-hosting the 18 sapiencetechnology.com partner logos under `public/partners/` to (a) avoid third-party DNS hops on every page load, (b) allow long-term caching, and (c) survive if the source site ever moves them. Provide a one-line bash loop to download them, plus the one-line code change in `TrustBand.tsx`.
- **Preconnect / DNS-prefetch**
  - Snippet for `src/routes/__root.tsx` `<head>` to add `<link rel="preconnect">` for the external image hosts (skip this if logos are self-hosted).
- **Font loading**
  - Inter is the brand font — recommend `font-display: swap` if a `@font-face` is added later; today the project uses system Inter so no action needed (called out so the operator knows what to do if they add a webfont).
- **Reverse-proxy timeouts and buffering** (VPS only)
  - Nginx `proxy_read_timeout`, `proxy_buffering on`, `keepalive` upstream block.
  - IIS request buffering / connection limits.
- **Security headers that also help perf** (HSTS, `X-Content-Type-Options`, `Referrer-Policy: strict-origin-when-cross-origin`) — concrete snippets per server.
- **CDN in front of a VPS** (optional)
  - Putting Cloudflare's free plan in front of a GoDaddy VPS gives edge caching, TLS, and DDoS protection at no cost. Step-by-step (point GoDaddy nameservers to Cloudflare, set SSL mode to "Full (strict)", enable Auto Minify + Brotli).
- **Verification**
  - How to run a quick Lighthouse audit from Chrome DevTools and what targets to aim for (LCP < 2.5s, CLS < 0.1, TBT < 200ms).
  - `curl -I` checks for `content-encoding: br|gzip` and `cache-control` headers.

### 7. Health check & troubleshooting
Combined symptoms ↔ fixes table covering all three paths (port in use, 502, deep-link 404, npm permission errors, Wrangler auth failure, cPanel "404 on refresh", missing partner-logo images, OOM during build on a tiny VPS).

### 8. Optional hardening
Firewall, non-root Node user, log rotation, uptime monitoring (VPS path).

### 9. Cheat sheets
End-of-doc condensed quickstart blocks, one per target.

## Out of scope
No code changes to the app. The two config tweaks (`cloudflare: false`, prerender list) and the optional perf changes (self-host logos, preconnect) are documented inside the guide rather than committed, so the repo stays neutral and the Lovable preview keeps working unchanged.
