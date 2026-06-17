import { useMemo, useState } from 'react'
import { products, productCategories } from '../data/products'
import ProductCard from '../components/products/ProductCard'
import { NavLink } from 'react-router-dom'

export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filtered = useMemo(() => {
    if (selectedCategory === 'All') return products
    return products.filter((p) => p.category === selectedCategory)
  }, [selectedCategory])

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.35em] text-black/50">SHOP</div>
          <h1 className="mt-2 text-3xl font-bold text-brand-brown-2">Collection</h1>
          <p className="mt-2 text-black/70">Browse products and order directly on WhatsApp.</p>
        </div>

        <NavLink
          to="/contact"
          className="rounded-xl bg-brand-brown px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
        >
          Need something custom?
        </NavLink>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory('All')}
          className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
            selectedCategory === 'All'
              ? 'border-brand-brown-2 bg-brand-brown text-white'
              : 'border-black/10 bg-white/30 text-brand-brown-2 hover:bg-white/50'
          }`}
        >
          All
        </button>

        {productCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setSelectedCategory(c)}
            className={`rounded-xl border px-4 py-2 text-sm font-semibold transition ${
              selectedCategory === c
                ? 'border-brand-brown-2 bg-brand-brown text-white'
                : 'border-black/10 bg-white/30 text-brand-brown-2 hover:bg-white/50'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  )
}

