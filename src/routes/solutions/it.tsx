import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Globe, Shield, Code, Zap } from "lucide-react";

export const Route = createFileRoute("/solutions/it")({
  head: () => ({ meta: [{ title: "HR for IT Industry — Sapience HCM" }, { name: "description", content: "HR solutions designed for IT companies." }, { property: "og:title", content: "HR for IT Industry — Sapience HCM" }, { property: "og:description", content: "HR solutions designed for IT companies." }] }),
  component: () => (
    <SolutionTemplate
      badge="IT Industry"
      headline="HR built for tech teams"
      subHeadline="Manage distributed engineering teams, track project-based timesheets, and automate compliance for the fast-paced IT industry."
      features={[
        { icon: Code, title: "Project-based Timesheets", description: "Track billable hours across projects, clients, and sprints with seamless timesheet integration." },
        { icon: Globe, title: "Remote Workforce Management", description: "Manage distributed teams across time zones with geo-fenced attendance and virtual onboarding." },
        { icon: Shield, title: "Compliance Automation", description: "Stay compliant with industry regulations, data privacy laws, and certification tracking." },
        { icon: Zap, title: "Agile HR Workflows", description: "Configure approval workflows that match your agile processes and sprint cycles." },
      ]}
    />
  ),
});
