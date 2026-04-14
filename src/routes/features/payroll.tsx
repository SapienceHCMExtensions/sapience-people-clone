import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { DollarSign, Plane, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/payroll")({
  head: () => ({
    meta: [
      { title: "Payroll & Expense Management — Sapience HCM" },
      { name: "description", content: "GCC-localized payroll with WPS compliance, multi-currency support, GL integration, and automated travel & expense claim workflows." },
      { property: "og:title", content: "Payroll & Expense Management — Sapience HCM" },
      { property: "og:description", content: "GCC-localized payroll with WPS compliance and expense management." },
    ],
  }),
  component: PayrollPage,
});

function PayrollPage() {
  return (
    <>
      <HeroSection headline="Payroll made simple. Expenses made effortless." subHeadline="Process payroll localized for the GCC — UAE, Qatar, KSA, and Oman — with WPS compliance, multi-currency support, GL integration, and streamlined travel & expense claim workflows." badge="Payroll & Expense" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl">
          <FeatureCard icon={DollarSign} title="Payroll & WPS Compliance" description="GCC-localized payroll processing for UAE, Qatar, KSA, and Oman. WPS file generation, advance salary processing, GL integration, and multi-currency support." />
          <FeatureCard icon={Plane} title="Travel & Expense Claims" description="Automated request workflows, multi-currency expense tracking, per diem calculations, receipt management, and policy-based approvals." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["WPS file generation", "Multi-currency payroll", "GL integration", "Advance salary processing", "Per diem calculations", "Receipt management & OCR"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="We went from 3 days of payroll processing to 4 hours. Sapience HCM's WPS-compliant payroll with attendance integration eliminated manual calculations entirely." name="Raj Patel" title="Finance Director" company="GlobalTech Solutions" />
      <FAQAccordion items={[
        { question: "What is WPS compliance?", answer: "The Wage Protection System (WPS) is a mandatory electronic salary transfer system in GCC countries. Sapience HCM generates WPS-compliant files for seamless bank submissions in UAE, Qatar, KSA, and Oman." },
        { question: "Does Sapience HCM support multi-currency payroll?", answer: "Yes, Sapience HCM handles multi-currency payroll with automatic exchange rate integration, ideal for organizations with employees across multiple GCC countries." },
        { question: "How does GL integration work?", answer: "Payroll data automatically syncs with your General Ledger system, posting salary entries, deductions, and accruals to the correct accounts for seamless financial reconciliation." },
      ]} />
      <CTABanner />
    </>
  );
}
