import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Building2, Network, FileText, Bell, Users, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/organization-management")({
  head: () => ({
    meta: [
      { title: "Organization Management — Sapience HCM" },
      { name: "description", content: "Manage organizational hierarchies, org charts, job descriptions, multiple roles, and company document expiry alerts in one platform." },
      { property: "og:title", content: "Organization Management — Sapience HCM" },
      { property: "og:description", content: "Organizational hierarchy, org charts, and job description management." },
    ],
  }),
  component: OrganizationManagementPage,
});

function OrganizationManagementPage() {
  return (
    <>
      <HeroSection
        headline="Structure your organization for success"
        subHeadline="Define organizational hierarchies, visualize reporting lines with interactive org charts, manage job descriptions, assign multiple roles, and automate company document expiry alerts — all from a single platform."
        badge="Organization Management"
        screenshotUrl="/screenshots/org-chart.jpg"
        screenshotAlt="Sapience HCM organizational hierarchy chart"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Network} title="Hierarchy & Org Chart" description="Define multi-level organizational hierarchies with interactive org charts. Visualize reporting lines, departments, divisions, and cost centers in real time." />
          <FeatureCard icon={Building2} title="Multiple Roles & Responsibilities" description="Assign multiple roles and job responsibilities to positions. Generate role-based access and permissions aligned with your organizational structure." />
          <FeatureCard icon={FileText} title="Job Description Management" description="Create, manage, and publish standardized job descriptions linked to positions, competencies, and pay grades across the organization." />
          <FeatureCard icon={Bell} title="Document Expiry Alerts" description="Automated email alerts for company document expirations — trade licenses, insurance policies, certifications — ensuring compliance at all times." />
          <FeatureCard icon={Users} title="Employee Directory" description="Searchable employee directory with contact details, department information, reporting lines, and quick access to employee profiles." />
        </div>
      </section>
      <ScreenshotSection title="Product Screenshots" screenshots={[
        { src: "/screenshots/employee-directory.jpg", alt: "Sapience HCM employee directory interface" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Interactive org charts", "Multi-level hierarchy", "Role-based access control", "Job description library", "Document expiry tracking", "Searchable employee directory"].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQAccordion items={[
        { question: "Can I create multiple organizational hierarchies?", answer: "Yes, Sapience HCM supports multi-level hierarchies with departments, divisions, cost centers, and custom organizational units — each with its own reporting structure." },
        { question: "How do document expiry alerts work?", answer: "The system tracks expiry dates for trade licenses, insurance, certifications, and other company documents. Automated email alerts are sent to designated contacts before documents expire." },
        { question: "Can employees have multiple roles?", answer: "Yes, you can assign multiple roles and job responsibilities to any position. Access permissions and workflows adjust automatically based on role assignments." },
      ]} />
      <CTABanner />
    </>
  );
}
