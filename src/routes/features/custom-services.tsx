import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Settings, Palette, Calculator } from "lucide-react";

export const Route = createFileRoute("/features/custom-services")({
  head: () => ({
    meta: [
      { title: "Custom HR Services — Sapience HCM" },
      { name: "description", content: "Project labor costing, customizable templates, branding, reports, and white-label HR solutions tailored to your business." },
      { property: "og:title", content: "Custom HR Services — Sapience HCM" },
      { property: "og:description", content: "Project labor costing, custom configurations, and white-label solutions." },
    ],
  }),
  component: CustomServicesPage,
});

function CustomServicesPage() {
  return (
    <>
      <HeroSection headline="HR solutions built around your business" subHeadline="Every organization is unique. Sapience HCM offers project labor costing, customizable templates, branded reports, and white-label deployment to match your specific requirements." badge="Custom Services" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Calculator} title="Project Labor Costing" description="Activity-based tracking, cost overheads allocation, project analytics, and financial integration for accurate labor cost management." />
          <FeatureCard icon={Settings} title="Custom Configurations" description="Customizable templates, branded reports, configurable forms, workflows, fields, and policies tailored to your specific needs." />
          <FeatureCard icon={Palette} title="White-Label Solutions" description="Deploy Sapience HCM under your own brand with custom themes, logos, domain configurations, and branded employee portals." />
        </div>
      </section>
      <CTABanner headline="Need a custom HR solution?" subHeadline="Talk to our team about building the perfect HR platform for your business." />
    </>
  );
}
