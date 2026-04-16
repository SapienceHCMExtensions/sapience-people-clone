import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { StickyFeatureNav } from "@/components/shared/StickyFeatureNav";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/custom-services")({
  head: () => ({ meta: [{ title: "Custom HR Services — Sapience HCM" }, { name: "description", content: "Project labor costing with unlimited project/job/activity creation, custom configurations, and white-label HR solutions tailored to your business." }, { property: "og:title", content: "Custom HR Services — Sapience HCM" }, { property: "og:description", content: "Project labor costing, custom configurations, and white-label solutions." }], links: getHreflangLinks("/features/custom-services") }),
  component: CustomServicesPage,
});

function CustomServicesPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.customServices.moreReasons");
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.customServices.projectLabor"), description: t("features.customServices.projectLaborDesc") },
    { number: "02", title: t("features.customServices.customConfig"), description: t("features.customServices.customConfigDesc") },
    { number: "03", title: t("features.customServices.whiteLabel"), description: t("features.customServices.whiteLabelDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.customServices.heroHeadline")} subHeadline={t("features.customServices.heroSub")} badge={t("features.customServices.badge")} />
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
      <CTABanner headline={t("features.customServices.customCta")} subHeadline={t("features.customServices.customCtaSub")} />
    </>
  );
}
