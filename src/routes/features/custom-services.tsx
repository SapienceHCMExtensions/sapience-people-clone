import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Settings, Palette, Calculator, CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/custom-services")({
  head: () => ({ meta: [{ title: "Custom HR Services — Sapience HCM" }, { name: "description", content: "Project labor costing with unlimited project/job/activity creation, custom configurations, and white-label HR solutions tailored to your business." }, { property: "og:title", content: "Custom HR Services — Sapience HCM" }, { property: "og:description", content: "Project labor costing, custom configurations, and white-label solutions." }] }),
  component: CustomServicesPage,
});

function CustomServicesPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.customServices.moreReasons");

  return (
    <>
      <HeroSection headline={t("features.customServices.heroHeadline")} subHeadline={t("features.customServices.heroSub")} badge={t("features.customServices.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Calculator} title={t("features.customServices.projectLabor")} description={t("features.customServices.projectLaborDesc")} />
          <FeatureCard icon={Settings} title={t("features.customServices.customConfig")} description={t("features.customServices.customConfigDesc")} />
          <FeatureCard icon={Palette} title={t("features.customServices.whiteLabel")} description={t("features.customServices.whiteLabelDesc")} />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
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
