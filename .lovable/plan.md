## What’s actually broken
The in-editor preview can render, but **Open Preview in new Tab** and the published site both hit the server-rendered worker build. That build is crashing before the app renders with:

- `Error: No such module "h3-v2" imported from "server.js"`
- Confirmed in both published and preview worker logs
- Confirmed via direct request to `/` returning **502 Internal server error**

So this is **not** a page/component bug. It is a **server bundling/deployment issue**.

## Plan
1. **Force-bundle the missing server dependency into the worker build**
   - Update `vite.config.ts` to explicitly prevent `h3-v2` from being externalized during SSR/worker bundling.
   - Keep the existing custom server entry intact.
   - If needed, include the related TanStack server packages in the same no-external rule so the alias resolves inside the final worker bundle.

2. **Verify the worker build path is using the intended server entry**
   - Confirm the custom `src/server.ts` path is still the active server entry for deployed SSR.
   - Ensure no config path is causing the worker bundle to reference runtime modules that should have been inlined.

3. **Validate against the actual failing surface**
   - Re-check the published/new-tab URL directly after the config change.
   - Re-check worker logs to confirm the `h3-v2` import error is gone.
   - Confirm `/` returns a real HTML document instead of 502.

4. **Only if the first fix is insufficient, apply the fallback isolation step**
   - Adjust the worker/server bundling strategy further for TanStack Start on Cloudflare-style runtime resolution, based on the exact emitted logs.
   - Re-validate new-tab and published behavior again.

## Technical details
Likely fix target:
- `vite.config.ts`

Likely change:
- Add explicit SSR no-external bundling rules for `h3-v2` (and possibly adjacent TanStack server packages that pull it in), because the deployed worker runtime cannot resolve that alias as a separate runtime module.

Validation signals:
- `GET /` should stop returning 502
- Browser new-tab should stop showing `Internal server error`
- Server logs should no longer show `No such module "h3-v2"`

<presentation-actions>
  <presentation-open-history>View History</presentation-open-history>
</presentation-actions>

<presentation-actions>
<presentation-link url="https://docs.lovable.dev/tips-tricks/troubleshooting">Troubleshooting docs</presentation-link>
</presentation-actions>