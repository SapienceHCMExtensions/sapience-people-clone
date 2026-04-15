import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/core-hr")({
  head: () => ({
    meta: [
      { title: "Core HR Software — Sapience HCM" },
      { name: "description", content: "Centralize employee data, automate attendance with biometric integration, manage shifts, leaves, timesheets, documents, and HR analytics in one platform." },
      { property: "og:title", content: "Core HR Software — Sapience HCM" },
      { property: "og:description", content: "Centralize employee data and automate core HR operations." },
    ],
  }),
  component: CoreHRPage,
});

function CoreHRPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.coreHr.moreReasons");
  const faq = (useTranslatedArray("features.coreHr.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection
        headline={t("features.coreHr.heroHeadline")}
        subHeadline={t("features.coreHr.heroSub")}
        badge={t("features.coreHr.badge")}
        screenshotUrl="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png"
        screenshotAlt="Sapience HCM Core HR dashboard with employee analytics"
      />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={Users} title={t("features.coreHr.employeeMgmt")} description={t("features.coreHr.employeeMgmtDesc")} />
            <FeatureCard icon={Clock} title={t("features.coreHr.timeAttendance")} description={t("features.coreHr.timeAttendanceDesc")} />
            <FeatureCard icon={CalendarDays} title={t("features.coreHr.shiftRoster")} description={t("features.coreHr.shiftRosterDesc")} />
            <FeatureCard icon={CalendarDays} title={t("features.coreHr.leaveMgmt")} description={t("features.coreHr.leaveMgmtDesc")} />
            <FeatureCard icon={FileText} title={t("features.coreHr.timesheets")} description={t("features.coreHr.timesheetsDesc")} />
            <FeatureCard icon={Headphones} title={t("features.coreHr.hrHelpDesk")} description={t("features.coreHr.hrHelpDeskDesc")} />
            <FeatureCard icon={FolderOpen} title={t("features.coreHr.docMgmt")} description={t("features.coreHr.docMgmtDesc")} />
            <FeatureCard icon={BarChart3} title={t("features.coreHr.hrAnalytics")} description={t("features.coreHr.hrAnalyticsDesc")} />
          </div>
        </div>
      </section>
      <ScreenshotSection title={t("features.coreHr.screenshotTitle")} screenshots={[
        { src: "/screenshots/attendance-report.jpg", alt: "Sapience HCM late comers and early leavers attendance report" },
        { src: "/screenshots/duty-roster.jpg", alt: "Sapience HCM duty roster management" },
      ]} />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r) => (
              <div key={r} className="flex items-start gap-3">
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
