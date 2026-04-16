import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";

import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/features/core-hr")({
  head: () => ({
    meta: [
      { title: "Core HR Software — Sapience HCM" },
      { name: "description", content: "Centralize employee data, automate attendance with biometric integration, manage shifts, leaves, timesheets, documents, and HR analytics in one platform." },
      { property: "og:title", content: "Core HR Software — Sapience HCM" },
      { property: "og:description", content: "Centralize employee data and automate core HR operations." },
    ],
    links: getHreflangLinks("/features/core-hr"),
  }),
  component: CoreHRPage,
});

function CoreHRPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.coreHr.moreReasons");
  const faq = (useTranslatedArray("features.coreHr.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.coreHr.employeeMgmt"), description: t("features.coreHr.employeeMgmtDesc") },
    { number: "02", title: t("features.coreHr.timeAttendance"), description: t("features.coreHr.timeAttendanceDesc") },
    { number: "03", title: t("features.coreHr.shiftRoster"), description: t("features.coreHr.shiftRosterDesc") },
    { number: "04", title: t("features.coreHr.leaveMgmt"), description: t("features.coreHr.leaveMgmtDesc") },
    { number: "05", title: t("features.coreHr.timesheets"), description: t("features.coreHr.timesheetsDesc") },
    { number: "06", title: t("features.coreHr.hrHelpDesk"), description: t("features.coreHr.hrHelpDeskDesc") },
    { number: "07", title: t("features.coreHr.docMgmt"), description: t("features.coreHr.docMgmtDesc") },
    { number: "08", title: t("features.coreHr.hrAnalytics"), description: t("features.coreHr.hrAnalyticsDesc") },
  ];

  return (
    <>
      <HeroSection
        headline={t("features.coreHr.heroHeadline")}
        subHeadline={t("features.coreHr.heroSub")}
        badge={t("features.coreHr.badge")}
        screenshotUrl="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
        screenshotAlt="Sapience HCM Core HR dashboard with employee analytics"
      />
      
      <NumberedFeatureBlock features={features} />
      <section ref={reasonsRef} className={`py-16 transition-all duration-700 ${reasonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3" style={{ animationDelay: `${i * 80}ms` }}>
                <CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialBlock quote={t("features.coreHr.testimonialQuote")} name={t("features.coreHr.testimonialName")} title={t("features.coreHr.testimonialTitle")} company={t("features.coreHr.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
