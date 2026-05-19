export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Something went wrong — Sapience HCM</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F5F5F5;
    color: #011B3D;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    padding: 24px;
  }
  .card {
    max-width: 480px;
    width: 100%;
    background: #fff;
    border-radius: 12px;
    padding: 40px 32px;
    box-shadow: 0 10px 30px rgba(1, 27, 61, 0.08);
    text-align: center;
  }
  h1 { font-size: 22px; margin: 0 0 8px; }
  p { font-size: 14px; margin: 0 0 24px; color: #4b5563; line-height: 1.5; }
  .actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  a, button {
    font: inherit;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 18px;
    border: 1px solid transparent;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
  .primary { background: #F05A28; color: #fff; }
  .primary:hover { opacity: 0.92; }
  .secondary { background: #fff; color: #011B3D; border-color: #d1d5db; }
  .secondary:hover { background: #f3f4f6; }
</style>
</head>
<body>
  <div class="card">
    <h1>Something went wrong</h1>
    <p>We hit an unexpected error rendering this page. Please try again in a moment.</p>
    <div class="actions">
      <button class="primary" onclick="location.reload()">Refresh</button>
      <a class="secondary" href="/">Go home</a>
    </div>
  </div>
</body>
</html>`;
}
