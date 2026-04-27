import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, UserMinus, Briefcase, Award, BookOpen, DollarSign, Plane, MessageSquare, Heart, Bot, Smartphone, Plug, Settings, Zap, Building2, Film, GraduationCap, Stethoscope, Landmark, Building, Layers, Globe } from "lucide-react";
import logo from "@/assets/SapienceHCMLogo.png";
import { useLanguage, useT, type Locale } from "@/i18n/context";

const languages: { code: Locale; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "es", label: "Español", short: "ES" },
];

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const current = languages.find((l) => l.code === locale) ?? languages[0];

  if (mobile) {
    return (
      <div className="flex gap-2">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${locale === l.code ? "bg-bright-blue text-bright-blue-foreground" : "text-foreground hover:bg-soft-gray"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md"
      >
        <Globe className="h-4 w-4" />
        <span>{current.short}</span>
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full end-0 mt-1 bg-background border border-border rounded-lg shadow-lg py-1 min-w-[140px] z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => { setLocale(l.code); setOpen(false); }}
              className={`w-full text-start px-3 py-2 text-sm transition-colors ${locale === l.code ? "text-bright-blue bg-bright-blue/5" : "text-foreground hover:bg-soft-gray"}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MegaDropdown({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div ref={ref} className="absolute top-full left-0 w-full bg-background border-b border-border shadow-lg z-50 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="max-w-7xl mx-auto p-6">{children}</div>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const t = useT();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const featureItems = [
    { category: t("features.allFeatures.orgMgmt"), link: "/features/organization-management", icon: Building2, items: [t("header.orgHierarchy"), t("header.orgChart"), t("header.jobDescriptions")] },
    { category: t("features.allFeatures.hiring"), link: "/features/hiring-onboarding", icon: Briefcase, items: [t("header.manpowerPlanning"), t("header.recruitment"), t("header.onboarding")] },
    { category: t("features.allFeatures.coreHr"), link: "/features/core-hr", icon: Users, items: [t("header.employeeMgmt"), t("header.attendance"), t("header.shifts"), t("header.leave"), t("header.timesheets"), t("header.documents")] },
    { category: t("features.allFeatures.performance"), link: "/features/performance", icon: Award, items: [t("header.evaluations"), t("header.compensation"), t("header.training")] },
    { category: t("features.allFeatures.payroll"), link: "/features/payroll", icon: DollarSign, items: [t("header.wpsCompliance"), t("header.glIntegration"), t("header.multiCurrency")] },
    { category: t("features.allFeatures.travelExpense"), link: "/features/travel-expense", icon: Plane, items: [t("header.expenseWallet"), t("header.tripAllowance"), t("header.payrollLink")] },
    { category: t("features.allFeatures.engagement"), link: "/features/engagement", icon: Heart, items: [t("header.surveys"), t("header.selfServicePortal")] },
    { category: t("features.allFeatures.retirement"), link: "/features/retirement-separation", icon: UserMinus, items: [t("header.gratuity"), t("header.exitManagement"), t("header.endOfService")] },
  ];

  const moreFeatures = [
    { name: t("header.hrAutomation"), link: "/features/hr-automation", icon: Zap },
    { name: t("header.customServices"), link: "/features/custom-services", icon: Settings },
    { name: t("header.hrChatbot"), link: "/features/hr-chatbot", icon: Bot },
    { name: t("header.mobileApp"), link: "/features/mobile-app", icon: Smartphone },
    { name: t("header.integrations"), link: "/features/integrations", icon: Plug },
    { name: t("header.erpIntegrations"), link: "/features/erp-integrations", icon: Plug },
    { name: t("header.biometricIntegrations"), link: "/features/biometric-integrations", icon: Smartphone },
    { name: t("header.allFeatures"), link: "/features", icon: Layers },
  ];

  const solutionItems = {
    byIndustry: [
      { name: t("header.it"), link: "/solutions/it", icon: Globe },
      { name: t("header.media"), link: "/solutions/media", icon: Film },
      { name: t("header.education"), link: "/solutions/education", icon: GraduationCap },
      { name: t("header.healthcare"), link: "/solutions/healthcare", icon: Stethoscope },
      { name: t("header.finance"), link: "/solutions/finance", icon: Landmark },
    ],
    bySize: [
      { name: t("header.smallBusiness"), link: "/solutions/small-business", icon: Building },
      { name: t("header.mediumBusiness"), link: "/solutions/medium-business", icon: Building2 },
      { name: t("header.enterprise"), link: "/solutions/enterprise", icon: Globe },
    ],
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Sapience HCM" className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <button onClick={() => toggleDropdown("features")} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              {t("common.nav.features")} <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "features" ? "rotate-180" : ""}`} />
            </button>
            <button onClick={() => toggleDropdown("solutions")} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              {t("common.nav.solutions")} <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
            </button>
            <Link to="/pricing" className="px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              {t("common.nav.pricing")}
            </Link>
            <Link to="/customers" className="px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              {t("common.nav.customers")}
            </Link>
            <button onClick={() => toggleDropdown("resources")} className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              {t("common.nav.resources")} <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/sign-in" className="text-sm font-medium text-foreground hover:text-bright-blue transition-colors">
              {t("common.nav.signIn")}
            </Link>
            <LanguageSwitcher />
            <Link to="/request-demo" className="inline-flex items-center justify-center rounded-md bg-vibrant-orange px-5 py-2 text-sm font-semibold text-vibrant-orange-foreground shadow-sm hover:opacity-90 transition-opacity">
              {t("common.nav.getStarted")}
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <MegaDropdown isOpen={activeDropdown === "features"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.featureCategories")}</h3>
            <div className="grid grid-cols-2 gap-4">
              {featureItems.map((f) => (
                <Link key={f.link} to={f.link} onClick={() => setActiveDropdown(null)} className="group flex items-start gap-3 p-3 rounded-lg hover:bg-soft-gray transition-colors">
                  <f.icon className="h-5 w-5 text-bright-blue mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground group-hover:text-bright-blue">{f.category}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{f.items.join(" · ")}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.more")}</h3>
            <div className="space-y-1">
              {moreFeatures.map((f) => (
                <Link key={f.link} to={f.link} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">
                  <f.icon className="h-4 w-4 text-bright-blue" />
                  {f.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MegaDropdown>

      <MegaDropdown isOpen={activeDropdown === "solutions"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.byIndustry")}</h3>
            <div className="space-y-1">
              {solutionItems.byIndustry.map((s) => (
                <Link key={s.link} to={s.link} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">
                  <s.icon className="h-4 w-4 text-bright-blue" /> {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.bySize")}</h3>
            <div className="space-y-1">
              {solutionItems.bySize.map((s) => (
                <Link key={s.link} to={s.link} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">
                  <s.icon className="h-4 w-4 text-bright-blue" /> {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MegaDropdown>

      <MegaDropdown isOpen={activeDropdown === "resources"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.hrToolkit")}</h3>
            <div className="space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.hrKnowledgeBase")}</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.blogs")}</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.hrGlossary")}</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.helpDocs")}</h3>
            <div className="space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.adminGuide")}</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.employeeHandbook")}</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.apiGuide")}</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.helpVideos")}</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">{t("common.nav.connectWithUs")}</h3>
            <div className="space-y-1">
              <Link to="/request-demo" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.nav.requestDemo")}</Link>
              <Link to="/request-quote" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.nav.requestQuote")}</Link>
              <Link to="/webinars" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.webinars")}</Link>
              <Link to="/training-program" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.trainingProgram")}</Link>
              <Link to="/getting-started" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">{t("common.nav.getStarted")}</Link>
            </div>
          </div>
        </div>
      </MegaDropdown>

      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            <div className="pb-2">
              <LanguageSwitcher mobile />
            </div>
            <div className="border-t border-border my-2" />
            <Link to="/features" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">{t("common.nav.allFeatures")}</Link>
            {featureItems.map((f) => (
              <Link key={f.link} to={f.link} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-soft-gray rounded-md">
                {f.category}
              </Link>
            ))}
            <div className="border-t border-border my-2" />
            {solutionItems.byIndustry.map((s) => (
              <Link key={s.link} to={s.link} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-soft-gray rounded-md">{s.name}</Link>
            ))}
            <div className="border-t border-border my-2" />
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">{t("common.nav.pricing")}</Link>
            <Link to="/customers" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">{t("common.nav.customers")}</Link>
            <Link to="/request-demo" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">{t("common.nav.requestDemo")}</Link>
            <div className="border-t border-border my-2" />
            <Link to="/request-demo" onClick={() => setMobileOpen(false)} className="block w-full text-center rounded-md bg-vibrant-orange px-5 py-2.5 text-sm font-semibold text-vibrant-orange-foreground">
              {t("common.nav.getStarted")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
