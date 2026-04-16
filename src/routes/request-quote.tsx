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
import { submitFormData } from "@/lib/submissions.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/request-quote")({
  head: () => ({ meta: [{ title: "Request a Price Quote — Sapience HCM" }, { name: "description", content: "Get a custom price quote tailored to your organization's needs." }, { property: "og:title", content: "Request a Price Quote — Sapience HCM" }, { property: "og:description", content: "Get a custom price quote for Sapience HCM." }], links: getHreflangLinks("/request-quote") }),
  component: RequestQuotePage,
});

const employeeRanges = ["1-50", "51-200", "201-500", "501-1000", "1001-5000", "5000+"];
const services = ["Core HR", "Hiring & Onboarding", "Performance Management", "Payroll", "Employee Engagement", "HR Automation", "HR Chatbot", "Mobile App", "Integrations"];

function RequestQuotePage() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgreed) return;
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = {
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        company: (form.elements.namedItem("company") as HTMLInputElement).value,
        role: (form.elements.namedItem("role") as HTMLInputElement).value,
        services: selectedServices,
      };
      const result = await submitFormData({ data: { formType: "request-quote", data: formData } });
      if (result.success) {
        setSubmitted(true);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-4">{t("pages.requestQuote.thankYou")}</h1>
          <p className="text-muted-foreground">{t("pages.requestQuote.thankYouMsg")}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-soft-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-navy">{t("pages.requestQuote.title")}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{t("pages.requestQuote.subtitle")}</p>
          </div>
          <div className="bg-background rounded-xl border border-border p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="name">{t("pages.requestQuote.fullName")}</Label><Input id="name" required /></div>
                <div className="space-y-1.5"><Label htmlFor="email">{t("pages.requestQuote.businessEmail")}</Label><Input id="email" type="email" required /></div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label>{t("pages.requestQuote.countryCode")}</Label>
                  <Select defaultValue="+1 United States">
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>{countryCodes.map((c) => (<SelectItem key={`${c.code}-${c.name}`} value={`${c.code} ${c.name}`}>{countryFlag(c.iso)} {c.code} {c.name}</SelectItem>))}</SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2 space-y-1.5"><Label htmlFor="phone">{t("pages.requestQuote.phone")}</Label><Input id="phone" required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5"><Label htmlFor="company">{t("pages.requestQuote.company")}</Label><Input id="company" required /></div>
                <div className="space-y-1.5">
                  <Label>{t("pages.requestQuote.employees")}</Label>
                  <Select><SelectTrigger><SelectValue placeholder={t("pages.requestQuote.select")} /></SelectTrigger><SelectContent>{employeeRanges.map((r) => (<SelectItem key={r} value={r}>{r}</SelectItem>))}</SelectContent></Select>
                </div>
              </div>
              <div className="space-y-1.5"><Label htmlFor="role">{t("pages.requestQuote.yourRole")}</Label><Input id="role" required /></div>
              <div className="space-y-1.5">
                <Label>{t("pages.requestQuote.servicesOfInterest")}</Label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                  {services.map((s) => (<label key={s} className="flex items-center gap-2 text-sm cursor-pointer"><Checkbox checked={selectedServices.includes(s)} onCheckedChange={() => toggleService(s)} />{s}</label>))}
                </div>
              </div>
              <label className="flex items-start gap-2 text-xs cursor-pointer pt-2">
                <Checkbox checked={privacyAgreed} onCheckedChange={(v) => setPrivacyAgreed(v === true)} className="mt-0.5" />
                <span className="text-muted-foreground">{t("pages.requestQuote.privacyAgree")} <a href="#" className="text-bright-blue underline">{t("pages.requestQuote.privacyPolicy")}</a>. *</span>
              </label>
              <Button type="submit" disabled={!privacyAgreed || submitting} className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                {submitting ? "Submitting…" : t("pages.requestQuote.submitQuoteRequest")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
