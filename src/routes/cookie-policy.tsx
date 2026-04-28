import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/shared/LegalPage";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Sapience HCM" },
      { name: "description", content: "Understand how Sapience HCM uses cookies and similar technologies, and how you can manage your preferences." },
      { property: "og:title", content: "Cookie Policy — Sapience HCM" },
      { property: "og:description", content: "How Sapience HCM uses cookies and how to manage them." },
    ],
    links: getHreflangLinks("/cookie-policy"),
  }),
  component: () => <LegalPage pageKey="cookies" />,
});
