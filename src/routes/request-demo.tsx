import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/request-demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Sapience HCM" },
      { name: "description", content: "Schedule a personalized demo of Sapience HCM and see how it can transform your HR operations." },
      { property: "og:title", content: "Request a Demo — Sapience HCM" },
      { property: "og:description", content: "Schedule a personalized demo of Sapience HCM." },
    ],
  }),
  component: RequestDemoPage,
});

const countryCodes = [
  { code: "+1", country: "US" }, { code: "+44", country: "UK" }, { code: "+91", country: "IN" },
  { code: "+61", country: "AU" }, { code: "+49", country: "DE" }, { code: "+33", country: "FR" },
  { code: "+81", country: "JP" }, { code: "+86", country: "CN" }, { code: "+971", country: "AE" },
  { code: "+65", country: "SG" }, { code: "+234", country: "NG" }, { code: "+27", country: "ZA" },
  { code: "+55", country: "BR" }, { code: "+52", country: "MX" }, { code: "+82", country: "KR" },
];

const employeeRanges = ["1-50", "51-200", "201-500", "501-1000", "1001-5000", "5000+"];
const existingProviders = ["None", "SAP SuccessFactors", "Workday", "BambooHR", "Zoho People", "ADP", "Oracle HCM", "Other"];
const services = ["Core HR", "Hiring & Onboarding", "Performance Management", "Payroll", "Employee Engagement", "HR Automation", "HR Chatbot", "Mobile App", "Integrations"];

function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (s: string) => {
    setSelectedServices((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAgreed) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-24 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-navy mb-4">Thank you!</h1>
          <p className="text-muted-foreground">We've received your demo request. Our team will reach out within 24 hours to schedule your personalized demo.</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-soft-gray py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-navy">Request a Demo</h1>
              <p className="mt-4 text-lg text-muted-foreground">See how Sapience HCM can streamline your HR operations. Fill out the form and our team will schedule a personalized walkthrough.</p>
              <div className="mt-8 space-y-4">
                {["Personalized product walkthrough", "Tailored to your industry", "Live Q&A with product experts", "No commitment required"].map((item) => (
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
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input id="email" type="email" required placeholder="john@company.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <Label>Country Code</Label>
                    <Select defaultValue="+1">
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((c) => (
                          <SelectItem key={c.code} value={c.code}>{c.code} {c.country}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2 space-y-1.5">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" required placeholder="555-0123" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input id="company" required placeholder="Company Inc." />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Number of Employees</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                      <SelectContent>
                        {employeeRanges.map((r) => (<SelectItem key={r} value={r}>{r}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Existing Service Provider</Label>
                    <Select>
                      <SelectTrigger><SelectValue placeholder="Select provider" /></SelectTrigger>
                      <SelectContent>
                        {existingProviders.map((p) => (<SelectItem key={p} value={p}>{p}</SelectItem>))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="role">Your Role *</Label>
                    <Input id="role" required placeholder="HR Manager" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label>Services of Interest</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-1">
                    {services.map((s) => (
                      <label key={s} className="flex items-center gap-2 text-sm cursor-pointer">
                        <Checkbox checked={selectedServices.includes(s)} onCheckedChange={() => toggleService(s)} />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <Checkbox checked={marketingOptIn} onCheckedChange={(v) => setMarketingOptIn(v === true)} className="mt-0.5" />
                    <span className="text-muted-foreground">I agree to receive marketing communications from Sapience HCM.</span>
                  </label>
                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <Checkbox checked={privacyAgreed} onCheckedChange={(v) => setPrivacyAgreed(v === true)} className="mt-0.5" />
                    <span className="text-muted-foreground">I agree to the <a href="#" className="text-bright-blue underline">Privacy Policy</a>. *</span>
                  </label>
                </div>
                <Button type="submit" disabled={!privacyAgreed} className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
