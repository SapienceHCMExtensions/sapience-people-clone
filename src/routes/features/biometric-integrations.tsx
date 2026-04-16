import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/biometric-integrations")({
  head: () => ({
    meta: [
      { title: "Biometric Device Integration — Sapience HCM" },
      { name: "description", content: "Connect fingerprint, facial recognition, and RFID devices to Sapience HCM for real-time attendance tracking with geo-fencing and multi-location support." },
      { property: "og:title", content: "Biometric Device Integration — Sapience HCM" },
      { property: "og:description", content: "Fingerprint, facial recognition, RFID, and GPS attendance integration." },
    ],
    links: getHreflangLinks("/features/biometric-integrations"),
  }),
  component: BiometricIntegrationsPage,
});

function BiometricIntegrationsPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.biometricIntegrations.moreReasons");
  const faq = (useTranslatedArray("features.biometricIntegrations.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.biometricIntegrations.fingerprint"), description: t("features.biometricIntegrations.fingerprintDesc") },
    { number: "02", title: t("features.biometricIntegrations.facial"), description: t("features.biometricIntegrations.facialDesc") },
    { number: "03", title: t("features.biometricIntegrations.rfid"), description: t("features.biometricIntegrations.rfidDesc") },
    { number: "04", title: t("features.biometricIntegrations.geoFencing"), description: t("features.biometricIntegrations.geoFencingDesc") },
    { number: "05", title: t("features.biometricIntegrations.realTimeSync"), description: t("features.biometricIntegrations.realTimeSyncDesc") },
    { number: "06", title: t("features.biometricIntegrations.multiLocation"), description: t("features.biometricIntegrations.multiLocationDesc") },
  ];

  return (
    <>
      <HeroSection
        headline={t("features.biometricIntegrations.heroHeadline")}
        subHeadline={t("features.biometricIntegrations.heroSub")}
        badge={t("features.biometricIntegrations.badge")}
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
