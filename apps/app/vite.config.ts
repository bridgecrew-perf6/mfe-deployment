import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app",
      filename: "remoteEntry.js",
      exposes: {},
      remotes: {
        account: "http://localhost:4173/assets/remoteEntry.js",
        cart: "http://localhost:4174/assets/remoteEntry.js",
      },
      shared: ["vue", "pinia"],
    }),
  ],
})
