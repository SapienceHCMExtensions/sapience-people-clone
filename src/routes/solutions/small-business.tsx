import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Rocket, DollarSign, Users, Zap } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/solutions/small-business")({
  head: () => ({ meta: [{ title: "HR for Small Business — Sapience HCM" }, { name: "description", content: "Affordable HR solution for small businesses." }, { property: "og:title", content: "HR for Small Business — Sapience HCM" }, { property: "og:description", content: "Affordable HR for small businesses." }], links: getHreflangLinks("/solutions/small-business") }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.smallBusiness.badge")}
        headline={t("solutions.smallBusiness.headline")}
        subHeadline={t("solutions.smallBusiness.subHeadline")}
        features={[
          { icon: Rocket, title: t("solutions.smallBusiness.quickSetup"), description: t("solutions.smallBusiness.quickSetupDesc") },
          { icon: DollarSign, title: t("solutions.smallBusiness.affordablePricing"), description: t("solutions.smallBusiness.affordablePricingDesc") },
          { icon: Users, title: t("solutions.smallBusiness.selfService"), description: t("solutions.smallBusiness.selfServiceDesc") },
          { icon: Zap, title: t("solutions.smallBusiness.automationDayOne"), description: t("solutions.smallBusiness.automationDayOneDesc") },
        ]}
      />
    );
  },
});
