import { Quote } from "lucide-react";

interface TestimonialBlockProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialBlock({ quote, name, title, company }: TestimonialBlockProps) {
  return (
    <section className="bg-soft-gray py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-10 w-10 text-vibrant-orange mx-auto mb-6" />
        <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed italic">
          "{quote}"
        </blockquote>
        <div className="mt-6">
          <div className="text-sm font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{title}, {company}</div>
        </div>
      </div>
    </section>
  );
}
