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

export const Route = createFileRoute("/features/payroll")({
  head: () => ({ meta: [{ title: "Payroll Management — Sapience HCM" }, { name: "description", content: "GCC & Levant payroll with WPS compliance, multi-currency support, GL integration, pay groups, accruals, provisions, retro pay, and end of service benefits." }, { property: "og:title", content: "Payroll Management — Sapience HCM" }, { property: "og:description", content: "GCC-localized payroll with WPS compliance, GL integration, and multi-currency support." }], links: getHreflangLinks("/features/payroll") }),
  component: PayrollPage,
});

function PayrollPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.payroll.moreReasons");
  const faq = (useTranslatedArray("features.payroll.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.payroll.payrollWps"), description: t("features.payroll.payrollWpsDesc") },
    { number: "02", title: t("features.payroll.payGroups"), description: t("features.payroll.payGroupsDesc") },
    { number: "03", title: t("features.payroll.glIntegration"), description: t("features.payroll.glIntegrationDesc") },
    { number: "04", title: t("features.payroll.accruals"), description: t("features.payroll.accrualsDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.payroll.heroHeadline")} subHeadline={t("features.payroll.heroSub")} badge={t("features.payroll.badge")} />
      <StickyFeatureNav features={features} />
      <NumberedFeatureBlock features={features} />
      <section ref={reasonsRef} className={`py-16 transition-all duration-700 ${reasonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote={t("features.payroll.testimonialQuote")} name={t("features.payroll.testimonialName")} title={t("features.payroll.testimonialTitle")} company={t("features.payroll.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
