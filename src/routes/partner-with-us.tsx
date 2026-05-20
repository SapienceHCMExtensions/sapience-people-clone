import { createFileRoute, Link } from "@tanstack/react-router";
import { Handshake, Share2, Wrench, TrendingUp, Megaphone, UserCheck, GraduationCap, BadgeCheck, Globe2, Search, ClipboardCheck, Rocket, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/partner-with-us")({
  head: () => ({
    meta: [
      { title: "Partner with Sapience HCM — Channel, Referral & Implementation Partners" },
      { name: "description", content: "Grow your business with the Sapience HCM Partner Program. Join as a Channel, Referral or Implementation Partner across the GCC, Levant, Africa and Asia." },
      { property: "og:title", content: "Partner with Sapience HCM" },
      { property: "og:description", content: "Diversify your offerings and unlock recurring revenue with the Sapience HCM Partner Program." },
      { rel: "canonical", href: "https://sapiencehcm.lovable.app/partner-with-us" },
    ],
    links: getHreflangLinks("/partner-with-us"),
  }),
  component: PartnerPage,
});

function PartnerPage() {
  const t = useT();

  const programs = [
    { icon: Handshake, key: "channel" },
    { icon: Share2, key: "referral" },
    { icon: Wrench, key: "implementation" },
  ] as const;

  const benefits = [
    { icon: TrendingUp, key: "revenue" },
    { icon: Megaphone, key: "comarketing" },
    { icon: UserCheck, key: "manager" },
    { icon: GraduationCap, key: "enablement" },
    { icon: BadgeCheck, key: "certification" },
    { icon: Globe2, key: "reach" },
  ] as const;

  const steps = [
    { icon: Search, key: "apply" },
    { icon: ClipboardCheck, key: "onboard" },
    { icon: Rocket, key: "launch" },
  ] as const;

  const partnerLogos = ["Acme HR", "GulfTech", "LevantSoft", "NileWorks", "Pearl Consulting", "Atlas Advisory", "Indus Systems", "Sahara Digital"];

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -end-32 w-[480px] h-[480px] rounded-full bg-bright-blue blur-3xl" />
          <div className="absolute -bottom-32 -start-32 w-[420px] h-[420px] rounded-full bg-vibrant-orange blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
                <Handshake className="h-4 w-4" /> {t("partner.hero.eyebrow")}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{t("partner.hero.title")}</h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl">{t("partner.hero.subtitle")}</p>
              <div className="flex flex-wrap gap-3">
                <Link to="/partner-with-us/find-a-partner" className="inline-flex items-center justify-center rounded-md bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground hover:opacity-90 transition-opacity">
                  {t("partner.hero.findPartner")}
                </Link>
                <Link to="/partner-with-us/become-a-partner" className="inline-flex items-center justify-center rounded-md bg-white text-navy px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors">
                  {t("partner.hero.becomePartner")}
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-bright-blue/30 to-vibrant-orange/20 backdrop-blur-sm border border-white/10" />
                <div className="absolute inset-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <Handshake className="h-32 w-32 mx-auto text-white/90 mb-4" strokeWidth={1.2} />
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">{t("partner.hero.badge")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{t("partner.why.title")}</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{t("partner.why.body")}</p>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-soft-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{t("partner.programs.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partner.programs.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div key={p.key} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-bright-blue/40 hover:shadow-lg transition-all flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-bright-blue/10 text-bright-blue flex items-center justify-center mb-5">
                  <p.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{t(`partner.programs.${p.key}.title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">{t(`partner.programs.${p.key}.desc`)}</p>
                <Link to="/partner-with-us/become-a-partner" className="inline-flex items-center gap-1.5 text-sm font-semibold text-bright-blue hover:text-bright-blue/80">
                  {t("partner.programs.learnMore")} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{t("partner.benefits.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partner.benefits.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.key} className="p-6 border border-gray-200 rounded-xl bg-white hover:border-bright-blue/40 transition-colors">
                <div className="w-11 h-11 rounded-lg bg-vibrant-orange/10 text-vibrant-orange flex items-center justify-center mb-4">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{t(`partner.benefits.${b.key}.title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`partner.benefits.${b.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global partners */}
      <section id="partners" className="bg-soft-gray py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{t("partner.partners.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partner.partners.subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partnerLogos.map((name) => (
              <div key={name} className="bg-white border border-gray-200 rounded-xl h-24 flex items-center justify-center px-4 hover:border-bright-blue/40 transition-colors">
                <span className="text-sm font-semibold text-navy/70 tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to become a partner */}
      <section id="become-a-partner" className="py-16 lg:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{t("partner.howTo.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partner.howTo.subtitle")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={s.key} className="relative bg-white border border-gray-200 rounded-2xl p-8 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-vibrant-orange text-vibrant-orange-foreground text-sm font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-bright-blue/10 text-bright-blue flex items-center justify-center mx-auto mb-4 mt-2">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{t(`partner.howTo.${s.key}.title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`partner.howTo.${s.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t("partner.cta.title")}</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">{t("partner.cta.subtitle")}</p>
          <Link to="/request-demo" className="inline-flex items-center justify-center rounded-md bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground hover:opacity-90 transition-opacity">
            {t("partner.cta.button")}
          </Link>
        </div>
      </section>
    </main>
  );
}
