import { useState, useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Minus, Plus, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { getProductById, getRelatedProducts, colors as colorOptions } from '../data/products'
import { useStore } from '../store/useStore'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-4 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base">{title}</span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed pb-5">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  const addToCart = useStore((s) => s.addToCart)
  const toggleWishlist = useStore((s) => s.toggleWishlist)
  const isWishlisted = useStore((s) => s.isWishlisted(product?.id))

  const [activeImage, setActiveImage] = useState(0)
  const [color, setColor] = useState(product?.colors[0])
  const [size, setSize] = useState('')
  const [qty, setQty] = useState(1)
  const [sizeError, setSizeError] = useState(false)
  const [zoomStyle, setZoomStyle] = useState({})

  const related = useMemo(() => (product ? getRelatedProducts(product) : []), [product])

  if (!product) return <Navigate to="/shop" replace />

  const colorMeta = (id) => colorOptions.find((c) => c.id === id)

  const handleAddToCart = () => {
    if (!size) {
      setSizeError(true)
      return
    }
    addToCart(product, { color, size, qty })
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - left) / width) * 100
    const y = ((e.clientY - top) / height) * 100
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: 'scale(1.6)' })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-[1600px] px-5 md:px-10 py-10 md:py-14"
    >
      <nav className="text-xs text-muted mb-8 flex gap-2">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span>/</span>
        <span className="text-ink capitalize">{product.category}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-8 md:gap-14">
        {/* Gallery */}
        <div>
          <div
            className="relative aspect-[4/5] bg-paper overflow-hidden cursor-zoom-in hidden md:block"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomStyle({})}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={product.images[activeImage]}
                alt={product.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={zoomStyle}
              />
            </AnimatePresence>
          </div>

          <div className="aspect-[4/5] bg-paper overflow-hidden md:hidden">
            <img src={product.images[activeImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`w-20 h-24 shrink-0 overflow-hidden border transition-colors ${
                  activeImage === i ? 'border-ink' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="max-w-md">
          {product.isNew && (
            <span className="text-xs font-mono tracking-wide text-clay">NEW ARRIVAL</span>
          )}
          <h1 className="font-display text-3xl md:text-4xl mt-2">{product.name}</h1>
          <p className="text-xs font-mono text-muted mt-2">{product.styleCode}</p>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-xl">${product.price}</span>
            {product.compareAt && (
              <span className="text-sm text-muted line-through">${product.compareAt}</span>
            )}
          </div>

          <p className="text-sm text-muted leading-relaxed mt-6">{product.description}</p>

          {/* Color */}
          <div className="mt-8">
            <p className="text-sm mb-3">
              Color: <span className="text-muted capitalize">{colorMeta(color)?.label}</span>
            </p>
            <div className="flex gap-2.5">
              {product.colors.map((cId) => {
                const meta = colorMeta(cId)
                return (
                  <motion.button
                    key={cId}
                    onClick={() => setColor(cId)}
                    aria-label={meta?.label}
                    aria-pressed={color === cId}
                    whileTap={{ scale: 0.9 }}
                    className={`w-9 h-9 rounded-full border transition-shadow ${
                      color === cId ? 'ring-2 ring-offset-2 ring-ink' : 'border-line'
                    }`}
                    style={{ backgroundColor: meta?.hex }}
                  />
                )
              })}
            </div>
          </div>

          {/* Size */}
          <div className="mt-8">
            <p className="text-sm mb-3">Size {sizeError && <span className="text-clay text-xs">— please select a size</span>}</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <motion.button
                  key={s}
                  onClick={() => {
                    setSize(s)
                    setSizeError(false)
                  }}
                  whileTap={{ scale: 0.92 }}
                  className={`min-w-[3rem] px-3 py-2.5 text-sm border transition-colors ${
                    size === s
                      ? 'bg-ink text-bone border-ink'
                      : sizeError
                        ? 'border-clay text-clay'
                        : 'border-line hover:border-ink'
                  }`}
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Quantity + actions */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-11 flex items-center justify-center hover:bg-paper"
                aria-label="Decrease quantity"
              >
                <Minus size={13} />
              </button>
              <motion.span key={qty} initial={{ scale: 1.3 }} animate={{ scale: 1 }} className="w-9 text-center text-sm">
                {qty}
              </motion.span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-11 flex items-center justify-center hover:bg-paper"
                aria-label="Increase quantity"
              >
                <Plus size={13} />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-ink text-bone text-sm tracking-wide py-4 hover:bg-pine transition-colors"
            >
              Add to Bag
            </button>

            <button
              onClick={() => toggleWishlist(product)}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={isWishlisted}
              className="w-11 h-11 flex items-center justify-center border border-line shrink-0"
            >
              <motion.span animate={isWishlisted ? { scale: [1, 1.3, 1] } : { scale: 1 }} transition={{ duration: 0.3 }}>
                <Heart size={17} strokeWidth={1.5} className={isWishlisted ? 'fill-clay text-clay' : 'text-ink'} />
              </motion.span>
            </button>
          </div>

          {/* Accordions */}
          <div className="mt-10 border-t border-line">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Size & Fit">{product.fit}</Accordion>
            <Accordion title="Delivery & Returns">{product.delivery}</Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="font-display text-2xl md:text-3xl mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </motion.div>
  )
}
