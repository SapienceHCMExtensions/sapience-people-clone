import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { CTABanner } from "@/components/shared/CTABanner";
import { TrustBand } from "@/components/shared/TrustBand";
import { ProductTour } from "@/components/shared/ProductTour";
import { ROICalculator } from "@/components/shared/ROICalculator";
import { Users, Briefcase, Award, DollarSign, Heart, Shield, Globe, Zap, Clock, BarChart3 } from "lucide-react";
import { useT } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState, useCallback } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const t = useT();
  const dashboardSection = useScrollAnimation(0.1);
  const featureHeading = useScrollAnimation(0.15);
  const whySection = useScrollAnimation(0.1);

  // Dashboard 3D tilt
  const dashRef = useRef<HTMLDivElement>(null);
  const [dashTilt, setDashTilt] = useState({ x: 0, y: 0 });
  const handleDashMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = dashRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setDashTilt({ x: y * -6, y: x * 6 });
  }, []);
  const handleDashLeave = useCallback(() => setDashTilt({ x: 0, y: 0 }), []);

  const whyItems = [
    { icon: Shield, title: t("home.whySapience.security"), desc: t("home.whySapience.securityDesc") },
    { icon: Globe, title: t("home.whySapience.global"), desc: t("home.whySapience.globalDesc") },
    { icon: Clock, title: t("home.whySapience.uptime"), desc: t("home.whySapience.uptimeDesc") },
    { icon: BarChart3, title: t("home.whySapience.analytics"), desc: t("home.whySapience.analyticsDesc") },
  ];

  return (
    <>
      <HeroSection
        headline={t("home.hero.headline")}
        subHeadline={t("home.hero.subHeadline")}
        badge={t("home.hero.badge")}
        screenshotUrl="https://marketing.zillancer.com/image%20for%20landing%20page.png"
        screenshotAlt="Sapience HCM platform overview"
        variant="aurora"
        showSpotlight
        showGrid
        showNoise
        size="xl"
      />

      <TrustBand />

      {/* Dashboard Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={dashboardSection.ref}
            className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              dashboardSection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.dashboard.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.dashboard.description")}</p>
          </div>
          <div
            ref={dashRef}
            className={`tilt-card max-w-5xl mx-auto transition-all duration-1000 ${
              dashboardSection.isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "200ms" }}
            onMouseMove={handleDashMove}
            onMouseLeave={handleDashLeave}
          >
            <img
              src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
              alt="Sapience HCM dashboard showing employee analytics and workforce metrics"
              className="tilt-card-inner w-full rounded-xl shadow-2xl border border-border"
              style={{
                transform: `rotateX(${dashTilt.x}deg) rotateY(${dashTilt.y}deg)`,
              }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={featureHeading.ref}
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              featureHeading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.features.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.features.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Briefcase} title={t("home.features.hiringTitle")} description={t("home.features.hiringDesc")} link="/features/hiring-onboarding" delay={0} />
            <FeatureCard icon={Users} title={t("home.features.coreHrTitle")} description={t("home.features.coreHrDesc")} link="/features/core-hr" delay={100} />
            <FeatureCard icon={Award} title={t("home.features.performanceTitle")} description={t("home.features.performanceDesc")} link="/features/performance" delay={200} />
            <FeatureCard icon={DollarSign} title={t("home.features.payrollTitle")} description={t("home.features.payrollDesc")} link="/features/payroll" delay={300} />
            <FeatureCard icon={Heart} title={t("home.features.engagementTitle")} description={t("home.features.engagementDesc")} link="/features/engagement" delay={400} />
            <FeatureCard icon={Zap} title={t("home.features.automationTitle")} description={t("home.features.automationDesc")} link="/features/hr-automation" delay={500} />
          </div>
        </div>
      </section>

      <ProductTour />

      {/* Why Sapience Section */}
      <section className="py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whySection.ref}
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              whySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{t("home.whySapience.title")}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className={`text-center transition-all duration-700 ${
                  whySection.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-bright-blue/10 text-bright-blue mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:rotate-6 cursor-default">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator variant="compact" />

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
