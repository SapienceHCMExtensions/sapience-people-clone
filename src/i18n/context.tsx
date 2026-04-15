import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { en } from "./en";
import { ar } from "./ar";
import { es } from "./es";

export type Locale = "en" | "ar" | "es";

const translations = { en, ar, es } as const;

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("sapience-lang") as Locale | null;
    if (stored && translations[stored]) {
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("sapience-lang", l);
  }, []);

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// Deep access helper: t("common.nav.features") => translations[locale].common.nav.features
function getNestedValue(obj: any, path: string): string {
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null) return path;
    current = current[key];
  }
  return typeof current === "string" ? current : path;
}

export function useT() {
  const { locale } = useLanguage();
  const t = useCallback(
    (key: string, fallback?: string): string => {
      const value = getNestedValue(translations[locale], key);
      if (value !== key) return value;
      // Fallback to English
      if (locale !== "en") {
        const enValue = getNestedValue(translations.en, key);
        if (enValue !== key) return enValue;
      }
      return fallback ?? key;
    },
    [locale]
  );
  return t;
}

// Hook to get arrays of translated strings
export function useTranslatedArray(key: string): string[] {
  const { locale } = useLanguage();
  const value = getNestedValue(translations[locale], key);
  if (Array.isArray(value)) return value;
  if (locale !== "en") {
    const enValue = getNestedValue(translations.en, key);
    if (Array.isArray(enValue)) return enValue;
  }
  return [];
}
