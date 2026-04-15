import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Award, TrendingUp, BookOpen, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/performance")({
  head: () => ({
    meta: [
      { title: "Performance & Development — Sapience HCM" },
      { name: "description", content: "Drive employee growth with workflow-based evaluations, competency matrix, goal management, succession planning, training budget management, and certification tracking." },
      { property: "og:title", content: "Performance & Development — Sapience HCM" },
      { property: "og:description", content: "Performance evaluations, goal management, and training management." },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <>
      <HeroSection headline="Unlock your team's full potential" subHeadline="User-defined evaluation parameters, workflow-based evaluation forms, competency matrix, goal & competency library, succession planning, 1:1 reviews, and comprehensive training management — all connected in one platform." badge="Performance & Development" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Award} title="Performance Management" description="User-defined evaluation parameters, multiple evaluation blocks, workflow-based online evaluation forms, competency matrix based on job group, auto-notification for evaluators, self-evaluation option, succession planning, and 1:1 reviews." />
          <FeatureCard icon={TrendingUp} title="Compensation & Reviews" description="Schedule and track pay reviews, bonus & merit pay distribution based on customizable rules, grade and spine point structures, and set reminders for upcoming reviews." />
          <FeatureCard icon={BookOpen} title="Training Management" description="Training budget preparation (workflow-based), course definition with location details, course attendance registration, training statistics reports, certificate expiration alerts, and cost estimation & variance tracking." />
        </div>
      </section>
      <ScreenshotSection title="Product Screenshots" screenshots={[
        { src: "/screenshots/performance-management.jpg", alt: "Sapience HCM performance management dashboard" },
        { src: "/screenshots/goal-management.jpg", alt: "Sapience HCM goal management interface" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["User-defined evaluation parameters", "Competency matrix by job group", "Goal & competency library", "Succession planning", "Training budget management", "Certificate expiration alerts", "Workflow-based evaluations", "1:1 reviews", "Training cost variance"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Sapience HCM's performance module helped us increase employee engagement scores by 35% through continuous feedback and transparent goal tracking." name="David Kim" title="Head of People" company="TechStart Labs" />
      <FAQAccordion items={[
        { question: "How does performance evaluation work?", answer: "Sapience HCM supports user-defined evaluation parameters, multiple evaluation blocks, workflow-based online evaluation forms with auto-notification for evaluators, competency matrix based on job group, and optional self-evaluation." },
        { question: "What is the competency matrix?", answer: "The competency matrix maps competencies to job groups, enabling targeted evaluations. Combined with the goal & competency library, it provides a structured framework for employee development and succession planning." },
        { question: "How does training management work?", answer: "The training module covers budget preparation with workflow-based approvals, course definition with location details, attendance registration, training statistics reports, certificate expiration alerts, and cost estimation with variance tracking." },
      ]} />
      <CTABanner />
    </>
  );
}
