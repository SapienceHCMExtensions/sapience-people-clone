import { createFileRoute } from "@tanstack/react-router";
import { SolutionTemplate } from "@/components/shared/SolutionTemplate";
import { Stethoscope, Shield, Clock, FileText } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/solutions/healthcare")({
  head: () => ({ meta: [{ title: "HR for Healthcare — Sapience HCM" }, { name: "description", content: "HR solutions for healthcare organizations." }, { property: "og:title", content: "HR for Healthcare — Sapience HCM" }, { property: "og:description", content: "HR solutions for healthcare organizations." }] }),
  component: () => {
    const t = useT();
    return (
      <SolutionTemplate
        badge={t("solutions.healthcare.badge")}
        headline={t("solutions.healthcare.headline")}
        subHeadline={t("solutions.healthcare.subHeadline")}
        features={[
          { icon: Stethoscope, title: t("solutions.healthcare.clinicalStaff"), description: t("solutions.healthcare.clinicalStaffDesc") },
          { icon: Shield, title: t("solutions.healthcare.hipaa"), description: t("solutions.healthcare.hipaaDesc") },
          { icon: Clock, title: t("solutions.healthcare.shiftScheduling"), description: t("solutions.healthcare.shiftSchedulingDesc") },
          { icon: FileText, title: t("solutions.healthcare.credentialVerif"), description: t("solutions.healthcare.credentialVerifDesc") },
        ]}
      />
    );
  },
});
