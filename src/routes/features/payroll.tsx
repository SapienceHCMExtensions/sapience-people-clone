import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { ScreenshotSection } from "@/components/shared/ScreenshotSection";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { DollarSign, FileText, Calculator, Landmark, CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/payroll")({
  head: () => ({ meta: [{ title: "Payroll Management — Sapience HCM" }, { name: "description", content: "GCC & Levant payroll with WPS compliance, multi-currency support, GL integration, pay groups, accruals, provisions, retro pay, and end of service benefits." }, { property: "og:title", content: "Payroll Management — Sapience HCM" }, { property: "og:description", content: "GCC-localized payroll with WPS compliance, GL integration, and multi-currency support." }] }),
  component: PayrollPage,
});

function PayrollPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.payroll.moreReasons");
  const faq = (useTranslatedArray("features.payroll.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.payroll.heroHeadline")} subHeadline={t("features.payroll.heroSub")} badge={t("features.payroll.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <FeatureCard icon={DollarSign} title={t("features.payroll.payrollWps")} description={t("features.payroll.payrollWpsDesc")} />
          <FeatureCard icon={FileText} title={t("features.payroll.payGroups")} description={t("features.payroll.payGroupsDesc")} />
          <FeatureCard icon={Landmark} title={t("features.payroll.glIntegration")} description={t("features.payroll.glIntegrationDesc")} />
          <FeatureCard icon={Calculator} title={t("features.payroll.accruals")} description={t("features.payroll.accrualsDesc")} />
        </div>
      </section>
      <ScreenshotSection title={t("features.payroll.screenshotTitle")} screenshots={[{ src: "/screenshots/payroll-process.jpg", alt: "Sapience HCM payroll processing interface" }]} />
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
      <TestimonialBlock quote={t("features.payroll.testimonialQuote")} name={t("features.payroll.testimonialName")} title={t("features.payroll.testimonialTitle")} company={t("features.payroll.testimonialCompany")} />
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
