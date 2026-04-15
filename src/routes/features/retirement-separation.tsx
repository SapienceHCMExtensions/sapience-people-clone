import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { UserMinus, Calculator, CalendarCheck, Package, FileText, CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";

export const Route = createFileRoute("/features/retirement-separation")({
  head: () => ({ meta: [{ title: "Retirement & Separation — Sapience HCM" }, { name: "description", content: "Automate end of service settlements, gratuity calculations, leave settlement, asset clearance, and exit management per GCC labor laws." }, { property: "og:title", content: "Retirement & Separation — Sapience HCM" }, { property: "og:description", content: "Automated gratuity, EOS settlements, and exit management." }] }),
  component: RetirementSeparationPage,
});

function RetirementSeparationPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.retirement.moreReasons");
  const faq = (useTranslatedArray("features.retirement.faq") as unknown) as { question: string; answer: string }[];

  return (
    <>
      <HeroSection headline={t("features.retirement.heroHeadline")} subHeadline={t("features.retirement.heroSub")} badge={t("features.retirement.badge")} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Calculator} title={t("features.retirement.gratuity")} description={t("features.retirement.gratuityDesc")} />
          <FeatureCard icon={FileText} title={t("features.retirement.arrears")} description={t("features.retirement.arrearsDesc")} />
          <FeatureCard icon={CalendarCheck} title={t("features.retirement.leaveSettlement")} description={t("features.retirement.leaveSettlementDesc")} />
          <FeatureCard icon={Package} title={t("features.retirement.assetClearance")} description={t("features.retirement.assetClearanceDesc")} />
          <FeatureCard icon={UserMinus} title={t("features.retirement.exitMgmt")} description={t("features.retirement.exitMgmtDesc")} />
          <FeatureCard icon={Calculator} title={t("features.retirement.eosSettlement")} description={t("features.retirement.eosSettlementDesc")} />
        </div>
      </section>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">{t("common.moreReasons")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreReasons.map((r, i) => (
              <div key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-bright-blue shrink-0 mt-0.5" /><span className="text-sm text-foreground">{r}</span></div>
            ))}
          </div>
        </div>
      </section>
      <FAQAccordion items={faq} />
      <CTABanner />
    </>
  );
}
