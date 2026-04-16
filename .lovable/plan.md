

# Switch Arabic Font from Cairo to Tajawal

Two files need updating:

### 1. `src/routes/__root.tsx` (line 43)
Replace `Cairo` with `Tajawal` in the Google Fonts URL:
```
family=Tajawal:wght@400;500;700;800&family=Inter:wght@400;500;600;700;800
```

### 2. `src/styles.css` (line 156)
Replace `'Cairo'` with `'Tajawal'` in the RTL font-family:
```css
font-family: 'Tajawal', 'Aptos', 'Inter', system-ui, sans-serif;
```

No other files reference Cairo. Two edits, done.

