import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Globe, Shield, BarChart3, Plug } from "lucide-react";

export const Route = createFileRoute("/solutions/enterprise")({
  head: () => ({ meta: [{ title: "Enterprise HR — Sapience HCM" }, { name: "description", content: "Enterprise-grade HR platform for large organizations." }, { property: "og:title", content: "Enterprise HR — Sapience HCM" }, { property: "og:description", content: "Enterprise-grade HR for large organizations." }] }),
  component: () => (
    <SolutionTemplate
      badge="Enterprise"
      headline="Enterprise HR without the complexity"
      subHeadline="Manage thousands of employees across countries with enterprise-grade security, compliance, and scalability — without the implementation headaches."
      features={[
        { icon: Globe, title: "Global Operations", description: "Multi-country, multi-currency, multi-language support with localized compliance for every region." },
        { icon: Shield, title: "Enterprise Security", description: "SOC2, ISO 27001, HIPAA compliance with SSO, MFA, and advanced threat protection." },
        { icon: BarChart3, title: "Executive Dashboards", description: "C-suite analytics with workforce planning, cost analysis, and strategic HR metrics." },
        { icon: Plug, title: "Enterprise Integrations", description: "Deep integrations with SAP, Oracle, Salesforce, and custom ERP systems via API." },
      ]}
    />
  ),
});
