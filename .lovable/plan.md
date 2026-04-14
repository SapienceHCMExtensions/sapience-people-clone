

# Update Feature Pages with Sapience HCM Modules & Screenshots

## What's Changing

Update all feature page content to align with the actual Sapience HCM product modules (sourced from sapiencehrms.com, Zillancer consulting, and GetApp). Add product screenshot images from GetApp to relevant sections. The top menu bar structure and dropdowns remain untouched.

## Module Mapping (from sapiencehrms.com sources)

Based on the actual Sapience HCM product, here are the real modules mapped to our existing feature categories:

### Hiring & Onboarding (`/features/hiring-onboarding`)
- **Recruitment Management** — Position requisition, interview scheduling, career page integration, applicant tracking
- **Onboarding** — Automated onboarding cycles, document collection, first-day task workflows

### Core HR (`/features/core-hr`)
- **Employee Management** — Centralized employee database, personal/professional data, org charts
- **Time & Attendance** — Biometric device integration, geo-fencing, complex shift/roster definitions, automated overtime calculations
- **Shift Management** — Rotating shifts, retail staff rostering, biometric sync
- **Leave Management (Time Off)** — Leave types, auto-approvals, balance tracking, sick leave tracking
- **Timesheets** — Activity-based timesheets, project allocation
- **HR Help Desk** — Self-service portal, ticketed queries
- **Document Management** — Role-based access, e-signatures, digital document storage
- **HR Analytics** — Customizable dashboards, reporting/analytics, compliance management
- **Offboarding** — Structured exit management, knowledge transfer

### Performance & Development (`/features/performance`)
- **Performance Management** — 360-degree feedback, goal cascading, automated appraisal cycles, KPI/OKR tracking
- **Compensation & Benefits** — Grade/spine points, loans & advances, benefit enrollment, pay equity
- **Training Management (Learning)** — Skill-based training programs, course management, learning paths, certifications

### Payroll & Expense (`/features/payroll`)
- **Payroll & WPS Compliance** — Localized for GCC (UAE, Qatar, KSA, Oman), WPS file generation, advance salary, GL integration, multi-currency
- **Travel & Expense Claim** — Automated request workflows, multi-currency tracking, per diem calculations, receipt management

### Employee Engagement (`/features/engagement`)
- **Employee Engagement** — Surveys, recognition, eNPS, anonymous feedback
- **Self-Service Portal** — Mobile-ready portal, leave requisitions, document management, interactive payslip viewing

### HR Automation (`/features/hr-automation`)
- **Workflow Management** — Approval process control, conditional logic, escalation rules
- **Smart Notifications** — Event-driven alerts, reminders, deadline notifications

### Custom Services (`/features/custom-services`)
- **Project Labor Costing** — Activity-based tracking, cost overheads, project analytics, financial integration
- **Custom Configurations** — Customizable templates, branding, reports
- **White-Label Solutions**

### Integrations (`/features/integrations`)
- **ERP Integrations** — Sage 300, SAP S/4HANA, SAP Business One, Dynamics 365 Business Central, Dynamics 365, Sage X3
- **API** — REST API, bi-directional data sync
- **Biometric Device Integration**

## Screenshots to Add

The following external images from GetApp will be used as product screenshots:

1. **Main dashboard screenshot**: `https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png` — Used on the Homepage and Core HR page
2. **Marketing landing page image**: `https://marketing.zillancer.com/image%20for%20landing%20page.png` — Used on the Homepage hero area

Screenshots will be added as `<img>` tags with proper alt text in new "Product Screenshot" sections on relevant feature pages, and alongside the hero on the homepage.

## Files to Modify

1. **`src/routes/index.tsx`** — Update homepage hero copy to match "Streamline HR process from Hire to Retire to maximize Employee Performance". Add dashboard screenshot image below hero. Update feature category descriptions to match real modules.

2. **`src/routes/features/hiring-onboarding.tsx`** — Update module cards to: Recruitment Management (position requisition, interview scheduling, career page, applicant tracking), Onboarding (automated cycles, document collection). Update "More Reasons" list.

3. **`src/routes/features/core-hr.tsx`** — Update descriptions to reflect real product: biometric integration for attendance, rotating shifts, activity-based timesheets, self-service portal. Add dashboard screenshot.

4. **`src/routes/features/performance.tsx`** — Update to: Performance (360° feedback, goal cascading, appraisal cycles), Compensation & Benefits (grade/spine points, loans & advances, benefit enrollment), Training Management (skill-based programs, learning paths).

5. **`src/routes/features/payroll.tsx`** — Update to reflect GCC localization: WPS compliance, multi-currency payroll, GL integration, advance salary processing. Travel & Expense with per diem calculations.

6. **`src/routes/features/engagement.tsx`** — Update to include Self-Service Portal as a feature card (mobile-ready, interactive payslips, leave requisitions).

7. **`src/routes/features/hr-automation.tsx`** — Update to match actual workflow management, approval process control.

8. **`src/routes/features/custom-services.tsx`** — Add Project Labor Costing module (activity-based tracking, project analytics). Update custom configurations to mention customizable templates, branding, reports.

9. **`src/routes/features/integrations.tsx`** — Update with actual integration partners: Sage 300, SAP S/4HANA, SAP Business One, Dynamics 365, Sage X3. Add biometric device integration.

10. **`src/routes/features/index.tsx`** — Update the "All Features" overview descriptions to match the updated module content.

11. **`src/components/shared/HeroSection.tsx`** — Add optional `screenshotUrl` prop to display a product screenshot image alongside the hero content.

## What Will NOT Change

- Header component structure and mega dropdown menu items
- Route paths and navigation structure
- Footer, CookieConsent, or other layout components
- Solution pages
- Overall page layout pattern (Hero → Features → More Reasons → Testimonial → FAQ → CTA)

