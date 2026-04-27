## Update App Store badge link in Footer

Replace the placeholder `href="#"` on the App Store badge anchor in `src/components/layout/Footer.tsx` with the real URL.

### Edit

`src/components/layout/Footer.tsx` — in the brand column's "Get the app" block:

- Remove the `{/* TODO: replace # with the real App Store URL */}` comment.
- Change:
  ```tsx
  <a href="#" target="_blank" rel="noopener noreferrer">
  ```
  to:
  ```tsx
  <a
    href="https://apps.apple.com/ae/app/sapience-hcm-ess/id6445889197"
    target="_blank"
    rel="noopener noreferrer"
  >
  ```

No other files change.