import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "account",
      filename: "remoteEntry.js",
      exposes: {
        "./mount": "./src/mount.ts",
        "./AccountView": "./src/views/AccountView.vue",
        "./AccountOrdersView": "./src/views/AccountOrdersView.vue",
        "./AccountSettingsView": "./src/views/AccountSettingsView.vue",
        "./routes": "./src/router/routes.ts",
      },
      remotes: {},
      shared: ["vue", "pinia", "vue-router"],
    }),
  ],

  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
})
