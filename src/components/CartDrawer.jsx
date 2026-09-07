import { AnimatePresence, motion } from "framer-motion";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

export default function CartDrawer() {
  const isOpen = useStore((s) => s.isCartOpen);
  const closeCart = useStore((s) => s.closeCart);
  const cart = useStore((s) => s.cart);
  const updateQty = useStore((s) => s.updateQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const subtotal = useStore((s) => s.cartSubtotal());

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-[2px]"
            onClick={closeCart}
          />
          <motion.aside
            role="dialog"
            aria-label="Shopping cart"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-50 h-full w-full sm:w-110 bg-bone flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-line">
              <h2 className="font-display text-xl">
                Your Bag ({cart.reduce((s, l) => s + l.qty, 0)})
              </h2>
              <button
                onClick={closeCart}
                aria-label="Close cart"
                className="p-2 -mr-2"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag size={40} strokeWidth={1} className="text-muted" />
                <p className="text-muted">Your bag is empty.</p>
                <button
                  onClick={closeCart}
                  className="text-sm underline underline-offset-4"
                >
                  Continue shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-6">
                  {cart.map((line) => (
                    <motion.div
                      layout
                      key={line.key}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-28 bg-paper shrink-0 overflow-hidden">
                        <img
                          src={line.image}
                          alt={line.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-sm">{line.name}</h3>
                          <span className="text-sm">
                            ${(line.price * line.qty).toFixed(0)}
                          </span>
                        </div>
                        <p className="text-xs text-muted mt-1 capitalize">
                          {line.color} / {line.size}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-line">
                            <button
                              onClick={() => updateQty(line.key, line.qty - 1)}
                              aria-label="Decrease quantity"
                              className="w-7 h-7 flex items-center justify-center hover:bg-paper"
                            >
                              <Minus size={12} />
                            </button>
                            <motion.span
                              key={line.qty}
                              initial={{ scale: 1.3 }}
                              animate={{ scale: 1 }}
                              className="w-7 text-center text-xs"
                            >
                              {line.qty}
                            </motion.span>
                            <button
                              onClick={() => updateQty(line.key, line.qty + 1)}
                              aria-label="Increase quantity"
                              className="w-7 h-7 flex items-center justify-center hover:bg-paper"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(line.key)}
                            className="text-xs text-muted underline underline-offset-4 hover:text-clay"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-line px-6 py-5 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Subtotal</span>
                    <motion.span
                      key={subtotal}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                    >
                      ${subtotal.toFixed(0)}
                    </motion.span>
                  </div>
                  <p className="text-xs text-muted">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="block text-center bg-ink text-bone text-sm tracking-wide py-4 hover:bg-pine transition-colors"
                  >
                    Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
