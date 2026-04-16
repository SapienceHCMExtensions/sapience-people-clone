import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";

import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { useT, useTranslatedArray } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/hr-automation")({
  head: () => ({ meta: [{ title: "HR Automation — Sapience HCM" }, { name: "description", content: "Automate approval workflows with conditional logic, escalation rules, and event-driven smart notifications." }, { property: "og:title", content: "HR Automation — Sapience HCM" }, { property: "og:description", content: "Approval workflows, conditional logic, and smart notifications." }], links: getHreflangLinks("/features/hr-automation") }),
  component: HRAutomationPage,
});

function HRAutomationPage() {
  const t = useT();
  const faq = (useTranslatedArray("features.hrAutomation.faq") as unknown) as { question: string; answer: string }[];

  const features = [
    { number: "01", title: t("features.hrAutomation.workflow"), description: t("features.hrAutomation.workflowDesc") },
    { number: "02", title: t("features.hrAutomation.notifications"), description: t("features.hrAutomation.notificationsDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.hrAutomation.heroHeadline")} subHeadline={t("features.hrAutomation.heroSub")} badge={t("features.hrAutomation.badge")} />
      
      <NumberedFeatureBlock features={features} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
