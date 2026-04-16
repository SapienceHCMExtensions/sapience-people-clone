import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/hr-chatbot")({
  head: () => ({ meta: [{ title: "HR Chatbot — Sapience HCM" }, { name: "description", content: "AI-powered HR chatbot for instant employee support and self-service." }, { property: "og:title", content: "HR Chatbot — Sapience HCM" }, { property: "og:description", content: "AI-powered chatbot for instant HR support." }] }),
  component: HRChatbotPage,
});

function HRChatbotPage() {
  const t = useT();
  const faq = (useTranslatedArray("features.hrChatbot.faq") as unknown) as { question: string; answer: string }[];

  const features = [
    { number: "01", title: t("features.hrChatbot.aiResponses"), description: t("features.hrChatbot.aiResponsesDesc") },
    { number: "02", title: t("features.hrChatbot.selfServiceReq"), description: t("features.hrChatbot.selfServiceReqDesc") },
    { number: "03", title: t("features.hrChatbot.smartEscalation"), description: t("features.hrChatbot.smartEscalationDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.hrChatbot.heroHeadline")} subHeadline={t("features.hrChatbot.heroSub")} badge={t("features.hrChatbot.badge")} />
      <NumberedFeatureBlock features={features} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
