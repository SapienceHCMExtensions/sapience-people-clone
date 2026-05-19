import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    client: { entry: "client" },
  },
  vite: {
    resolve: {
      noExternal: true,
    },
    ssr: {
      noExternal: true,
    },
  },
});
