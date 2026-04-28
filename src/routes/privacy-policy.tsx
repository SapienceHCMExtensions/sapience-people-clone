import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/shared/LegalPage";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sapience HCM" },
      { name: "description", content: "Learn how Sapience HCM collects, uses, and protects your personal information in compliance with GDPR and other privacy laws." },
      { property: "og:title", content: "Privacy Policy — Sapience HCM" },
      { property: "og:description", content: "How Sapience HCM collects, uses, and protects your data." },
    ],
    links: getHreflangLinks("/privacy-policy"),
  }),
  component: () => <LegalPage pageKey="privacy" />,
});
