import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Smartphone, Bell, MapPin } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/features/mobile-app")({
  head: () => ({ meta: [{ title: "Mobile App — Sapience HCM" }, { name: "description", content: "Access your HR platform on the go with Sapience HCM's mobile app for iOS and Android." }, { property: "og:title", content: "Mobile App — Sapience HCM" }, { property: "og:description", content: "HR on the go with mobile app for iOS and Android." }] }),
  component: MobileAppPage,
});

function MobileAppPage() {
  const t = useT();
  return (
    <>
      <HeroSection headline={t("features.mobileApp.heroHeadline")} subHeadline={t("features.mobileApp.heroSub")} badge={t("features.mobileApp.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Smartphone} title={t("features.mobileApp.fullHr")} description={t("features.mobileApp.fullHrDesc")} />
          <FeatureCard icon={Bell} title={t("features.mobileApp.pushNotif")} description={t("features.mobileApp.pushNotifDesc")} />
          <FeatureCard icon={MapPin} title={t("features.mobileApp.geoAttendance")} description={t("features.mobileApp.geoAttendanceDesc")} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
