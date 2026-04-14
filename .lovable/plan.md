

# Add Travel & Expense Claims as Separate Route

## Changes

1. **Create `src/routes/features/travel-expense.tsx`** — New feature page dedicated to Travel & Expense Claims, extracted from the Payroll page. Includes hero, feature cards (expense requests, multi-currency tracking, per diem calculations, receipt management, policy-based approvals), more reasons section, testimonial, FAQ, and CTA. Same page pattern as other feature pages.

2. **Update `src/routes/features/payroll.tsx`** — Remove the Travel & Expense Claims feature card and related content. Page focuses solely on Payroll & WPS Compliance (GCC localization, WPS file generation, GL integration, multi-currency payroll, advance salary, pay groups, accruals, end of service benefits).

3. **Update `src/components/layout/Header.tsx`** — Split the "Payroll & Expense" category in `featureItems` into two entries:
   - "Payroll" → `/features/payroll` with items like "Integrated payroll", "WPS compliance"
   - "Travel & Expense" → `/features/travel-expense` with items like "Expense claims", "Per diem", "Receipt management"

4. **Update `src/routes/features/index.tsx`** — Add Travel & Expense Claims as a separate card in the All Features grid, and update the Payroll card description to remove expense references.

5. **Update `.lovable/plan.md`** — Reflect the new route separation in the plan document.

