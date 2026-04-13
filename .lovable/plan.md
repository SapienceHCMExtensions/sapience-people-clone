# Pricing Page Implementation

## What We're Building

A full pricing page matching Zoho People's pricing layout with three plan tiers, a billing toggle, feature lists, add-on sections, and an FAQ.

## Structure

### 1. Hero Section

- Headline: "Simple, Transparent Pricing"
- Sub-headline about flexible plans for every business size
- Monthly/Yearly billing toggle (highlight "Save more than 20%" on yearly)

### 2. Pricing Tier Cards (3 cards)

- **Sapience HCM Cloud** — $8/user/month (yearly) / $10/user/month (monthly)
- **Customer Cloud** — $8/user/month (yearly) / $10/user/month (monthly)  
- **On Premise** — Custom pricing, "Contact Sales"

Each card includes:

- Plan name and price
- "Try for Free" or "Contact Sales" CTA button
- Expandable "Show Features / Hide Features" accordion listing included modules
- Popular plan badge on the middle tier

### 3. Plan Comparison Table

- Full feature-by-feature comparison across all three tiers using check/cross icons
- Categories: Core HR, Performance, Payroll, Engagement, Automation, Support

### 4. Add-Ons & Support Section (Cloud plans only)

- Extra storage pricing
- Additional API call packages
- Premium support tiers

### 5. FAQ Section

- Reuse existing `FAQAccordion` component
- Questions: trial details, what happens after trial, data migration, cancellation policy, enterprise discounts

### 6. CTA Banner

- Reuse existing `CTABanner` component

## Technical Details

- **File**: `src/routes/pricing.tsx` (replace placeholder)
- **State**: React `useState` for billing toggle (monthly/yearly) and feature list expand/collapse
- **Components used**: `FAQAccordion`, `CTABanner`, shadcn `Card`, `Button`, `Switch`, `Badge`, `Table`
- **No new dependencies** — everything uses existing components
- All pricing data hardcoded as static arrays for easy future updates