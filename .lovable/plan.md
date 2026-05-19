## Goal
Fix the published-site error page shown when opening the preview/live app in a new tab by identifying and removing the actual server-render crash in the root/homepage render path.

## Plan
1. Reproduce the failing render path locally and narrow the fault to the exact component/module in the `/` route tree.
   - Temporarily isolate the homepage by removing large sections from `src/routes/index.tsx` in small steps.
   - If needed, also bypass root-shell children (`Header`, `Footer`, `CookieConsent`, `PageTransition`, `LanguageProvider`) one at a time to determine whether the crash is in the shell or page content.
   - Add temporary server-safe logging only if the crash location is still unclear.

2. Fix the root cause instead of the fallback symptom.
   - Remove or guard any code that breaks SSR in the published environment.
   - Prioritize browser-only APIs, runtime-incompatible UI primitives, or render-time logic that behaves differently in the deployed server environment.
   - Keep the existing error wrapper only as protection, not as the “solution.”

3. Validate that the server can render `/` successfully again.
   - Confirm the homepage loads in preview without the generic error boundary.
   - Confirm the published/new-tab route returns real app HTML instead of the fallback error page.
   - Re-check that the earlier bundling fix remains intact.

## Likely focus areas
- `src/routes/index.tsx` and the shared homepage components it imports
- `src/routes/__root.tsx` and `src/router.tsx`
- Runtime-sensitive shared components such as `ProductTour`, `ROICalculator`, `TrustBand`, and any Radix-based UI used on the homepage

## Technical notes
- The previous update did have a real effect: it eliminated the earlier worker/module-resolution failure and let the request reach the app server entry.
- The remaining problem is a separate SSR crash during render, currently masked by the custom fallback page.
- I’ll keep changes tightly scoped to diagnosing and fixing this render failure only.