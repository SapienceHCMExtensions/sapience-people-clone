import { Link } from "@tanstack/react-router";
import logo from "@/assets/SapienceHCMLogo.svg";
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.png";
import { useT } from "@/i18n/context";

export function Footer() {
  const t = useT();

  const footerLinks = {
    features: [
      { name: t("common.footer.coreHr"), href: "/features/core-hr" },
      { name: t("common.footer.hiringOnboarding"), href: "/features/hiring-onboarding" },
      { name: t("common.footer.performance"), href: "/features/performance" },
      { name: t("common.footer.payrollExpense"), href: "/features/payroll" },
      { name: t("common.footer.engagement"), href: "/features/engagement" },
      { name: t("common.footer.hrAutomation"), href: "/features/hr-automation" },
      { name: t("common.footer.hrChatbot"), href: "/features/hr-chatbot" },
      { name: t("common.footer.integrations"), href: "/features/integrations" },
      { name: t("common.nav.allFeatures"), href: "/features" },
    ],
    solutions: [
      { name: t("common.footer.it"), href: "/solutions/it" },
      { name: t("common.footer.healthcare"), href: "/solutions/healthcare" },
      { name: t("common.footer.education"), href: "/solutions/education" },
      { name: t("common.footer.finance"), href: "/solutions/finance" },
      { name: t("common.footer.smallBusiness"), href: "/solutions/small-business" },
      { name: t("common.footer.enterprise"), href: "/solutions/enterprise" },
    ],
    resources: [
      { name: t("common.nav.requestDemo"), href: "/request-demo" },
      { name: t("common.nav.requestQuote"), href: "/request-quote" },
      { name: t("common.footer.customers"), href: "/customers" },
      { name: t("common.footer.pricing"), href: "/pricing" },
    ],
    legal: [
      { name: t("common.footer.termsOfService"), href: "#" },
      { name: t("common.footer.privacyPolicy"), href: "#" },
      { name: t("common.footer.cookiePolicy"), href: "#" },
      { name: t("common.footer.gdprCompliance"), href: "#" },
      { name: t("common.footer.antiSpam"), href: "#" },
    ],
  };

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img src={logo} alt="Sapience HCM" className="h-8 w-auto brightness-0 invert mb-4" />
            <p className="text-sm text-navy-foreground/70 mb-4">{t("common.footer.tagline")}</p>
            <div className="flex items-center gap-2 text-xs text-navy-foreground/50">
              <span>{t("common.footer.poweredBy")}</span>
            </div>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-navy-foreground/70 mb-3">
                {t("common.footer.getTheApp")}
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://play.google.com/store/apps/details?id=com.sapience.hcm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={googlePlayBadge} alt="Get it on Google Play" />
                </a>
                {/* TODO: replace # with the real App Store URL */}
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={appStoreBadge} alt="Download on the App Store" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">{t("common.footer.features")}</h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">{t("common.footer.solutions")}</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">{t("common.footer.resources")}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-navy-foreground/60 hover:text-navy-foreground transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-navy-foreground/90">{t("common.footer.securityPrivacy")}</h3>
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
            © {new Date().getFullYear()} Sapience Technology. {t("common.footer.allRights")}
          </p>
          <div className="flex items-center gap-3 text-xs text-navy-foreground/50">
            <span>{t("common.footer.aes256")}</span>
            <span>·</span>
            <span>{t("common.footer.mfa")}</span>
            <span>·</span>
            <span>{t("common.footer.uptime")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
