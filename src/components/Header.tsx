"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Главная" },
  { href: "/test", label: "Тест" },
  { href: "/quiz", label: "Викторина" },
  { href: "/professions", label: "Профессии" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-sm">
      <div className="h-1 w-full bg-[var(--color-cinnabar)]" aria-hidden />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="site-logo leading-tight text-[var(--color-cinnabar)]"
        >
          <span className="block text-base sm:text-lg">От сказки</span>
          <span className="block text-sm text-[var(--color-dark)] sm:text-base">
            к профессии
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
                className={`rounded-[10px] px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[var(--color-green)] text-white"
                    : "text-[var(--color-dark)]/80 hover:bg-[rgba(196,163,90,0.15)]"
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
            className="rounded-[10px] px-3 py-2 text-sm font-semibold text-[var(--color-dark)] md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-soft)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-3 py-2.5 font-semibold text-[var(--color-dark)] hover:bg-[rgba(123,149,91,0.1)]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/test"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Пройти тест
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
