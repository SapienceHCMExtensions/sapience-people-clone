import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Zap, Bell } from "lucide-react";

export const Route = createFileRoute("/features/hr-automation")({
  head: () => ({
    meta: [
      { title: "HR Automation — Sapience HCM" },
      { name: "description", content: "Automate approval workflows with conditional logic, escalation rules, and event-driven smart notifications." },
      { property: "og:title", content: "HR Automation — Sapience HCM" },
      { property: "og:description", content: "Approval workflows, conditional logic, and smart notifications." },
    ],
  }),
  component: HRAutomationPage,
});

function HRAutomationPage() {
  return (
    <>
      <HeroSection headline="Automate the routine. Focus on people." subHeadline="Replace manual processes with approval workflow management, conditional logic, escalation rules, and event-driven smart notifications that keep HR operations running smoothly." badge="HR Automation" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon={Zap} title="Workflow Management" description="Approval process control with conditional logic, parallel approvals, escalation rules, and multi-step workflows for any HR process." />
          <FeatureCard icon={Bell} title="Smart Notifications" description="Event-driven alerts, reminders, and deadline notifications configured for managers and employees based on HR events." />
        </div>
      </section>
      <FAQAccordion items={[
        { question: "What can I automate with Sapience HCM?", answer: "You can automate leave approvals, onboarding tasks, probation reminders, document requests, policy acknowledgments, and virtually any multi-step HR process with configurable approval workflows." },
        { question: "Do I need coding skills to set up automation?", answer: "No. Sapience HCM provides a visual workflow builder with drag-and-drop configuration — no coding required." },
      ]} />
      <CTABanner />
    </>
  );
}
