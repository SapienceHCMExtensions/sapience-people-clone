import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { StickyFeatureNav } from "@/components/shared/StickyFeatureNav";
import { CTABanner } from "@/components/shared/CTABanner";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/integrations")({
  head: () => ({ meta: [{ title: "Integrations — Sapience HCM" }, { name: "description", content: "Integrate Sapience HCM with Sage 300, SAP S/4HANA, Dynamics 365, biometric devices, and more via REST API." }, { property: "og:title", content: "Integrations — Sapience HCM" }, { property: "og:description", content: "ERP integrations, REST API, and biometric device connectivity." }], links: getHreflangLinks("/features/integrations") }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  const t = useT();

  const features = [
    { number: "01", title: t("features.integrations.erp"), description: t("features.integrations.erpDesc") },
    { number: "02", title: t("features.integrations.restApi"), description: t("features.integrations.restApiDesc") },
    { number: "03", title: t("features.integrations.biometric"), description: t("features.integrations.biometricDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.integrations.heroHeadline")} subHeadline={t("features.integrations.heroSub")} badge={t("features.integrations.badge")} />
      <StickyFeatureNav features={features} />
      <NumberedFeatureBlock features={features} />
      <CTABanner />
    </>
  );
}
