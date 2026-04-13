import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Plug, RefreshCw, Database } from "lucide-react";

export const Route = createFileRoute("/features/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Sapience HCM" },
      { name: "description", content: "Connect Sapience HCM with your favorite business tools and existing software stack." },
      { property: "og:title", content: "Integrations — Sapience HCM" },
      { property: "og:description", content: "Connect with your favorite business tools." },
    ],
  }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <>
      <HeroSection headline="Connect everything. Automate everything." subHeadline="Sapience HCM integrates with the tools you already use — accounting, collaboration, ERP, and more — for a seamless HR ecosystem." badge="Integrations" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Plug} title="Pre-built Connectors" description="Ready-made integrations with popular tools like Slack, Microsoft Teams, QuickBooks, and more." />
          <FeatureCard icon={RefreshCw} title="REST API" description="Build custom integrations with our comprehensive API documentation and developer tools." />
          <FeatureCard icon={Database} title="Data Sync" description="Bi-directional data synchronization ensures consistency across all connected systems." />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
