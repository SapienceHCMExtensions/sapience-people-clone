import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface NumberedFeature {
  number: string;
  title: string;
  description: string;
}

interface NumberedFeatureBlockProps {
  features: NumberedFeature[];
}

function FeatureRow({ feature, index }: { feature: NumberedFeature; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const isEven = index % 2 === 1;

  return (
    <div
      id={`feature-${feature.number}`}
      ref={ref}
      className={`scroll-mt-32 flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Text side */}
      <div className={`flex-1 space-y-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{feature.title}</h3>
        <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">{feature.description}</p>
      </div>

      {/* Numbered card */}
      <div className={`flex-1 flex justify-center ${isEven ? "md:order-1" : "md:order-2"}`}>
        <div className="numbered-card group w-full max-w-sm rounded-2xl bg-bright-blue/5 border border-bright-blue/10 p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:bg-bright-blue/10">
          <span className="block text-6xl lg:text-7xl font-extrabold text-bright-blue/30 mb-3 transition-colors duration-300 group-hover:text-bright-blue/50">
            {feature.number}
          </span>
          <span className="block text-lg lg:text-xl font-semibold text-foreground">{feature.title}</span>
        </div>
      </div>
    </div>
  );
}

export function NumberedFeatureBlock({ features }: NumberedFeatureBlockProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
        {features.map((feature, index) => (
          <FeatureRow key={feature.number} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
