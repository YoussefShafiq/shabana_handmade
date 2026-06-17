import { useState } from 'react'
import WhatsAppOrderButton from '../components/shared/WhatsAppOrderButton'
import { products } from '../data/products'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="rounded-3xl border border-black/10 bg-white/20 p-6 shadow-sm backdrop-blur md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="md:w-1/2">
            <div className="text-sm font-semibold tracking-[0.35em] text-black/50">CONTACT</div>
            <h1 className="mt-2 text-3xl font-bold text-brand-brown-2">Order or ask a question</h1>
            <p className="mt-3 text-black/70">
              For fastest answers, send a WhatsApp message. If you want, include the product name from the
              collection.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppOrderButton
                productName="a custom order"
                extraMessage={`My product idea: ___ . My city for delivery: ___`}
              />
              <a
                href="https://www.instagram.com/shabana_handmade/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white/50 px-5 py-2.5 text-sm font-semibold text-brand-brown-2 hover:bg-white/70 transition"
              >
                Instagram
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-black/10 bg-white/20 p-5 text-sm text-black/70">
              <div className="font-semibold text-black/80">Quick tips</div>
              <div className="mt-2">
                1. Tell us the product name (or share a screenshot).<br />
                2. Quantity + your city.<br />
                3. We’ll confirm availability and share payment/delivery steps.
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-3xl border border-black/10 bg-white/20 p-5">
              <div className="text-sm font-semibold tracking-[0.35em] text-black/50">MESSAGE FORM</div>

              <form
                className="mt-4 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                  setForm({ name: '', email: '', message: '' })
                }}
              >
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Your name"
                  className="rounded-xl border border-black/10 bg-white/50 px-4 py-2 outline-none focus:border-brand-brown-2"
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  placeholder="Email (optional)"
                  className="rounded-xl border border-black/10 bg-white/50 px-4 py-2 outline-none focus:border-brand-brown-2"
                />
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Write your message…"
                  rows={5}
                  className="resize-none rounded-xl border border-black/10 bg-white/50 px-4 py-2 outline-none focus:border-brand-brown-2"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-brand-brown px-4 py-2 font-semibold text-white hover:opacity-95 transition"
                >
                  {submitted ? 'Sent (demo)' : 'Send message'}
                </button>

                <div className="text-xs text-black/50">
                  This form is a demo UI. For real messages, connect it to email/WhatsApp later.
                </div>
              </form>
            </div>

            <div className="mt-5 text-xs text-black/50">
              Example products to mention: {products.slice(0, 2).map((p) => p.name).join(' • ')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

