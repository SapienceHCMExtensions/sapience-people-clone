import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Landmark, Shield, BarChart3, FileText } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/solutions/finance")({
  head: () => ({ meta: [{ title: "HR for Finance — Sapience HCM" }, { name: "description", content: "HR solutions for financial services." }, { property: "og:title", content: "HR for Finance — Sapience HCM" }, { property: "og:description", content: "HR solutions for financial services." }], links: getHreflangLinks("/solutions/finance") }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.finance.badge")}
        headline={t("solutions.finance.headline")}
        subHeadline={t("solutions.finance.subHeadline")}
        features={[
          { icon: Landmark, title: t("solutions.finance.regulatory"), description: t("solutions.finance.regulatoryDesc") },
          { icon: Shield, title: t("solutions.finance.dataSecurity"), description: t("solutions.finance.dataSecurityDesc") },
          { icon: BarChart3, title: t("solutions.finance.compAnalytics"), description: t("solutions.finance.compAnalyticsDesc") },
          { icon: FileText, title: t("solutions.finance.auditRecords"), description: t("solutions.finance.auditRecordsDesc") },
        ]}
      />
    );
  },
});
