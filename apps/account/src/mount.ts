import { createApp } from "vue"
import Account from "./Account.vue"
import "./assets/index.css"
import App from "./App.vue"

import { buildRouter } from "./router"

const mountApp = (el: HTMLDivElement | string) => {
  let app = null

  if (import.meta.env.DEV) {
    app = createApp(App)

    app.use(buildRouter())
  } else {
    app = createApp(Account)
    app.use(buildRouter(true))
  }

  app.mount(el)
}

export { mountApp }
