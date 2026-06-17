import WhatsAppOrderButton from '../components/shared/WhatsAppOrderButton'
import { products } from '../data/products'

import ProductCard from '../components/products/ProductCard'
import { NavLink } from 'react-router-dom'

export default function Home() {
  const featured = products.slice(0, 4)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/20 p-6 shadow-sm backdrop-blur md:p-10">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-gold/30 blur-2xl" />
        <div className="absolute -bottom-12 -left-10 h-56 w-56 rounded-full bg-brand-bg-2/40 blur-2xl" />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/40 px-4 py-2">
              <img src="/logo.png" alt="Shabana Hand Made logo" className="h-10 w-10" />
              <div className="leading-tight">
                <div className="text-sm font-semibold text-brand-brown-2">Handmade with love</div>
                <div className="text-xs font-semibold tracking-[0.35em] text-black/60">
                  SHABANA HAND MADE
                </div>
              </div>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-brand-brown-2 md:text-5xl">
              Boutique handmade pieces
              <span className="block font-script text-brand-brown-2 font-normal md:text-6xl">
                for your home & daily life
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-black/70">
              Discover warm, elegant creations crafted by hand. Browse the collection and order directly on
              WhatsApp.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <NavLink
                to="/shop"
                className="rounded-xl bg-brand-brown px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
              >
                View collection
              </NavLink>
              <WhatsAppOrderButton productName="a piece from the collection" extraMessage="Tell me what you love!" />
            </div>
          </div>

          <div className="relative flex-1">
            <div className="mx-auto max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-white/20">
              <div className="aspect-[4/5]">
                <img
                  src="/logo.png"
                  alt="Shabana Hand Made"
                  className="h-full w-full object-contain p-8"
                />
              </div>
              <div className="border-t border-black/10 bg-white/20 p-4">
                <div className="text-sm font-semibold text-brand-brown-2">Today’s featured style</div>
                <div className="mt-1 text-xs font-semibold text-black/60">Warm gold + artisanal textures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] text-black/50">FEATURED</div>
            <h2 className="mt-2 text-2xl font-bold text-brand-brown-2">Top handmade picks</h2>
          </div>
          <NavLink to="/shop" className="text-sm font-semibold text-brand-brown-2 hover:underline">
            See all →
          </NavLink>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-black/10 bg-white/20 p-6 shadow-sm backdrop-blur md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.35em] text-black/50">ABOUT</div>
            <h2 className="mt-2 text-2xl font-bold text-brand-brown-2">
              Your brand’s story, made visible
            </h2>
            <p className="mt-3 max-w-xl text-black/70">
              Shabana Hand Made creates artisanal pieces with care and style. Read how it all started and how
              every item is crafted.
            </p>
          </div>
          <NavLink
            to="/about"
            className="rounded-xl bg-white/50 px-5 py-3 text-center text-sm font-semibold text-brand-brown-2 hover:bg-white/70 transition"
          >
            Our story
          </NavLink>
        </div>
      </section>
    </div>
  )
}

