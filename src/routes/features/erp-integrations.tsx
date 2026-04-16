import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/erp-integrations")({
  head: () => ({
    meta: [
      { title: "ERP Integrations — Sapience HCM" },
      { name: "description", content: "Integrate Sapience HCM with Sage 300, SAP S/4HANA, Dynamics 365, Sage X3, and more. Real-time GL sync, journal posting, and bi-directional data flow." },
      { property: "og:title", content: "ERP Integrations — Sapience HCM" },
      { property: "og:description", content: "Pre-built ERP connectors for Sage, SAP, and Microsoft Dynamics." },
    ],
    links: getHreflangLinks("/features/erp-integrations"),
  }),
  component: ErpIntegrationsPage,
});

function ErpIntegrationsPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.erpIntegrations.moreReasons");
  const faq = (useTranslatedArray("features.erpIntegrations.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.erpIntegrations.sage300"), description: t("features.erpIntegrations.sage300Desc") },
    { number: "02", title: t("features.erpIntegrations.sap"), description: t("features.erpIntegrations.sapDesc") },
    { number: "03", title: t("features.erpIntegrations.dynamics"), description: t("features.erpIntegrations.dynamicsDesc") },
    { number: "04", title: t("features.erpIntegrations.sageX3"), description: t("features.erpIntegrations.sageX3Desc") },
    { number: "05", title: t("features.erpIntegrations.glSync"), description: t("features.erpIntegrations.glSyncDesc") },
    { number: "06", title: t("features.erpIntegrations.realTimeSync"), description: t("features.erpIntegrations.realTimeSyncDesc") },
  ];

  return (
    <>
      <HeroSection
        headline={t("features.erpIntegrations.heroHeadline")}
        subHeadline={t("features.erpIntegrations.heroSub")}
        badge={t("features.erpIntegrations.badge")}
      />

      <NumberedFeatureBlock features={features} />

      <section ref={reasonsRef} className={`py-16 transition-all duration-700 ${reasonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3" style={{ animationDelay: `${i * 80}ms` }}>
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
