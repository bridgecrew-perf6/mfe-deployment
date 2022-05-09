import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import federation from "@originjs/vite-plugin-federation"

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./Basket": "./src/components/Basket.tsx",
        "./AddToCart": "./src/components/AddToCart.tsx",
        "./App": "./src/App.tsx",
        "./Checkout": "./src/Checkout.tsx",
      },
      remotes: {},
      shared: [],
    }),
  ],

  build: {
    target: "esnext",
    cssCodeSplit: false,
  },
})
