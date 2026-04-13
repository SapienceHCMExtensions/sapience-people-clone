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
      { name: "description", content: "Automate payroll processing and simplify travel and expense management with Sapience HCM." },
      { property: "og:title", content: "Payroll & Expense Management — Sapience HCM" },
      { property: "og:description", content: "Automate payroll and simplify expense management." },
    ],
  }),
  component: PayrollPage,
});

function PayrollPage() {
  return (
    <>
      <HeroSection headline="Payroll made simple. Expenses made effortless." subHeadline="Process payroll with accuracy, manage travel requests, and streamline expense reimbursements — all integrated with your HR data." badge="Payroll & Expense" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl">
          <FeatureCard icon={DollarSign} title="Integrated Payroll" description="Calculate salaries, statutory deductions, and tax filings with automated payroll processing tied directly to attendance and leave data." />
          <FeatureCard icon={Plane} title="Travel & Expense" description="Submit travel requests, capture receipts, set spending policies, and automate reimbursement workflows." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Multi-country payroll", "Tax compliance automation", "Direct deposit support", "Expense policy enforcement", "Receipt OCR scanning", "Real-time payroll analytics"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="We went from 3 days of payroll processing to 4 hours. Sapience HCM's payroll integration with attendance data eliminated manual calculations entirely." name="Raj Patel" title="Finance Director" company="GlobalTech Solutions" />
      <FAQAccordion items={[
        { question: "How does integrated payroll work?", answer: "Sapience HCM's payroll pulls data directly from attendance, leave, and timesheet modules to automatically calculate accurate salaries, deductions, and taxes." },
        { question: "Can I manage expenses for remote teams?", answer: "Yes, employees can submit expenses via mobile with receipt photos, and managers can approve from anywhere with configurable spending limits and policies." },
      ]} />
      <CTABanner />
    </>
  );
}
