import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { UserPlus, FileCheck, ClipboardList, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/hiring-onboarding")({
  head: () => ({
    meta: [
      { title: "Hiring & Onboarding — Sapience HCM" },
      { name: "description", content: "Streamline your recruitment pipeline and deliver exceptional onboarding experiences with Sapience HCM." },
      { property: "og:title", content: "Hiring & Onboarding — Sapience HCM" },
      { property: "og:description", content: "Streamline recruitment and deliver exceptional onboarding." },
    ],
  }),
  component: HiringOnboardingPage,
});

function HiringOnboardingPage() {
  return (
    <>
      <HeroSection headline="Hire smarter. Onboard faster." subHeadline="From job posting to first-day productivity, Sapience HCM streamlines your entire talent acquisition and onboarding pipeline." badge="Hiring & Onboarding" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={UserPlus} title="Integrated Recruitment" description="Post jobs to multiple boards, screen candidates with AI scoring, and manage the entire pipeline from one dashboard." />
            <FeatureCard icon={FileCheck} title="Candidate Onboarding" description="Automate offer letters, background checks, and pre-boarding tasks before day one." />
            <FeatureCard icon={ClipboardList} title="Employee Onboarding" description="Create structured onboarding plans with task assignments, training schedules, and mentor pairing." />
          </div>
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Customizable hiring workflows", "Automated offer generation", "Digital document collection", "Interview scheduling", "Candidate portal", "Onboarding analytics"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Our time-to-hire dropped by 40% after implementing Sapience HCM's recruitment module. The onboarding automation is a game-changer." name="Lisa Park" title="Talent Acquisition Lead" company="MediaMax Studios" />
      <FAQAccordion items={[
        { question: "What is integrated recruitment?", answer: "Integrated recruitment combines job posting, candidate tracking, interview management, and offer processing into a single unified platform." },
        { question: "How does onboarding automation work?", answer: "Onboarding automation triggers task assignments, document requests, and training enrollments based on configurable workflows tied to the new hire's role and location." },
        { question: "Can I customize the candidate experience?", answer: "Yes, Sapience HCM provides a branded candidate portal with customizable application forms, status tracking, and communication templates." },
      ]} />
      <CTABanner />
    </>
  );
}
