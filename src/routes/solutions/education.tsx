import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { GraduationCap, BookOpen, Users, BarChart3 } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/solutions/education")({
  head: () => ({ meta: [{ title: "HR for Education — Sapience HCM" }, { name: "description", content: "HR solutions for educational institutions." }, { property: "og:title", content: "HR for Education — Sapience HCM" }, { property: "og:description", content: "HR solutions for educational institutions." }] }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.education.badge")}
        headline={t("solutions.education.headline")}
        subHeadline={t("solutions.education.subHeadline")}
        features={[
          { icon: GraduationCap, title: t("solutions.education.faculty"), description: t("solutions.education.facultyDesc") },
          { icon: BookOpen, title: t("solutions.education.profDev"), description: t("solutions.education.profDevDesc") },
          { icon: Users, title: t("solutions.education.multiCampus"), description: t("solutions.education.multiCampusDesc") },
          { icon: BarChart3, title: t("solutions.education.academicCal"), description: t("solutions.education.academicCalDesc") },
        ]}
      />
    );
  },
});
