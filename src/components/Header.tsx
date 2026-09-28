"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/test", label: "Тест" },
  // { href: "/professions", label: "Профессии" },
  // { href: "/heroines", label: "Героини" },
  // { href: "/about", label: "О проекте" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--red)]/15 bg-[var(--milk)]/92 backdrop-blur-md">
      <div className="h-1.5 w-full" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[var(--navy)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--red)] text-[var(--milk)] shadow-[0_3px_0_var(--red-deep)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="hidden text-sm leading-tight sm:block">
            От сказки
            <br />к профессии
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--red)] text-white shadow-[0_2px_0_var(--red-deep)]"
                    : "text-[var(--navy)]/80 hover:bg-[var(--linen)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/test"
            className="btn-primary hidden !px-3 !py-2 text-sm sm:inline-flex"
          >
            Пройти тест
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--navy)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--red)]/10 bg-[var(--linen)]/80 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 font-semibold text-[var(--navy)] hover:bg-white/70"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <BookOpen className="h-4 w-4" />
              Пройти тест
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
