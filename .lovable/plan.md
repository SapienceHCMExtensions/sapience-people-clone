# Restore missing app badges in Footer

**Root cause:** badge image files exist in `src/assets/` but `Footer.tsx` never imports or renders them.

## Edits

### 1. `src/components/layout/Footer.tsx`

Add imports after the logo import:
```ts
import googlePlayBadge from "@/assets/google-play-badge.png";
import appStoreBadge from "@/assets/app-store-badge.svg";
```

In the brand column, after the existing `<div>` containing `poweredBy`, append:
```tsx
<div className="mt-6">
  <p className="text-xs font-semibold uppercase tracking-wider text-navy-foreground/70 mb-3">
    {t("common.footer.getTheApp")}
  </p>
  <div className="flex flex-wrap items-center gap-2">
    <a
      href="https://play.google.com/store/apps/details?id=com.sapience.hcm"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={googlePlayBadge} alt="Get it on Google Play" className="h-10 w-auto" />
    </a>
    {/* TODO: replace # with the real App Store URL */}
    <a href="#" target="_blank" rel="noopener noreferrer">
      <img src={appStoreBadge} alt="Download on the App Store" className="h-10 w-auto" />
    </a>
  </div>
</div>
```

### 2. Translations — add `getTheApp` under `common.footer`

- `src/i18n/en.ts` → `getTheApp: "Get the mobile app",`
- `src/i18n/ar.ts` → `getTheApp: "احصل على تطبيق الجوال",`
- `src/i18n/es.ts` → `getTheApp: "Obtén la app móvil",`
