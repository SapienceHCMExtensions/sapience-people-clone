import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileText, Receipt, Landmark, Calendar, RefreshCw } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/legislations")({
  head: () => ({
    meta: [
      { title: "Legislations & Compliance — Sapience HCM" },
      { name: "description", content: "Sapience HCM provides built-in compliance for UAE, Saudi Arabia, Qatar, Oman, Bahrain, Kuwait, Levant and Asia — Labour Law, WPS, EOSB, GOSI and more." },
      { property: "og:title", content: "Legislations & Compliance — Sapience HCM" },
      { property: "og:description", content: "Built-in regulatory compliance across the Middle East, Levant and Asia." },
    ],
    links: getHreflangLinks("/legislations"),
  }),
  component: LegislationsPage,
});

interface CountryEntry {
  flag: string;
  name: string;
  frameworks: string[];
}

const gccCountries: CountryEntry[] = [
  { flag: "🇦🇪", name: "United Arab Emirates", frameworks: ["UAE Labour Law", "Wages Protection System (WPS)", "End-of-Service Gratuity (EOSB)", "Country-specific leave & working-hour rules"] },
  { flag: "🇸🇦", name: "Saudi Arabia", frameworks: ["KSA Labour Law", "GOSI (Social Insurance)", "WPS / Mudad payroll filing", "End-of-Service Gratuity (EOSB)"] },
  { flag: "🇶🇦", name: "Qatar", frameworks: ["Qatar Labour Law", "Wages Protection System (WPS)", "End-of-Service Gratuity (EOSB)", "Statutory leave & working-hour rules"] },
  { flag: "🇴🇲", name: "Oman", frameworks: ["Oman Labour Law", "PASI (Social Insurance)", "Wages Protection System (WPS)", "End-of-Service Gratuity (EOSB)"] },
  { flag: "🇧🇭", name: "Bahrain", frameworks: ["Bahrain Labour Law", "SIO (Social Insurance Organisation)", "Wages Protection System (WPS)", "End-of-Service Gratuity (EOSB)"] },
  { flag: "🇰🇼", name: "Kuwait", frameworks: ["Kuwait Labour Law", "PIFSS (Social Security)", "Wages Protection System (WPS)", "End-of-Service Gratuity (EOSB)"] },
];

const levantAsiaCountries: CountryEntry[] = [
  { flag: "🇯🇴", name: "Jordan", frameworks: ["Labour Law", "Income tax & social security", "Statutory leave rules"] },
  { flag: "🇪🇬", name: "Egypt", frameworks: ["Labour Law", "Income tax & social insurance", "Statutory leave rules"] },
  { flag: "🇵🇸", name: "Palestine", frameworks: ["Labour Law", "Payroll tax rules", "Statutory leave rules"] },
  { flag: "🇮🇶", name: "Iraq", frameworks: ["Labour Law", "Income tax & social security", "Statutory leave rules"] },
  { flag: "🇱🇧", name: "Lebanon", frameworks: ["Labour Law", "NSSF & income tax", "Statutory leave rules"] },
  { flag: "🇱🇾", name: "Libya", frameworks: ["Labour Law", "Payroll tax rules", "Statutory leave rules"] },
  { flag: "🇮🇳", name: "India", frameworks: ["Labour codes", "PF, ESI & professional tax", "TDS / income-tax payroll"] },
  { flag: "🇵🇰", name: "Pakistan", frameworks: ["Labour Law", "EOBI & social security", "Income-tax payroll"] },
];

function CountryCard({ entry, frameworksLabel }: { entry: CountryEntry; frameworksLabel: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-bright-blue/40 transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl leading-none" aria-hidden="true">{entry.flag}</span>
        <h3 className="text-lg font-semibold text-navy">{entry.name}</h3>
      </div>
      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
        {frameworksLabel}
      </p>
      <ul className="space-y-1.5">
        {entry.frameworks.map((f) => (
          <li key={f} className="text-sm text-gray-700 flex gap-2">
            <span className="text-bright-blue mt-1">•</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LegislationsPage() {
  const t = useT();

  const capabilities = [
    { icon: FileText, title: "WPS File Generation", desc: "Automated payroll file generation and submission for all GCC Wages Protection Systems." },
    { icon: Receipt, title: "End-of-Service Gratuity", desc: "EOSB calculations aligned with each GCC country's labour law and tenure rules." },
    { icon: Landmark, title: "Social Insurance Integrations", desc: "Built-in support for GOSI, PASI, SIO, PIFSS, NSSF, EOBI, PF/ESI and more." },
    { icon: ShieldCheck, title: "Tax Engines", desc: "Country-specific income tax and payroll deductions for the Levant and Asia regions." },
    { icon: Calendar, title: "Leave & Working-Hour Rules", desc: "Configurable statutory leave types, accruals, and working-hour rules per country." },
    { icon: RefreshCw, title: "Continuous Regulatory Updates", desc: "Compliance updates delivered regularly as part of your subscription — no extra cost." },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-bright-blue/10 text-bright-blue px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <ShieldCheck className="h-4 w-4" /> {t("legislations.subtitle")}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">{t("legislations.title")}</h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{t("legislations.intro")}</p>
        </div>
      </section>

      {/* GCC */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">{t("legislations.gccHeading")}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("legislations.gccSubheading")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gccCountries.map((c) => (
              <CountryCard key={c.name} entry={c} frameworksLabel={t("legislations.frameworksLabel")} />
            ))}
          </div>
        </div>
      </section>

      {/* Levant & Asia */}
      <section className="py-16 lg:py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">{t("legislations.levantAsiaHeading")}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("legislations.levantAsiaSubheading")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levantAsiaCountries.map((c) => (
              <CountryCard key={c.name} entry={c} frameworksLabel={t("legislations.frameworksLabel")} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy">{t("legislations.capabilitiesHeading")}</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{t("legislations.capabilitiesSubheading")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((c) => (
              <div key={c.title} className="p-6 border border-gray-200 rounded-xl bg-white hover:border-bright-blue/40 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-bright-blue/10 text-bright-blue flex items-center justify-center mb-4">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{c.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("legislations.ctaTitle")}</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">{t("legislations.ctaSubtitle")}</p>
          <Link to="/request-demo" className="inline-flex items-center justify-center rounded-md bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground hover:opacity-90 transition-opacity">
            {t("legislations.ctaButton")}
          </Link>
        </div>
      </section>
    </main>
  );
}
