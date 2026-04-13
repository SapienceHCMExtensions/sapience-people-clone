import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

type CookieCategory = "necessary" | "functional" | "analytics" | "thirdParty";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  thirdParty: boolean;
}

export function CookieConsent() {
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
            <h3 className="text-sm font-semibold text-foreground mb-2">We value your privacy</h3>
            <p className="text-xs text-muted-foreground mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              You can choose which categories of cookies you allow.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button size="sm" onClick={acceptAll} className="bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                Accept All Cookies
              </Button>
              <Button size="sm" variant="outline" onClick={rejectUnnecessary}>
                Reject Unnecessary
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setManaging(true)}>
                Manage Cookies
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-3">Cookie Preferences</h3>
            <div className="space-y-3 mb-4">
              {[
                { key: "necessary" as CookieCategory, label: "Strictly Necessary", desc: "Essential for the website to function.", locked: true },
                { key: "functional" as CookieCategory, label: "Functional / Preference", desc: "Remember your preferences and settings." },
                { key: "analytics" as CookieCategory, label: "Analytics", desc: "Help us understand how you use our site." },
                { key: "thirdParty" as CookieCategory, label: "Third-party Cookies", desc: "Used by partners for personalized content." },
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
                    <div className="text-xs font-medium text-foreground">{cat.label}{cat.locked && <span className="text-muted-foreground ml-1">(Required)</span>}</div>
                    <div className="text-xs text-muted-foreground">{cat.desc}</div>
                  </div>
                </label>
              ))}
            </div>
            <div className="flex gap-2">
              <Button size="sm" onClick={() => savePreferences(preferences)} className="bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">
                Save Preferences
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setManaging(false)}>Back</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
