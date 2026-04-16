import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { NumberedFeatureBlock } from "@/components/shared/NumberedFeatureBlock";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { CheckCircle } from "lucide-react";
import { useT, useTranslatedArray } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Route = createFileRoute("/features/organization-management")({
  head: () => ({ meta: [{ title: "Organization Management — Sapience HCM" }, { name: "description", content: "Manage organizational hierarchies, org charts, job descriptions, multiple roles, and company document expiry alerts in one platform." }, { property: "og:title", content: "Organization Management — Sapience HCM" }, { property: "og:description", content: "Organizational hierarchy, org charts, and job description management." }] }),
  component: OrganizationManagementPage,
});

function OrganizationManagementPage() {
  const t = useT();
  const moreReasons = useTranslatedArray("features.orgMgmt.moreReasons");
  const faq = (useTranslatedArray("features.orgMgmt.faq") as unknown) as { question: string; answer: string }[];
  const { ref: reasonsRef, isVisible: reasonsVisible } = useScrollAnimation();

  const features = [
    { number: "01", title: t("features.orgMgmt.hierarchy"), description: t("features.orgMgmt.hierarchyDesc") },
    { number: "02", title: t("features.orgMgmt.roles"), description: t("features.orgMgmt.rolesDesc") },
    { number: "03", title: t("features.orgMgmt.jobDesc"), description: t("features.orgMgmt.jobDescDesc") },
    { number: "04", title: t("features.orgMgmt.docExpiry"), description: t("features.orgMgmt.docExpiryDesc") },
    { number: "05", title: t("features.orgMgmt.directory"), description: t("features.orgMgmt.directoryDesc") },
  ];

  return (
    <>
      <HeroSection headline={t("features.orgMgmt.heroHeadline")} subHeadline={t("features.orgMgmt.heroSub")} badge={t("features.orgMgmt.badge")} />
      <NumberedFeatureBlock features={features} />
      <section ref={reasonsRef} className={`py-16 transition-all duration-700 ${reasonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
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
