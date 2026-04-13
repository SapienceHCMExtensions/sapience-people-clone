import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Landmark, Shield, BarChart3, FileText } from "lucide-react";

export const Route = createFileRoute("/solutions/finance")({
  head: () => ({ meta: [{ title: "HR for Finance — Sapience HCM" }, { name: "description", content: "HR solutions for financial services." }, { property: "og:title", content: "HR for Finance — Sapience HCM" }, { property: "og:description", content: "HR solutions for financial services." }] }),
  component: () => (
    <SolutionTemplate
      badge="Finance"
      headline="HR for financial services"
      subHeadline="Meet regulatory requirements, manage compensation structures, and ensure compliance for banks, insurance, and financial institutions."
      features={[
        { icon: Landmark, title: "Regulatory Compliance", description: "Stay compliant with banking regulations, FINRA requirements, and industry-specific mandates." },
        { icon: Shield, title: "Data Security", description: "Enterprise-grade security with SOC2 compliance, encryption, and role-based access controls." },
        { icon: BarChart3, title: "Compensation Analytics", description: "Benchmark compensation, analyze pay equity, and manage complex bonus structures." },
        { icon: FileText, title: "Audit-Ready Records", description: "Maintain complete audit trails and documentation for regulatory examinations." },
      ]}
    />
  ),
});
