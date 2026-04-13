import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, UserMinus, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/features/core-hr")({
  head: () => ({
    meta: [
      { title: "Core HR Software — Sapience HCM" },
      { name: "description", content: "Manage your global employee data effortlessly with Sapience HCM's comprehensive Core HR module." },
      { property: "og:title", content: "Core HR Software — Sapience HCM" },
      { property: "og:description", content: "Manage your global employee data effortlessly." },
    ],
  }),
  component: CoreHRPage,
});

function CoreHRPage() {
  return (
    <>
      <HeroSection
        headline="Manage your global employee data effortlessly"
        subHeadline="Centralize all employee information, automate attendance tracking, streamline leave management, and gain powerful HR analytics — all in one platform."
        badge="Core HR"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title="Employee Management" description="Maintain comprehensive employee profiles with all personal, professional, and organizational data in one place." />
            <FeatureCard icon={Clock} title="Attendance Management" description="Track employee attendance with biometric integration, geo-fencing, and real-time dashboards." />
            <FeatureCard icon={CalendarDays} title="Leave Management" description="Configure unlimited leave types, automate approvals, and track balances with a visual calendar." />
            <FeatureCard icon={FileText} title="Timesheets" description="Log project hours, track billable time, and generate accurate invoices with integrated timesheet management." />
            <FeatureCard icon={Headphones} title="HR Help Desk" description="Streamline employee queries with categorized tickets, SLA tracking, and self-service knowledge base." />
            <FeatureCard icon={FolderOpen} title="Document Management" description="Store, organize, and share HR documents securely with role-based access and e-signature support." />
            <FeatureCard icon={BarChart3} title="HR Analytics" description="Make data-driven decisions with customizable dashboards, trend analysis, and predictive HR metrics." />
            <FeatureCard icon={UserMinus} title="Offboarding" description="Ensure smooth exits with structured offboarding workflows, knowledge transfer, and compliance checklists." />
            <FeatureCard icon={CalendarDays} title="Shift Management" description="Plan and manage complex shift patterns, rotations, and schedules across multiple locations." />
          </div>
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">More Reasons to Choose Sapience HCM</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Custom workflows & configurations", "Role-based access control", "Multi-location support", "Audit trails & compliance", "Bulk import & export", "API integrations"].map((r) => (
              <div key={r} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote="Sapience HCM's Core HR module helped us consolidate employee data from 5 different systems into one unified platform, saving 20+ hours per week." name="James O'Brien" title="HR Manager" company="FinanceOne Corp" />
      <FAQAccordion items={[
        { question: "What is employee management software?", answer: "Employee management software is a digital platform that helps organizations manage employee data, track attendance, handle leave requests, process timesheets, and maintain HR records in a centralized system." },
        { question: "Why is Core HR important?", answer: "Core HR forms the foundation of all HR operations. It ensures accurate employee data management, regulatory compliance, and provides the data backbone for payroll, performance, and analytics functions." },
        { question: "Can Sapience HCM handle multi-country compliance?", answer: "Yes, Sapience HCM supports multi-country configurations with localized compliance rules, statutory requirements, and region-specific reporting capabilities." },
        { question: "How does the HR help desk work?", answer: "The HR help desk provides a ticketing system where employees can submit queries, track resolution status, and access a self-service knowledge base for common HR questions." },
      ]} />
      <CTABanner />
    </>
  );
}
