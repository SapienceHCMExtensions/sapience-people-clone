import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Bot, MessageCircle, Brain } from "lucide-react";

export const Route = createFileRoute("/features/hr-chatbot")({
  head: () => ({
    meta: [
      { title: "HR Chatbot — Sapience HCM" },
      { name: "description", content: "AI-powered HR chatbot for instant employee support and self-service." },
      { property: "og:title", content: "HR Chatbot — Sapience HCM" },
      { property: "og:description", content: "AI-powered chatbot for instant HR support." },
    ],
  }),
  component: HRChatbotPage,
});

function HRChatbotPage() {
  return (
    <>
      <HeroSection headline="Instant HR support, 24/7" subHeadline="Our AI-powered chatbot answers employee questions, processes common requests, and escalates complex issues — reducing HR workload by up to 60%." badge="HR Chatbot" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Bot} title="AI-Powered Responses" description="Leverages natural language processing to understand and answer employee questions accurately." />
          <FeatureCard icon={MessageCircle} title="Self-Service Requests" description="Employees can check leave balances, update details, and submit requests through conversational chat." />
          <FeatureCard icon={Brain} title="Smart Escalation" description="Automatically routes complex queries to the right HR team member with full conversation context." />
        </div>
      </section>
      <FAQAccordion items={[
        { question: "What questions can the chatbot answer?", answer: "The chatbot handles policy queries, leave balances, payslip requests, onboarding questions, and hundreds of other common HR topics." },
        { question: "Can I train the chatbot with my company's policies?", answer: "Yes, you can upload your HR policies and the chatbot will use them to provide accurate, company-specific answers." },
      ]} />
      <CTABanner />
    </>
  );
}
