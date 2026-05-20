import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Handshake, Share2, Wrench, CheckCircle2, ArrowRight, ClipboardCheck, PhoneCall, Rocket } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";
import { countryCodes, countryFlag } from "@/lib/countryCodes";

export const Route = createFileRoute("/partner-with-us/become-a-partner")({
  head: () => ({
    meta: [
      { title: "Become a Sapience HCM Partner — Apply to the Partner Program" },
      { name: "description", content: "Apply to join the Sapience HCM Partner Program as a Channel, Referral or Implementation Partner across the GCC, Levant, Africa and Asia." },
      { property: "og:title", content: "Become a Sapience HCM Partner" },
      { property: "og:description", content: "Apply to the Sapience HCM Partner Program and grow with us." },
      { rel: "canonical", href: "https://sapiencehcm.lovable.app/partner-with-us/become-a-partner" },
    ],
    links: getHreflangLinks("/partner-with-us/become-a-partner"),
  }),
  component: BecomeAPartnerPage,
});

const companySizes = ["1-10", "11-50", "51-200", "201-1000", "1000+"];
const markets = ["GCC", "Levant", "Africa", "Asia", "Other"];

function BecomeAPartnerPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [partnerType, setPartnerType] = useState<string>("channel");
  const [selectedMarkets, setSelectedMarkets] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);

  const toggleMarket = (m: string) => {
    setSelectedMarkets((prev) => (prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitting(true);
    setSubmitted(true);
    setSubmitting(false);
  };

  const programs = [
    { icon: Handshake, key: "channel" },
    { icon: Share2, key: "referral" },
    { icon: Wrench, key: "implementation" },
  ] as const;

  const steps = [
    { icon: ClipboardCheck, key: "review" },
    { icon: PhoneCall, key: "call" },
    { icon: Rocket, key: "onboard" },
  ] as const;

  return (
    <main>
      {/* Hero */}
      <section className="bg-navy text-white py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-5">
            <Handshake className="h-4 w-4" /> {t("partner.become.eyebrow")}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{t("partner.become.title")}</h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">{t("partner.become.subtitle")}</p>
        </div>
      </section>

      {/* Program recap */}
      <section className="py-12 lg:py-16 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4">
            {programs.map((p) => (
              <div key={p.key} className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-bright-blue/10 text-bright-blue flex items-center justify-center shrink-0">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">{t(`partner.programs.${p.key}.title`)}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{t(`partner.programs.${p.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-20" id="apply">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
              <div className="w-14 h-14 rounded-full bg-bright-blue/10 text-bright-blue flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-navy mb-3">{t("partner.become.success.title")}</h2>
              <p className="text-muted-foreground mb-6">{t("partner.become.success.body")}</p>
              <Link to="/partner-with-us" className="inline-flex items-center gap-1.5 text-sm font-semibold text-bright-blue hover:text-bright-blue/80">
                {t("partner.become.success.back")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">{t("partner.become.formTitle")}</h2>
              <p className="text-sm text-muted-foreground mb-8">{t("partner.become.formSubtitle")}</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="company">{t("partner.become.fields.company")} *</Label>
                    <Input id="company" required maxLength={150} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="website">{t("partner.become.fields.website")}</Label>
                    <Input id="website" type="url" maxLength={250} placeholder="https://" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("partner.become.fields.name")} *</Label>
                    <Input id="name" required maxLength={100} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">{t("partner.become.fields.email")} *</Label>
                    <Input id="email" type="email" required maxLength={150} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <Label>{t("partner.become.fields.countryCode")} *</Label>
                    <Select defaultValue="+971 United Arab Emirates">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((c) => (
                          <SelectItem key={`${c.code}-${c.name}`} value={`${c.code} ${c.name}`}>
                            {countryFlag(c.iso)} {c.code} {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="phone">{t("partner.become.fields.phone")} *</Label>
                    <Input id="phone" required maxLength={40} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="country">{t("partner.become.fields.country")} *</Label>
                    <Input id="country" required maxLength={80} />
                  </div>
                  <div className="space-y-1.5">
                    <Label>{t("partner.become.fields.companySize")}</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder={t("partner.become.fields.selectSize")} /></SelectTrigger>
                      <SelectContent>{companySizes.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}</SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t("partner.become.fields.partnerType")} *</Label>
                  <RadioGroup value={partnerType} onValueChange={setPartnerType} className="grid sm:grid-cols-3 gap-2">
                    {(["channel", "referral", "implementation"] as const).map((opt) => (
                      <label
                        key={opt}
                        htmlFor={`pt-${opt}`}
                        className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                          partnerType === opt ? "border-bright-blue bg-bright-blue/5" : "border-gray-200 hover:border-bright-blue/40"
                        }`}
                      >
                        <RadioGroupItem id={`pt-${opt}`} value={opt} />
                        <span className="text-sm font-medium">{t(`partner.programs.${opt}.title`)}</span>
                      </label>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>{t("partner.become.fields.markets")}</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {markets.map((m) => (
                      <label key={m} className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox checked={selectedMarkets.includes(m)} onCheckedChange={() => toggleMarket(m)} />
                        {m}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="years">{t("partner.become.fields.years")}</Label>
                    <Input id="years" type="number" min={0} max={100} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message">{t("partner.become.fields.message")} *</Label>
                  <Textarea id="message" required maxLength={1500} rows={5} placeholder={t("partner.become.fields.messagePlaceholder")} />
                </div>

                <label className="flex items-start gap-2 text-xs cursor-pointer pt-2">
                  <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
                  <span className="text-muted-foreground">
                    {t("partner.become.fields.consent")} <Link to="/privacy-policy" className="text-bright-blue underline">{t("partner.become.fields.privacyPolicy")}</Link>. *
                  </span>
                </label>

                <Button
                  type="submit"
                  disabled={!consent || submitting}
                  className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90"
                >
                  {submitting ? t("partner.become.submitting") : t("partner.become.submit")}
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-soft-gray py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">{t("partner.become.nextSteps.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t("partner.become.nextSteps.subtitle")}</p>
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
                <h3 className="text-lg font-bold text-navy mb-2">{t(`partner.become.nextSteps.${s.key}.title`)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(`partner.become.nextSteps.${s.key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
