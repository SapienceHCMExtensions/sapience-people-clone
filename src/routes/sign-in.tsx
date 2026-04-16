import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import logo from "@/assets/SapienceHCMLogo.svg";
import { useT } from "@/i18n/context";
import { getHreflangLinks } from "@/lib/seo";

export const Route = createFileRoute("/sign-in")({
  head: () => ({ meta: [{ title: "Sign In — Sapience HCM" }, { name: "description", content: "Sign in to your Sapience HCM account to manage HR, payroll, and workforce operations." }, { property: "og:title", content: "Sign In — Sapience HCM" }, { property: "og:description", content: "Sign in to your Sapience HCM account." }], links: getHreflangLinks("/sign-in") }),
  component: SignInPage,
});

function SignInPage() {
  const t = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-gray px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-4">
          <Link to="/" className="inline-block mx-auto">
            <img src={logo} alt="Sapience HCM" className="h-10 w-auto mx-auto object-cover" />
          </Link>
          <div>
            <CardTitle className="text-2xl font-bold text-foreground">{t("pages.signIn.welcomeBack")}</CardTitle>
            <CardDescription className="mt-1">{t("pages.signIn.signInToAccount")}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">{t("pages.signIn.emailAddress")}</Label>
              <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">{t("pages.signIn.password")}</Label>
                <a href="#" className="text-xs text-bright-blue hover:underline">{t("pages.signIn.forgotPassword")}</a>
              </div>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-vibrant-orange text-vibrant-orange-foreground hover:opacity-90">{t("pages.signIn.signIn")}</Button>
          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t("pages.signIn.noAccount")}{" "}
            <Link to="/request-demo" className="text-bright-blue font-medium hover:underline">{t("pages.signIn.requestDemo")}</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
