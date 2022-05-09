import { RouteRecordRaw } from "vue-router"

const flatRouteArray = (arr: Array<RouteRecordRaw>): Array<RouteRecordRaw> => {
  let result: Array<RouteRecordRaw> = []
  arr.forEach((child) => {
    result.push(child)

    if (Array.isArray(child.children)) {
      result = result.concat(flatRouteArray(child.children))
    }
  })

  return result
}

const findRoutes = (requestMfeOnly: boolean): Array<RouteRecordRaw> => {
  const allRoutes: Array<RouteRecordRaw> = [
    {
      path: "/account",
      name: "Account",
      component: () => import("../views/AccountView.vue"),
      children: [
        {
          path: "/account/orders",
          name: "Orders",
          meta: { isMfe: true },
          component: () => import("../views/AccountOrdersView.vue"),
        },
        {
          path: "/account/settings",
          name: "Settings",
          meta: { isMfe: true },
          component: () => import("../views/AccountSettingsView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/",
      name: "Home",
      alias: "/home",
      component: () => import("../views/HomeView.vue"),
    },
  ]

  if (requestMfeOnly === true) {
    const flatRoutes = flatRouteArray(allRoutes)
    const mfeRoutes = flatRoutes.filter((route) => route.meta?.isMfe)
    return Array.from(mfeRoutes).sort((x, y) => x.path.localeCompare(y.path))
  }

  return Array.from(allRoutes)
}

export default findRoutes
