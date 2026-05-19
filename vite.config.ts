import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const workerNoExternal: (string | RegExp)[] = [
  "h3-v2",
  "rou3",
  "srvx",
  "crossws",
  "cookie-es",
  "fetchdts",
  "seroval",
  "seroval-plugins",
  "react",
  "react-dom",
  "react-dom/server",
  "react-dom/client",
  "react/jsx-runtime",
  "react/jsx-dev-runtime",
  "scheduler",
  /^@tanstack\//,
  /^@radix-ui\//,
  "framer-motion",
  "motion",
  "lucide-react",
  "clsx",
  "class-variance-authority",
  "tailwind-merge",
];

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "client" },
  },
  vite: {
    resolve: {
      noExternal: workerNoExternal,
    },
    ssr: {
      noExternal: workerNoExternal,
    },
  },
});
