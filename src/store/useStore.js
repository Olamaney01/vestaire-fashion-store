import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// A cart/wishlist line is keyed by product id + color + size, since the same
// product can be added multiple times with different variant selections.
const lineKey = (productId, color, size) => `${productId}::${color}::${size}`

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [], // { key, productId, name, price, image, color, size, qty }
      wishlist: [], // { productId, name, price, image }
      isCartOpen: false,
      toasts: [],

      // ----- Cart -----
      addToCart: (product, { color, size, qty = 1 }) => {
        const key = lineKey(product.id, color, size)
        set((state) => {
          const existing = state.cart.find((l) => l.key === key)
          if (existing) {
            return {
              cart: state.cart.map((l) =>
                l.key === key ? { ...l, qty: l.qty + qty } : l
              ),
            }
          }
          return {
            cart: [
              ...state.cart,
              {
                key,
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                color,
                size,
                qty,
              },
            ],
          }
        })
        get().pushToast(`${product.name} added to bag`)
        set({ isCartOpen: true })
      },

      updateQty: (key, qty) =>
        set((state) => ({
          cart:
            qty <= 0
              ? state.cart.filter((l) => l.key !== key)
              : state.cart.map((l) => (l.key === key ? { ...l, qty } : l)),
        })),

      removeFromCart: (key) =>
        set((state) => ({ cart: state.cart.filter((l) => l.key !== key) })),

      clearCart: () => set({ cart: [] }),

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      cartCount: () => get().cart.reduce((sum, l) => sum + l.qty, 0),
      cartSubtotal: () => get().cart.reduce((sum, l) => sum + l.qty * l.price, 0),

      // ----- Wishlist -----
      toggleWishlist: (product) => {
        const exists = get().wishlist.some((w) => w.productId === product.id)
        if (exists) {
          set((state) => ({
            wishlist: state.wishlist.filter((w) => w.productId !== product.id),
          }))
          get().pushToast(`${product.name} removed from wishlist`)
        } else {
          set((state) => ({
            wishlist: [
              ...state.wishlist,
              {
                productId: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
              },
            ],
          }))
          get().pushToast(`${product.name} added to wishlist`)
        }
      },

      isWishlisted: (productId) =>
        get().wishlist.some((w) => w.productId === productId),

      removeFromWishlist: (productId) =>
        set((state) => ({
          wishlist: state.wishlist.filter((w) => w.productId !== productId),
        })),

      // ----- Toasts -----
      pushToast: (message) => {
        const id = Math.random().toString(36).slice(2)
        set((state) => ({ toasts: [...state.toasts, { id, message }] }))
        setTimeout(() => {
          set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }))
        }, 2800)
      },
      dismissToast: (id) =>
        set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
    }),
    {
      name: 'vestaire-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
)
