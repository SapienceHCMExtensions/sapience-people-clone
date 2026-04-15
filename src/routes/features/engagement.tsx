import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Heart, Smartphone, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/engagement")({
  head: () => ({
    meta: [
      { title: "Employee Engagement — Sapience HCM" },
      { name: "description", content: "Boost employee morale with engagement surveys, eNPS, peer recognition, and a comprehensive self-service portal with managerial approvals." },
      { property: "og:title", content: "Employee Engagement — Sapience HCM" },
      { property: "og:description", content: "Engagement surveys, recognition, and self-service portal." },
    ],
  }),
  component: EngagementPage,
});

function EngagementPage() {
  return (
    <>
      <HeroSection headline="Build a culture people love" subHeadline="Measure engagement with pulse surveys and eNPS, recognize achievements with peer recognition programs, and empower employees and managers with a comprehensive self-service portal." badge="Employee Engagement" />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon={Heart} title="Employee Engagement" description="Run pulse surveys, conduct eNPS assessments, enable peer recognition, and collect anonymous feedback to keep employees motivated." />
          <FeatureCard icon={Smartphone} title="Self-Service Portal" description="Employee dashboard with training calendar access, claims & requisitions, self & subordinate appraisals, pay slip download, leaves & loans management. View employment history, salary info, HR policies. Submit/update documents online. Managerial self-service with subordinate leave approvals and escalation." />
        </div>
      </section>
      <ScreenshotSection title="Employee Self-Service" screenshots={[
        { src: "/screenshots/ess-home.jpg", alt: "Sapience HCM employee self-service home page" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Pulse surveys", "eNPS tracking", "Peer recognition", "Pay slip download", "Training calendar access", "Claims & requisitions", "Employment history view", "Managerial self-service", "Document submission online"].map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Employee engagement scores increased by 45% in the first quarter after deploying Sapience HCM's survey and recognition tools." name="Amanda Lee" title="People & Culture Manager" company="BrightWave Media" />
      <FAQAccordion items={[
        { question: "What can employees do in the self-service portal?", answer: "Employees can access their dashboard, view training calendars, submit claims & requisitions, conduct self & subordinate appraisals, download pay slips, manage leaves & loans, view employment history, salary information, HR policies, and submit/update documents online." },
        { question: "What is managerial self-service?", answer: "Managers can approve or request subordinate leave, view team information, forward requests to higher levels, and access team reports — all through the self-service portal." },
        { question: "How does peer recognition work?", answer: "Employees can recognize colleagues directly through the platform with badges, shout-outs, and points — fostering a culture of appreciation and engagement." },
      ]} />
      <CTABanner />
    </>
  );
}
