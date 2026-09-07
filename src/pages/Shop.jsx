import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products, categories, colors as colorOptions, sizes as sizeOptions } from '../data/products'

const SORTS = [
  { id: 'newest', label: 'Newest' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
]

const MAX_PRICE = Math.max(...products.map((p) => p.price))

function FilterPanel({ state, onChange }) {
  const { category, color, size, maxPrice } = state

  const toggle = (key, value) => {
    onChange((s) => ({ ...s, [key]: s[key] === value ? '' : value }))
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="font-display text-base mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => toggle('category', c.id)}
              className={`text-left text-sm py-1 transition-colors ${
                category === c.id ? 'text-ink font-medium' : 'text-muted hover:text-ink'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-base mb-3">Color</h3>
        <div className="flex flex-wrap gap-2.5">
          {colorOptions.map((c) => (
            <button
              key={c.id}
              onClick={() => toggle('color', c.id)}
              aria-label={c.label}
              aria-pressed={color === c.id}
              className={`w-7 h-7 rounded-full border transition-shadow ${
                color === c.id ? 'ring-2 ring-offset-2 ring-ink' : 'border-line'
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-base mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((s) => (
            <button
              key={s}
              onClick={() => toggle('size', s)}
              className={`min-w-[2.5rem] px-2 py-1.5 text-xs border transition-colors ${
                size === s ? 'bg-ink text-bone border-ink' : 'border-line hover:border-ink'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-base mb-3">
          Max Price <span className="text-muted font-body">${maxPrice}</span>
        </h3>
        <input
          type="range"
          min={0}
          max={MAX_PRICE}
          value={maxPrice}
          onChange={(e) => onChange((s) => ({ ...s, maxPrice: Number(e.target.value) }))}
          className="w-full accent-ink"
        />
      </div>

      {(category || color || size || maxPrice < MAX_PRICE) && (
        <button
          onClick={() => onChange({ category: '', color: '', size: '', maxPrice: MAX_PRICE })}
          className="text-xs underline underline-offset-4 text-muted hover:text-ink self-start"
        >
          Clear all filters
        </button>
      )}
    </div>
  )
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/5] bg-paper" />
          <div className="mt-3 h-3 w-3/4 bg-paper" />
          <div className="mt-2 h-3 w-1/3 bg-paper" />
        </div>
      ))}
    </div>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sort, setSort] = useState('newest')
  const [filters, setFilters] = useState({ category: '', color: '', size: '', maxPrice: MAX_PRICE })

  const query = searchParams.get('q') || ''
  const urlFilter = searchParams.get('filter')

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (urlFilter === 'new') {
      // handled in filtering below via isNew flag; no persistent state needed
    }
  }, [urlFilter])

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (query && !p.name.toLowerCase().includes(query.toLowerCase())) return false
      if (filters.category && p.category !== filters.category) return false
      if (filters.color && !p.colors.includes(filters.color)) return false
      if (filters.size && !p.sizes.includes(filters.size)) return false
      if (p.price > filters.maxPrice) return false
      if (urlFilter === 'new' && !p.isNew) return false
      return true
    })

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    else list = [...list].sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1))

    return list
  }, [query, filters, sort, urlFilter])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="mx-auto max-w-[1600px] px-5 md:px-10 py-10 md:py-14"
    >
      <div className="mb-8 md:mb-10">
        <h1 className="font-display text-4xl md:text-5xl">
          {query ? `Results for "${query}"` : urlFilter === 'new' ? 'New Arrivals' : 'Shop All'}
        </h1>
        <p className="text-muted mt-2 text-sm">{filtered.length} products</p>
      </div>

      <div className="flex items-center justify-between mb-8 border-y border-line py-3">
        <button
          onClick={() => setMobileFiltersOpen(true)}
          className="lg:hidden flex items-center gap-2 text-sm"
        >
          <SlidersHorizontal size={16} strokeWidth={1.5} />
          Filters
        </button>
        <div className="hidden lg:block text-sm text-muted">Refine</div>

        <div className="relative group">
          <button className="flex items-center gap-1.5 text-sm">
            Sort: {SORTS.find((s) => s.id === sort)?.label}
            <ChevronDown size={14} strokeWidth={1.5} />
          </button>
          <div className="absolute right-0 top-full mt-2 w-52 bg-bone border border-line shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
            {SORTS.map((s) => (
              <button
                key={s.id}
                onClick={() => setSort(s.id)}
                className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-paper ${
                  sort === s.id ? 'text-ink font-medium' : 'text-muted'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-10">
        <aside className="hidden lg:block w-56 shrink-0">
          <FilterPanel state={filters} onChange={setFilters} />
        </aside>

        <div className="flex-1">
          {loading ? (
            <SkeletonGrid />
          ) : filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="font-display text-2xl mb-2">No products found</p>
              <p className="text-muted text-sm">Try adjusting your filters or search term.</p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${query}-${filters.category}-${filters.color}-${filters.size}-${filters.maxPrice}-${sort}-${urlFilter}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-6"
              >
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/40"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm bg-bone p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-display text-2xl">Filters</h2>
                <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <FilterPanel state={filters} onChange={setFilters} />
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="mt-10 w-full bg-ink text-bone py-4 text-sm tracking-wide"
              >
                Show {filtered.length} results
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
