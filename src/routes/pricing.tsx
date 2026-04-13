import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sapience HCM" },
      { name: "description", content: "Flexible pricing plans for businesses of every size." },
      { property: "og:title", content: "Pricing — Sapience HCM" },
      { property: "og:description", content: "Flexible pricing plans for businesses of every size." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold text-navy">Pricing</h1>
        <p className="mt-4 text-lg text-muted-foreground">Pricing details coming soon. Contact us for a custom quote.</p>
      </div>
    </section>
  );
}
