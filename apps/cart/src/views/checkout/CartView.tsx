import useStore from "../../store"

export default function CartView() {
  const { cartCounter, resetCart } = useStore()
  return (
    <div className="bg-amber-500 text-center p-3">
      Cart: {cartCounter} -
      <button onClick={() => resetCart()}>reset cart</button>{" "}
    </div>
  )
}
