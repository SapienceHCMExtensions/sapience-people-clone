import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/context";
import { useState, useRef, useCallback, useEffect } from "react";

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
  const [mounted, setMounted] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section className="relative bg-soft-gray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-vibrant-orange/5" />
      {/* Floating orbs */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span
              className={`inline-block text-xs font-semibold uppercase tracking-wider text-bright-blue bg-bright-blue/10 px-3 py-1 rounded-full mb-6 transition-all duration-500 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-navy tracking-tight leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {headline}
          </h1>
          <p
            className={`mt-6 text-lg text-muted-foreground leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {subHeadline}
          </p>
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <Link
              to={ctaPrimaryLink}
              className="shimmer-btn pulse-glow inline-flex items-center justify-center rounded-lg bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground shadow-lg hover:opacity-90 transition-opacity"
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
          <div
            ref={tiltRef}
            className={`tilt-card mt-12 max-w-5xl mx-auto transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
            }`}
            style={{ transitionDelay: "1000ms" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={screenshotUrl}
              alt={screenshotAlt}
              className="tilt-card-inner w-full rounded-xl shadow-2xl border border-border"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </section>
  );
}
