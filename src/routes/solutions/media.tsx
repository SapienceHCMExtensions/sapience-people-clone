import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Film, Users, Calendar, Award } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/solutions/media")({
  head: () => ({ meta: [{ title: "HR for Media Industry — Sapience HCM" }, { name: "description", content: "HR solutions for media and entertainment companies." }, { property: "og:title", content: "HR for Media — Sapience HCM" }, { property: "og:description", content: "HR solutions for media companies." }] }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.media.badge")}
        headline={t("solutions.media.headline")}
        subHeadline={t("solutions.media.subHeadline")}
        features={[
          { icon: Film, title: t("solutions.media.projectPlanning"), description: t("solutions.media.projectPlanningDesc") },
          { icon: Users, title: t("solutions.media.freelancer"), description: t("solutions.media.freelancerDesc") },
          { icon: Calendar, title: t("solutions.media.complexScheduling"), description: t("solutions.media.complexSchedulingDesc") },
          { icon: Award, title: t("solutions.media.talentDev"), description: t("solutions.media.talentDevDesc") },
        ]}
      />
    );
  },
});
