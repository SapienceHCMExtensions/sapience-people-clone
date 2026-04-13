import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Zap, Workflow, Bell, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/hr-automation")({
  head: () => ({
    meta: [
      { title: "HR Automation — Sapience HCM" },
      { name: "description", content: "Automate repetitive HR tasks with intelligent workflows and rules-based automation." },
      { property: "og:title", content: "HR Automation — Sapience HCM" },
      { property: "og:description", content: "Automate repetitive HR tasks with intelligent workflows." },
    ],
  }),
  component: HRAutomationPage,
});

function HRAutomationPage() {
  return (
    <>
      <HeroSection headline="Automate the routine. Focus on people." subHeadline="Replace manual processes with smart automation rules, custom workflows, and triggered notifications that keep HR operations running smoothly." badge="HR Automation" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Zap} title="Smart Workflows" description="Design multi-step approval workflows with conditional logic, parallel approvals, and escalation rules." />
          <FeatureCard icon={Workflow} title="Rules Engine" description="Set up trigger-action rules that automate data updates, notifications, and task assignments." />
          <FeatureCard icon={Bell} title="Smart Notifications" description="Configure event-driven alerts for managers and employees based on HR events and deadlines." />
        </div>
      </section>
      <FAQAccordion items={[
        { question: "What can I automate with Sapience HCM?", answer: "You can automate leave approvals, onboarding tasks, probation reminders, document requests, policy acknowledgments, and virtually any multi-step HR process." },
        { question: "Do I need coding skills to set up automation?", answer: "No. Sapience HCM provides a visual workflow builder with drag-and-drop configuration — no coding required." },
      ]} />
      <CTABanner />
    </>
  );
}
