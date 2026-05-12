# Sapience HCM — Deployment Guide

This project builds for **Node.js** and runs on any private VPS, dedicated server, or shared host. There is no Cloudflare Workers / serverless coupling. Section 5 covers production performance tuning that applies to every path.

> **TL;DR**
> - **You have a VPS / dedicated server (Linux or Windows)** → Node SSR + Nginx/IIS (Section 3). *Recommended.*
> - **You only have GoDaddy shared / cPanel hosting (no Node)** → Static export to `public_html` (Section 4).

---

## 1. Pick your target

| Target | Cost | SSR | Free TLS | Custom domain | Complexity | Best for |
|---|---|---|---|---|---|---|
| **Any VPS / Dedicated (Linux or Windows)** | Paid VPS plan | ✅ Node SSR | ✅ Let's Encrypt / win-acme | ✅ via DNS | ⭐⭐ Medium | Production deployments |
| **GoDaddy shared cPanel** | Cheapest GoDaddy plan | ❌ Static export only | ✅ via cPanel AutoSSL | ✅ via cPanel | ⭐⭐ Medium | When a VPS is not an option |

**Project facts:** TanStack Start v1 (React 19 + Vite 7 + Tailwind v4). No backend, no database, no environment variables required. `vite.config.ts` is configured with `cloudflare: false`, so `npm run build` produces a Node SSR bundle at `.output/server/index.mjs`.

---

## 2. Common prerequisites

You need **Node.js 22** and **Git** on the build/host machine.

### Linux — Ubuntu / Debian
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git
node -v && npm -v && git --version
```

### Linux — RHEL / CentOS / Amazon Linux
```bash
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo yum install -y nodejs git
node -v && npm -v && git --version
```

### Windows Server / Windows 10/11
1. Install **Node.js 22 LTS Windows MSI** from <https://nodejs.org/en/download> (defaults are fine).
2. Install **Git for Windows** from <https://git-scm.com/download/win> (defaults are fine).
3. Open a new PowerShell:
   ```powershell
   node -v ; npm -v ; git --version
   ```

### Clone the repo
```bash
# Linux
sudo mkdir -p /var/www && sudo chown $USER:$USER /var/www
cd /var/www && git clone <REPO_URL> sapience-hcm && cd sapience-hcm
```
```powershell
# Windows
mkdir C:\apps ; cd C:\apps
git clone <REPO_URL> sapience-hcm ; cd sapience-hcm
```

---

## 3. Path A — VPS / Dedicated Server (Node SSR — recommended)

### 3.1 Install and build
```bash
# Linux
npm ci
npm run build
node .output/server/index.mjs    # smoke test → http://<server-ip>:3000
```
```powershell
# Windows
npm ci
npm run build
node .output/server/index.mjs
```
Default port is **3000**. Override with `PORT=8080 node .output/server/index.mjs` (Linux) or `$env:PORT=8080; node .output/server/index.mjs` (PowerShell).

### 3.2a Run permanently — Linux with PM2 (recommended)
```bash
sudo npm install -g pm2
pm2 start .output/server/index.mjs --name sapience-hcm
pm2 save
pm2 startup           # follow the printed sudo command to enable on boot
pm2 status
pm2 logs sapience-hcm
pm2 restart sapience-hcm
```

### 3.2b Run permanently — Linux with systemd (alternative)
Create `/etc/systemd/system/sapience-hcm.service`:
```ini
[Unit]
Description=Sapience HCM (TanStack Start SSR)
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/www/sapience-hcm
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=on-failure
User=www-data

[Install]
WantedBy=multi-user.target
```
```bash
sudo systemctl daemon-reload
sudo systemctl enable --now sapience-hcm
sudo systemctl status sapience-hcm
```

### 3.2c Run permanently — Windows with NSSM
1. Download NSSM from <https://nssm.cc/download>, unzip to `C:\nssm`.
2. **Administrator PowerShell:**
   ```powershell
   cd C:\nssm\win64
   .\nssm.exe install SapienceHCM
   ```
3. In the dialog:
   - **Path:** `C:\Program Files\nodejs\node.exe`
   - **Startup directory:** `C:\apps\sapience-hcm`
   - **Arguments:** `.output\server\index.mjs`
   - **Environment** tab → add `NODE_ENV=production` and `PORT=3000`
   - Click **Install service**.
4. Start it:
   ```powershell
   nssm start SapienceHCM
   ```
Manage via `services.msc` or `nssm restart SapienceHCM`.

### 3.3a Reverse proxy — Linux Nginx + free TLS
```bash
sudo apt-get install -y nginx
```
Create `/etc/nginx/sites-available/sapience-hcm`:
```nginx
server {
    listen 80;
    server_name sapience.example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade           $http_upgrade;
        proxy_set_header Connection        "upgrade";
    }
}
```
```bash
sudo ln -s /etc/nginx/sites-available/sapience-hcm /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free TLS via Let's Encrypt
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d sapience.example.com
```
Certbot auto-renews via a systemd timer.

### 3.3b Reverse proxy — Windows IIS + win-acme
1. **Server Manager → Add Roles and Features → Web Server (IIS)**.
2. Install [URL Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite) and [Application Request Routing (ARR)](https://www.iis.net/downloads/microsoft/application-request-routing).
3. IIS Manager → server node → **Application Request Routing Cache** → *Server Proxy Settings* → tick **Enable proxy** → Apply.
4. Create a website in IIS (folder `C:\inetpub\sapience`) bound to your domain on 80/443.
5. In that site → **URL Rewrite** → *Add Rule(s) → Reverse Proxy* → enter `localhost:3000`. Confirm.
6. For HTTPS install [win-acme](https://www.win-acme.com/) and run it once — it requests and auto-renews a Let's Encrypt cert.

### 3.4 DNS — point your domain at the VPS
At your registrar (GoDaddy, Namecheap, Cloudflare Registrar, etc.) → DNS records:
- Edit the **A** record with name `@` → value = your VPS IPv4 → TTL 1 hour.
- Add an **A** record with name `www` → same IPv4.
- Wait 5–60 minutes for propagation.

### 3.5 Updating the site
```bash
cd /var/www/sapience-hcm
git pull
npm ci && npm run build
pm2 restart sapience-hcm     # or: sudo systemctl restart sapience-hcm
```
```powershell
cd C:\apps\sapience-hcm
git pull
npm ci ; npm run build
nssm restart SapienceHCM
```

---

## 4. Path B — Shared cPanel hosting (static export fallback)

> ⚠️ **Shared cPanel cannot run Node.js SSR.** Export the app as static HTML instead. This site has no dynamic data, so the result is functionally identical for visitors. Caveat: every new route you add must be listed in the prerender config and re-uploaded.

### 4.1 Edit `vite.config.ts`
```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,           // follow internal <Link>s automatically
      pages: [
        { path: "/" },
        { path: "/pricing" },
        { path: "/customers" },
        { path: "/sign-in" },
        { path: "/getting-started" },
        { path: "/request-demo" },
        { path: "/request-quote" },
        { path: "/roi-calculator" },
        { path: "/training-program" },
        { path: "/webinars" },
        { path: "/terms-of-service" },
        { path: "/privacy-policy" },
        { path: "/cookie-policy" },
        { path: "/anti-spam-policy" },
        { path: "/features" },
        { path: "/features/core-hr" },
        { path: "/features/payroll" },
        { path: "/features/performance" },
        { path: "/features/engagement" },
        { path: "/features/hiring-onboarding" },
        { path: "/features/hr-automation" },
        { path: "/features/hr-chatbot" },
        { path: "/features/mobile-app" },
        { path: "/features/integrations" },
        { path: "/features/erp-integrations" },
        { path: "/features/biometric-integrations" },
        { path: "/features/organization-management" },
        { path: "/features/retirement-separation" },
        { path: "/features/travel-expense" },
        { path: "/features/custom-services" },
        { path: "/solutions/small-business" },
        { path: "/solutions/medium-business" },
        { path: "/solutions/enterprise" },
        { path: "/solutions/healthcare" },
        { path: "/solutions/finance" },
        { path: "/solutions/education" },
        { path: "/solutions/it" },
        { path: "/solutions/media" },
      ],
    },
  },
});
```

### 4.2 Build
```bash
npm ci
npm run build
```
The static site lives at `.output/public/`. Zip its **contents** (not the folder itself):
```bash
cd .output/public && zip -r ../../sapience-hcm-site.zip . && cd ../..
```

### 4.3 Upload via cPanel
1. cPanel → **File Manager** → navigate to `public_html/`.
2. Delete or rename the existing `index.html` if any.
3. **Upload** `sapience-hcm-site.zip` → right-click → **Extract**.

### 4.4 Add `.htaccess` for SPA fallback + caching
Create `public_html/.htaccess`:
```apache
# Serve real files; fall back to index.html for client-side routes
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Long-cache hashed assets (Vite content-hashes filenames)
<FilesMatch "\.(js|css|woff2|woff|ttf|otf|png|jpg|jpeg|gif|svg|webp|avif|ico)$">
  Header set Cache-Control "public, max-age=31536000, immutable"
</FilesMatch>

# HTML must revalidate so updates roll out instantly
<FilesMatch "\.html$">
  Header set Cache-Control "no-cache"
</FilesMatch>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>

# Basic security headers
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

### 4.5 TLS via cPanel AutoSSL
cPanel → **SSL/TLS Status** → tick your domain → **Run AutoSSL**. Free Let's Encrypt cert installed in ~1 minute.

### 4.6 Updating the site
Repeat 4.2 → 4.3 (delete old files in `public_html` first, keep `.htaccess`).

---

## 5. Performance optimization (applies to all paths)

Work through this section **after** the site is live. Order is biggest-impact first.

### 5.1 Build correctly
- Always use `npm run build` — never ship `npm run build:dev` (it disables minification).
- Vite handles minification, tree-shaking, and content-hashing of asset filenames automatically. `package.json` already declares `"sideEffects": false` — leave it.

### 5.2 Compression (single biggest win — 60–80% smaller responses)

**Nginx (Linux VPS)** — append to `/etc/nginx/nginx.conf` inside the `http {}` block:
```nginx
gzip on;
gzip_vary on;
gzip_comp_level 6;
gzip_min_length 1024;
gzip_proxied any;
gzip_types
  text/plain text/css text/xml application/xml
  application/javascript application/json image/svg+xml
  font/woff font/woff2;
```
Reload: `sudo nginx -t && sudo systemctl reload nginx`. For Brotli (better than gzip), install the module:
```bash
sudo apt-get install -y nginx-module-brotli
# add to nginx.conf:  load_module modules/ngx_http_brotli_filter_module.so;
# brotli on; brotli_comp_level 5; brotli_types <same as gzip_types>;
```

**IIS (Windows VPS)** — `web.config` in the site root:
```xml
<configuration>
  <system.webServer>
    <urlCompression doStaticCompression="true" doDynamicCompression="true" />
    <httpCompression>
      <dynamicTypes>
        <add mimeType="application/json" enabled="true"/>
        <add mimeType="application/javascript" enabled="true"/>
        <add mimeType="text/*" enabled="true"/>
      </dynamicTypes>
    </httpCompression>
  </system.webServer>
</configuration>
```

**cPanel shared** — cPanel → **Optimize Website** → "Compress all content" → Update Settings. (The `mod_deflate` block in 4.4 also handles this.)

### 5.3 Long-term caching for hashed assets

Vite stamps filenames with content hashes (e.g. `assets/index-Df8h2K.js`) so they're safe to cache forever; the HTML that references them must NOT be cached.

**Nginx** — append a server block:
```nginx
location ~* \.(js|css|woff2|woff|ttf|png|jpg|jpeg|gif|svg|webp|avif|ico)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
    access_log off;
}
location ~* \.html$ {
    add_header Cache-Control "no-cache";
}
```

**IIS** — `web.config`:
```xml
<staticContent>
  <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="365.00:00:00" />
</staticContent>
```
Then add a separate `<location path="index.html">` block forcing `no-cache` on HTML.

**cPanel** — already covered by the `.htaccess` snippet in 4.4.

### 5.4 HTTP/2 (and HTTP/3 where available)

- **Nginx** — change the TLS listener: `listen 443 ssl http2;` (and `listen 443 quic reuseport;` for HTTP/3 on Nginx ≥ 1.25). Reload.
- **IIS** — HTTP/2 is on by default for HTTPS bindings on IIS 10+ (Windows Server 2016+).

### 5.5 Image optimization

External images (the hero and dashboard screenshots from `marketing.zillancer.com` / `gdm-catalog-fmapi-prod.imgix.net`) are already served via CDN — no action needed.

**Self-host the partner-logo ticker** for better caching, no third-party DNS hops, and resilience if the source site moves the files:

```bash
mkdir -p public/partners
for i in $(seq 1 18); do
  curl -sSL -o public/partners/partner-${i}.png \
    https://www.sapiencetechnology.com/assets/img/partner-img/partner-${i}.png
  curl -sSL -o public/partners/partner-hover-${i}.png \
    https://www.sapiencetechnology.com/assets/img/partner-img/partner-hover${i}.png
done
```
Then in `src/components/shared/TrustBand.tsx`, change the URL builders from `https://www.sapiencetechnology.com/...` to `/partners/partner-${i}.png` and `/partners/partner-hover-${i}.png`. Rebuild and redeploy.

For other PNGs in `src/assets/`, convert to **WebP** for ~30% smaller files:
```bash
# Install once: sudo apt-get install -y webp
cwebp -q 82 src/assets/some-image.png -o src/assets/some-image.webp
```

### 5.6 Preconnect to third-party hosts

If you keep external images, add to `src/routes/__root.tsx` `head()`:
```ts
links: [
  { rel: "preconnect", href: "https://marketing.zillancer.com" },
  { rel: "preconnect", href: "https://gdm-catalog-fmapi-prod.imgix.net" },
  // omit if logos are now self-hosted:
  { rel: "preconnect", href: "https://www.sapiencetechnology.com" },
],
```

### 5.7 Reverse-proxy tuning (VPS only)

**Nginx** — inside the `http {}` block:
```nginx
keepalive_timeout 65;
keepalive_requests 1000;
client_body_buffer_size 16k;
proxy_read_timeout 60s;
proxy_buffering on;
proxy_buffer_size 8k;
proxy_buffers 8 16k;

upstream sapience_node {
    server 127.0.0.1:3000;
    keepalive 32;
}
```
Then change the location block: `proxy_pass http://sapience_node;`.

### 5.8 Security headers
```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header X-Frame-Options "SAMEORIGIN" always;
```
IIS equivalent goes in `web.config` under `<httpProtocol><customHeaders>`.

### 5.9 Optional: free CDN in front of the VPS

You can put any CDN (Cloudflare free plan, BunnyCDN, Fastly, etc.) in front of the VPS for edge caching, DDoS protection, and HTTP/3 at little or no cost. Configure it as a reverse proxy to your domain and set the origin to your VPS IP. Use **Full (strict)** TLS so the CDN validates your real cert.

### 5.10 Verify

From any machine:
```bash
curl -sI https://yourdomain.com | grep -iE "content-encoding|cache-control|strict-transport|x-content-type"
```
Expect to see `content-encoding: br` (or `gzip`), long `cache-control` on hashed assets, and your security headers.

Then run a **Lighthouse** audit (Chrome DevTools → **Lighthouse** tab → "Analyze page load"). Targets:
- **Performance** ≥ 90
- **LCP** < 2.5 s
- **CLS** < 0.1
- **TBT** < 200 ms

If you're below target, the order to investigate is: compression → image weights → caching headers → render-blocking third-party scripts.

---

## 6. Health check & troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| `EADDRINUSE :::3000` | Another process on port 3000 | `lsof -i :3000` (Linux) / `netstat -ano \| findstr :3000` (Windows); change `PORT` |
| 502 Bad Gateway from Nginx/IIS | Node process not running | `pm2 status` / `systemctl status sapience-hcm` / check NSSM service |
| Deep-link refresh returns 404 | Reverse proxy not forwarding all paths (VPS), or `.htaccess` SPA fallback missing (cPanel) | See 3.3 / 4.4 |
| `node: command not found` | Node not on PATH | Reopen shell or reinstall Node 22 |
| `npm ci` fails with `EACCES` | Repo owned by root | `sudo chown -R $USER:$USER /var/www/sapience-hcm` |
| Build runs out of memory | Tiny VPS (<1 GB RAM) | Add 2 GB swap: `sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile` |
| Partner logos don't load | Outbound HTTPS blocked, or source site moved the images | Self-host them per 5.5 |
| cPanel site 404s on every page | Files extracted into a subfolder of `public_html` | Move them up so `index.html` sits directly in `public_html/` |
| `.output/server/index.mjs` not generated | Old `cloudflare: true` config still in `vite.config.ts` | Confirm it reads `defineConfig({ cloudflare: false })` and rebuild |

Quick health check (any path):
```bash
curl -I https://yourdomain.com   # expect HTTP/2 200
```

---

## 7. Optional hardening (VPS path)

- **Firewall (Linux):** `sudo ufw allow 22,80,443/tcp && sudo ufw enable`
- **Firewall (Windows):** open 80/443 in *Windows Defender Firewall → Inbound Rules*
- **Run Node as a non-root user** (the systemd example uses `www-data`)
- **Log rotation:** `pm2 install pm2-logrotate` (PM2) or rely on the systemd journal
- **Uptime monitoring:** point UptimeRobot/Pingdom at your domain

---

## 8. Cheat sheets

### VPS — Linux
```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx certbot python3-certbot-nginx
git clone <REPO> /var/www/sapience-hcm && cd /var/www/sapience-hcm
npm ci && npm run build
sudo npm install -g pm2
pm2 start .output/server/index.mjs --name sapience-hcm && pm2 save && pm2 startup
# create /etc/nginx/sites-available/sapience-hcm (see 3.3a) → enable → reload
sudo certbot --nginx -d sapience.example.com
```

### VPS — Windows
```powershell
# Install Node 22 MSI + Git for Windows manually
git clone <REPO> C:\apps\sapience-hcm ; cd C:\apps\sapience-hcm
npm ci ; npm run build
# install NSSM and register the service (see 3.2c)
# install IIS + URL Rewrite + ARR, configure reverse proxy (see 3.3b)
# run win-acme for TLS
```

### Shared cPanel
```bash
# Locally:
# add the prerender block to vite.config.ts (see 4.1)
npm ci && npm run build
cd .output/public && zip -r ../../sapience-hcm-site.zip . && cd ../..
# In cPanel → File Manager → upload zip into public_html → extract → add .htaccess (see 4.4)
# cPanel → SSL/TLS Status → Run AutoSSL
```

You're live. 🎉
