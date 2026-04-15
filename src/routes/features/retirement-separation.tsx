import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { UserMinus, Calculator, CalendarCheck, Package, FileText, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/retirement-separation")({
  head: () => ({
    meta: [
      { title: "Retirement & Separation — Sapience HCM" },
      { name: "description", content: "Automate end of service settlements, gratuity calculations, leave settlement, asset clearance, and exit management per GCC labor laws." },
      { property: "og:title", content: "Retirement & Separation — Sapience HCM" },
      { property: "og:description", content: "Automated gratuity, EOS settlements, and exit management." },
    ],
  }),
  component: RetirementSeparationPage,
});

function RetirementSeparationPage() {
  return (
    <>
      <HeroSection
        headline="Smooth transitions from service to separation"
        subHeadline="Automate end of service calculations, gratuity processing, leave settlement, asset clearance, and structured exit management — fully compliant with GCC labor laws."
        badge="Retirement & Separation"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Calculator} title="Gratuity Calculations" description="Automated gratuity and service indemnity calculations based on country-specific labor laws — UAE, KSA, Qatar, Oman, Bahrain, Kuwait, and Levant countries." />
          <FeatureCard icon={FileText} title="Arrear & Deductions Management" description="Compute pending arrears, deductions, notice pay, and indemnity calculations automatically as part of the final settlement process." />
          <FeatureCard icon={CalendarCheck} title="Leave Settlement" description="Automatic leave encashment and balance settlement calculations, including accrued leave, carry-forward balances, and leave salary processing." />
          <FeatureCard icon={Package} title="Asset Clearance" description="Track and manage asset recovery — laptops, access cards, uniforms, and company property — with clearance checklists and sign-off workflows." />
          <FeatureCard icon={UserMinus} title="Exit Management" description="Structured exit interviews, knowledge transfer workflows, compliance checklists, and final settlement processing with full audit trails." />
          <FeatureCard icon={Calculator} title="End of Service Settlement" description="Comprehensive final settlement with gratuity, leave encashment, pending salary, deductions, and all statutory entitlements calculated automatically." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Country-specific gratuity rules", "Automated final settlement", "Leave encashment processing", "Asset recovery tracking", "Exit interview management", "Full audit trail"].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQAccordion items={[
        { question: "How are gratuity calculations handled?", answer: "Sapience HCM computes gratuity based on country-specific labor laws. For UAE, it follows the limited/unlimited contract rules. For KSA, it applies the Saudi Labour Law formula. Each country's statutory formula is built in." },
        { question: "What is included in the final settlement?", answer: "The end of service settlement includes gratuity, leave encashment, pending salary, arrears, deductions, notice pay, and all statutory entitlements — calculated automatically with a detailed breakdown." },
        { question: "Can I customize the exit process?", answer: "Yes, you can configure exit checklists, knowledge transfer tasks, asset clearance steps, and approval workflows specific to your organization's requirements." },
      ]} />
      <CTABanner />
    </>
  );
}
