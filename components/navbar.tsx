'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_ITEMS } from '@/lib/portfolio-data'
import { useActiveSection } from '@/hooks/use-active-section'

const IDS = NAV_ITEMS.map((n) => n.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border py-3' : 'bg-transparent py-5',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight"
          aria-label="Shravani Pawar — home"
        >
          <span className="text-gradient-gold">SP</span>
          <span className="ml-1 text-foreground/80">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors',
                  active === item.id
                    ? 'text-gold'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gold" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height,opacity] duration-300 md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="glass mx-4 mt-3 grid gap-1 rounded-2xl border border-border p-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  active === item.id
                    ? 'bg-gold/10 text-gold'
                    : 'text-muted-foreground hover:bg-card hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
