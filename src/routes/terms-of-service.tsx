import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/shared/LegalPage";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Sapience HCM" },
      { name: "description", content: "Read the Terms of Service that govern your access to and use of the Sapience HCM platform and related services." },
      { property: "og:title", content: "Terms of Service — Sapience HCM" },
      { property: "og:description", content: "Terms governing use of the Sapience HCM platform." },
    ],
    links: getHreflangLinks("/terms-of-service"),
  }),
  component: () => <LegalPage pageKey="terms" />,
});
