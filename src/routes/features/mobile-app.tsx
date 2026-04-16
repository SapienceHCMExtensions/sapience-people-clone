import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { StickyFeatureNav } from "@/components/shared/StickyFeatureNav";
import { CTABanner } from "@/components/shared/CTABanner";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/mobile-app")({
  head: () => ({ meta: [{ title: "Mobile App — Sapience HCM" }, { name: "description", content: "Access your HR platform on the go with Sapience HCM's mobile app for iOS and Android." }, { property: "og:title", content: "Mobile App — Sapience HCM" }, { property: "og:description", content: "HR on the go with mobile app for iOS and Android." }], links: getHreflangLinks("/features/mobile-app") }),
  component: MobileAppPage,
});

function MobileAppPage() {
  const t = useT();

  const features = [
    { number: "01", title: t("features.mobileApp.fullHr"), description: t("features.mobileApp.fullHrDesc") },
    { number: "02", title: t("features.mobileApp.pushNotif"), description: t("features.mobileApp.pushNotifDesc") },
    { number: "03", title: t("features.mobileApp.geoAttendance"), description: t("features.mobileApp.geoAttendanceDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.mobileApp.heroHeadline")} subHeadline={t("features.mobileApp.heroSub")} badge={t("features.mobileApp.badge")} />
      <StickyFeatureNav features={features} />
      <NumberedFeatureBlock features={features} />
      <CTABanner />
    </>
  );
}
