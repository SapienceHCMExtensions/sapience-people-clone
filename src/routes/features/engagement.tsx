import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/engagement")({
  head: () => ({ meta: [{ title: "Employee Engagement — Sapience HCM" }, { name: "description", content: "Boost employee morale with engagement surveys, eNPS, peer recognition, and a comprehensive self-service portal with managerial approvals." }, { property: "og:title", content: "Employee Engagement — Sapience HCM" }, { property: "og:description", content: "Engagement surveys, recognition, and self-service portal." }], links: getHreflangLinks("/features/engagement") }),
  component: EngagementPage,
});

function EngagementPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.engagement.moreReasons");
  const faq = (useTranslatedArray("features.engagement.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.engagement.engagementTitle"), description: t("features.engagement.engagementDesc") },
    { number: "02", title: t("features.engagement.selfService"), description: t("features.engagement.selfServiceDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.engagement.heroHeadline")} subHeadline={t("features.engagement.heroSub")} badge={t("features.engagement.badge")} />
      
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
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
