import { useT, useTranslatedArray } from "@/i18n/context";

interface LegalSection {
  heading: string;
  body: string;
}

interface LegalPageProps {
  /** i18n namespace under `legal`, e.g. "terms", "privacy", "cookies", "antiSpam" */
  pageKey: "terms" | "privacy" | "cookies" | "antiSpam";
}

export function LegalPage({ pageKey }: LegalPageProps) {
  const t = useT();
  const sections = useTranslatedArray(`legal.${pageKey}.sections`) as LegalSection[];

  return (
    <main className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-10 border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-3">
            {t(`legal.${pageKey}.title`)}
          </h1>
          <p className="text-sm text-gray-500">
            {t("legal.lastUpdated")}: {t("legal.effectiveDate")}
          </p>
          <p className="mt-6 text-base text-gray-700 leading-relaxed">
            {t(`legal.${pageKey}.intro`)}
          </p>
        </header>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl md:text-2xl font-semibold text-navy mb-3">
                {section.heading}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-gray-400 italic">
          {t("legal.placeholderNotice")}
        </p>
      </div>
    </main>
  );
}
