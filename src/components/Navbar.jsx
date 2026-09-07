import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useStore } from '../store/useStore'

const NAV_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/shop?filter=new', label: 'New Arrivals' },
  { to: '/shop', label: 'Collections' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  const cartCount = useStore((s) => s.cartCount())
  const wishlistCount = useStore((s) => s.wishlist.length)
  const openCart = useStore((s) => s.openCart)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
      setQuery('')
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-bone/95 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <button
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>

          <Link
            to="/"
            className="font-display text-2xl tracking-tight md:text-3xl"
          >
            VESTAIRE
          </Link>

          <nav className="hidden md:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="font-body text-[13px] tracking-wide text-ink/80 hover:text-ink transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              className="p-2 hidden sm:block"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={19} strokeWidth={1.5} />
            </button>
            <Link to="/wishlist" className="p-2 relative" aria-label="Wishlist">
              <Heart size={19} strokeWidth={1.5} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-pine text-bone text-[9px] flex items-center justify-center font-body">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <button className="p-2 relative" onClick={openCart} aria-label="Cart">
              <ShoppingBag size={19} strokeWidth={1.5} />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-0 right-0 w-4 h-4 rounded-full bg-clay text-bone text-[9px] flex items-center justify-center font-body"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bone px-6 pt-8 pb-6 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <form
                onSubmit={submitSearch}
                className="mx-auto max-w-2xl flex items-center gap-4 border-b border-ink pb-3"
              >
                <Search size={20} strokeWidth={1.5} className="text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 bg-transparent font-display text-xl outline-none placeholder:text-muted"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 z-50 h-full w-[80%] max-w-xs bg-bone p-8 flex flex-col"
            >
              <button
                className="self-end p-2 -mr-2 mb-8"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/wishlist"
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-2xl"
                >
                  Wishlist
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
