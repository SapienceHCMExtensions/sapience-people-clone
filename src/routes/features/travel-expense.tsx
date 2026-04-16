import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { StickyFeatureNav } from "@/components/shared/StickyFeatureNav";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/travel-expense")({
  head: () => ({ meta: [{ title: "Travel & Expense Claims — Sapience HCM" }, { name: "description", content: "Streamline travel requests, multi-currency expense tracking, per diem calculations, receipt management, and policy-based approvals with Sapience HCM." }, { property: "og:title", content: "Travel & Expense Claims — Sapience HCM" }, { property: "og:description", content: "Automated travel & expense claim workflows with multi-currency tracking and policy-based approvals." }], links: getHreflangLinks("/features/travel-expense") }),
  component: TravelExpensePage,
});

function TravelExpensePage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.travelExpense.moreReasons");
  const faq = (useTranslatedArray("features.travelExpense.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.travelExpense.travelRequest"), description: t("features.travelExpense.travelRequestDesc") },
    { number: "02", title: t("features.travelExpense.multiCurrency"), description: t("features.travelExpense.multiCurrencyDesc") },
    { number: "03", title: t("features.travelExpense.perDiem"), description: t("features.travelExpense.perDiemDesc") },
    { number: "04", title: t("features.travelExpense.receipt"), description: t("features.travelExpense.receiptDesc") },
    { number: "05", title: t("features.travelExpense.policyApprovals"), description: t("features.travelExpense.policyApprovalsDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.travelExpense.heroHeadline")} subHeadline={t("features.travelExpense.heroSub")} badge={t("features.travelExpense.badge")} />
      <StickyFeatureNav features={features} />
      <NumberedFeatureBlock features={features} />
      <section ref={reasonsRef} className={`bg-soft-gray py-16 transition-all duration-700 ${reasonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
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
