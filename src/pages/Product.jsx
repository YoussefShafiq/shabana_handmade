import { useMemo } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from '../components/products/ProductGallery'
import WhatsAppOrderButton from '../components/shared/WhatsAppOrderButton'

export default function Product() {
  const { slug } = useParams()

  const product = useMemo(() => products.find((p) => p.slug === slug), [slug])

  if (!product) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="rounded-3xl border border-black/10 bg-white/20 p-8 text-center">
          <div className="text-2xl font-bold text-brand-brown-2">Product not found</div>
          <NavLink to="/shop" className="mt-4 inline-block rounded-xl bg-brand-brown px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition">
            Back to collection
          </NavLink>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="md:w-1/2">
          <ProductGallery images={product.images} />
        </div>

        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-2xl bg-white/30 px-4 py-2">
            <div className="text-xs font-semibold tracking-[0.35em] text-black/50">CATEGORY</div>
            <div className="text-sm font-semibold text-brand-brown-2">{product.category}</div>
          </div>

          <h1 className="mt-4 text-3xl font-bold text-brand-brown-2">{product.name}</h1>

          <div className="mt-2 text-2xl font-bold text-brand-brown-2">{product.price}</div>

          <p className="mt-4 text-black/70">{product.description}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
              <div className="text-xs font-semibold tracking-[0.35em] text-black/50">MATERIALS</div>
              <div className="mt-2 text-sm font-semibold text-brand-brown-2">{product.materials}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/20 p-4">
              <div className="text-xs font-semibold tracking-[0.35em] text-black/50">SIZE</div>
              <div className="mt-2 text-sm font-semibold text-brand-brown-2">{product.size}</div>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white/20 p-4 sm:col-span-2">
              <div className="text-xs font-semibold tracking-[0.35em] text-black/50">LEAD TIME</div>
              <div className="mt-2 text-sm font-semibold text-brand-brown-2">{product.leadTime}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppOrderButton productName={product.name} extraMessage="Quantity: 1. My city for delivery: ___" />
            <a
              href={product.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white/50 px-5 py-2.5 text-sm font-semibold text-brand-brown-2 hover:bg-white/70 transition"
            >
              View on Instagram
            </a>
          </div>

          <div className="mt-6 text-sm text-black/60">
            Tip: WhatsApp is the fastest way to confirm availability and delivery.
          </div>

          <div className="mt-6">
            <NavLink
              to="/shop"
              className="text-sm font-semibold text-brand-brown-2 hover:underline"
            >
              ← Back to collection
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

