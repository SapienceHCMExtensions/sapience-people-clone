import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Settings, Wrench, Palette } from "lucide-react";

export const Route = createFileRoute("/features/custom-services")({
  head: () => ({
    meta: [
      { title: "Custom HR Services — Sapience HCM" },
      { name: "description", content: "Tailored HR solutions designed to fit your unique business requirements." },
      { property: "og:title", content: "Custom HR Services — Sapience HCM" },
      { property: "og:description", content: "Tailored HR solutions for your unique business needs." },
    ],
  }),
  component: CustomServicesPage,
});

function CustomServicesPage() {
  return (
    <>
      <HeroSection headline="HR solutions built around your business" subHeadline="Every organization is unique. Sapience HCM offers tailored configurations, custom modules, and dedicated support to match your specific HR requirements." badge="Custom Services" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Settings} title="Custom Configurations" description="Tailor every aspect of the platform — forms, workflows, fields, and policies — to your specific needs." />
          <FeatureCard icon={Wrench} title="Custom Development" description="Need a unique module? Our team builds bespoke HR solutions that integrate seamlessly with the platform." />
          <FeatureCard icon={Palette} title="White-Label Solutions" description="Deploy Sapience HCM under your own brand with custom themes, logos, and domain configurations." />
        </div>
      </section>
      <CTABanner headline="Need a custom HR solution?" subHeadline="Talk to our team about building the perfect HR platform for your business." />
    </>
  );
}
