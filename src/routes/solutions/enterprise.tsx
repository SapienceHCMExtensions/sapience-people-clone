import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Globe, Shield, BarChart3, Plug } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/solutions/enterprise")({
  head: () => ({ meta: [{ title: "Enterprise HR — Sapience HCM" }, { name: "description", content: "Enterprise-grade HR platform for large organizations." }, { property: "og:title", content: "Enterprise HR — Sapience HCM" }, { property: "og:description", content: "Enterprise-grade HR for large organizations." }] }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.enterprise.badge")}
        headline={t("solutions.enterprise.headline")}
        subHeadline={t("solutions.enterprise.subHeadline")}
        features={[
          { icon: Globe, title: t("solutions.enterprise.globalOps"), description: t("solutions.enterprise.globalOpsDesc") },
          { icon: Shield, title: t("solutions.enterprise.entSecurity"), description: t("solutions.enterprise.entSecurityDesc") },
          { icon: BarChart3, title: t("solutions.enterprise.execDashboards"), description: t("solutions.enterprise.execDashboardsDesc") },
          { icon: Plug, title: t("solutions.enterprise.entIntegrations"), description: t("solutions.enterprise.entIntegrationsDesc") },
        ]}
      />
    );
  },
});
