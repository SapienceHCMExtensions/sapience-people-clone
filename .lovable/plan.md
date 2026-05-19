## What I found
The external preview URLs are not reaching the app from my side right now — they redirect to the Lovable login gate instead of loading your site. So I can’t inspect the exact failing new-tab state yet from the browser tools.

## What this means
This is no longer pointing to the same in-editor bootstrap problem I fixed earlier. The current blocker is that the new-tab preview flow I need to inspect is behind authentication.

## Plan
1. You log in in the preview/new-tab flow first.
2. I re-open the authenticated preview and inspect the exact failing state.
3. I check the authenticated page’s network requests, console/runtime errors, and route behavior.
4. Once I can reproduce the real post-login failure, I’ll identify whether it’s:
   - a remaining client bootstrap issue,
   - a route/render error after auth,
   - or a preview/share/auth bridge problem.
5. Then I’ll apply the targeted fix instead of guessing again.

## Needed from you
Open the preview/new-tab while logged in, then send me one short message like: "I’m logged in now".

## Technical note
From my side, both of these currently redirect to the login gate instead of the app:
- `https://id-preview--c1b4dd9c-4e49-4b86-98a3-179c7e2f3ac9.lovable.app`
- `https://preview--sapiencehcm.lovable.app`

So the next useful step is authenticated reproduction, not another blind code change.