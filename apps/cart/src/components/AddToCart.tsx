import React from "react"
import ReactDOM from "react-dom/client"

import useStore from "../store"

export function AddToCart() {
  const { addToCart } = useStore()

  return (
    <div
      onClick={() => addToCart()}
      className="select-none flex items-center space-x-3 bg-black text-white rounded py-1.5 px-3 w-36 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
      <span className="pb-1">add to cart</span>
    </div>
  )
}

export default function RenderElement(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el)

  root.render(
    <React.StrictMode>
      <AddToCart />
    </React.StrictMode>
  )
}
