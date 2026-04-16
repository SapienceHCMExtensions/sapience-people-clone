import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Globe, Shield, Code, Zap } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/solutions/it")({
  head: () => ({ meta: [{ title: "HR for IT Industry — Sapience HCM" }, { name: "description", content: "HR solutions designed for IT companies." }, { property: "og:title", content: "HR for IT Industry — Sapience HCM" }, { property: "og:description", content: "HR solutions designed for IT companies." }], links: getHreflangLinks("/solutions/it") }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.it.badge")}
        headline={t("solutions.it.headline")}
        subHeadline={t("solutions.it.subHeadline")}
        features={[
          { icon: Code, title: t("solutions.it.projectTimesheets"), description: t("solutions.it.projectTimesheetsDesc") },
          { icon: Globe, title: t("solutions.it.remoteWorkforce"), description: t("solutions.it.remoteWorkforceDesc") },
          { icon: Shield, title: t("solutions.it.compliance"), description: t("solutions.it.complianceDesc") },
          { icon: Zap, title: t("solutions.it.agileHr"), description: t("solutions.it.agileHrDesc") },
        ]}
      />
    );
  },
});
