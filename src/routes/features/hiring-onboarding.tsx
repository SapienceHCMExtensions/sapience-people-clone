import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { UserPlus, FileCheck, Search, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/hiring-onboarding")({
  head: () => ({
    meta: [
      { title: "Hiring & Onboarding — Sapience HCM" },
      { name: "description", content: "Streamline recruitment with manpower planning, candidate management, resume search, recruitment agency tracking, and automated onboarding workflows." },
      { property: "og:title", content: "Hiring & Onboarding — Sapience HCM" },
      { property: "og:description", content: "Manpower planning, recruitment management, and automated onboarding." },
    ],
  }),
  component: HiringOnboardingPage,
});

function HiringOnboardingPage() {
  return (
    <>
      <HeroSection headline="Hire smarter. Onboard faster." subHeadline="From manpower planning to first-day productivity — manage your entire recruitment pipeline with candidate profile management, resume database search, recruitment agency tracking, offer letter management, and automated onboarding workflows." badge="Hiring & Onboarding" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={UserPlus} title="Recruitment Management" description="Manpower planning, position requisition, candidate profile management, candidate database search, resume management, short-listing, interview scheduling, and recruitment agency tracking." />
            <FeatureCard icon={Search} title="Candidate Pipeline" description="Job offer letter management, addition of selected candidates to HR system, assign responsibility of recruitment to team members with status tracking, and career page integration." />
            <FeatureCard icon={FileCheck} title="Onboarding" description="Automated onboarding cycles with task assignment and progress tracking, document collection, first-day task workflows, training enrollment, mentor assignment, and status tracking." />
          </div>
        </div>
      </section>
      <ScreenshotSection title="Product Screenshots" screenshots={[
        { src: "/screenshots/recruitment-dashboard.jpg", alt: "Sapience HCM recruitment management dashboard" },
        { src: "/screenshots/onboarding-management.jpg", alt: "Sapience HCM onboarding management interface" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Manpower planning", "Candidate database search", "Resume management", "Recruitment agency tracking", "Offer letter management", "Task-based onboarding tracking", "Interview scheduling", "Career page integration", "Status tracking"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Our time-to-hire dropped by 40% after implementing Sapience HCM's recruitment module. The onboarding automation is a game-changer." name="Lisa Park" title="Talent Acquisition Lead" company="MediaMax Studios" />
      <FAQAccordion items={[
        { question: "What does Recruitment Management include?", answer: "It covers manpower planning, position requisition, candidate profile management, database search, resume management, short-listing, interview scheduling, recruitment agency tracking, and offer letter management — all from a single dashboard." },
        { question: "How does automated onboarding work?", answer: "When a new hire is confirmed, Sapience HCM triggers task assignment with progress tracking, document collection, training enrollments, and mentor pairing based on configurable workflows tied to the role and location." },
        { question: "Can I track recruitment agencies?", answer: "Yes, Sapience HCM allows you to manage recruitment agencies, track candidate submissions per agency, and monitor hiring performance across all recruitment channels." },
      ]} />
      <CTABanner />
    </>
  );
}
