import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/context";
import { useState, useRef, useCallback, useEffect } from "react";
import type { LucideIcon } from "lucide-react";

export type HeroVariant = "default" | "gradient-mesh" | "spotlight" | "aurora" | "grid";
export type HeroSize = "md" | "lg" | "xl";
export type HeroAlign = "center" | "left";

interface TrustLogo {
  src: string;
  alt: string;
}

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
  // Visual effects (all optional, additive)
  variant?: HeroVariant;
  backgroundImage?: string;
  overlayOpacity?: number;
  showOrbs?: boolean;
  showGrid?: boolean;
  showNoise?: boolean;
  showSpotlight?: boolean;
  align?: HeroAlign;
  size?: HeroSize;
  eyebrowIcon?: LucideIcon;
  trustLogos?: TrustLogo[];
}

const sizeClass: Record<HeroSize, string> = {
  md: "py-16 lg:py-20",
  lg: "py-20 lg:py-28",
  xl: "py-24 lg:py-36",
};

const variantClass: Record<HeroVariant, string> = {
  default: "bg-soft-gray",
  "gradient-mesh": "hero-mesh",
  spotlight: "bg-soft-gray hero-spotlight",
  aurora: "hero-aurora",
  grid: "bg-soft-gray hero-grid",
};

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
  variant = "default",
  backgroundImage,
  overlayOpacity = 0.55,
  showOrbs = true,
  showGrid = false,
  showNoise = false,
  showSpotlight = false,
  align = "center",
  size = "lg",
  eyebrowIcon: EyebrowIcon,
  trustLogos,
}: HeroSectionProps) {
  const t = useT();
  const [mounted, setMounted] = useState(false);
  const tiltRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
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

  const handleSectionMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!showSpotlight) return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }, [showSpotlight]);

  const isLeft = align === "left";
  const containerAlign = isLeft ? "max-w-3xl text-left" : "max-w-3xl mx-auto text-center";
  const ctaAlign = isLeft ? "justify-start" : "justify-center";

  const spotlightClass = showSpotlight && variant !== "spotlight" ? "hero-spotlight" : "";
  const gridClass = showGrid && variant !== "grid" ? "hero-grid" : "";
  const noiseClass = showNoise ? "hero-noise" : "";

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMove}
      className={`relative overflow-hidden ${variantClass[variant]} ${spotlightClass} ${gridClass} ${noiseClass}`}
      style={showSpotlight ? ({ ["--mx" as never]: "50%", ["--my" as never]: "30%" } as React.CSSProperties) : undefined}
    >
      {/* Background image + scrim */}
      {backgroundImage && (
        <>
          <img src={backgroundImage} alt="" aria-hidden="true" className="hero-bg-image" loading="eager" />
          <div className="hero-bg-scrim" style={{ ["--scrim" as never]: overlayOpacity } as React.CSSProperties} />
        </>
      )}

      {/* Soft brand wash (skip when a background image is set) */}
      {!backgroundImage && variant === "default" && (
        <div className="absolute inset-0 bg-gradient-to-br from-bright-blue/5 to-vibrant-orange/5" />
      )}

      {/* Floating orbs */}
      {showOrbs && !backgroundImage && (
        <>
          <div className="floating-orb floating-orb-1" />
          <div className="floating-orb floating-orb-2" />
          <div className="floating-orb floating-orb-3" />
        </>
      )}

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${sizeClass[size]}`}>
        <div className={containerAlign}>
          {badge && (
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider ${
                backgroundImage ? "text-white bg-white/15 backdrop-blur" : "text-bright-blue bg-bright-blue/10"
              } px-3 py-1 rounded-full mb-6 transition-all duration-500 ${
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
              {badge}
            </span>
          )}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
              backgroundImage ? "text-white" : "text-navy"
            } tracking-tight leading-tight transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {headline}
          </h1>
          <p
            className={`mt-6 text-lg ${
              backgroundImage ? "text-white/85" : "text-muted-foreground"
            } leading-relaxed transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            {subHeadline}
          </p>
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center ${ctaAlign} gap-4 transition-all duration-700 ${
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
              className={`inline-flex items-center justify-center rounded-lg border-2 px-6 py-3 text-sm font-semibold transition-colors ${
                backgroundImage
                  ? "border-white text-white bg-transparent hover:bg-white hover:text-navy"
                  : "border-navy text-navy bg-transparent hover:bg-navy hover:text-navy-foreground"
              }`}
            >
              {ctaSecondaryText ?? t("common.cta.requestDemo")}
            </Link>
          </div>

          {trustLogos && trustLogos.length > 0 && (
            <div
              className={`mt-10 flex flex-wrap items-center ${isLeft ? "justify-start" : "justify-center"} gap-x-8 gap-y-4 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              {trustLogos.map((logo) => (
                <img key={logo.src} src={logo.src} alt={logo.alt} className="trust-logo" loading="lazy" />
              ))}
            </div>
          )}
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
