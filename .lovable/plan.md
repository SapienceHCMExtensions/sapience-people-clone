

# Remove Sticky Feature Navigation

Remove the `StickyFeatureNav` component and all references to it across the codebase.

## Changes

### Delete file
- `src/components/shared/StickyFeatureNav.tsx`

### Remove import and usage from all feature route files (10 files)
Each file has an import line and a `<StickyFeatureNav features={features} />` JSX element to remove:

1. `src/routes/features/core-hr.tsx`
2. `src/routes/features/payroll.tsx`
3. `src/routes/features/performance.tsx`
4. `src/routes/features/retirement-separation.tsx`
5. `src/routes/features/travel-expense.tsx`
6. `src/routes/features/hiring-onboarding.tsx`
7. `src/routes/features/organization-management.tsx`
8. `src/routes/features/engagement.tsx`
9. `src/routes/features/custom-services.tsx`
10. `src/routes/features/hr-automation.tsx`
11. `src/routes/features/hr-chatbot.tsx`
12. `src/routes/features/mobile-app.tsx`
13. `src/routes/features/integrations.tsx`

The `NumberedFeatureBlock` section IDs (`id={feature-${number}}`) can stay — they're harmless and useful for potential future linking.

