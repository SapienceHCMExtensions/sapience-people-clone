import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Smartphone, Bell, MapPin } from "lucide-react";

export const Route = createFileRoute("/features/mobile-app")({
  head: () => ({
    meta: [
      { title: "Mobile App — Sapience HCM" },
      { name: "description", content: "Access your HR platform on the go with Sapience HCM's mobile app for iOS and Android." },
      { property: "og:title", content: "Mobile App — Sapience HCM" },
      { property: "og:description", content: "HR on the go with mobile app for iOS and Android." },
    ],
  }),
  component: MobileAppPage,
});

function MobileAppPage() {
  return (
    <>
      <HeroSection headline="HR in your pocket" subHeadline="Empower employees and managers with a full-featured mobile app. Mark attendance, approve leaves, check payslips, and stay connected — anytime, anywhere." badge="Mobile App" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Smartphone} title="Full HR on Mobile" description="Access all core HR features including attendance, leave, timesheets, and directory from your phone." />
          <FeatureCard icon={Bell} title="Push Notifications" description="Stay updated with real-time alerts for approvals, announcements, and important HR events." />
          <FeatureCard icon={MapPin} title="Geo-fenced Attendance" description="Mark attendance with GPS verification and geo-fencing for field and remote employees." />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
