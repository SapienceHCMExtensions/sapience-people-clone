import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Heart, Smartphone, CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/engagement")({
  head: () => ({ meta: [{ title: "Employee Engagement — Sapience HCM" }, { name: "description", content: "Boost employee morale with engagement surveys, eNPS, peer recognition, and a comprehensive self-service portal with managerial approvals." }, { property: "og:title", content: "Employee Engagement — Sapience HCM" }, { property: "og:description", content: "Engagement surveys, recognition, and self-service portal." }] }),
  component: EngagementPage,
});

function EngagementPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.engagement.moreReasons");
  const faq = (useTranslatedArray("features.engagement.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.engagement.heroHeadline")} subHeadline={t("features.engagement.heroSub")} badge={t("features.engagement.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FeatureCard icon={Heart} title={t("features.engagement.engagementTitle")} description={t("features.engagement.engagementDesc")} />
          <FeatureCard icon={Smartphone} title={t("features.engagement.selfService")} description={t("features.engagement.selfServiceDesc")} />
        </div>
      </section>
      <ScreenshotSection title={t("features.engagement.screenshotTitle")} screenshots={[{ src: "/screenshots/ess-home.jpg", alt: "Sapience HCM employee self-service home page" }]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r) => (
              <div key={r} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote={t("features.engagement.testimonialQuote")} name={t("features.engagement.testimonialName")} title={t("features.engagement.testimonialTitle")} company={t("features.engagement.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
