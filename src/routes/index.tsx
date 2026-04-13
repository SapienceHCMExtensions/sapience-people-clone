import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Briefcase, Award, DollarSign, Heart, Shield, Globe, Zap, Clock, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection
        headline="The complete HR platform for the modern workforce"
        subHeadline="Sapience HCM brings together hiring, onboarding, payroll, performance, and employee engagement in one powerful platform. Empower your HR team and delight your employees."
        badge="Trusted by 1,000+ companies worldwide"
      />

      {/* Trusted Logos */}
      <section className="py-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading organizations across the globe</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-40">
            {["TechCorp", "HealthPlus", "EduFirst", "FinanceOne", "MediaMax"].map((name) => (
              <span key={name} className="text-lg font-bold text-muted-foreground tracking-wider">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Everything you need to manage your people</h2>
            <p className="mt-4 text-muted-foreground">From hire to retire, Sapience HCM covers every aspect of human capital management.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Briefcase} title="Hiring & Onboarding" description="Streamline recruitment with integrated ATS and deliver seamless onboarding experiences." link="/features/hiring-onboarding" />
            <FeatureCard icon={Users} title="Core HR" description="Centralize employee data, attendance, leave, timesheets, and document management." link="/features/core-hr" />
            <FeatureCard icon={Award} title="Performance & Development" description="Drive growth with performance reviews, compensation planning, and learning management." link="/features/performance" />
            <FeatureCard icon={DollarSign} title="Payroll & Expense" description="Automate payroll processing and simplify travel and expense management." link="/features/payroll" />
            <FeatureCard icon={Heart} title="Employee Engagement" description="Boost morale with engagement tools, surveys, and integrated business chat." link="/features/engagement" />
            <FeatureCard icon={Zap} title="HR Automation" description="Eliminate manual processes with intelligent workflows and automation rules." link="/features/hr-automation" />
          </div>
        </div>
      </section>

      {/* Why Sapience */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Why businesses choose Sapience HCM</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Enterprise Security", desc: "AES-256 encryption, SOC2, HIPAA, and ISO 9001 certified." },
              { icon: Globe, title: "Global Ready", desc: "Multi-language, multi-currency support for distributed teams." },
              { icon: Clock, title: "99.9% Uptime", desc: "Fault-tolerant architecture with guaranteed availability." },
              { icon: BarChart3, title: "Actionable Analytics", desc: "Real-time dashboards and custom reports for data-driven decisions." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-bright-blue/10 text-bright-blue mx-auto mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialBlock
        quote="Sapience HCM transformed how we manage our 500+ employees across 12 countries. The automation alone saved us 30 hours per week in HR operations."
        name="Sarah Chen"
        title="VP of People Operations"
        company="TechCorp Global"
      />

      <CTABanner />
    </>
  );
}
