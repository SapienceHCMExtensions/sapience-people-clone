import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/features/performance")({
  head: () => ({ meta: [{ title: "Performance & Development — Sapience HCM" }, { name: "description", content: "Drive employee growth with workflow-based evaluations, competency matrix, goal management, succession planning, training budget management, and certification tracking." }, { property: "og:title", content: "Performance & Development — Sapience HCM" }, { property: "og:description", content: "Performance evaluations, goal management, and training management." }] }),
  component: PerformancePage,
});

function PerformancePage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.performance.moreReasons");
  const faq = (useTranslatedArray("features.performance.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.performance.perfMgmt"), description: t("features.performance.perfMgmtDesc") },
    { number: "02", title: t("features.performance.compensation"), description: t("features.performance.compensationDesc") },
    { number: "03", title: t("features.performance.training"), description: t("features.performance.trainingDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.performance.heroHeadline")} subHeadline={t("features.performance.heroSub")} badge={t("features.performance.badge")} />
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
      <TestimonialBlock quote={t("features.performance.testimonialQuote")} name={t("features.performance.testimonialName")} title={t("features.performance.testimonialTitle")} company={t("features.performance.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
