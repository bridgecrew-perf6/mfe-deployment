import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from "./views/Home"
import Error from "./views/Error"

const CheckoutView = React.lazy(() => import("./views/CheckoutView"))
import { Basket } from "./components/Basket"
import { AddToCart } from "./components/AddToCart"
import { Checkout } from "./Checkout"

export function App() {
  const [count, setCount] = React.useState(0)

  return (
    // <Router>
    <div className="min-h-screen w-full bg-indigo-900 text-white">
      {/* <header className="h-16 w-full flex items-center justify-center space-x-3 border-b border-indigo-600">
          <Link to="/"> Home </Link>
          <span>|</span>
          <Link to="/cart"> Cart </Link>
          <span>|</span>
          <Link to="/checkout"> Checkout </Link>
          <span>|</span>
          <Basket />
        </header> */}
      <main className="max-w-5xl mx-auto pt-9">
        <Checkout />
        {/* <AddToCart />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/checkout/*" element={<CheckoutView />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense> */}
      </main>
    </div>
    // </Router>
  )
}

export default function RenderElement(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el)

  root.render(
    <React.StrictMode>
      <Basket />
    </React.StrictMode>
  )
}
