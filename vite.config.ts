import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      noExternal: ["h3-v2", "@tanstack/start-server-core"],
    },
    ssr: {
      noExternal: ["h3-v2", "@tanstack/start-server-core"],
    },
  },
});
