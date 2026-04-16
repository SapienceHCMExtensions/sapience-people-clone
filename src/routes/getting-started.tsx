import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";
import { countryCodes } from "@/lib/countryCodes";

export const Route = createFileRoute("/getting-started")({
  head: () => ({
    meta: [
      { title: "Getting Started — Sapience HCM" },
      { name: "description", content: "Start your journey with Sapience HCM. Quick setup, dedicated support, and seamless data migration." },
      { property: "og:title", content: "Getting Started — Sapience HCM" },
      { property: "og:description", content: "Start your journey with Sapience HCM." },
    ],
    links: getHreflangLinks("/getting-started"),
  }),
  component: GettingStartedPage,
});

const employeeRanges = ["1-50", "51-200", "201-500", "501-1000", "1001-5000", "5000+"];
const existingProviders = ["None", "SAP SuccessFactors", "Workday", "BambooHR", "Zoho People", "ADP", "Oracle HCM", "Other"];
const services = ["Core HR", "Hiring & Onboarding", "Performance Management", "Payroll", "Employee Engagement", "HR Automation", "HR Chatbot", "Mobile App", "Integrations"];

function GettingStartedPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  if (submitted) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-4">{t("pages.gettingStarted.thankYou")}</h1>
          <p className="text-muted-foreground">{t("pages.gettingStarted.thankYouMsg")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-soft-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-navy">{t("pages.gettingStarted.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("pages.gettingStarted.subtitle")}</p>
            <div className="mt-8 space-y-4">
              {[t("pages.gettingStarted.quickSetup"), t("pages.gettingStarted.dedicatedSupport"), t("pages.gettingStarted.dataMigration"), t("pages.gettingStarted.goLiveInWeeks")].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-vibrant-orange" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-xl border border-border p-8 shadow-sm">
            <form onSubmit={(e) => { e.preventDefault(); if (privacyAgreed) setSubmitted(true); }} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="name">{t("pages.gettingStarted.fullName")}</Label><Input id="name" required /></div>
                <div className="space-y-1.5"><Label htmlFor="email">{t("pages.gettingStarted.businessEmail")}</Label><Input id="email" type="email" required /></div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label>{t("pages.gettingStarted.countryCode")}</Label>
                  <Select defaultValue="+1 United States">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{countryCodes.map((c) => (<SelectItem key={`${c.code}-${c.name}`} value={`${c.code} ${c.name}`}>{c.code} {c.name}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-1.5"><Label htmlFor="phone">{t("pages.gettingStarted.phone")}</Label><Input id="phone" required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="company">{t("pages.gettingStarted.company")}</Label><Input id="company" required /></div>
                <div className="space-y-1.5">
                  <Label>{t("pages.gettingStarted.employees")}</Label>
                  <Select><SelectTrigger><SelectValue placeholder={t("pages.gettingStarted.selectRange")} /></SelectTrigger><SelectContent>{employeeRanges.map((r) => (<SelectItem key={r} value={r}>{r}</SelectItem>))}</SelectContent></Select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label>{t("pages.gettingStarted.currentSystem")}</Label>
                  <Select><SelectTrigger><SelectValue placeholder={t("pages.gettingStarted.selectProvider")} /></SelectTrigger><SelectContent>{existingProviders.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}</SelectContent></Select>
                </div>
                <div className="space-y-1.5"><Label htmlFor="role">{t("pages.gettingStarted.yourRole")}</Label><Input id="role" required /></div>
              </div>
              <div className="space-y-1.5">
                <Label>{t("pages.gettingStarted.servicesOfInterest")}</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                  {services.map((s) => (<label key={s} className="flex items-center gap-2 text-sm cursor-pointer"><Checkbox checked={selectedServices.includes(s)} onCheckedChange={() => toggleService(s)} />{s}</label>))}
                </div>
              </div>
              <label className="flex items-start gap-2 text-xs cursor-pointer pt-2">
                <Checkbox checked={privacyAgreed} onCheckedChange={(v) => setPrivacyAgreed(v === true)} className="mt-0.5" />
                <span className="text-muted-foreground">{t("pages.gettingStarted.privacyAgree")} <a href="#" className="text-bright-blue underline">{t("pages.gettingStarted.privacyPolicy")}</a>. *</span>
              </label>
              <Button type="submit" disabled={!privacyAgreed} className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">{t("pages.gettingStarted.submitRequest")}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
