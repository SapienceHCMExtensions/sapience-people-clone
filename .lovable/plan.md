## Replace Sapience HCM logo with new vertical PNG

The uploaded image is a **vertical, full-color** logo (icon + "SAPIENCE HCM" wordmark + "Optimizing Workforce" tagline). The current logo is a horizontal SVG. Swapping it requires both an asset replacement and small adjustments where the logo is rendered on dark backgrounds.

### 1. Add the new asset

Save the upload as `src/assets/SapienceHCMLogo.png` (already copied in).

### 2. Update import paths

In all three files, change:
```ts
import logo from "@/assets/SapienceHCMLogo.svg";
```
to:
```ts
import logo from "@/assets/SapienceHCMLogo.png";
```

Files:
- `src/components/layout/Header.tsx` (line 4)
- `src/components/layout/Footer.tsx` (line 2)
- `src/routes/sign-in.tsx` (line 7)

### 3. Adjust rendering for the vertical layout

Because the new logo is taller (stacked) and full-color, current sizing/filters don't fit well:

- **Header (`Header.tsx` line 140)** — bump height so the wordmark stays legible:
  ```tsx
  <img src={logo} alt="Sapience HCM" className="h-12 w-auto" />
  ```
- **Footer (`Footer.tsx` line 53)** — remove the `brightness-0 invert` filter (it would wipe the brand colors) and increase height to suit the dark navy background:
  ```tsx
  <img src={logo} alt="Sapience HCM" className="h-16 w-auto mb-4" />
  ```
- **Sign-in (`sign-in.tsx` line 30)** — increase height and drop `object-cover` (not needed for a logo):
  ```tsx
  <img src={logo} alt="Sapience HCM" className="h-16 w-auto mx-auto" />
  ```

### 4. Leave the old SVG in place

`src/assets/SapienceHCMLogo.svg` is no longer referenced after the import swap; it can stay on disk harmlessly (no deletion needed).