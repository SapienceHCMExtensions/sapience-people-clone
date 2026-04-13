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
      { name: "description", content: "Drive employee growth with performance management, compensation planning, and learning management." },
      { property: "og:title", content: "Performance & Development — Sapience HCM" },
      { property: "og:description", content: "Drive employee growth with performance management and learning." },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return (
    <>
      <HeroSection headline="Unlock your team's full potential" subHeadline="Align goals, track performance, plan compensation, and manage learning programs — all connected in one platform." badge="Performance & Development" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Award} title="Performance Management" description="Set goals, conduct 360° reviews, and track continuous feedback with customizable appraisal cycles." />
          <FeatureCard icon={TrendingUp} title="Compensation Management" description="Design competitive pay structures, manage salary revisions, and ensure pay equity across the organization." />
          <FeatureCard icon={BookOpen} title="Learning Management" description="Create courses, assign training paths, track certifications, and measure learning outcomes." />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["OKR & KPI tracking", "9-box talent matrix", "Skills gap analysis", "Succession planning", "Competency frameworks", "Learning analytics"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Sapience HCM's performance module helped us increase employee engagement scores by 35% through continuous feedback and transparent goal tracking." name="David Kim" title="Head of People" company="TechStart Labs" />
      <FAQAccordion items={[
        { question: "What is performance management software?", answer: "Performance management software helps organizations set goals, conduct reviews, provide feedback, and track employee progress systematically." },
        { question: "How does compensation management work?", answer: "Compensation management automates salary benchmarking, revision workflows, and budget allocation to ensure competitive and equitable pay." },
        { question: "Can I create custom learning paths?", answer: "Yes, Sapience HCM's LMS lets you build custom courses, assign role-based learning paths, and track completion and certifications." },
      ]} />
      <CTABanner />
    </>
  );
}
