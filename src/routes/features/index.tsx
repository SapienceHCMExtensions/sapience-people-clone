import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Briefcase, Award, DollarSign, Heart, Bot, Smartphone, Plug, Settings, Zap, Plane } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "All Features — Sapience HCM" },
      { name: "description", content: "Explore the complete suite of HR features offered by Sapience HCM — from hire to retire." },
      { property: "og:title", content: "All Features — Sapience HCM" },
      { property: "og:description", content: "Explore the complete suite of HR features offered by Sapience HCM." },
    ],
  }),
  component: AllFeaturesPage,
});

const allFeatures = [
  { icon: Briefcase, title: "Hiring & Onboarding", description: "Position requisition, interview scheduling, career page integration, and automated onboarding cycles.", link: "/features/hiring-onboarding" },
  { icon: Users, title: "Core HR", description: "Employee management, biometric attendance, shift rostering, leave, timesheets, HR help desk, and analytics.", link: "/features/core-hr" },
  { icon: Award, title: "Performance & Development", description: "360° feedback, goal cascading, compensation & benefits, and skill-based training management.", link: "/features/performance" },
  { icon: DollarSign, title: "Payroll", description: "GCC-localized payroll with WPS compliance, multi-currency support, GL integration, and end of service benefits.", link: "/features/payroll" },
  { icon: Plane, title: "Travel & Expense", description: "Automated travel requests, multi-currency expense tracking, per diem calculations, and receipt management.", link: "/features/travel-expense" },
  { icon: Heart, title: "Employee Engagement", description: "Pulse surveys, eNPS, peer recognition, and a mobile-ready self-service portal.", link: "/features/engagement" },
  { icon: Zap, title: "HR Automation", description: "Approval workflows, conditional logic, escalation rules, and smart notifications.", link: "/features/hr-automation" },
  { icon: Settings, title: "Custom Services", description: "Project labor costing, custom configurations, and white-label solutions.", link: "/features/custom-services" },
  { icon: Bot, title: "HR Chatbot", description: "AI-powered assistant for instant HR support.", link: "/features/hr-chatbot" },
  { icon: Smartphone, title: "Mobile App", description: "Full HR capabilities on iOS and Android.", link: "/features/mobile-app" },
  { icon: Plug, title: "Integrations", description: "Sage 300, SAP, Dynamics 365, biometric devices, and REST API.", link: "/features/integrations" },
];

function AllFeaturesPage() {
  return (
    <>
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy">All Features</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the full suite of tools that make Sapience HCM the most comprehensive HR platform for modern businesses.
          </p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} link={f.link} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
