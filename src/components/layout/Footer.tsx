import { Link } from "@tanstack/react-router";
import logo from "@/assets/SapienceHCMLogo.svg";

const footerLinks = {
  features: [
    { name: "Core HR", href: "/features/core-hr" },
    { name: "Hiring & Onboarding", href: "/features/hiring-onboarding" },
    { name: "Performance", href: "/features/performance" },
    { name: "Payroll & Expense", href: "/features/payroll" },
    { name: "Employee Engagement", href: "/features/engagement" },
    { name: "HR Automation", href: "/features/hr-automation" },
    { name: "HR Chatbot", href: "/features/hr-chatbot" },
    { name: "Integrations", href: "/features/integrations" },
    { name: "All Features", href: "/features" },
  ],
  solutions: [
    { name: "IT", href: "/solutions/it" },
    { name: "Healthcare", href: "/solutions/healthcare" },
    { name: "Education", href: "/solutions/education" },
    { name: "Finance", href: "/solutions/finance" },
    { name: "Small Business", href: "/solutions/small-business" },
    { name: "Enterprise", href: "/solutions/enterprise" },
  ],
  resources: [
    { name: "Request Demo", href: "/request-demo" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Customers", href: "/customers" },
    { name: "Pricing", href: "/pricing" },
  ],
  legal: [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
    { name: "Anti-spam Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img src={logo} alt="Sapience HCM" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-navy-foreground/70 mb-4">
              Comprehensive human capital management for modern businesses.
            </p>
            <div className="flex items-center gap-2 text-xs text-navy-foreground/50">
              <span>Powered by Sapience Technology</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">Features</h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">Security & Privacy</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {["ISO 9001", "SOC2", "HIPAA", "DCAA"].map((badge) => (
                <span key={badge} className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-navy-foreground/10 text-navy-foreground/70 px-2 py-1 rounded">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Sapience Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs text-navy-foreground/50">
            <span>AES-256 Encryption</span>
            <span>·</span>
            <span>Multi-factor Authentication</span>
            <span>·</span>
            <span>99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
