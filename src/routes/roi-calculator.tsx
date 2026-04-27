import { createFileRoute } from "@tanstack/react-router";
import { ROICalculator } from "@/components/shared/ROICalculator";
import { CTABanner } from "@/components/shared/CTABanner";
import { getHreflangLinks } from "@/lib/seo";
import { useT } from "@/i18n/context";

export const Route = createFileRoute("/roi-calculator")({
  head: () => ({
    meta: [
      { title: "ROI Calculator — Sapience HCM" },
      {
        name: "description",
        content:
          "Estimate how much time and money your HR team can save by switching to Sapience HCM. Interactive ROI calculator with detailed breakdown.",
      },
      { property: "og:title", content: "ROI Calculator — Sapience HCM" },
      {
        property: "og:description",
        content:
          "Estimate the ROI of moving your HR operations to Sapience HCM.",
      },
    ],
    links: getHreflangLinks("/roi-calculator"),
  }),
  component: ROICalculatorPage,
});

function ROICalculatorPage() {
  const t = useT();
  return (
    <>
      <section className="bg-soft-gray py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-vibrant-orange bg-vibrant-orange/10 px-3 py-1 rounded-full mb-4">
            {t("pages.roiCalculator.eyebrow")}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            {t("pages.roiCalculator.title")}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            {t("pages.roiCalculator.subtitle")}
          </p>
        </div>
      </section>
      <ROICalculator variant="full" />
      <CTABanner />
    </>
  );
}
