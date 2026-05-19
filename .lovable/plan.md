## Plan

1. Separate the two failures so we stop iterating blindly.
   - Confirm whether the error you’re seeing is the editor preview, the share preview URL, or the published `sapiencehcm.lovable.app` site.
   - Use server logs and direct URL checks to verify each environment independently.

2. Fix the one code issue currently visible in the app shell.
   - Update the SEO helper so React gets `hrefLang` instead of `hreflang` in the generated alternate links.
   - Recheck the local preview after that change to make sure the preview itself is clean.

3. Force a fresh frontend deployment path only once.
   - Keep a minimal frontend diff in place so Lovable recognizes the app as changed.
   - Then you can use **Publish → Update** to replace the broken live bundle.

4. Validate the recovery end-to-end.
   - Confirm local preview loads normally.
   - Confirm `https://sapiencehcm.lovable.app/` returns 200 instead of 502.
   - Confirm the page source includes the Google Search Console verification meta tag.
   - Confirm key SEO endpoints like `robots.txt` and `sitemap.xml` are reachable.

## What I already confirmed

- **Published site:** still returning **502**, so the broken live deployment has not been replaced yet.
- **Preview auth URL:** responding with a normal redirect, not a server crash.
- **Local sandbox preview:** the dev server is starting successfully; the only code-level issue visible right now is a React warning from the SEO link helper.

## Technical details

- `vite.config.ts` is now correct again, so this does **not** look like a current config regression.
- `src/lib/seo.ts` is generating head link objects with `hreflang`; React expects `hrefLang`.
- That head-prop bug is worth fixing, but it does **not** explain the live 502 by itself; the live site still needs a fresh publish of the corrected frontend bundle.

## Expected outcome

After this pass, we should know whether there is any real preview crash left, and the live site should only need one clean republish rather than more guesswork.