import { Link } from "@tanstack/react-router";

interface CTABannerProps {
  headline?: string;
  subHeadline?: string;
}

export function CTABanner({
  headline = "Ready to transform your HR operations?",
  subHeadline = "Start your free trial today and see the difference Sapience HCM can make.",
}: CTABannerProps) {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-navy-foreground">{headline}</h2>
        <p className="mt-4 text-navy-foreground/70 text-lg">{subHeadline}</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/request-demo"
            className="inline-flex items-center justify-center rounded-lg bg-vibrant-orange px-6 py-3 text-sm font-semibold text-vibrant-orange-foreground shadow-lg hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </Link>
          <Link
            to="/request-demo"
            className="inline-flex items-center justify-center rounded-lg border-2 border-navy-foreground/30 px-6 py-3 text-sm font-semibold text-navy-foreground hover:bg-navy-foreground/10 transition-colors"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
