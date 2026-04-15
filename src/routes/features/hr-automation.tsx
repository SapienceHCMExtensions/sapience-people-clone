import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Zap, Bell } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/hr-automation")({
  head: () => ({ meta: [{ title: "HR Automation — Sapience HCM" }, { name: "description", content: "Automate approval workflows with conditional logic, escalation rules, and event-driven smart notifications." }, { property: "og:title", content: "HR Automation — Sapience HCM" }, { property: "og:description", content: "Approval workflows, conditional logic, and smart notifications." }] }),
  component: HRAutomationPage,
});

function HRAutomationPage() {
  const t = useT();
  const faq = (useTranslatedArray("features.hrAutomation.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.hrAutomation.heroHeadline")} subHeadline={t("features.hrAutomation.heroSub")} badge={t("features.hrAutomation.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon={Zap} title={t("features.hrAutomation.workflow")} description={t("features.hrAutomation.workflowDesc")} />
          <FeatureCard icon={Bell} title={t("features.hrAutomation.notifications")} description={t("features.hrAutomation.notificationsDesc")} />
        </div>
      </section>
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
