const BASE_URL = "https://sapiencehcm.lovable.app";
const SUPPORTED_LOCALES = ["en", "ar", "es"] as const;

export { BASE_URL };

export function getHreflangLinks(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${BASE_URL}${normalizedPath}`;

  return [
    { rel: "canonical" as const, href: url },
    ...SUPPORTED_LOCALES.map((locale) => ({
      rel: "alternate" as const,
      hreflang: locale,
      href: url,
    })),
    {
      rel: "alternate" as const,
      hreflang: "x-default",
      href: url,
    },
  ];
}
