## Goal
Get the published Lovable site serving again, then complete Google Search Console verification once the live HTML includes the verification meta tag.

## What’s happening now
- The current codebase already contains the fix for the publish runtime issue.
- The root route already contains the `google-site-verification` meta tag.
- The published URL is still returning **502 / Internal server error**, which means the live deployment is serving an older broken build.
- Your preview URL is login-protected, so Google cannot use that for verification.
- Because Lovable shows **Website up to date**, there is no new frontend diff for the publish flow to send right now.

## Plan
1. Trigger a tiny no-op frontend change so Lovable enables the publish/update flow again.
2. Republish the site so the fixed frontend bundle replaces the broken live deployment.
3. Validate the published URL returns 200 and contains the `google-site-verification` meta tag.
4. Complete the Google Search Console verification against `https://sapiencehcm.lovable.app/`.
5. Confirm sitemap/robots endpoints are reachable on the published site.

## Minimal implementation
- Add one harmless frontend-only change, such as a whitespace-safe comment or tiny non-visible metadata adjustment, without changing design or behavior.
- Publish again from Lovable.
- Recheck:
  - `/`
  - `/robots.txt`
  - `/llms.txt`
  - `/sitemap.xml`
  - presence of `google-site-verification`

## Technical details
- No backend or database changes are needed.
- The purpose of the no-op change is only to re-enable a fresh publish.
- Google Search Console verification must happen on the public Lovable domain, not the private preview URL.

## Success criteria
- `https://sapiencehcm.lovable.app/` loads normally.
- The HTML includes the verification meta tag.
- Search Console can verify ownership.
- SEO helper files on the public site respond successfully.