import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/core-hr")({
  head: () => ({
    meta: [
      { title: "Core HR Software — Sapience HCM" },
      { name: "description", content: "Centralize employee data, automate attendance with biometric integration, manage shifts, leaves, timesheets, documents, and HR analytics in one platform." },
      { property: "og:title", content: "Core HR Software — Sapience HCM" },
      { property: "og:description", content: "Centralize employee data and automate core HR operations." },
    ],
  }),
  component: CoreHRPage,
});

function CoreHRPage() {
  return (
    <>
      <HeroSection
        headline="Manage your entire workforce from one platform"
        subHeadline="Centralize employee records with dependent details, automate attendance with biometric devices and geo-fencing, manage complex shift rosters and duty rosters, and gain actionable HR insights — all in Sapience HCM."
        badge="Core HR"
        screenshotUrl="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
        screenshotAlt="Sapience HCM Core HR dashboard with employee analytics"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title="Employee Management" description="Centralized employee database with personal, professional, and organizational data. Dependent details, employee assets tracking, incident management, probation management, employee type/status tracking, and expiry date alerts." />
            <FeatureCard icon={Clock} title="Time & Attendance" description="Daily, monthly, and periodic attendance tracking with biometric device integration, geo-fencing for remote teams. Overtime policy management, late comers/early leavers tracking, and real-time attendance dashboards." />
            <FeatureCard icon={CalendarDays} title="Shift & Duty Roster" description="Unlimited shift definitions, rotating shifts for 24x7 operations, flexible day off configuration, and duty roster management. Multi-location shift patterns with biometric sync." />
            <FeatureCard icon={CalendarDays} title="Leave Management" description="Configure unlimited leave types with leave encashment, accrual & carry forward policies, leave-slab management, early settlement, leave salary processing, balance tracking, and visual leave calendars." />
            <FeatureCard icon={FileText} title="Timesheets" description="Project-wise time accounting with activity-based timesheets, project allocation, billable hour tracking, and multi-dimensional reports on time spent for client groups, clients, and projects." />
            <FeatureCard icon={Headphones} title="HR Help Desk" description="Self-service employee portal with ticketed queries, SLA tracking, categorized requests, and knowledge base access." />
            <FeatureCard icon={FolderOpen} title="Document Management" description="Document expiry email alerts, dependent passport/visa expiry alerts, tracking of document issue and return, role-based access, e-signatures, and digital document storage." />
            <FeatureCard icon={BarChart3} title="HR Analytics" description="Customizable dashboards, workforce trend analysis, compliance management, predictive HR metrics, and employee history tracking." />
          </div>
        </div>
      </section>
      <ScreenshotSection title="Product Screenshots" screenshots={[
        { src: "/screenshots/attendance-report.jpg", alt: "Sapience HCM late comers and early leavers attendance report" },
        { src: "/screenshots/duty-roster.jpg", alt: "Sapience HCM duty roster management" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Biometric device integration", "Geo-fencing for remote attendance", "Employee probation management", "Asset tracking", "Incident & grievance management", "Document expiry alerts", "Dependent passport/visa tracking", "Employee history tracking", "Multi-location shift planning"].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Sapience HCM's Core HR module helped us consolidate employee data from 5 different systems into one unified platform, saving 20+ hours per week." name="James O'Brien" title="HR Manager" company="FinanceOne Corp" />
      <FAQAccordion items={[
        { question: "Does Sapience HCM support biometric attendance devices?", answer: "Yes, Sapience HCM integrates with a wide range of biometric devices for real-time attendance tracking, including fingerprint and facial recognition terminals." },
        { question: "Can I manage rotating shifts and complex rosters?", answer: "Absolutely. The shift management module supports unlimited shift definitions, rotating patterns for 24x7 operations, flexible day off configuration, split shifts, and multi-location duty rosters with biometric sync." },
        { question: "How does leave encashment and accrual work?", answer: "Sapience HCM supports leave encashment, accrual and carry forward policies built into leave rules, leave-slab management for graduated entitlements, and early settlement processing." },
        { question: "Can Sapience HCM handle multi-country compliance?", answer: "Yes, Sapience HCM supports multi-country configurations with localized compliance rules, statutory requirements, and region-specific reporting." },
      ]} />
      <CTABanner />
    </>
  );
}
