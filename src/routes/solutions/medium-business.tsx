import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Building2, BarChart3, Settings, Users } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/solutions/medium-business")({
  head: () => ({ meta: [{ title: "HR for Medium Business — Sapience HCM" }, { name: "description", content: "Scalable HR platform for medium-sized businesses." }, { property: "og:title", content: "HR for Medium Business — Sapience HCM" }, { property: "og:description", content: "Scalable HR for medium businesses." }], links: getHreflangLinks("/solutions/medium-business") }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.mediumBusiness.badge")}
        headline={t("solutions.mediumBusiness.headline")}
        subHeadline={t("solutions.mediumBusiness.subHeadline")}
        features={[
          { icon: Building2, title: t("solutions.mediumBusiness.multiDept"), description: t("solutions.mediumBusiness.multiDeptDesc") },
          { icon: BarChart3, title: t("solutions.mediumBusiness.advAnalytics"), description: t("solutions.mediumBusiness.advAnalyticsDesc") },
          { icon: Settings, title: t("solutions.mediumBusiness.configWorkflows"), description: t("solutions.mediumBusiness.configWorkflowsDesc") },
          { icon: Users, title: t("solutions.mediumBusiness.roleAccess"), description: t("solutions.mediumBusiness.roleAccessDesc") },
        ]}
      />
    );
  },
});
