import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Award, TrendingUp, BookOpen, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/performance")({
  head: () => ({
    meta: [
      { title: "Performance & Development — Sapience HCM" },
      { name: "description", content: "Drive employee growth with 360° feedback, goal cascading, compensation & benefits management, and skill-based training programs." },
      { property: "og:title", content: "Performance & Development — Sapience HCM" },
      { property: "og:description", content: "360° feedback, compensation management, and skill-based training." },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <>
      <HeroSection headline="Unlock your team's full potential" subHeadline="360° feedback, automated appraisal cycles, goal cascading, compensation & benefits planning, and skill-based training management — all connected in one platform." badge="Performance & Development" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Award} title="Performance Management" description="360-degree feedback, goal cascading, automated appraisal cycles, KPI/OKR tracking, and continuous feedback loops." />
          <FeatureCard icon={TrendingUp} title="Compensation & Benefits" description="Grade and spine point structures, loans & advances management, benefit enrollment, and pay equity analysis across the organization." />
          <FeatureCard icon={BookOpen} title="Training Management" description="Skill-based training programs, course management, role-based learning paths, certification tracking, and learning analytics." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["KPI & OKR tracking", "9-box talent matrix", "Goal cascading", "Grade & spine point structures", "Loans & advances management", "Skill-based learning paths"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Sapience HCM's performance module helped us increase employee engagement scores by 35% through continuous feedback and transparent goal tracking." name="David Kim" title="Head of People" company="TechStart Labs" />
      <FAQAccordion items={[
        { question: "How does 360-degree feedback work?", answer: "Sapience HCM enables multi-source feedback from managers, peers, direct reports, and self-assessments, combined into a comprehensive performance view with automated appraisal cycles." },
        { question: "What is grade and spine point compensation?", answer: "Grade/spine point structures allow you to define pay scales, progression steps, and salary bands — ensuring transparent and equitable compensation across the organization." },
        { question: "Can I create skill-based training programs?", answer: "Yes, the training management module lets you build courses mapped to skills and competencies, assign role-based learning paths, and track certifications and completion." },
      ]} />
      <CTABanner />
    </>
  );
}
