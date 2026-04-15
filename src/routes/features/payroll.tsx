import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { DollarSign, FileText, Calculator, Landmark, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/payroll")({
  head: () => ({
    meta: [
      { title: "Payroll Management — Sapience HCM" },
      { name: "description", content: "GCC & Levant payroll with WPS compliance, multi-currency support, GL integration, pay groups, accruals, provisions, retro pay, and end of service benefits." },
      { property: "og:title", content: "Payroll Management — Sapience HCM" },
      { property: "og:description", content: "GCC-localized payroll with WPS compliance, GL integration, and multi-currency support." },
    ],
  }),
  component: PayrollPage,
});

function PayrollPage() {
  return (
    <>
      <HeroSection
        headline="Payroll made simple. Compliance built in."
        subHeadline="Process payroll localized for the Middle East & Levant — UAE, KSA, Oman, Bahrain, Qatar, Kuwait, Egypt, Jordan, Lebanon, Iraq — with WPS compliance, multi-currency support, multiple payment methods, and end of service benefits."
        badge="Payroll"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FeatureCard icon={DollarSign} title="Payroll & WPS Compliance" description="Frequency-based payroll processing with unlimited pay groups and elements. Multiple payment methods — WPS, Direct Transfer, Cash, Cheque. Split net pay to multiple bank accounts. Retro pay calculation, notice pay, and indemnity computation." />
          <FeatureCard icon={FileText} title="Pay Groups & Batch Processing" description="Organize employees into unlimited pay groups for batch payroll runs. Trial and final payroll processing, on-demand payroll for single/group/all employees, pay slip printing, and email distribution." />
          <FeatureCard icon={Landmark} title="GL Integration" description="User-definable account codes, balanced payroll journal, cost code assignment for project/job/activity. Export to SAP, Dynamics 365, Sage X3/300, Infor, QuickBooks, and more via REST API." />
          <FeatureCard icon={Calculator} title="Accruals, Provisions & EOS" description="Automated accrual calculations, arrears auto-computation, alerts for arrears in EOS, accruals of overheads and bonus, provision tracking, and end of service benefit computation per GCC & Levant labor laws." />
        </div>
      </section>
      <ScreenshotSection title="Payroll Processing" screenshots={[
        { src: "/screenshots/payroll-process.jpg", alt: "Sapience HCM payroll processing interface" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "WPS file generation",
              "Multi-currency payroll",
              "GL integration (SAP, Dynamics, Sage)",
              "Advance salary processing",
              "Retro pay calculation",
              "Split net pay to multiple banks",
              "On-demand payroll processing",
              "Trial & final processing",
              "Pay slip printing & email",
              "Arrears auto-computation",
              "End of service benefits",
              "Middle East & Levant coverage",
            ].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="We went from 3 days of payroll processing to 4 hours. Sapience HCM's WPS-compliant payroll with attendance integration eliminated manual calculations entirely." name="Raj Patel" title="Finance Director" company="GlobalTech Solutions" />
      <FAQAccordion items={[
        { question: "What is WPS compliance?", answer: "The Wage Protection System (WPS) is a mandatory electronic salary transfer system in GCC countries. Sapience HCM generates WPS-compliant files for seamless bank submissions in UAE, Qatar, KSA, Oman, Bahrain, and Kuwait." },
        { question: "Does Sapience HCM support multi-currency payroll?", answer: "Yes, Sapience HCM handles multi-currency payroll with automatic exchange rate integration, ideal for organizations with employees across multiple Middle East and Levant countries." },
        { question: "How does GL integration work?", answer: "Payroll data automatically syncs with your General Ledger system with user-definable account codes, balanced payroll journals, and cost code assignment for project/job/activity. Exports to SAP, Dynamics 365, Sage X3/300, Infor, and QuickBooks." },
        { question: "What payment methods are supported?", answer: "Sapience HCM supports WPS bank transfer, direct transfer, cash, and cheque payments. You can also split an employee's net pay across multiple bank accounts." },
      ]} />
      <CTABanner />
    </>
  );
}
