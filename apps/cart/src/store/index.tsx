import create from "zustand"

type Store = {
  cartCounter: number
  addToCart: () => void
  resetCart: () => void
}

const useStore = create<Store>((set) => ({
  cartCounter: 0,
  addToCart() {
    set((state) => ({ ...state, cartCounter: state.cartCounter + 1 }))
  },
  resetCart: () => set((state) => ({ ...state, cartCounter: 0 })),
}))

export default useStore
