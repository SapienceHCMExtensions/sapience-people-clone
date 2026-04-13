import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Rocket, DollarSign, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/solutions/small-business")({
  head: () => ({ meta: [{ title: "HR for Small Business — Sapience HCM" }, { name: "description", content: "Affordable HR solution for small businesses." }, { property: "og:title", content: "HR for Small Business — Sapience HCM" }, { property: "og:description", content: "Affordable HR for small businesses." }] }),
  component: () => (
    <SolutionTemplate
      badge="Small Business"
      headline="Big HR power for small teams"
      subHeadline="Get enterprise-grade HR tools at a price that makes sense for growing businesses. Set up in minutes, not months."
      features={[
        { icon: Rocket, title: "Quick Setup", description: "Get started in minutes with pre-configured templates, guided onboarding, and intuitive setup wizards." },
        { icon: DollarSign, title: "Affordable Pricing", description: "Pay only for what you need. Scale up modules as your team grows without breaking the budget." },
        { icon: Users, title: "Self-Service Portal", description: "Empower employees to manage their own profiles, submit requests, and access documents." },
        { icon: Zap, title: "Automation from Day One", description: "Automate leave approvals, attendance tracking, and payroll from the start." },
      ]}
    />
  ),
});
