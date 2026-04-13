import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, UserMinus, Briefcase, Award, BookOpen, DollarSign, Plane, MessageSquare, Heart, Bot, Smartphone, Plug, Settings, Zap, Layers } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";

export const Route = createFileRoute("/features/")({
  head: () => ({
    meta: [
      { title: "All Features — Sapience HCM" },
      { name: "description", content: "Explore the complete suite of HR features offered by Sapience HCM." },
      { property: "og:title", content: "All Features — Sapience HCM" },
      { property: "og:description", content: "Explore the complete suite of HR features offered by Sapience HCM." },
    ],
  }),
  component: AllFeaturesPage,
});

const allFeatures = [
  { icon: Briefcase, title: "Hiring & Onboarding", description: "Integrated recruitment and seamless employee onboarding.", link: "/features/hiring-onboarding" },
  { icon: Users, title: "Core HR", description: "Employee management, attendance, leave, timesheets, and more.", link: "/features/core-hr" },
  { icon: Award, title: "Performance & Development", description: "Performance reviews, compensation, and learning management.", link: "/features/performance" },
  { icon: DollarSign, title: "Payroll & Expense", description: "Automated payroll processing and expense management.", link: "/features/payroll" },
  { icon: Heart, title: "Employee Engagement", description: "Engagement surveys, recognition, and business chat.", link: "/features/engagement" },
  { icon: Zap, title: "HR Automation", description: "Smart workflows and automated HR processes.", link: "/features/hr-automation" },
  { icon: Settings, title: "Custom Services", description: "Tailored HR solutions for your unique needs.", link: "/features/custom-services" },
  { icon: Bot, title: "HR Chatbot", description: "AI-powered assistant for instant HR support.", link: "/features/hr-chatbot" },
  { icon: Smartphone, title: "Mobile App", description: "Full HR capabilities on iOS and Android.", link: "/features/mobile-app" },
  { icon: Plug, title: "Integrations", description: "Connect with your favorite business tools.", link: "/features/integrations" },
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
