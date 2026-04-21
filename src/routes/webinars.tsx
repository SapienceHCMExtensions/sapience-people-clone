import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";
import { countryCodes, countryFlag } from "@/lib/countryCodes";

export const Route = createFileRoute("/webinars")({
  head: () => ({
    meta: [
      { title: "Webinars — Sapience HCM" },
      { name: "description", content: "Register for upcoming Sapience HCM webinars and learn from industry experts." },
      { property: "og:title", content: "Webinars — Sapience HCM" },
      { property: "og:description", content: "Register for upcoming Sapience HCM webinars." },
    ],
    links: getHreflangLinks("/webinars"),
  }),
  component: WebinarsPage,
});

const webinarTopics = [
  "Core HR Best Practices",
  "Payroll Compliance & Automation",
  "Performance Management Strategies",
  "Employee Engagement Trends",
  "HR Digital Transformation",
  "Recruitment & Onboarding",
  "HR Analytics & Reporting",
];

function WebinarsPage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgreed) return;
    setSubmitting(true);
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-4">{t("pages.webinars.thankYou")}</h1>
          <p className="text-muted-foreground">{t("pages.webinars.thankYouMsg")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-soft-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-navy">{t("pages.webinars.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("pages.webinars.subtitle")}</p>
            <div className="mt-8 space-y-4">
              {[t("pages.webinars.liveSessions"), t("pages.webinars.industryExperts"), t("pages.webinars.liveQA"), t("pages.webinars.recordingsAvailable")].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-vibrant-orange" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-xl border border-border p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="name">{t("pages.webinars.fullName")}</Label><Input id="name" required /></div>
                <div className="space-y-1.5"><Label htmlFor="email">{t("pages.webinars.businessEmail")}</Label><Input id="email" type="email" required /></div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label>{t("pages.webinars.countryCode")}</Label>
                  <Select defaultValue="+1 United States">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{countryCodes.map((c) => (<SelectItem key={`${c.code}-${c.name}`} value={`${c.code} ${c.name}`}>{countryFlag(c.iso)} {c.code} {c.name}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-1.5"><Label htmlFor="phone">{t("pages.webinars.phone")}</Label><Input id="phone" required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="company">{t("pages.webinars.company")}</Label><Input id="company" required /></div>
                <div className="space-y-1.5"><Label htmlFor="role">{t("pages.webinars.yourRole")}</Label><Input id="role" required /></div>
              </div>
              <div className="space-y-1.5">
                <Label>{t("pages.webinars.topicOfInterest")}</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder={t("pages.webinars.selectTopic")} /></SelectTrigger>
                  <SelectContent>{webinarTopics.map((topic) => (<SelectItem key={topic} value={topic}>{topic}</SelectItem>))}</SelectContent>
                </Select>
              </div>
              <label className="flex items-start gap-2 text-xs cursor-pointer pt-2">
                <Checkbox checked={privacyAgreed} onCheckedChange={(v) => setPrivacyAgreed(v === true)} className="mt-0.5" />
                <span className="text-muted-foreground">{t("pages.webinars.privacyAgree")} <a href="#" className="text-bright-blue underline">{t("pages.webinars.privacyPolicy")}</a>. *</span>
              </label>
              <Button type="submit" disabled={!privacyAgreed || submitting} className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                {submitting ? "Submitting…" : t("pages.webinars.register")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
