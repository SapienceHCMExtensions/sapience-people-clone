import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/shared/LegalPage";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/anti-spam-policy")({
  head: () => ({
    meta: [
      { title: "Anti-spam Policy — Sapience HCM" },
      { name: "description", content: "Sapience HCM's commitment to responsible email practices and compliance with CAN-SPAM, CASL, and GDPR." },
      { property: "og:title", content: "Anti-spam Policy — Sapience HCM" },
      { property: "og:description", content: "Our commitment to responsible email and anti-spam compliance." },
    ],
    links: getHreflangLinks("/anti-spam-policy"),
  }),
  component: () => <LegalPage pageKey="antiSpam" />,
});
