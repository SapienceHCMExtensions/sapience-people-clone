import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { UserPlus, FileCheck, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/hiring-onboarding")({
  head: () => ({
    meta: [
      { title: "Hiring & Onboarding — Sapience HCM" },
      { name: "description", content: "Streamline recruitment with position requisition, interview scheduling, career page integration, and automated onboarding cycles." },
      { property: "og:title", content: "Hiring & Onboarding — Sapience HCM" },
      { property: "og:description", content: "Streamline recruitment and deliver automated onboarding." },
    ],
  }),
  component: HiringOnboardingPage,
});

function HiringOnboardingPage() {
  return (
    <>
      <HeroSection headline="Hire smarter. Onboard faster." subHeadline="From position requisition to first-day productivity — manage your entire recruitment pipeline with career page integration, applicant tracking, and automated onboarding workflows." badge="Hiring & Onboarding" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard icon={UserPlus} title="Recruitment Management" description="Position requisition workflows, interview scheduling, career page integration, applicant tracking, and multi-board job posting from one dashboard." />
            <FeatureCard icon={FileCheck} title="Onboarding" description="Automated onboarding cycles with document collection, first-day task workflows, training enrollment, and mentor assignment." />
          </div>
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Position requisition workflows", "Interview scheduling & tracking", "Career page integration", "Applicant tracking system", "Automated document collection", "First-day task automation"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Our time-to-hire dropped by 40% after implementing Sapience HCM's recruitment module. The onboarding automation is a game-changer." name="Lisa Park" title="Talent Acquisition Lead" company="MediaMax Studios" />
      <FAQAccordion items={[
        { question: "What does Recruitment Management include?", answer: "It covers position requisition, job posting to multiple boards, applicant tracking, interview scheduling, candidate scoring, and offer management — all from a single dashboard." },
        { question: "How does automated onboarding work?", answer: "When a new hire is confirmed, Sapience HCM triggers document collection, task assignments, training enrollments, and mentor pairing based on configurable workflows tied to the role and location." },
        { question: "Can I integrate a career page with Sapience HCM?", answer: "Yes, Sapience HCM provides career page integration so job listings are automatically published to your company website with branded application forms." },
      ]} />
      <CTABanner />
    </>
  );
}
