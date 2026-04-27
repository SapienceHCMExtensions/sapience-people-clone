import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Users, DollarSign, Award, Heart, BarChart3, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type TabKey = "core" | "payroll" | "performance" | "engagement" | "analytics";

const ROTATE_MS = 6000;

export function ProductTour() {
  const t = useT();
  const heading = useScrollAnimation(0.15);
  const [active, setActive] = useState<TabKey>("core");
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  // Replaceable screenshot URLs — swap with real product screenshots when available.
  const SHOT = "https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/fb7068d1-4226-40b3-bf18-9a5daf35ff8d.png";

  const tabs: {
    key: TabKey;
    icon: typeof Users;
    label: string;
    title: string;
    desc: string;
    bullets: string[];
    link: string;
    shot: string;
  }[] = [
    {
      key: "core",
      icon: Users,
      label: t("home.tour.coreLabel"),
      title: t("home.tour.coreTitle"),
      desc: t("home.tour.coreDesc"),
      bullets: [
        t("home.tour.coreB1"),
        t("home.tour.coreB2"),
        t("home.tour.coreB3"),
      ],
      link: "/features/core-hr",
      shot: SHOT,
    },
    {
      key: "payroll",
      icon: DollarSign,
      label: t("home.tour.payrollLabel"),
      title: t("home.tour.payrollTitle"),
      desc: t("home.tour.payrollDesc"),
      bullets: [
        t("home.tour.payrollB1"),
        t("home.tour.payrollB2"),
        t("home.tour.payrollB3"),
      ],
      link: "/features/payroll",
      shot: SHOT,
    },
    {
      key: "performance",
      icon: Award,
      label: t("home.tour.perfLabel"),
      title: t("home.tour.perfTitle"),
      desc: t("home.tour.perfDesc"),
      bullets: [
        t("home.tour.perfB1"),
        t("home.tour.perfB2"),
        t("home.tour.perfB3"),
      ],
      link: "/features/performance",
      shot: SHOT,
    },
    {
      key: "engagement",
      icon: Heart,
      label: t("home.tour.engagementLabel"),
      title: t("home.tour.engagementTitle"),
      desc: t("home.tour.engagementDesc"),
      bullets: [
        t("home.tour.engagementB1"),
        t("home.tour.engagementB2"),
        t("home.tour.engagementB3"),
      ],
      link: "/features/engagement",
      shot: SHOT,
    },
    {
      key: "analytics",
      icon: BarChart3,
      label: t("home.tour.analyticsLabel"),
      title: t("home.tour.analyticsTitle"),
      desc: t("home.tour.analyticsDesc"),
      bullets: [
        t("home.tour.analyticsB1"),
        t("home.tour.analyticsB2"),
        t("home.tour.analyticsB3"),
      ],
      link: "/features/hr-automation",
      shot: SHOT,
    },
  ];

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => {
      const idx = tabs.findIndex((tb) => tb.key === active);
      const next = tabs[(idx + 1) % tabs.length].key;
      setActive(next);
    }, ROTATE_MS);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [active, paused, tabs]);

  return (
    <section
      className="py-16 lg:py-24 bg-soft-gray"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heading.ref}
          className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
            heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-bright-blue bg-bright-blue/10 px-3 py-1 rounded-full mb-4">
            {t("home.tour.eyebrow")}
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
            {t("home.tour.title")}
          </h2>
          <p className="mt-4 text-muted-foreground">{t("home.tour.subtitle")}</p>
        </div>

        <Tabs value={active} onValueChange={(v) => setActive(v as TabKey)}>
          <TabsList className="flex flex-wrap h-auto justify-center bg-background border border-border rounded-xl p-1.5 mb-10 gap-1 max-w-3xl mx-auto">
            {tabs.map((tb) => (
              <TabsTrigger
                key={tb.key}
                value={tb.key}
                className="flex items-center gap-2 px-4 py-2 text-sm data-[state=active]:bg-bright-blue data-[state=active]:text-bright-blue-foreground rounded-lg"
              >
                <tb.icon className="h-4 w-4" />
                <span>{tb.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tb) => (
            <TabsContent
              key={tb.key}
              value={tb.key}
              className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center animate-fade-in"
            >
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-bright-blue/10 text-bright-blue mb-5">
                  <tb.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                  {tb.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {tb.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {tb.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-vibrant-orange" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={tb.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-bright-blue hover:gap-3 transition-all"
                >
                  {t("home.tour.learnMore")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative">
                {/* Browser frame mock */}
                <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-background">
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-soft-gray border-b border-border">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-3 text-[10px] text-muted-foreground truncate">
                      app.sapiencehcm.com
                    </span>
                  </div>
                  <img
                    src={tb.shot}
                    alt={`${tb.title} — Sapience HCM screenshot`}
                    className="w-full block"
                    loading="lazy"
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
