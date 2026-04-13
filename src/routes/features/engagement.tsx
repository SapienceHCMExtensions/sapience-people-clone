import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Heart, MessageSquare, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/engagement")({
  head: () => ({
    meta: [
      { title: "Employee Engagement — Sapience HCM" },
      { name: "description", content: "Boost employee morale and collaboration with engagement tools and integrated business chat." },
      { property: "og:title", content: "Employee Engagement — Sapience HCM" },
      { property: "og:description", content: "Boost morale with engagement tools and business chat." },
    ],
  }),
  component: EngagementPage,
});

function EngagementPage() {
  return (
    <>
      <HeroSection headline="Build a culture people love" subHeadline="Measure engagement, recognize achievements, and foster collaboration with integrated communication tools." badge="Employee Engagement" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl">
          <FeatureCard icon={Heart} title="Employee Engagement" description="Run pulse surveys, conduct eNPS assessments, and build recognition programs that keep employees motivated." />
          <FeatureCard icon={MessageSquare} title="Business Chat & Collaboration" description="Enable real-time messaging, group channels, and file sharing integrated directly into the HR platform." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Pulse surveys", "eNPS tracking", "Peer recognition", "Anonymous feedback", "Team channels", "Engagement analytics"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Employee engagement scores increased by 45% in the first quarter after deploying Sapience HCM's survey and recognition tools." name="Amanda Lee" title="People & Culture Manager" company="BrightWave Media" />
      <FAQAccordion items={[
        { question: "What is employee engagement software?", answer: "Employee engagement software measures and improves how connected, motivated, and committed employees feel toward their organization." },
        { question: "How does business chat integrate with HR?", answer: "Sapience HCM's chat is embedded in the platform, so conversations can reference HR tasks, approvals, and employee profiles seamlessly." },
      ]} />
      <CTABanner />
    </>
  );
}
