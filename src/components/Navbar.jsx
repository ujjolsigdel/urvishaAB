import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import { FiMenu, FiX, FiArrowRight } from 'react-icons/fi'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import useLockBodyScroll from '../hooks/useLockBodyScroll.js'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          'rounded-lg px-3 py-2 text-sm font-medium transition',
          isActive
            ? 'bg-forest-50 text-forest-800 ring-1 ring-forest-700/10'
            : 'text-slate-700 hover:bg-slate-100/70 hover:text-slate-900'
        )
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useLockBodyScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const items = useMemo(
    () => [
      { to: '/', label: 'Hem' },
      { to: '/services', label: 'Tjänster' },
      { to: '/about', label: 'Om oss' },
      { to: '/contact', label: 'Kontakt' },
    ],
    []
  )

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 py-3 container-pad">
        <Link to="/" className="flex items-center gap-3" aria-label="Hem">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primär">
          {items.map((it) => (
            <NavItem key={it.to} to={it.to}>
              {it.label}
            </NavItem>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/contact#form" className="px-5">
            Begär ett offert <FiArrowRight />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-800 ring-soft shadow-sm transition hover:bg-slate-50 md:hidden"
          aria-label={open ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="border-t border-slate-900/10 bg-white">
            <div className="mx-auto w-full max-w-7xl py-3 container-pad">
              <div className="flex flex-col gap-1">
                {items.map((it) => (
                  <NavItem key={it.to} to={it.to} onClick={() => setOpen(false)}>
                    {it.label}
                  </NavItem>
                ))}
                <div className="pt-2">
                  <Button to="/contact#form" className="w-full justify-center">
                    Begär ett offert <FiArrowRight />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}

