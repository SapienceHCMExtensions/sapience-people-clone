import { createFileRoute } from "@tanstack/react-router";
import { TestimonialBlock } from "@/components/shared/TestimonialBlock";
import { CTABanner } from "@/components/shared/CTABanner";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customer Stories — Sapience HCM" },
      { name: "description", content: "See how leading companies use Sapience HCM to transform their HR operations." },
      { property: "og:title", content: "Customer Stories — Sapience HCM" },
      { property: "og:description", content: "See how leading companies use Sapience HCM to transform their HR operations." },
    ],
  }),
  component: CustomersPage,
});

function CustomersPage() {
  return (
    <>
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-navy">Customer Stories</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how organizations worldwide trust Sapience HCM to streamline their HR operations.
          </p>
        </div>
      </section>
      <TestimonialBlock
        quote="Switching to Sapience HCM reduced our onboarding time by 60% and gave us complete visibility into our workforce analytics."
        name="Michael Torres"
        title="CHRO"
        company="HealthPlus Inc."
      />
      <TestimonialBlock
        quote="The automation capabilities are incredible. We eliminated hundreds of hours of manual data entry every month."
        name="Priya Sharma"
        title="HR Director"
        company="EduFirst Academy"
      />
      <CTABanner headline="Join 1,000+ companies using Sapience HCM" />
    </>
  );
}
