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
        headline="Streamline HR process from Hire to Retire"
        subHeadline="Sapience HCM is a comprehensive HR platform that maximizes employee performance — covering recruitment, onboarding, payroll, performance, and engagement in one unified system."
        badge="Trusted by companies across the GCC & beyond"
        screenshotUrl="https://marketing.zillancer.com/image%20for%20landing%20page.png"
        screenshotAlt="Sapience HCM platform overview"
      />

      {/* Dashboard Preview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">Powerful HR Dashboard</h2>
            <p className="mt-4 text-muted-foreground">Get a real-time view of your workforce with customizable dashboards and actionable analytics.</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <img
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
              alt="Sapience HCM dashboard showing employee analytics and workforce metrics"
              className="w-full rounded-xl shadow-2xl border border-border"
              loading="lazy"
            />
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
            <FeatureCard icon={Briefcase} title="Hiring & Onboarding" description="Position requisition, interview scheduling, career page integration, and automated onboarding cycles." link="/features/hiring-onboarding" />
            <FeatureCard icon={Users} title="Core HR" description="Employee management, biometric attendance, shift rostering, leave, timesheets, and HR help desk." link="/features/core-hr" />
            <FeatureCard icon={Award} title="Performance & Development" description="360° feedback, goal cascading, compensation & benefits, and skill-based training management." link="/features/performance" />
            <FeatureCard icon={DollarSign} title="Payroll & Expense" description="GCC-localized payroll with WPS compliance, multi-currency support, and travel & expense claims." link="/features/payroll" />
            <FeatureCard icon={Heart} title="Employee Engagement" description="Pulse surveys, eNPS tracking, peer recognition, and a mobile-ready self-service portal." link="/features/engagement" />
            <FeatureCard icon={Zap} title="HR Automation" description="Approval workflows, conditional logic, escalation rules, and event-driven smart notifications." link="/features/hr-automation" />
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
              { icon: Shield, title: "Enterprise Security", desc: "AES-256 encryption, SOC2, and ISO 9001 certified infrastructure." },
              { icon: Globe, title: "GCC & Global Ready", desc: "Multi-language, multi-currency, and WPS-compliant for UAE, Qatar, KSA, and Oman." },
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
