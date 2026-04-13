import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Film, Users, Calendar, Award } from "lucide-react";

export const Route = createFileRoute("/solutions/media")({
  head: () => ({ meta: [{ title: "HR for Media Industry — Sapience HCM" }, { name: "description", content: "HR solutions for media and entertainment companies." }, { property: "og:title", content: "HR for Media — Sapience HCM" }, { property: "og:description", content: "HR solutions for media companies." }] }),
  component: () => (
    <SolutionTemplate
      badge="Media Industry"
      headline="HR for creative teams"
      subHeadline="Manage freelancers, track project timelines, and handle complex shift schedules for media and entertainment companies."
      features={[
        { icon: Film, title: "Project Workforce Planning", description: "Assign talent to productions, manage contracts, and track availability across multiple projects." },
        { icon: Users, title: "Freelancer Management", description: "Onboard freelancers quickly, manage contracts, and process payments efficiently." },
        { icon: Calendar, title: "Complex Scheduling", description: "Handle irregular shifts, overtime rules, and union compliance with flexible scheduling tools." },
        { icon: Award, title: "Talent Development", description: "Track skills, certifications, and career progression for creative professionals." },
      ]}
    />
  ),
});
