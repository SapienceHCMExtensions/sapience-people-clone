import { type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export type FeatureAccent = "sky" | "mint" | "lavender" | "sun" | "coral" | "peach";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  delay?: number;
  accent?: FeatureAccent;
}

const chipClass: Record<FeatureAccent, string> = {
  sky: "accent-chip-sky",
  mint: "accent-chip-mint",
  lavender: "accent-chip-lavender",
  sun: "accent-chip-sun",
  coral: "accent-chip-coral",
  peach: "accent-chip-peach",
};

const barClass: Record<FeatureAccent, string> = {
  sky: "accent-bar-sky",
  mint: "accent-bar-mint",
  lavender: "accent-bar-lavender",
  sun: "accent-bar-sun",
  coral: "accent-bar-coral",
  peach: "accent-bar-peach",
};

export function FeatureCard({ icon: Icon, title, description, link, delay = 0, accent }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const chip = accent ? chipClass[accent] : "bg-bright-blue/10 text-bright-blue";
  const bar = accent ? barClass[accent] : "accent-bar-sky";

  const content = (
    <div
      ref={ref}
      className={`feature-card-animated group relative overflow-hidden bg-background rounded-xl border border-border p-6 hover:shadow-xl hover:border-transparent hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className={`absolute top-0 left-0 right-0 h-1 ${bar}`} />
      <div className={`icon-container flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-transform ${chip}`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  if (link) {
    return <Link to={link} className="block">{content}</Link>;
  }
  return content;
}
