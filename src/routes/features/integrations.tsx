import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Plug, RefreshCw, Fingerprint } from "lucide-react";

export const Route = createFileRoute("/features/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — Sapience HCM" },
      { name: "description", content: "Integrate Sapience HCM with Sage 300, SAP S/4HANA, Dynamics 365, biometric devices, and more via REST API." },
      { property: "og:title", content: "Integrations — Sapience HCM" },
      { property: "og:description", content: "ERP integrations, REST API, and biometric device connectivity." },
    ],
  }),
  component: IntegrationsPage,
});

function IntegrationsPage() {
  return (
    <>
      <HeroSection headline="Connect everything. Automate everything." subHeadline="Sapience HCM integrates with leading ERP systems — Sage 300, SAP S/4HANA, SAP Business One, Dynamics 365 Business Central, Dynamics 365, and Sage X3 — plus biometric devices and custom APIs." badge="Integrations" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Plug} title="ERP Integrations" description="Pre-built connectors for Sage 300, SAP S/4HANA, SAP Business One, Dynamics 365 Business Central, Dynamics 365, and Sage X3." />
          <FeatureCard icon={RefreshCw} title="REST API" description="Build custom integrations with comprehensive API documentation, bi-directional data sync, and developer tools." />
          <FeatureCard icon={Fingerprint} title="Biometric Device Integration" description="Connect biometric attendance terminals — fingerprint, facial recognition, and RFID — for real-time attendance tracking." />
        </div>
      </section>
      <CTABanner />
    </>
  );
}
