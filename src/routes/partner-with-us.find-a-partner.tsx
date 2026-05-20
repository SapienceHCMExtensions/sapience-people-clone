import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Mail, ArrowRight, Filter } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/partner-with-us/find-a-partner")({
  head: () => ({
    meta: [
      { title: "Find a Sapience HCM Partner — Channel, Referral & Implementation" },
      { name: "description", content: "Browse the directory of Sapience HCM partners across the GCC, Levant, Africa and Asia and find the right partner for your business." },
      { property: "og:title", content: "Find a Sapience HCM Partner" },
      { property: "og:description", content: "Browse our global directory of HCM channel, referral and implementation partners." },
      { rel: "canonical", href: "https://sapiencehcm.lovable.app/partner-with-us/find-a-partner" },
    ],
    links: getHreflangLinks("/partner-with-us/find-a-partner"),
  }),
  component: FindAPartnerPage,
});

type Region = "gcc" | "levant" | "africa" | "asia";
type PartnerType = "channel" | "referral" | "implementation";

interface Partner {
  name: string;
  region: Region;
  country: string;
  type: PartnerType;
  blurb: string;
}

const partners: Partner[] = [
  { name: "Acme HR Consulting", region: "gcc", country: "United Arab Emirates", type: "channel", blurb: "Full-service HR transformation partner serving mid-market and enterprise customers across the UAE." },
  { name: "GulfTech Solutions", region: "gcc", country: "Saudi Arabia", type: "implementation", blurb: "KSA-based implementation specialist for payroll, WPS and GOSI compliance rollouts." },
  { name: "Pearl Consulting", region: "gcc", country: "Bahrain", type: "channel", blurb: "Bahrain-based channel partner with deep expertise in financial services and government." },
  { name: "Atlas Advisory", region: "gcc", country: "Qatar", type: "referral", blurb: "Boutique HR advisory referring Qatar enterprises to modern HCM platforms." },
  { name: "LevantSoft", region: "levant", country: "Jordan", type: "implementation", blurb: "Levant-focused integrator delivering payroll, leave and tax compliance for Jordan, Lebanon and Iraq." },
  { name: "Cedar Systems", region: "levant", country: "Lebanon", type: "channel", blurb: "Beirut-based reseller serving hospitality, retail and professional-services clients." },
  { name: "NileWorks", region: "africa", country: "Egypt", type: "channel", blurb: "Cairo-based channel partner serving the largest HR transformations in North Africa." },
  { name: "Sahara Digital", region: "africa", country: "Libya", type: "referral", blurb: "Tripoli-based advisory referring local enterprises to Sapience HCM for payroll modernization." },
  { name: "Indus Systems", region: "asia", country: "India", type: "implementation", blurb: "Pune-based implementation partner with strong PF/ESI and TDS payroll experience." },
  { name: "Karachi HR Co.", region: "asia", country: "Pakistan", type: "channel", blurb: "Pakistan-based channel partner specializing in EOBI and income-tax payroll compliance." },
];

function FindAPartnerPage() {
  const t = useT();
  const [region, setRegion] = useState<"all" | Region>("all");
  const [type, setType] = useState<"all" | PartnerType>("all");

  const filtered = useMemo(() => {
    return partners.filter(
      (p) => (region === "all" || p.region === region) && (type === "all" || p.type === type),
    );
  }, [region, type]);

  const regionTabs: { key: "all" | Region; label: string }[] = [
    { key: "all", label: t("partner.find.regions.all") },
    { key: "gcc", label: t("partner.find.regions.gcc") },
    { key: "levant", label: t("partner.find.regions.levant") },
    { key: "africa", label: t("partner.find.regions.africa") },
    { key: "asia", label: t("partner.find.regions.asia") },
  ];

  const typeTabs: { key: "all" | PartnerType; label: string }[] = [
    { key: "all", label: t("partner.find.types.all") },
    { key: "channel", label: t("partner.find.types.channel") },
    { key: "referral", label: t("partner.find.types.referral") },
    { key: "implementation", label: t("partner.find.types.implementation") },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Filter className="h-4 w-4" /> {t("partner.find.eyebrow")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{t("partner.find.title")}</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">{t("partner.find.subtitle")}</p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground me-2">{t("partner.find.filters.region")}</span>
            {regionTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setRegion(tab.key)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  region === tab.key
                    ? "bg-bright-blue text-bright-blue-foreground border-bright-blue"
                    : "bg-white text-foreground border-gray-200 hover:border-bright-blue/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground me-2">{t("partner.find.filters.type")}</span>
            {typeTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setType(tab.key)}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  type === tab.key
                    ? "bg-vibrant-orange text-vibrant-orange-foreground border-vibrant-orange"
                    : "bg-white text-foreground border-gray-200 hover:border-vibrant-orange/40"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">{t("partner.find.empty")}</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div key={p.name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-bright-blue/40 hover:shadow-lg transition-all flex flex-col">
                  <div className="h-20 rounded-lg bg-soft-gray flex items-center justify-center mb-4">
                    <span className="text-base font-bold text-navy/70 tracking-wide">{p.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-bright-blue/10 text-bright-blue px-2 py-1 rounded">
                      {t(`partner.find.regions.${p.region}`)}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-vibrant-orange/10 text-vibrant-orange px-2 py-1 rounded">
                      {t(`partner.find.types.${p.type}`)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-1">{p.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3">{p.country}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{p.blurb}</p>
                  <a
                    href={`mailto:partners@sapiencehcm.com?subject=${encodeURIComponent(`Partner inquiry: ${p.name}`)}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-bright-blue hover:text-bright-blue/80"
                  >
                    <Mail className="h-4 w-4" /> {t("partner.find.contact")}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("partner.find.ctaTitle")}</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">{t("partner.find.ctaSubtitle")}</p>
          <Link
            to="/partner-with-us/become-a-partner"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground hover:opacity-90 transition-opacity"
          >
            {t("partner.find.ctaButton")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
