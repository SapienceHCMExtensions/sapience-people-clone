import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Bot, MessageCircle, Brain } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/hr-chatbot")({
  head: () => ({ meta: [{ title: "HR Chatbot — Sapience HCM" }, { name: "description", content: "AI-powered HR chatbot for instant employee support and self-service." }, { property: "og:title", content: "HR Chatbot — Sapience HCM" }, { property: "og:description", content: "AI-powered chatbot for instant HR support." }] }),
  component: HRChatbotPage,
});

function HRChatbotPage() {
  const t = useT();
  const faq = (useTranslatedArray("features.hrChatbot.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.hrChatbot.heroHeadline")} subHeadline={t("features.hrChatbot.heroSub")} badge={t("features.hrChatbot.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Bot} title={t("features.hrChatbot.aiResponses")} description={t("features.hrChatbot.aiResponsesDesc")} />
          <FeatureCard icon={MessageCircle} title={t("features.hrChatbot.selfServiceReq")} description={t("features.hrChatbot.selfServiceReqDesc")} />
          <FeatureCard icon={Brain} title={t("features.hrChatbot.smartEscalation")} description={t("features.hrChatbot.smartEscalationDesc")} />
        </div>
      </section>
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
