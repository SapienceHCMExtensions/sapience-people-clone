

# Update Feature Pages from Functional Document v9.0

## Summary

Update all feature route pages with detailed content from the Sapience HCM Functional Document v9.0, create 2 new routes for modules not currently covered, and add product screenshots from the PDF to pages that don't already have images.

## New Routes to Create

### 1. `/features/organization-management` (new file)
From PDF modules: Organization Management, plus Employee Central details
- Organizational Hierarchy Management & Org Chart (use org chart screenshot from PDF page 3)
- Multiple Roles & Job Responsibilities Generation
- Job Description Management
- Company Document Expiry Alerts
- Employee Directory (use employee directory screenshot from PDF page 20)

### 2. `/features/retirement-separation` (new file)
From PDF modules: Retirement & Separation
- Automated Gratuity Calculations
- Arrear & Deductions Management
- Leave Settlement Process
- Asset Clearance Process
- Exit Management
- End of Service Settlement Process

## Existing Routes to Update

### 3. `src/routes/features/core-hr.tsx`
Update feature cards with PDF-accurate details:
- **Employee Management**: Add dependent details, employee assets, incident management, expiry date alerts, employee type/status tracking, probation management
- **Time & Attendance**: Add daily/monthly/periodic attendance, overtime policies, late comers/early leavers tracking (add attendance report screenshot from PDF page 22)
- **Shift Management**: Add unlimited shift definitions, rotating shifts for 24x7 ops, flexible day off config, duty roster (add duty roster screenshot from PDF page 13)
- **Leave Management**: Add leave encashment, accrual & carry forward policy, leave-slab management, early settlement, leave salary processing (add leave request screenshot from PDF page 12)
- **Timesheets**: Add project-wise time accounting, multi-dimensional reports on time spent
- **Document Management**: Add document expiry email alerts, dependent passport/visa expiry alerts, tracking of document issue and return
- Update "More Reasons" list with: Employee probation management, Asset tracking, Incident & grievance management, Document expiry alerts, Dependent passport/visa tracking, Employee history tracking
- Add the ESS/Home Page screenshot from PDF page 19 as a secondary screenshot section

### 4. `src/routes/features/payroll.tsx`
Update with detailed PDF content:
- **Payroll & WPS**: Add frequency-based processing, unlimited pay groups & elements, multiple payment methods (WPS, Direct Transfer, Cash, Cheque), split net pay to multiple bank accounts, retro pay calculation, notice pay, indemnity calc
- **Pay Groups & Batch**: Add trial & final payroll, on-demand payroll for single/group/all employees, pay slip printing/email distribution
- **GL Integration**: Expand to dedicated card - user definable account codes, balanced payroll journal, cost code assignment for project/job/activity, export to SAP, Dynamics 365, Sage X3/300, Infor, QuickBooks
- **Accruals**: Add arrears auto-computation, alerts for arrears in EOS, accruals of overheads and bonus
- Add Middle East & Levant coverage: UAE, KSA, Oman, Bahrain, Qatar, Kuwait, Egypt, Jordan, Lebanon, Iraq, etc.
- Add payroll process screenshot from PDF page 23

### 5. `src/routes/features/hiring-onboarding.tsx`
Update with PDF details:
- **Recruitment**: Add manpower planning, candidate profile management, candidate database search, resume management, recruitment agency tracking, job offer letter management
- **Onboarding**: Add task assignment & progress tracking, status tracking
- Add recruitment dashboard screenshot from PDF page 17
- Add onboarding management screenshot from PDF page 20
- Update "More Reasons" with: Manpower planning, Candidate database search, Resume management, Agency tracking, Offer letter management, Task-based onboarding tracking

### 6. `src/routes/features/performance.tsx`
Update with PDF details:
- **Performance Management**: Add user-defined evaluation parameters, multiple evaluation blocks, workflow-based evaluation forms, competency matrix based on job group, schedule & track pay reviews, goal & competency library, succession planning, 1:1 reviews
- **Compensation**: Add bonus & merit pay distribution based on customizable rules
- **Training**: Add training budget preparation (workflow-based), training location details, course attendance registration, training statistics reports, certificate expiration alerts, cost estimation & variance
- Add performance management screenshot from PDF page 15
- Add goal management screenshot from PDF page 16

### 7. `src/routes/features/travel-expense.tsx`
Update with PDF details:
- **Expense Wallet**: Store transactions on the fly
- **Multiple Expenses**: In single request
- **Transaction-level currency exchange rate**
- **Trip Allowance**: Based on destination
- **Advance eligibility tracking**
- **Expense payment link with payroll process**
- Update feature cards and "More Reasons" to reflect these specifics

### 8. `src/routes/features/engagement.tsx`
Update Self-Service Portal card with PDF details:
- Employee dashboard, training calendar access, claims & requisitions, self & subordinate appraisals, pay slip download, leaves & loans management
- View employment history, salary info, conditions of employment, HR policies
- Submit/update documents online
- Managerial self-service: approve/request subordinate leave, forward to higher level

### 9. `src/routes/features/custom-services.tsx`
Update Project & Labour Costing with PDF details:
- Unlimited Project/Job/Activity creation
- Activity and Job can be independently linked to Project
- Control on estimated cost and time schedule
- Multiple activity/job/project allocation to employee for same day
- Distribution of employee overheads based on time spent
- Cost distribution for regular pay, overtime to project on actual time

### 10. `src/routes/features/index.tsx`
Add Organization Management and Retirement & Separation cards to the all-features grid.

## Header Navigation Update

### 11. `src/components/layout/Header.tsx`
Add to `featureItems` array:
- **Organization Management** (icon: `Building2`) with items: "Org hierarchy", "Org chart", "Job descriptions"
- **Retirement & Separation** (icon: `UserMinus`) with items: "Gratuity", "Exit management", "End of service"

Move `UserMinus` from Core HR imports (it's currently used there as a feature card icon) and reuse it in the header for the new Retirement & Separation category.

## Screenshots to Copy into Project

Copy the following images from the parsed PDF into `public/screenshots/`:
1. `page_3_image_1_v2.jpg` — Org Chart (for Organization Management page)
2. `page_13_image_1_v2.jpg` — Duty Roster (for Core HR shifts section)
3. `page_12_image_2_v2.jpg` — Leave Request form (for Core HR leave section)
4. `page_15_image_1_v2.jpg` — Performance Management dashboard (for Performance page)
5. `page_16_image_1_v2.jpg` — Goal Management (for Performance page)
6. `page_17_image_1_v2.jpg` — Recruitment dashboard (for Hiring & Onboarding page)
7. `page_19_image_2_v2.jpg` — ESS Home Page (for Engagement/ESS page)
8. `page_20_image_1_v2.jpg` — Onboarding Management (for Hiring & Onboarding page)
9. `page_20_image_2_v2.jpg` — Employee Directory (for Organization Management page)
10. `page_22_image_1_v2.jpg` — Attendance Late Comers report (for Core HR page)
11. `page_23_image_1_v2.jpg` — Payroll Process (for Payroll page)
12. `page_2_image_1_v2.jpg` — Main Dashboard (for homepage/Core HR hero — only if not already present)

These will be displayed in new "Product Screenshot" sections added below feature cards on the respective pages, using simple `<img>` tags with proper alt text, rounded corners, and shadow styling.

## What Will NOT Change

- Header structure/layout and dropdown behavior
- Existing screenshot URLs already in the project (e.g., the GetApp screenshot on Core HR hero)
- Route paths for existing pages
- Footer, CookieConsent, layout components
- Solution pages
- Overall page pattern (Hero, Features, More Reasons, Testimonial, FAQ, CTA)

