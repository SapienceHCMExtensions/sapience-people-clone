import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Building2, BarChart3, Settings, Users } from "lucide-react";

export const Route = createFileRoute("/solutions/medium-business")({
  head: () => ({ meta: [{ title: "HR for Medium Business — Sapience HCM" }, { name: "description", content: "Scalable HR platform for medium-sized businesses." }, { property: "og:title", content: "HR for Medium Business — Sapience HCM" }, { property: "og:description", content: "Scalable HR for medium businesses." }] }),
  component: () => (
    <SolutionTemplate
      badge="Medium Business"
      headline="Scale your HR as you grow"
      subHeadline="Purpose-built for companies navigating growth. Get the flexibility to customize workflows, the power to manage complexity, and the analytics to make smarter decisions."
      features={[
        { icon: Building2, title: "Multi-department Management", description: "Manage complex org structures with department-specific policies, workflows, and reporting." },
        { icon: BarChart3, title: "Advanced Analytics", description: "Custom dashboards, trend analysis, and predictive metrics to inform strategic HR decisions." },
        { icon: Settings, title: "Configurable Workflows", description: "Design approval chains, escalation rules, and automation that match your growing complexity." },
        { icon: Users, title: "Role-based Access", description: "Granular permissions ensure the right people see the right data across departments." },
      ]}
    />
  ),
});
