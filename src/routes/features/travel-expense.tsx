import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Plane, Receipt, Globe, CheckCircle, Calculator, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/features/travel-expense")({
  head: () => ({
    meta: [
      { title: "Travel & Expense Claims — Sapience HCM" },
      { name: "description", content: "Streamline travel requests, multi-currency expense tracking, per diem calculations, receipt management, and policy-based approvals with Sapience HCM." },
      { property: "og:title", content: "Travel & Expense Claims — Sapience HCM" },
      { property: "og:description", content: "Automated travel & expense claim workflows with multi-currency tracking and policy-based approvals." },
    ],
  }),
  component: TravelExpensePage,
});

function TravelExpensePage() {
  return (
    <>
      <HeroSection
        headline="Travel & expense claims, simplified."
        subHeadline="From travel requests to reimbursements — automate the entire expense lifecycle with multi-currency tracking, per diem calculations, receipt management, and policy-based approvals."
        badge="Travel & Expense"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          <FeatureCard icon={Plane} title="Travel Request Management" description="Submit and approve travel requests with automated workflows, itinerary management, and budget pre-approval before trips begin." />
          <FeatureCard icon={Globe} title="Multi-Currency Expense Tracking" description="Log expenses in any currency with automatic exchange rate conversion. Ideal for organizations with employees travelling across GCC and international destinations." />
          <FeatureCard icon={Calculator} title="Per Diem Calculations" description="Configure per diem rates by destination and employee grade. Automatic calculations based on travel duration and company policies." />
          <FeatureCard icon={Receipt} title="Receipt Management" description="Capture and attach receipts digitally. OCR-powered data extraction reduces manual entry and ensures audit-ready documentation." />
          <FeatureCard icon={ShieldCheck} title="Policy-Based Approvals" description="Define expense policies by category, amount thresholds, and employee roles. Multi-level approval workflows with automatic escalation for out-of-policy claims." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Automated travel request workflows",
              "Multi-currency expense tracking",
              "Configurable per diem rates",
              "OCR-powered receipt capture",
              "Policy-based approval routing",
              "Real-time expense analytics & reporting",
            ].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock
        quote="Our expense reimbursement cycle dropped from two weeks to three days. The automated policy checks and multi-currency support eliminated back-and-forth with finance."
        name="Amira Hassan"
        title="Operations Manager"
        company="Gulf Logistics Group"
      />
      <FAQAccordion items={[
        { question: "Can employees submit expenses from their mobile?", answer: "Yes, employees can submit travel requests, log expenses, and attach receipt photos directly from the Sapience HCM mobile app — anytime, anywhere." },
        { question: "How are per diem rates configured?", answer: "Administrators can set per diem rates by destination city or country and by employee grade or category. The system automatically calculates allowances based on travel dates and duration." },
        { question: "What happens with out-of-policy claims?", answer: "Out-of-policy claims are automatically flagged and routed to the appropriate approver with escalation rules. Managers can approve with justification or reject with comments." },
        { question: "Does it support multi-currency expenses?", answer: "Yes, employees can log expenses in any currency. The system converts amounts using configurable exchange rates for consolidated reporting and reimbursement in the employee's base currency." },
      ]} />
      <CTABanner />
    </>
  );
}
