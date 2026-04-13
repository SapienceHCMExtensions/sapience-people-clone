import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, Users, Clock, CalendarDays, FileText, BarChart3, Headphones, FolderOpen, UserMinus, Briefcase, Award, BookOpen, DollarSign, Plane, MessageSquare, Heart, Bot, Smartphone, Plug, Settings, Zap, Building2, Film, GraduationCap, Stethoscope, Landmark, Building, Layers, Globe } from "lucide-react";
import logo from "@/assets/SapienceHCMLogo.svg";

const featureItems = [
  {
    category: "Hiring & Onboarding",
    link: "/features/hiring-onboarding",
    icon: Briefcase,
    items: ["Integrated recruitment", "Onboarding"],
  },
  {
    category: "Core HR",
    link: "/features/core-hr",
    icon: Users,
    items: ["Employee management", "Attendance", "Shift management", "Leave management", "Timesheets", "HR help desk", "Document management", "HR analytics", "Offboarding"],
  },
  {
    category: "Performance & Development",
    link: "/features/performance",
    icon: Award,
    items: ["Performance management", "Compensation", "Learning management"],
  },
  {
    category: "Payroll & Expense",
    link: "/features/payroll",
    icon: DollarSign,
    items: ["Integrated payroll", "Travel & expense"],
  },
  {
    category: "Employee Engagement",
    link: "/features/engagement",
    icon: Heart,
    items: ["Employee engagement", "Business chat"],
  },
];

const moreFeatures = [
  { name: "HR Automation", link: "/features/hr-automation", icon: Zap },
  { name: "Custom Services", link: "/features/custom-services", icon: Settings },
  { name: "HR Chatbot", link: "/features/hr-chatbot", icon: Bot },
  { name: "Mobile App", link: "/features/mobile-app", icon: Smartphone },
  { name: "Integrations", link: "/features/integrations", icon: Plug },
  { name: "All Features", link: "/features", icon: Layers },
];

const solutionItems = {
  byIndustry: [
    { name: "IT", link: "/solutions/it", icon: Globe },
    { name: "Media", link: "/solutions/media", icon: Film },
    { name: "Education", link: "/solutions/education", icon: GraduationCap },
    { name: "Healthcare", link: "/solutions/healthcare", icon: Stethoscope },
    { name: "Finance", link: "/solutions/finance", icon: Landmark },
  ],
  bySize: [
    { name: "Small Business", link: "/solutions/small-business", icon: Building },
    { name: "Medium Business", link: "/solutions/medium-business", icon: Building2 },
    { name: "Enterprise", link: "/solutions/enterprise", icon: Globe },
  ],
};

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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Sapience HCM" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => toggleDropdown("features")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md"
            >
              Features <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "features" ? "rotate-180" : ""}`} />
            </button>
            <button
              onClick={() => toggleDropdown("solutions")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md"
            >
              Solutions <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
            </button>
            <Link to="/pricing" className="px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              Pricing
            </Link>
            <Link to="/customers" className="px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md">
              Customers
            </Link>
            <button
              onClick={() => toggleDropdown("resources")}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-bright-blue transition-colors rounded-md"
            >
              Resources <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
            </button>
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/sign-in" className="text-sm font-medium text-foreground hover:text-bright-blue transition-colors">
              Sign In
            </Link>
            <Link
              to="/request-demo"
              className="inline-flex items-center justify-center rounded-md bg-vibrant-orange px-5 py-2 text-sm font-semibold text-vibrant-orange-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Features Mega Dropdown */}
      <MegaDropdown isOpen={activeDropdown === "features"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Feature Categories</h3>
            <div className="grid grid-cols-2 gap-4">
              {featureItems.map((f) => (
                <Link
                  key={f.link}
                  to={f.link}
                  onClick={() => setActiveDropdown(null)}
                  className="group flex items-start gap-3 p-3 rounded-lg hover:bg-soft-gray transition-colors"
                >
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
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">More</h3>
            <div className="space-y-1">
              {moreFeatures.map((f) => (
                <Link
                  key={f.link}
                  to={f.link}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors"
                >
                  <f.icon className="h-4 w-4 text-bright-blue" />
                  {f.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MegaDropdown>

      {/* Solutions Mega Dropdown */}
      <MegaDropdown isOpen={activeDropdown === "solutions"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">By Industry</h3>
            <div className="space-y-1">
              {solutionItems.byIndustry.map((s) => (
                <Link key={s.link} to={s.link} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">
                  <s.icon className="h-4 w-4 text-bright-blue" /> {s.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">By Size</h3>
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

      {/* Resources Mega Dropdown */}
      <MegaDropdown isOpen={activeDropdown === "resources"} onClose={() => setActiveDropdown(null)}>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">HR Toolkit</h3>
            <div className="space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">HR Knowledge Base</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Blogs</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">HR Glossary</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Help Documentation</h3>
            <div className="space-y-1">
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Administrator Guide</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Employee Handbook</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">API Guide</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Help Videos</a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Connect with Us</h3>
            <div className="space-y-1">
              <Link to="/request-demo" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Request Demo</Link>
              <Link to="/request-quote" onClick={() => setActiveDropdown(null)} className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Request a Price Quote</Link>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Webinars</a>
              <a href="#" className="block px-3 py-2 text-sm text-foreground hover:text-bright-blue hover:bg-soft-gray rounded-md transition-colors">Training Program</a>
            </div>
          </div>
        </div>
      </MegaDropdown>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            <Link to="/features" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">All Features</Link>
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
            <Link to="/pricing" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">Pricing</Link>
            <Link to="/customers" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">Customers</Link>
            <Link to="/request-demo" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground hover:bg-soft-gray rounded-md">Request Demo</Link>
            <div className="border-t border-border my-2" />
            <Link
              to="/request-demo"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center rounded-md bg-vibrant-orange px-5 py-2.5 text-sm font-semibold text-vibrant-orange-foreground"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
