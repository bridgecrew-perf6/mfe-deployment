import { mountApp } from "./mount"

if (import.meta.env.DEV) {
  mountApp("#account_app")
}

export { mountApp as mountAccountApp }
