import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Plane, Receipt, Globe, CheckCircle, Calculator, ShieldCheck } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/travel-expense")({
  head: () => ({ meta: [{ title: "Travel & Expense Claims — Sapience HCM" }, { name: "description", content: "Streamline travel requests, multi-currency expense tracking, per diem calculations, receipt management, and policy-based approvals with Sapience HCM." }, { property: "og:title", content: "Travel & Expense Claims — Sapience HCM" }, { property: "og:description", content: "Automated travel & expense claim workflows with multi-currency tracking and policy-based approvals." }] }),
  component: TravelExpensePage,
});

function TravelExpensePage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.travelExpense.moreReasons");
  const faq = (useTranslatedArray("features.travelExpense.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.travelExpense.heroHeadline")} subHeadline={t("features.travelExpense.heroSub")} badge={t("features.travelExpense.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          <FeatureCard icon={Plane} title={t("features.travelExpense.travelRequest")} description={t("features.travelExpense.travelRequestDesc")} />
          <FeatureCard icon={Globe} title={t("features.travelExpense.multiCurrency")} description={t("features.travelExpense.multiCurrencyDesc")} />
          <FeatureCard icon={Calculator} title={t("features.travelExpense.perDiem")} description={t("features.travelExpense.perDiemDesc")} />
          <FeatureCard icon={Receipt} title={t("features.travelExpense.receipt")} description={t("features.travelExpense.receiptDesc")} />
          <FeatureCard icon={ShieldCheck} title={t("features.travelExpense.policyApprovals")} description={t("features.travelExpense.policyApprovalsDesc")} />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote={t("features.travelExpense.testimonialQuote")} name={t("features.travelExpense.testimonialName")} title={t("features.travelExpense.testimonialTitle")} company={t("features.travelExpense.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
