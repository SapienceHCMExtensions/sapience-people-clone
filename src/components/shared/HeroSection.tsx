import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/context";

interface HeroSectionProps {
  headline: string;
  subHeadline: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  badge?: string;
  screenshotUrl?: string;
  screenshotAlt?: string;
}

export function HeroSection({
  headline,
  subHeadline,
  ctaPrimaryText,
  ctaPrimaryLink = "/request-demo",
  ctaSecondaryText,
  ctaSecondaryLink = "/request-demo",
  badge,
  screenshotUrl,
  screenshotAlt = "Sapience HCM product screenshot",
}: HeroSectionProps) {
  const t = useT();
  return (
    <section className="relative bg-soft-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-vibrant-orange/5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-bright-blue bg-bright-blue/10 px-3 py-1 rounded-full mb-6">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {subHeadline}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={ctaPrimaryLink}
              className="inline-flex items-center justify-center rounded-lg bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              {ctaPrimaryText ?? t("common.cta.signUpFree")}
            </Link>
            <Link
              to={ctaSecondaryLink}
              className="inline-flex items-center justify-center rounded-lg border-2 border-navy bg-transparent px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-navy-foreground transition-colors"
            >
              {ctaSecondaryText ?? t("common.cta.requestDemo")}
            </Link>
          </div>
        </div>
        {screenshotUrl && (
          <div className="mt-12 max-w-5xl mx-auto">
            <img
              src={screenshotUrl}
              alt={screenshotAlt}
              className="w-full rounded-xl shadow-2xl border border-border"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
