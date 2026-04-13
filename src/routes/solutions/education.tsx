import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { GraduationCap, BookOpen, Users, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/solutions/education")({
  head: () => ({ meta: [{ title: "HR for Education — Sapience HCM" }, { name: "description", content: "HR solutions for educational institutions." }, { property: "og:title", content: "HR for Education — Sapience HCM" }, { property: "og:description", content: "HR solutions for educational institutions." }] }),
  component: () => (
    <SolutionTemplate
      badge="Education"
      headline="HR for educational institutions"
      subHeadline="Manage faculty, administrative staff, and adjuncts with tools designed for the unique needs of schools and universities."
      features={[
        { icon: GraduationCap, title: "Faculty Management", description: "Track tenure, certifications, research grants, and teaching loads for academic staff." },
        { icon: BookOpen, title: "Professional Development", description: "Manage continuing education credits, conference attendance, and certification renewals." },
        { icon: Users, title: "Multi-campus Support", description: "Centralize HR operations across multiple campuses, departments, and locations." },
        { icon: BarChart3, title: "Academic Calendar Integration", description: "Align HR processes with academic terms, breaks, and enrollment cycles." },
      ]}
    />
  ),
});
