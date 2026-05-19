import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const workerNoExternal = [
  "h3-v2",
  "rou3",
  "srvx",
  "crossws",
  "cookie-es",
  "fetchdts",
  "seroval",
  "seroval-plugins",
  /^@tanstack\//,
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
