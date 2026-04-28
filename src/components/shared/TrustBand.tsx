import { useT } from "@/i18n/context";
import { AnimatedCounter } from "./AnimatedCounter";

// Real client logos from sapiencetechnology.com (default + hover variants).
const PARTNER_BASE = "https://www.sapiencetechnology.com/assets/img/partner-img";
const PARTNER_LOGOS = Array.from({ length: 18 }, (_, i) => ({
  default: `${PARTNER_BASE}/partner-${i + 1}.png`,
  hover: `${PARTNER_BASE}/partner-hover${i + 1}.png`,
}));

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
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="bg-background border-y border-border py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
          {t("home.trust.title")}
        </p>

        {/* Marquee logo strip */}
        <div className="marquee mb-12">
          <div className="marquee-track">
            {marqueeLogos.map((logo, i) => (
              <span
                key={`${logo.default}-${i}`}
                className="trust-logo-item"
                aria-hidden={i >= PARTNER_LOGOS.length}
              >
                <img
                  src={logo.default}
                  alt="Sapience client logo"
                  className="trust-logo-img"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={logo.hover}
                  alt=""
                  aria-hidden="true"
                  className="trust-logo-img trust-logo-img--hover"
                  loading="lazy"
                  decoding="async"
                />
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
