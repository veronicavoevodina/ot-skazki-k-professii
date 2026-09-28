'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Menu, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Главная' },
  { href: '/test', label: 'Тест' },
  { href: '/professions', label: 'Профессии' },
  { href: '/heroines', label: 'Героини' },
  { href: '/about', label: 'О проекте' },
]

export function Header () {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--navy)]/10 bg-[var(--cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--navy)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--gold)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="hidden text-sm leading-tight sm:block">
            От героини
            <br />
            к профессии
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm transition ${
                  active
                    ? 'bg-[var(--navy)] text-white'
                    : 'text-[var(--navy)]/80 hover:bg-[var(--navy)]/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/test"
            className="hidden rounded-xl bg-[var(--gold)] px-3 py-2 text-sm font-semibold text-[var(--navy)] shadow-sm transition hover:brightness-105 sm:inline-flex"
          >
            Пройти тест
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--navy)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--navy)]/10 bg-[var(--cream)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-[var(--navy)] hover:bg-[var(--navy)]/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--navy)] px-3 py-2 text-white"
            >
              <BookOpen className="h-4 w-4" />
              Пройти тест
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
