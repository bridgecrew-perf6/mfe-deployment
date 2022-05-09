import { createRouter, createWebHistory } from "vue-router"
import findRoutes from "./routes"

export const buildRouter = (requestMfeOnly: boolean = false) => {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: findRoutes(requestMfeOnly),
  })
}
