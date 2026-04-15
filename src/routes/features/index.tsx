import { createFileRoute } from "@tanstack/react-router";
import { Users, Briefcase, Award, DollarSign, Heart, Bot, Smartphone, Plug, Settings, Zap, Plane, Building2, UserMinus } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/features/")({
  head: () => ({ meta: [{ title: "All Features — Sapience HCM" }, { name: "description", content: "Explore the complete suite of HR features offered by Sapience HCM — from hire to retire." }, { property: "og:title", content: "All Features — Sapience HCM" }, { property: "og:description", content: "Explore the complete suite of HR features offered by Sapience HCM." }] }),
  component: AllFeaturesPage,
});

function AllFeaturesPage() {
  const t = useT();

  const allFeatures = [
    { icon: Building2, title: t("features.allFeatures.orgMgmt"), description: t("features.allFeatures.orgMgmtDesc"), link: "/features/organization-management" },
    { icon: Briefcase, title: t("features.allFeatures.hiring"), description: t("features.allFeatures.hiringDesc"), link: "/features/hiring-onboarding" },
    { icon: Users, title: t("features.allFeatures.coreHr"), description: t("features.allFeatures.coreHrDesc"), link: "/features/core-hr" },
    { icon: Award, title: t("features.allFeatures.performance"), description: t("features.allFeatures.performanceDesc"), link: "/features/performance" },
    { icon: DollarSign, title: t("features.allFeatures.payroll"), description: t("features.allFeatures.payrollDesc"), link: "/features/payroll" },
    { icon: Plane, title: t("features.allFeatures.travelExpense"), description: t("features.allFeatures.travelExpenseDesc"), link: "/features/travel-expense" },
    { icon: Heart, title: t("features.allFeatures.engagement"), description: t("features.allFeatures.engagementDesc"), link: "/features/engagement" },
    { icon: UserMinus, title: t("features.allFeatures.retirement"), description: t("features.allFeatures.retirementDesc"), link: "/features/retirement-separation" },
    { icon: Zap, title: t("features.allFeatures.hrAutomation"), description: t("features.allFeatures.hrAutomationDesc"), link: "/features/hr-automation" },
    { icon: Settings, title: t("features.allFeatures.customServices"), description: t("features.allFeatures.customServicesDesc"), link: "/features/custom-services" },
    { icon: Bot, title: t("features.allFeatures.hrChatbot"), description: t("features.allFeatures.hrChatbotDesc"), link: "/features/hr-chatbot" },
    { icon: Smartphone, title: t("features.allFeatures.mobileApp"), description: t("features.allFeatures.mobileAppDesc"), link: "/features/mobile-app" },
    { icon: Plug, title: t("features.allFeatures.integrations"), description: t("features.allFeatures.integrationsDesc"), link: "/features/integrations" },
  ];

  return (
    <>
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy">{t("features.allFeatures.title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t("features.allFeatures.subtitle")}</p>
        </div>
      </section>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFeatures.map((f) => (
              <FeatureCard key={f.link} icon={f.icon} title={f.title} description={f.description} link={f.link} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
