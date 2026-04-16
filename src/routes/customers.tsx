import { createFileRoute } from "@tanstack/react-router";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { CTABanner } from "@/components/shared/CTABanner";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/customers")({
  head: () => ({ meta: [{ title: "Customer Stories — Sapience HCM" }, { name: "description", content: "See how leading companies use Sapience HCM to transform their HR operations." }, { property: "og:title", content: "Customer Stories — Sapience HCM" }, { property: "og:description", content: "See how leading companies use Sapience HCM to transform their HR operations." }], links: getHreflangLinks("/customers") }),
  component: CustomersPage,
});

function CustomersPage() {
  const t = useT();
  return (
    <>
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy">{t("pages.customers.title")}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t("pages.customers.subtitle")}</p>
        </div>
      </section>
      <TestimonialBlock quote={t("pages.customers.testimonial1Quote")} name={t("pages.customers.testimonial1Name")} title={t("pages.customers.testimonial1Title")} company={t("pages.customers.testimonial1Company")} />
      <TestimonialBlock quote={t("pages.customers.testimonial2Quote")} name={t("pages.customers.testimonial2Name")} title={t("pages.customers.testimonial2Title")} company={t("pages.customers.testimonial2Company")} />
      <CTABanner headline={t("pages.customers.joinCta")} />
    </>
  );
}
