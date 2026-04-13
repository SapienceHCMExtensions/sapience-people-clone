import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Stethoscope, Shield, Clock, FileText } from "lucide-react";

export const Route = createFileRoute("/solutions/healthcare")({
  head: () => ({ meta: [{ title: "HR for Healthcare — Sapience HCM" }, { name: "description", content: "HR solutions for healthcare organizations." }, { property: "og:title", content: "HR for Healthcare — Sapience HCM" }, { property: "og:description", content: "HR solutions for healthcare organizations." }] }),
  component: () => (
    <SolutionTemplate
      badge="Healthcare"
      headline="HR for healthcare teams"
      subHeadline="Manage clinical and non-clinical staff, ensure HIPAA compliance, and handle complex scheduling for healthcare organizations."
      features={[
        { icon: Stethoscope, title: "Clinical Staff Management", description: "Track licenses, certifications, continuing education, and credentialing for medical professionals." },
        { icon: Shield, title: "HIPAA Compliance", description: "Built-in safeguards for patient data privacy, access controls, and audit trails." },
        { icon: Clock, title: "24/7 Shift Scheduling", description: "Manage round-the-clock rotations, on-call schedules, and overtime compliance." },
        { icon: FileText, title: "Credential Verification", description: "Automate license verification, expiration alerts, and renewal tracking." },
      ]}
    />
  ),
});
