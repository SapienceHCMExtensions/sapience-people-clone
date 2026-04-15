import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Plug, RefreshCw, Fingerprint } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/features/integrations")({
  head: () => ({ meta: [{ title: "Integrations — Sapience HCM" }, { name: "description", content: "Integrate Sapience HCM with Sage 300, SAP S/4HANA, Dynamics 365, biometric devices, and more via REST API." }, { property: "og:title", content: "Integrations — Sapience HCM" }, { property: "og:description", content: "ERP integrations, REST API, and biometric device connectivity." }] }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  const t = useT();
  return (
    <>
      <HeroSection headline={t("features.integrations.heroHeadline")} subHeadline={t("features.integrations.heroSub")} badge={t("features.integrations.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Plug} title={t("features.integrations.erp")} description={t("features.integrations.erpDesc")} />
          <FeatureCard icon={RefreshCw} title={t("features.integrations.restApi")} description={t("features.integrations.restApiDesc")} />
          <FeatureCard icon={Fingerprint} title={t("features.integrations.biometric")} description={t("features.integrations.biometricDesc")} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
