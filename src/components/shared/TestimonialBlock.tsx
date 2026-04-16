import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMemo } from "react";

interface TestimonialBlockProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export function TestimonialBlock({ quote, name, title, company }: TestimonialBlockProps) {
  const { ref, isVisible } = useScrollAnimation(0.15);

  const words = useMemo(() => quote.split(" "), [quote]);

  return (
    <section className="bg-soft-gray py-16" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote
          className={`h-10 w-10 text-vibrant-orange mx-auto mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-12 scale-80"
          }`}
        />
        <blockquote className="text-xl lg:text-2xl font-medium text-foreground leading-relaxed italic">
          "
          {words.map((word, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: isVisible ? `${300 + i * 40}ms` : "0ms" }}
            >
              {word}{i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
          "
        </blockquote>
        <div
          className={`mt-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: isVisible ? `${300 + words.length * 40 + 200}ms` : "0ms" }}
        >
          <div className="text-sm font-semibold text-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">{title}, {company}</div>
        </div>
      </div>
    </section>
  );
}
