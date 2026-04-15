interface ScreenshotSectionProps {
  title: string;
  screenshots: { src: string; alt: string }[];
}

export function ScreenshotSection({ title, screenshots }: ScreenshotSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-soft-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground text-center mb-10">{title}</h2>
        <div className={`grid gap-8 ${screenshots.length > 1 ? "sm:grid-cols-2" : "max-w-4xl mx-auto"}`}>
          {screenshots.map((s) => (
            <div key={s.alt} className="rounded-xl overflow-hidden shadow-lg border border-border bg-card">
              <img src={s.src} alt={s.alt} className="w-full h-auto" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
