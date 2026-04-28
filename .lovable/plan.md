## Add Legal Routes (i18n-ready) & Update Footer

### New Routes
Create four TanStack Start route files. Each route uses `useT()` so the language switcher (already global via `LanguageProvider` in `__root.tsx`) automatically translates the page when the user changes locale. Each has its own `head()` SEO metadata (title, description, og:title, og:description) and a `getHreflangLinks(...)` entry for proper multilingual SEO.

- `src/routes/terms-of-service.tsx` → `/terms-of-service`
- `src/routes/privacy-policy.tsx` → `/privacy-policy`
- `src/routes/cookie-policy.tsx` → `/cookie-policy`
- `src/routes/anti-spam-policy.tsx` → `/anti-spam-policy`

Layout pattern (shared across all four):
- `max-w-3xl mx-auto px-4 py-16` container
- Navy `<h1>` page title + muted "Last updated" date
- Sectioned body with navy `<h2>` headings and prose paragraphs
- All visible strings come from `t("legal.<page>.<key>")`

### i18n Keys
Add a new `legal` namespace to `src/i18n/en.ts`, `src/i18n/es.ts`, `src/i18n/ar.ts`:

```ts
legal: {
  lastUpdated: "Last updated",
  terms: {
    title: "Terms of Service",
    intro: "...",
    sections: [
      { heading: "Acceptance of Terms", body: "..." },
      { heading: "Use of Service", body: "..." },
      { heading: "Intellectual Property", body: "..." },
      { heading: "Limitation of Liability", body: "..." },
      { heading: "Governing Law", body: "..." },
      { heading: "Contact Us", body: "..." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    intro: "...",
    sections: [
      { heading: "Information We Collect", body: "..." },
      { heading: "How We Use Information", body: "..." },
      { heading: "Sharing & Disclosure", body: "..." },
      { heading: "Your Rights", body: "..." },
      { heading: "Data Retention", body: "..." },
      { heading: "Contact Us", body: "..." },
    ],
  },
  cookies: { title: "Cookie Policy", intro: "...", sections: [ /* What Are Cookies, Types We Use, Managing Cookies, Contact */ ] },
  antiSpam: { title: "Anti-spam Policy", intro: "...", sections: [ /* Our Commitment, Email Practices, Reporting Spam, Contact */ ] },
},
```

- English file gets full placeholder legal copy (clearly marked for legal review).
- Spanish and Arabic mirror the structure with translated headings + the same English body text as placeholder (consistent with how other recent keys were seeded). Arabic content renders RTL automatically because `LanguageProvider` already sets `dir="rtl"`.

Pages render sections by mapping over `useTranslatedArray("legal.terms.sections")` (the existing helper in `src/i18n/context.tsx`), so adding/removing sections per locale just works.

### Footer Update (`src/components/layout/Footer.tsx`)
- Remove the **GDPR Compliance** entry from `legal`.
- Convert the remaining four entries from `<a href="#">` to `<Link to="...">` so they navigate to the new routes (rest of the footer already uses `Link`).
- Remove the now-unused `gdprCompliance` key from `en.ts`, `es.ts`, `ar.ts`.

```tsx
legal: [
  { name: t("common.footer.termsOfService"), href: "/terms-of-service" },
  { name: t("common.footer.privacyPolicy"),  href: "/privacy-policy" },
  { name: t("common.footer.cookiePolicy"),   href: "/cookie-policy" },
  { name: t("common.footer.antiSpam"),       href: "/anti-spam-policy" },
],
```

### Why the language switcher just works
- `LanguageProvider` wraps the entire app in `__root.tsx` — every route is inside it.
- `useT()` reads from the active locale in context and re-renders pages on switch.
- Arabic direction (`dir="rtl"`) is already toggled on `<html>` by the provider, so the legal pages flip automatically.
- Each route's `head()` includes `getHreflangLinks("/terms-of-service")` etc. so search engines see all 3 locale variants.

### Out of scope
- Real legal copy (placeholder shipped; legal team replaces).
- Actual translated Spanish/Arabic legal text (English placeholder used; can be professionally translated later).
