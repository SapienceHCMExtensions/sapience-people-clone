import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { CTABanner } from "@/components/shared/CTABanner";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Sapience HCM" },
      { name: "description", content: "Simple, transparent pricing for businesses of every size. Choose from Cloud, Customer Cloud, or On Premise plans." },
      { property: "og:title", content: "Pricing — Sapience HCM" },
      { property: "og:description", content: "Simple, transparent pricing for businesses of every size." },
    ],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Sapience HCM Cloud",
    description: "Everything you need to manage your workforce in the cloud.",
    monthlyPrice: 10,
    yearlyPrice: 8,
    cta: "Try for Free",
    ctaLink: "/request-demo",
    popular: false,
    features: [
      "Employee Management",
      "Leave Management",
      "Attendance Tracking",
      "Shift Scheduling",
      "Timesheets",
      "Document Management",
      "HR Help Desk",
      "Basic HR Analytics",
      "Employee Self-Service Portal",
      "Mobile App Access",
    ],
  },
  {
    name: "Customer Cloud",
    description: "Advanced HR suite hosted on your dedicated cloud instance.",
    monthlyPrice: 10,
    yearlyPrice: 8,
    cta: "Try for Free",
    ctaLink: "/request-demo",
    popular: true,
    features: [
      "Everything in Sapience HCM Cloud",
      "Performance Management",
      "Compensation Management",
      "Learning Management (LMS)",
      "Payroll Processing",
      "Travel & Expense Management",
      "Employee Engagement Surveys",
      "HR Automation & Workflows",
      "Advanced Analytics & Reports",
      "Custom Integrations",
      "Dedicated Cloud Instance",
      "Priority Support",
    ],
  },
  {
    name: "On Premise",
    description: "Full control with deployment on your own infrastructure.",
    monthlyPrice: null,
    yearlyPrice: null,
    cta: "Contact Sales",
    ctaLink: "/request-quote",
    popular: false,
    features: [
      "Everything in Customer Cloud",
      "On-Premise Deployment",
      "Custom SLA Agreements",
      "Dedicated Account Manager",
      "Data Residency Control",
      "Enterprise SSO (SAML/LDAP)",
      "Custom Security Policies",
      "Unlimited API Access",
      "White-Label Options",
      "24/7 Premium Support",
    ],
  },
];

const comparisonCategories = [
  {
    name: "Core HR",
    features: [
      { name: "Employee Management", cloud: true, customerCloud: true, onPremise: true },
      { name: "Leave Management", cloud: true, customerCloud: true, onPremise: true },
      { name: "Attendance Tracking", cloud: true, customerCloud: true, onPremise: true },
      { name: "Shift Scheduling", cloud: true, customerCloud: true, onPremise: true },
      { name: "Timesheets", cloud: true, customerCloud: true, onPremise: true },
      { name: "Document Management", cloud: true, customerCloud: true, onPremise: true },
      { name: "HR Help Desk", cloud: true, customerCloud: true, onPremise: true },
      { name: "Offboarding", cloud: false, customerCloud: true, onPremise: true },
    ],
  },
  {
    name: "Performance & Development",
    features: [
      { name: "Performance Management", cloud: false, customerCloud: true, onPremise: true },
      { name: "Compensation Management", cloud: false, customerCloud: true, onPremise: true },
      { name: "Learning Management (LMS)", cloud: false, customerCloud: true, onPremise: true },
      { name: "Goal Setting & OKRs", cloud: false, customerCloud: true, onPremise: true },
    ],
  },
  {
    name: "Payroll & Expense",
    features: [
      { name: "Payroll Processing", cloud: false, customerCloud: true, onPremise: true },
      { name: "Travel & Expense", cloud: false, customerCloud: true, onPremise: true },
      { name: "Multi-Currency Support", cloud: false, customerCloud: false, onPremise: true },
    ],
  },
  {
    name: "Engagement & Automation",
    features: [
      { name: "Employee Engagement Surveys", cloud: false, customerCloud: true, onPremise: true },
      { name: "HR Automation & Workflows", cloud: false, customerCloud: true, onPremise: true },
      { name: "HR Chatbot", cloud: false, customerCloud: true, onPremise: true },
      { name: "Custom Workflow Builder", cloud: false, customerCloud: false, onPremise: true },
    ],
  },
  {
    name: "Analytics & Support",
    features: [
      { name: "Basic HR Analytics", cloud: true, customerCloud: true, onPremise: true },
      { name: "Advanced Analytics & Reports", cloud: false, customerCloud: true, onPremise: true },
      { name: "Custom Dashboards", cloud: false, customerCloud: false, onPremise: true },
      { name: "Email Support", cloud: true, customerCloud: true, onPremise: true },
      { name: "Priority Support", cloud: false, customerCloud: true, onPremise: true },
      { name: "24/7 Premium Support", cloud: false, customerCloud: false, onPremise: true },
      { name: "Dedicated Account Manager", cloud: false, customerCloud: false, onPremise: true },
    ],
  },
];

const addOns = [
  { name: "Additional Storage", description: "Extra cloud storage for documents and files", price: "$2/GB/month" },
  { name: "API Call Package", description: "10,000 additional API calls per month", price: "$25/month" },
  { name: "Premium Support", description: "24/7 phone & chat support with 1-hour SLA", price: "$5/user/month" },
  { name: "Data Migration", description: "Full-service data migration from your existing HR system", price: "Starting at $500" },
];

const faqItems = [
  { question: "Is there a free trial available?", answer: "Yes! We offer a 14-day free trial on our Sapience HCM Cloud and Customer Cloud plans. No credit card required. You'll get full access to all features during the trial period." },
  { question: "What happens after my free trial ends?", answer: "After your trial expires, you can choose to subscribe to any of our plans. Your data will be preserved for 30 days after the trial ends, giving you time to decide. If you choose not to continue, your data will be securely deleted." },
  { question: "Can I migrate my data from another HR system?", answer: "Absolutely. We provide comprehensive data migration support. Our team will help you transfer employee records, leave balances, payroll history, and more from your existing system. We support imports from all major HR platforms." },
  { question: "Can I cancel my subscription at any time?", answer: "Yes, you can cancel your subscription at any time. If you're on a yearly plan, you'll continue to have access until the end of your billing period. We don't charge any cancellation fees." },
  { question: "Do you offer discounts for large teams?", answer: "Yes, we offer volume discounts for organizations with 100+ employees. Contact our sales team to discuss custom enterprise pricing tailored to your needs." },
  { question: "What security certifications does Sapience HCM have?", answer: "Sapience HCM is compliant with ISO 9001, SOC2, HIPAA, and DCAA standards. We use AES-256 encryption, multi-factor authentication, and maintain a fault-tolerant architecture with 99.9% uptime SLAs." },
];

function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);
  const [expandedPlans, setExpandedPlans] = useState<Record<number, boolean>>({});

  const togglePlanFeatures = (index: number) => {
    setExpandedPlans((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-soft-gray overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-vibrant-orange/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible plans designed for businesses of every size. Start free, scale as you grow.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? "text-navy" : "text-muted-foreground"}`}>Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm font-medium ${isYearly ? "text-navy" : "text-muted-foreground"}`}>Yearly</span>
            {isYearly && (
              <Badge className="bg-vibrant-orange text-vibrant-orange-foreground border-0 text-xs">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${plan.popular ? "border-vibrant-orange shadow-lg scale-[1.02]" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-vibrant-orange text-vibrant-orange-foreground border-0">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-lg text-navy">{plan.name}</CardTitle>
                  <CardDescription className="mt-2">{plan.description}</CardDescription>
                  <div className="mt-6">
                    {plan.yearlyPrice !== null ? (
                      <>
                        <span className="text-4xl font-bold text-navy">
                          ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground text-sm">/user/month</span>
                        {isYearly && (
                          <p className="text-xs text-muted-foreground mt-1">
                            Billed annually
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-navy">Custom Pricing</span>
                    )}
                  </div>
                </CardHeader>
                <CardFooter className="flex-col gap-4 mt-auto">
                  <Button
                    asChild
                    className={`w-full ${plan.popular ? "bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link to={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                  <button
                    onClick={() => togglePlanFeatures(i)}
                    className="flex items-center gap-1 text-sm text-bright-blue hover:underline"
                  >
                    {expandedPlans[i] ? "Hide Features" : "Show Features"}
                    {expandedPlans[i] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>
                  {expandedPlans[i] && (
                    <ul className="w-full space-y-2 text-left">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-bright-blue shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy text-center mb-12">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[200px]">Feature</TableHead>
                  <TableHead className="text-center">HCM Cloud</TableHead>
                  <TableHead className="text-center">Customer Cloud</TableHead>
                  <TableHead className="text-center">On Premise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonCategories.map((cat) => (
                  <>
                    <TableRow key={cat.name}>
                      <TableCell colSpan={4} className="bg-navy/5 font-semibold text-navy">
                        {cat.name}
                      </TableCell>
                    </TableRow>
                    {cat.features.map((f) => (
                      <TableRow key={f.name}>
                        <TableCell className="text-sm">{f.name}</TableCell>
                        <TableCell className="text-center">
                          {f.cloud ? <Check className="h-4 w-4 text-bright-blue mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}
                        </TableCell>
                        <TableCell className="text-center">
                          {f.customerCloud ? <Check className="h-4 w-4 text-bright-blue mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}
                        </TableCell>
                        <TableCell className="text-center">
                          {f.onPremise ? <Check className="h-4 w-4 text-bright-blue mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy text-center mb-4">
            Add-Ons & Extras
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Enhance your plan with additional capabilities
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {addOns.map((addon) => (
              <Card key={addon.name}>
                <CardHeader>
                  <CardTitle className="text-base text-navy">{addon.name}</CardTitle>
                  <CardDescription>{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-bright-blue">{addon.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQAccordion title="Pricing FAQ" items={faqItems} />

      {/* CTA */}
      <CTABanner
        headline="Ready to get started?"
        subHeadline="Start your 14-day free trial today. No credit card required."
      />
    </>
  );
}
