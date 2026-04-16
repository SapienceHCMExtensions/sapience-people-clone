import { useEffect, useState, useCallback } from "react";

interface StickyFeatureNavProps {
  features: { number: string; title: string }[];
}

export function StickyFeatureNav({ features }: StickyFeatureNavProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    const sections = features.map((f) =>
      document.getElementById(`feature-${f.number}`)
    );
    sections.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, [features]);

  const scrollTo = useCallback((number: string) => {
    const el = document.getElementById(`feature-${number}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-2" aria-label="Feature sections">
          {features.map((f) => (
            <button
              key={f.number}
              onClick={() => scrollTo(f.number)}
              className={`whitespace-nowrap px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 shrink-0 ${
                activeId === `feature-${f.number}`
                  ? "bg-bright-blue/10 text-bright-blue border-b-2 border-bright-blue"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              <span className="text-xs opacity-60 mr-1">{f.number}</span>
              {f.title}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
