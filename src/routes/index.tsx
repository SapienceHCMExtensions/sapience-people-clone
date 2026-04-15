import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Briefcase, Award, DollarSign, Heart, Shield, Globe, Zap, Clock, BarChart3 } from "lucide-react";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const t = useT();
  return (
    <>
      <HeroSection
        headline={t("home.hero.headline")}
        subHeadline={t("home.hero.subHeadline")}
        badge={t("home.hero.badge")}
        screenshotUrl="https://marketing.zillancer.com/image%20for%20landing%20page.png"
        screenshotAlt="Sapience HCM platform overview"
      />

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.dashboard.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.dashboard.description")}</p>
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

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.features.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.features.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Briefcase} title={t("home.features.hiringTitle")} description={t("home.features.hiringDesc")} link="/features/hiring-onboarding" />
            <FeatureCard icon={Users} title={t("home.features.coreHrTitle")} description={t("home.features.coreHrDesc")} link="/features/core-hr" />
            <FeatureCard icon={Award} title={t("home.features.performanceTitle")} description={t("home.features.performanceDesc")} link="/features/performance" />
            <FeatureCard icon={DollarSign} title={t("home.features.payrollTitle")} description={t("home.features.payrollDesc")} link="/features/payroll" />
            <FeatureCard icon={Heart} title={t("home.features.engagementTitle")} description={t("home.features.engagementDesc")} link="/features/engagement" />
            <FeatureCard icon={Zap} title={t("home.features.automationTitle")} description={t("home.features.automationDesc")} link="/features/hr-automation" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.whySapience.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: t("home.whySapience.security"), desc: t("home.whySapience.securityDesc") },
              { icon: Globe, title: t("home.whySapience.global"), desc: t("home.whySapience.globalDesc") },
              { icon: Clock, title: t("home.whySapience.uptime"), desc: t("home.whySapience.uptimeDesc") },
              { icon: BarChart3, title: t("home.whySapience.analytics"), desc: t("home.whySapience.analyticsDesc") },
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
        quote={t("home.testimonial.quote")}
        name={t("home.testimonial.name")}
        title={t("home.testimonial.title")}
        company={t("home.testimonial.company")}
      />

      <CTABanner />
    </>
  );
}
