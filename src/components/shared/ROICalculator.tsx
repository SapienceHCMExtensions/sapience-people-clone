import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/context";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ROICalculatorProps {
  variant?: "compact" | "full";
}

const HOURLY_COST_USD = 35; // assumed loaded HR admin cost
const EFFICIENCY_GAIN = 0.6; // Sapience reclaims ~60% of admin time
const SAPIENCE_PRICE_PER_USER_MONTH = 8; // yearly billing tier

function formatCurrency(n: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

export function ROICalculator({ variant = "compact" }: ROICalculatorProps) {
  const t = useT();
  const heading = useScrollAnimation(0.15);
  const [employees, setEmployees] = useState(150);
  const [hoursPerEmpMonth, setHoursPerEmpMonth] = useState(4);

  const calc = useMemo(() => {
    const hoursSavedYear = employees * hoursPerEmpMonth * 12 * EFFICIENCY_GAIN;
    const costSavedYear = hoursSavedYear * HOURLY_COST_USD;
    const sapienceCostYear = employees * SAPIENCE_PRICE_PER_USER_MONTH * 12;
    const netSavings = costSavedYear - sapienceCostYear;
    const paybackMonths =
      costSavedYear > 0 ? Math.max(1, Math.round((sapienceCostYear / costSavedYear) * 12)) : 12;
    const roiPct =
      sapienceCostYear > 0 ? Math.round((netSavings / sapienceCostYear) * 100) : 0;
    return {
      hoursSavedYear,
      costSavedYear,
      sapienceCostYear,
      netSavings,
      paybackMonths,
      roiPct,
    };
  }, [employees, hoursPerEmpMonth]);

  const isCompact = variant === "compact";

  return (
    <section className={isCompact ? "py-16 lg:py-24" : "py-12 lg:py-16"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isCompact && (
          <div
            ref={heading.ref}
            className={`text-center max-w-2xl mx-auto mb-10 transition-all duration-700 ${
              heading.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-vibrant-orange bg-vibrant-orange/10 px-3 py-1 rounded-full mb-4">
              {t("home.roi.eyebrow")}
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
              {t("home.roi.title")}
            </h2>
            <p className="mt-4 text-muted-foreground">{t("home.roi.subtitle")}</p>
          </div>
        )}

        <Card className="max-w-5xl mx-auto border-border shadow-lg">
          <CardContent className="p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Inputs */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <label className="text-sm font-semibold text-foreground">
                      {t("home.roi.employees")}
                    </label>
                    <span className="text-2xl font-bold text-navy tabular-nums">
                      {formatNumber(employees)}
                    </span>
                  </div>
                  <Slider
                    value={[employees]}
                    onValueChange={(v) => setEmployees(v[0])}
                    min={10}
                    max={5000}
                    step={10}
                    aria-label={t("home.roi.employees")}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>10</span>
                    <span>5,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <label className="text-sm font-semibold text-foreground">
                      {t("home.roi.hoursPerEmp")}
                    </label>
                    <span className="text-2xl font-bold text-navy tabular-nums">
                      {hoursPerEmpMonth}h
                    </span>
                  </div>
                  <Slider
                    value={[hoursPerEmpMonth]}
                    onValueChange={(v) => setHoursPerEmpMonth(v[0])}
                    min={1}
                    max={10}
                    step={1}
                    aria-label={t("home.roi.hoursPerEmp")}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1h</span>
                    <span>10h</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  {t("home.roi.assumptions")}
                </p>
              </div>

              {/* Results */}
              <div className="bg-navy text-navy-foreground rounded-xl p-6 lg:p-8 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-wider text-bright-blue font-semibold mb-2">
                  {t("home.roi.estimatedSavings")}
                </p>
                <div className="text-4xl lg:text-5xl font-bold mb-1 tabular-nums">
                  {formatCurrency(calc.netSavings)}
                </div>
                <p className="text-sm opacity-75 mb-6">{t("home.roi.perYear")}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-bright-blue flex-shrink-0" />
                    <span className="opacity-90">{t("home.roi.hoursSaved")}</span>
                    <span className="ml-auto font-semibold tabular-nums">
                      {formatNumber(calc.hoursSavedYear)}h
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <DollarSign className="h-4 w-4 text-bright-blue flex-shrink-0" />
                    <span className="opacity-90">{t("home.roi.grossSavings")}</span>
                    <span className="ml-auto font-semibold tabular-nums">
                      {formatCurrency(calc.costSavedYear)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <TrendingUp className="h-4 w-4 text-vibrant-orange flex-shrink-0" />
                    <span className="opacity-90">{t("home.roi.payback")}</span>
                    <span className="ml-auto font-semibold tabular-nums">
                      {calc.paybackMonths} mo
                    </span>
                  </div>
                </div>

                <Link
                  to="/request-demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-vibrant-orange px-5 py-3 text-sm font-semibold text-vibrant-orange-foreground hover:opacity-90 transition-opacity"
                >
                  {t("home.roi.cta")} <ArrowRight className="h-4 w-4" />
                </Link>

                {isCompact && (
                  <Link
                    to="/roi-calculator"
                    className="mt-3 text-center text-xs text-bright-blue hover:underline"
                  >
                    {t("home.roi.fullBreakdown")}
                  </Link>
                )}
              </div>
            </div>

            {variant === "full" && (
              <div className="mt-10 pt-10 border-t border-border">
                <h3 className="text-lg font-semibold text-navy mb-4">
                  {t("home.roi.breakdownTitle")}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 font-semibold text-foreground">
                          {t("home.roi.lineItem")}
                        </th>
                        <th className="text-right py-3 font-semibold text-foreground">
                          {t("home.roi.annualValue")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-3">{t("home.roi.lineAdmin")}</td>
                        <td className="py-3 text-right tabular-nums">
                          {formatCurrency(calc.costSavedYear)}
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3">{t("home.roi.linePayrollErrors")}</td>
                        <td className="py-3 text-right tabular-nums">
                          {formatCurrency(employees * 25)}
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3">{t("home.roi.lineCompliance")}</td>
                        <td className="py-3 text-right tabular-nums">
                          {formatCurrency(employees * 18)}
                        </td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-3">{t("home.roi.lineTurnover")}</td>
                        <td className="py-3 text-right tabular-nums">
                          {formatCurrency(employees * 40)}
                        </td>
                      </tr>
                      <tr className="font-semibold text-navy">
                        <td className="py-3">{t("home.roi.lineSapienceCost")}</td>
                        <td className="py-3 text-right tabular-nums">
                          −{formatCurrency(calc.sapienceCostYear)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
