import React, { Suspense, useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"

import { AddToCart } from "./components/AddToCart"
import CheckoutView from "./views/CheckoutView"
// const CheckoutView = React.lazy(() => import("./views/CheckoutView"))

export function Checkout() {
  const [state, setState] = useState(0)

  return (
    <Router>
      <AddToCart />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/checkout/*" element={<CheckoutView />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default function Render(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el)

  root.render(
    <React.StrictMode>
      <Checkout />
    </React.StrictMode>
  )
}
