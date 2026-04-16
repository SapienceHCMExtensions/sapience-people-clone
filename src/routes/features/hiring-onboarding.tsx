import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";

import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/hiring-onboarding")({
  head: () => ({ meta: [{ title: "Hiring & Onboarding — Sapience HCM" }, { name: "description", content: "Streamline recruitment with manpower planning, candidate management, resume search, recruitment agency tracking, and automated onboarding workflows." }, { property: "og:title", content: "Hiring & Onboarding — Sapience HCM" }, { property: "og:description", content: "Manpower planning, recruitment management, and automated onboarding." }], links: getHreflangLinks("/features/hiring-onboarding") }),
  component: HiringOnboardingPage,
});

function HiringOnboardingPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.hiring.moreReasons");
  const faq = (useTranslatedArray("features.hiring.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.hiring.recruitment"), description: t("features.hiring.recruitmentDesc") },
    { number: "02", title: t("features.hiring.pipeline"), description: t("features.hiring.pipelineDesc") },
    { number: "03", title: t("features.hiring.onboarding"), description: t("features.hiring.onboardingDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.hiring.heroHeadline")} subHeadline={t("features.hiring.heroSub")} badge={t("features.hiring.badge")} />
      
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
      <TestimonialBlock quote={t("features.hiring.testimonialQuote")} name={t("features.hiring.testimonialName")} title={t("features.hiring.testimonialTitle")} company={t("features.hiring.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
