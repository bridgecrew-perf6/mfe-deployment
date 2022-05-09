import {
  Route,
  Routes,
  Link,
  useNavigate,
  useRoutes,
  useLocation,
} from "react-router-dom"
import React, { useEffect } from "react"

import CartView from "./checkout/CartView"
import AddressView from "./checkout/AddressView"
import PaymentView from "./checkout/PaymentView"
import ConfirmView from "./checkout/ConfirmView"

// const CartView = React.lazy(() => import("./checkout/CartView"))
// const AddressView = React.lazy(() => import("./checkout/AddressView"))
// const PaymentView = React.lazy(() => import("./checkout/PaymentView"))
// const ConfirmView = React.lazy(() => import("./checkout/ConfirmView"))

export default function Checkout() {
  const navigate = useNavigate()
  const location = useLocation()

  // useEffect(() => {
  //   return navigate("/checkout/cart")
  // }, [location])

  // React.useEffect(() => {
  //   if (location.pathname === "/checkout") {
  //     return navigate("/checkout/cart")
  //   }
  // }, [location])

  return (
    <div>
      <div className="bg-green-500 text-center p-3 flex items-center justify-center space-x-3">
        <Link to="/checkout/cart">Cart</Link>
        <span>|</span>
        <Link to="/checkout/address">Address</Link>
        <span>|</span>
        <Link to="/checkout/payment">Payment & Delivery</Link>
        <span>|</span>
        <Link to="/checkout/confirm">Confirm</Link>
      </div>

      <Routes>
        <Route path="cart" element={<CartView />} />
        <Route path="address" element={<AddressView />} />
        <Route path="payment" element={<PaymentView />} />
        <Route path="confirm" element={<ConfirmView />} />
      </Routes>
    </div>
  )
}
