import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, UserMinus, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/core-hr")({
  head: () => ({
    meta: [
      { title: "Core HR Software — Sapience HCM" },
      { name: "description", content: "Centralize employee data, automate attendance with biometric integration, manage shifts, leaves, timesheets, and HR analytics in one platform." },
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
        subHeadline="Centralize employee records, automate attendance with biometric devices and geo-fencing, manage complex shift rosters, and gain actionable HR insights — all in Sapience HCM."
        badge="Core HR"
        screenshotUrl="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
        screenshotAlt="Sapience HCM Core HR dashboard with employee analytics"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title="Employee Management" description="Centralized employee database with personal, professional, and organizational data. Org charts, reporting lines, and custom fields." />
            <FeatureCard icon={Clock} title="Time & Attendance" description="Biometric device integration, geo-fencing for remote teams, automated overtime calculations, and real-time attendance dashboards." />
            <FeatureCard icon={CalendarDays} title="Shift Management" description="Rotating shifts, retail staff rostering, biometric sync, and complex multi-location shift pattern definitions." />
            <FeatureCard icon={CalendarDays} title="Leave Management" description="Configure unlimited leave types with auto-approval rules, balance tracking, sick leave management, and visual leave calendars." />
            <FeatureCard icon={FileText} title="Timesheets" description="Activity-based timesheets with project allocation, billable hour tracking, and automated invoice-ready reports." />
            <FeatureCard icon={Headphones} title="HR Help Desk" description="Self-service employee portal with ticketed queries, SLA tracking, categorized requests, and knowledge base access." />
            <FeatureCard icon={FolderOpen} title="Document Management" description="Role-based access, e-signatures, digital document storage, and automated document expiry alerts." />
            <FeatureCard icon={BarChart3} title="HR Analytics" description="Customizable dashboards, workforce trend analysis, compliance management, and predictive HR metrics." />
            <FeatureCard icon={UserMinus} title="Offboarding" description="Structured exit management with knowledge transfer workflows, asset recovery tracking, and compliance checklists." />
          </div>
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Biometric device integration", "Geo-fencing for remote attendance", "Multi-location shift planning", "Role-based access control", "Audit trails & compliance", "Bulk import & export"].map((r) => (
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
        { question: "Can I manage rotating shifts and complex rosters?", answer: "Absolutely. The shift management module supports rotating patterns, split shifts, retail rostering, and multi-location schedules with biometric sync." },
        { question: "How does the self-service HR help desk work?", answer: "Employees can submit categorized tickets, track resolution status, and access a self-service knowledge base for common HR questions — all from the employee portal." },
        { question: "Can Sapience HCM handle multi-country compliance?", answer: "Yes, Sapience HCM supports multi-country configurations with localized compliance rules, statutory requirements, and region-specific reporting." },
      ]} />
      <CTABanner />
    </>
  );
}
