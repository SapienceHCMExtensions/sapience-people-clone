import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/i18n/context";

type CookieCategory = "necessary" | "functional" | "analytics" | "thirdParty";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  thirdParty: boolean;
}

export function CookieConsent() {
  const t = useT();
  const [visible, setVisible] = useState(false);
  const [managing, setManaging] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    thirdParty: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setVisible(false);
    setManaging(false);
  };

  const acceptAll = () => savePreferences({ necessary: true, functional: true, analytics: true, thirdParty: true });
  const rejectUnnecessary = () => savePreferences({ necessary: true, functional: false, analytics: false, thirdParty: false });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-xl shadow-2xl p-6">
        {!managing ? (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">{t("common.cookie.title")}</h3>
            <p className="text-xs text-muted-foreground mb-4">{t("common.cookie.description")}</p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={acceptAll} className="bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                {t("common.cookie.acceptAll")}
              </Button>
              <Button size="sm" variant="outline" onClick={rejectUnnecessary}>
                {t("common.cookie.rejectUnnecessary")}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setManaging(true)}>
                {t("common.cookie.manageCookies")}
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">{t("common.cookie.preferences")}</h3>
            <div className="space-y-3 mb-4">
              {[
                { key: "necessary" as CookieCategory, label: t("common.cookie.necessary"), desc: t("common.cookie.necessaryDesc"), locked: true },
                { key: "functional" as CookieCategory, label: t("common.cookie.functional"), desc: t("common.cookie.functionalDesc") },
                { key: "analytics" as CookieCategory, label: t("common.cookie.analytics"), desc: t("common.cookie.analyticsDesc") },
                { key: "thirdParty" as CookieCategory, label: t("common.cookie.thirdParty"), desc: t("common.cookie.thirdPartyDesc") },
              ].map((cat) => (
                <label key={cat.key} className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences[cat.key]}
                    disabled={cat.locked}
                    onChange={(e) => setPreferences({ ...preferences, [cat.key]: e.target.checked })}
                    className="mt-0.5 accent-bright-blue"
                  />
                  <div>
                    <div className="text-xs font-medium text-foreground">{cat.label}{cat.locked && <span className="text-muted-foreground ml-1">{t("common.cookie.required")}</span>}</div>
                    <div className="text-xs text-muted-foreground">{cat.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => savePreferences(preferences)} className="bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                {t("common.cookie.savePreferences")}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setManaging(false)}>{t("common.cookie.back")}</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
