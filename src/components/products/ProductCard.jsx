import { NavLink } from 'react-router-dom'
import WhatsAppOrderButton from '../shared/WhatsAppOrderButton'

export default function ProductCard({ product }) {
  const image = product.images?.[0] || '/logo.png'

  return (
    <article className="group overflow-hidden rounded-2xl border border-black/10 bg-white/30 shadow-sm backdrop-blur">
      <div className="aspect-[4/3] w-full overflow-hidden bg-white/20">
        <img
          src={image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <NavLink
              to={`/products/${product.slug}`}
              className="block truncate text-base font-semibold text-brand-brown-2 hover:underline"
            >
              {product.name}
            </NavLink>
            <div className="mt-1 text-xs font-semibold tracking-wide text-black/60">
              {product.category}
            </div>
          </div>

          <div className="shrink-0 rounded-xl bg-white/50 px-3 py-1 text-sm font-bold text-brand-brown-2">
            {product.price}
          </div>
        </div>

        <p className="mt-2 text-sm text-black/70">{product.shortDescription}</p>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <NavLink
            to={`/products/${product.slug}`}
            className="rounded-xl bg-white/50 px-3 py-2 text-sm font-semibold text-brand-brown-2 hover:bg-white/70 transition"
          >
            View details
          </NavLink>
          <WhatsAppOrderButton productName={product.name} />
        </div>
      </div>
    </article>
  )
}

