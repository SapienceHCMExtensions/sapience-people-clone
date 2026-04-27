import { useT } from "@/i18n/context";
import { AnimatedCounter } from "./AnimatedCounter";

// Placeholder customer logos — replace with real client logos.
const CUSTOMER_LOGOS = [
  "Acme Corp",
  "Globex",
  "Initech",
  "Umbrella",
  "Stark Industries",
  "Wayne Enterprises",
  "Hooli",
  "Pied Piper",
];

interface Stat {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

export function TrustBand() {
  const t = useT();

  const stats: Stat[] = [
    { value: 10, suffix: "M+", label: t("home.trust.employees") },
    { value: 500, suffix: "+", label: t("home.trust.companies") },
    { value: 50, suffix: "+", label: t("home.trust.countries") },
    { value: 99.9, suffix: "%", label: t("home.trust.uptime"), decimals: 1 },
  ];

  // Duplicate the array so the marquee loop is seamless.
  const marqueeLogos = [...CUSTOMER_LOGOS, ...CUSTOMER_LOGOS];

  return (
    <section className="bg-background border-y border-border py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          {t("home.trust.title")}
        </p>

        {/* Marquee logo strip */}
        <div className="marquee mb-12">
          <div className="marquee-track">
            {marqueeLogos.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="trust-logo-item"
                aria-hidden={i >= CUSTOMER_LOGOS.length}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x lg:divide-border">
          {stats.map((s) => (
            <div key={s.label} className="text-center lg:px-4">
              <div className="text-3xl lg:text-4xl font-bold text-navy">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
