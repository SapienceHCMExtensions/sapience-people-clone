import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/retirement-separation")({
  head: () => ({ meta: [{ title: "Retirement & Separation — Sapience HCM" }, { name: "description", content: "Automate end of service settlements, gratuity calculations, leave settlement, asset clearance, and exit management per GCC labor laws." }, { property: "og:title", content: "Retirement & Separation — Sapience HCM" }, { property: "og:description", content: "Automated gratuity, EOS settlements, and exit management." }], links: getHreflangLinks("/features/retirement-separation") }),
  component: RetirementSeparationPage,
});

function RetirementSeparationPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.retirement.moreReasons");
  const faq = (useTranslatedArray("features.retirement.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.retirement.gratuity"), description: t("features.retirement.gratuityDesc") },
    { number: "02", title: t("features.retirement.arrears"), description: t("features.retirement.arrearsDesc") },
    { number: "03", title: t("features.retirement.leaveSettlement"), description: t("features.retirement.leaveSettlementDesc") },
    { number: "04", title: t("features.retirement.assetClearance"), description: t("features.retirement.assetClearanceDesc") },
    { number: "05", title: t("features.retirement.exitMgmt"), description: t("features.retirement.exitMgmtDesc") },
    { number: "06", title: t("features.retirement.eosSettlement"), description: t("features.retirement.eosSettlementDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.retirement.heroHeadline")} subHeadline={t("features.retirement.heroSub")} badge={t("features.retirement.badge")} />
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
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
