import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--navy)]/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-[var(--navy)]/70 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="space-y-1">
          <p className="font-medium text-[var(--navy)]">
            «Мудрость женщин в сказках: какие качества помогают людям сегодня?»
          </p>
          <p>Исследовательский школьный проект</p>
          <p>Автор: Воеводин Артем, ученик 2 «Б» класса</p>
          <p>ГУО «Средняя школа №51 г. Минска»</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/about" className="hover:text-[var(--navy)]">
            О проекте
          </Link>
          <Link href="/professions" className="hover:text-[var(--navy)]">
            Профессии
          </Link>
          <Link href="/heroines" className="hover:text-[var(--navy)]">
            Героини
          </Link>
        </div>
      </div>
    </footer>
  );
}
