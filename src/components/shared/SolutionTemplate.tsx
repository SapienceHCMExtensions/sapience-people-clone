import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/shared/HeroSection";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { type LucideIcon } from "lucide-react";

interface SolutionPageProps {
  badge: string;
  headline: string;
  subHeadline: string;
  features: { icon: LucideIcon; title: string; description: string }[];
}

export function SolutionTemplate({ badge, headline, subHeadline, features }: SolutionPageProps) {
  return (
    <>
      <HeroSection headline={headline} subHeadline={subHeadline} badge={badge} />
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </section>
      <CTABanner />
    </>
  );
}
