import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, X, ShoppingBag } from 'lucide-react'
import { useStore } from '../store/useStore'
import { getProductById } from '../data/products'

export default function Wishlist() {
  const wishlist = useStore((s) => s.wishlist)
  const removeFromWishlist = useStore((s) => s.removeFromWishlist)
  const addToCart = useStore((s) => s.addToCart)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-[1600px] px-5 md:px-10 py-10 md:py-14 min-h-[60vh]"
    >
      <h1 className="font-display text-4xl md:text-5xl mb-2">Wishlist</h1>
      <p className="text-muted text-sm mb-10">{wishlist.length} saved items</p>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
          <Heart size={44} strokeWidth={1} className="text-muted" />
          <p className="font-display text-2xl">Your wishlist is empty</p>
          <p className="text-muted text-sm max-w-xs">
            Save the pieces you love and come back to them anytime.
          </p>
          <Link
            to="/shop"
            className="mt-4 inline-block bg-ink text-bone text-sm tracking-wide px-8 py-4 hover:bg-pine transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
          <AnimatePresence>
            {wishlist.map((item, i) => {
              const product = getProductById(item.productId)
              return (
                <motion.div
                  key={item.productId}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="group"
                >
                  <Link to={`/product/${item.productId}`} className="block relative overflow-hidden bg-paper aspect-[4/5]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        removeFromWishlist(item.productId)
                      }}
                      aria-label="Remove from wishlist"
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bone/90 flex items-center justify-center"
                    >
                      <X size={14} strokeWidth={1.75} />
                    </button>
                  </Link>

                  <div className="mt-3 flex items-start justify-between gap-2">
                    <div>
                      <Link to={`/product/${item.productId}`}>
                        <h3 className="font-body text-sm text-ink">{item.name}</h3>
                      </Link>
                      <span className="text-sm text-muted">${item.price}</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      product &&
                      addToCart(product, {
                        color: product.colors[0],
                        size: product.sizes[0],
                        qty: 1,
                      })
                    }
                    className="mt-3 w-full flex items-center justify-center gap-2 border border-ink text-ink text-xs tracking-wide py-3 hover:bg-ink hover:text-bone transition-colors"
                  >
                    <ShoppingBag size={13} strokeWidth={1.5} />
                    Add to Bag
                  </button>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  )
}
