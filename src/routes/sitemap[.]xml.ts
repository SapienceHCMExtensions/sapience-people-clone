import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://sapiencehcm.lovable.app";

const PATHS: string[] = [
  "/",
  "/pricing",
  "/customers",
  "/request-demo",
  "/request-quote",
  "/roi-calculator",
  "/getting-started",
  "/training-program",
  "/webinars",
  "/sign-in",
  "/features",
  "/features/core-hr",
  "/features/payroll",
  "/features/hiring-onboarding",
  "/features/performance",
  "/features/engagement",
  "/features/organization-management",
  "/features/hr-automation",
  "/features/hr-chatbot",
  "/features/travel-expense",
  "/features/retirement-separation",
  "/features/mobile-app",
  "/features/biometric-integrations",
  "/features/erp-integrations",
  "/features/custom-services",
  "/features/integrations",
  "/solutions/small-business",
  "/solutions/medium-business",
  "/solutions/enterprise",
  "/solutions/healthcare",
  "/solutions/finance",
  "/solutions/education",
  "/solutions/it",
  "/solutions/media",
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/anti-spam-policy",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = PATHS.map((path) => {
          const priority = path === "/" ? "1.0" : path.startsWith("/features") || path.startsWith("/solutions") ? "0.8" : "0.6";
          return `  <url>\n    <loc>${BASE_URL}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
