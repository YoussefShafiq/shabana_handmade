import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

const navItemClass =
  'block rounded-xl px-4 py-3 font-medium transition hover:bg-white/30'

function navLinkClass(isActive) {
  return isActive
    ? `${navItemClass} bg-white/50 text-brand-brown-2`
    : `${navItemClass} text-brand-text`
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-brand-bg-2/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <NavLink to="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <img src="/logo.png" alt="Shabana Hand Made" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold tracking-wide text-brand-brown-2">
              SHABANA
            </div>
            <div className="truncate text-[10px] font-semibold tracking-[0.25em] text-brand-brown sm:text-xs sm:tracking-[0.35em]">
              HAND MADE
            </div>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-xl bg-white/50 px-3 py-2 font-medium text-brand-brown-2 transition hover:bg-white/30'
                  : 'rounded-xl px-3 py-2 font-medium transition hover:bg-white/30'
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/shop"
            className="hidden rounded-xl bg-brand-brown px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 md:inline-flex"
          >
            Order
          </NavLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white/40 text-brand-brown-2 transition hover:bg-white/60 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="fixed inset-0 top-[65px] z-40 bg-black/20 md:hidden"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <nav
        id="mobile-nav"
        className={`overflow-hidden border-t border-black/10 bg-brand-bg-2/95 backdrop-blur-md transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-label="Mobile"
        aria-hidden={!menuOpen}
      >
        <div className="mx-auto max-w-6xl space-y-1 px-4 py-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => navLinkClass(isActive)}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/shop"
            className="mt-2 block rounded-xl bg-brand-brown px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            onClick={() => setMenuOpen(false)}
          >
            Order via Shop
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
