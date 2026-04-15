import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { Settings, Palette, Calculator, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/custom-services")({
  head: () => ({
    meta: [
      { title: "Custom HR Services — Sapience HCM" },
      { name: "description", content: "Project labor costing with unlimited project/job/activity creation, custom configurations, and white-label HR solutions tailored to your business." },
      { property: "og:title", content: "Custom HR Services — Sapience HCM" },
      { property: "og:description", content: "Project labor costing, custom configurations, and white-label solutions." },
    ],
  }),
  component: CustomServicesPage,
});

function CustomServicesPage() {
  return (
    <>
      <HeroSection headline="HR solutions built around your business" subHeadline="Every organization is unique. Sapience HCM offers unlimited project/job/activity creation, time-based cost distribution, employee overhead allocation, and white-label deployment to match your specific requirements." badge="Custom Services" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Calculator} title="Project Labor Costing" description="Unlimited Project/Job/Activity creation. Activity and Job can be independently linked to Project. Control on estimated cost and time schedule. Multiple activity/job/project allocation to employee for same day. Distribution of employee overheads based on time spent. Cost distribution for regular pay and overtime to project on actual time." />
          <FeatureCard icon={Settings} title="Custom Configurations" description="Customizable templates, branded reports, configurable forms, workflows, fields, and policies tailored to your specific needs." />
          <FeatureCard icon={Palette} title="White-Label Solutions" description="Deploy Sapience HCM under your own brand with custom themes, logos, domain configurations, and branded employee portals." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Unlimited project/job/activity creation", "Independent job-project linking", "Estimated cost & time control", "Multi-allocation per employee/day", "Overhead distribution by time", "Cost distribution on actual time"].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABanner headline="Need a custom HR solution?" subHeadline="Talk to our team about building the perfect HR platform for your business." />
    </>
  );
}
