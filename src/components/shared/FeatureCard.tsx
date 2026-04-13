import { type LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export function FeatureCard({ icon: Icon, title, description, link }: FeatureCardProps) {
  const content = (
    <div className="group relative bg-background rounded-xl border border-border p-6 hover:shadow-lg hover:border-bright-blue/30 transition-all duration-300">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-bright-blue/10 text-bright-blue mb-4 group-hover:bg-bright-blue group-hover:text-bright-blue-foreground transition-colors">
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
