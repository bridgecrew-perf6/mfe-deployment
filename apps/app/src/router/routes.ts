import { defineAsyncComponent } from "vue"
import { RouteRecordRaw } from "vue-router"

export default function getRoutes(
  excludedLocalRoutes = true
): Array<RouteRecordRaw> {
  const localRoutes: Array<RouteRecordRaw> = []

  const appRoutes: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },

    // required to navigate and reload at child location
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/AccountView.vue"),
    },
    {
      path: "/account/:children+",
      name: "AccountChildren",
      component: () => import("../views/AccountView.vue"),
    },

    // react routes
    {
      path: "/checkout",
      name: "Checkout",
      component: () => import("../views/CartView.vue"),
    },
    {
      path: "/checkout/:children+",
      name: "CheckoutChildren",
      component: () => import("../views/CartView.vue"),
    },
  ]

  if (excludedLocalRoutes) {
    return [...localRoutes]
  }

  return [...appRoutes, ...localRoutes]
}
