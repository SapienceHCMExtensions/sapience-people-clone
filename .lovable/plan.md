
# Sapience HCM Website — Phase 1 Plan

## Brand System
- **Dark Navy** (#011B3D) — primary text, dark section backgrounds
- **Bright Blue** (#1E90FF) — accent for icons, buttons, secondary actions
- **Vibrant Orange** (#F05A28) — primary CTA buttons, key highlights
- **White** (#FFFFFF) — backgrounds
- **Soft Gray** (#F5F5F5) — section dividers, subtle backgrounds
- Logo: SapienceHCMLogo.svg in header, Sapience_People_Logo.png as favicon

## Pages & Routes to Build

### 1. Global Layout (`__root.tsx`)
- **Sticky Header**: Sapience HCM logo, mega-dropdown navigation (Features, Solutions, Pricing, Customers, Partners, Resources), Sign In link, "Get Started" orange CTA button
- **Fat Footer**: Product feature links, "Powered by Sapience Technology", Security & Privacy links (Terms, Privacy, Cookie Policy, GDPR, Anti-spam), social links
- **Cookie Consent Banner**: GDPR-compliant with Accept All / Reject Unnecessary / Manage Cookies options, categorized into Strictly Necessary, Functional, Analytics, Third-party
- Mobile responsive hamburger menu

### 2. Homepage (`/`)
- Hero section with bold headline, sub-headline about Sapience HCM's value proposition, "Sign up for free trial" + "Request Demo" CTAs
- Logo cloud of trusted companies (placeholder logos)
- Feature category cards (Hiring & Onboarding, Core HR, Performance & Development, Payroll & Expense, Employee Engagement) linking to respective feature pages
- Social proof / testimonial section
- CTA banner at bottom

### 3. Feature Landing Pages (10 routes)
Each follows the Zoho People pattern:
- `/features/hiring-onboarding` — Integrated recruitment, Onboarding
- `/features/core-hr` — Employee mgmt, Attendance, Shift, Leave, Timesheets, HR help desk, Doc mgmt, Analytics, Offboarding
- `/features/performance` — Performance, Compensation, Learning mgmt
- `/features/payroll` — Payroll software, Travel & expense
- `/features/engagement` — Employee engagement, Business chat
- `/features/hr-automation`
- `/features/custom-services`
- `/features/hr-chatbot`
- `/features/mobile-app`
- `/features/integrations`

**Each page includes:**
- Hero with module headline, value proposition, dual CTAs
- Feature modules grid with icons and descriptions
- "More Reasons to Choose Sapience HCM" benefits section
- Customer testimonial pull-quote
- FAQ accordion for long-tail SEO

### 4. Solutions Pages (7 routes)
- `/solutions/it`, `/solutions/media`, `/solutions/education`, `/solutions/healthcare`, `/solutions/finance`
- `/solutions/small-business`, `/solutions/medium-business`, `/solutions/enterprise`

Same layout pattern as feature pages but tailored to industry/size context.

### 5. Lead Generation Forms (2 routes)
- `/request-demo` — Full form: Name, Business Email, Phone (with country code selector), Company, Employee count dropdown, Existing provider dropdown, Role, Services of interest checkboxes, Captcha, marketing opt-in checkbox, privacy policy agreement
- `/request-quote` — Same form structure with price quote context

**Form submissions**: Send email notification (no CRM integration for now). Form validation with Zod.

### 6. All Features Page (`/features`)
- Grid overview of every feature module with brief description and link to its detail page

## Key Components to Build
- `MegaDropdownNav` — Desktop mega menu with feature categories, solutions by industry/size
- `MobileNav` — Slide-out hamburger menu
- `HeroSection` — Reusable hero with headline, sub-headline, dual CTAs
- `FeatureCard` — Icon + title + description card
- `TestimonialBlock` — Pull-quote with name/title/company
- `FAQAccordion` — Using shadcn Accordion component
- `LeadGenForm` — Shared form component for demo/quote pages
- `CookieConsent` — GDPR cookie banner with category management
- `Footer` — Fat footer with all links and compliance badges

## Design Approach
- Clean, professional SaaS aesthetic matching Zoho People's layout patterns
- Illustrations/icons will use Lucide icons (already available)
- Fully responsive (mobile-first)
- Each route gets unique `head()` metadata for SEO (title, description, og:title, og:description)
- Static content — all copy hardcoded for now, easy to swap later
