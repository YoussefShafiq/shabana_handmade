import { NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-black/10 bg-white/20 p-6 shadow-sm backdrop-blur md:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="md:w-2/5">
            <div className="text-sm font-semibold tracking-[0.35em] text-black/50">OUR STORY</div>
            <h1 className="mt-2 text-4xl font-bold text-brand-brown-2">
              <span className="font-script font-normal">Shabana</span> Hand Made
            </h1>

            <p className="mt-4 text-black/70">
              I create warm, elegant handmade pieces that add texture and comfort to your everyday life.
              Each item is crafted carefully and made to last.
            </p>

            <NavLink
              to="/shop"
              className="mt-6 inline-flex rounded-xl bg-brand-brown px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 transition"
            >
              Browse collection
            </NavLink>
          </div>

          <div className="md:w-3/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-black/10 bg-white/20 p-5">
                <div className="text-xs font-semibold tracking-[0.35em] text-black/50">STYLE</div>
                <div className="mt-2 text-sm font-semibold text-brand-brown-2">
                  Boutique, artisanal, warm
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/20 p-5">
                <div className="text-xs font-semibold tracking-[0.35em] text-black/50">PROCESS</div>
                <div className="mt-2 text-sm font-semibold text-brand-brown-2">
                  Hand-made details
                </div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/20 p-5">
                <div className="text-xs font-semibold tracking-[0.35em] text-black/50">QUALITY</div>
                <div className="mt-2 text-sm font-semibold text-brand-brown-2">Premium finishing</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/20 p-5">
                <div className="text-xs font-semibold tracking-[0.35em] text-black/50">SUPPORT</div>
                <div className="mt-2 text-sm font-semibold text-brand-brown-2">
                  WhatsApp ordering
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-black/10 bg-white/20">
              <div className="aspect-[16/9] bg-white/10">
                <img src="/logo.png" alt="Handmade work" className="h-full w-full object-contain p-6" />
              </div>
              <div className="border-t border-black/10 p-5 text-sm text-black/70">
                Add your own workshop photo here later to make the story feel personal.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

