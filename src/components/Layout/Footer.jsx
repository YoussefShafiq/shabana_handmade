export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Shabana Hand Made" className="h-10 w-10" />
          <div>
            <div className="text-sm font-semibold text-brand-brown-2">SHABANA HAND MADE</div>
            <div className="text-xs font-medium text-black/60">Handcrafted with love.</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href="https://www.instagram.com/shabana_handmade/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-brand-bg-2 px-4 py-2 font-semibold text-brand-brown-2 hover:opacity-95 transition"
          >
            Instagram
          </a>
          <a
            href="/contact"
            className="rounded-xl bg-brand-bg-2 px-4 py-2 font-semibold text-brand-brown-2 hover:opacity-95 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

