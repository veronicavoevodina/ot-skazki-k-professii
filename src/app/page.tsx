import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Sparkles, Star } from "lucide-react";
import { HeroineCard } from "@/components/HeroineCard";
import { heroines } from "@/data/heroines";

const chain = [
  { title: "Сказка", desc: "Ситуация из сказки" },
  { title: "Твой выбор", desc: "Как бы ты поступил" },
  { title: "Качества", desc: "Думать, помогать, пробовать…" },
  { title: "Профессии", desc: "Где это может пригодиться" },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[var(--gold)]/20 blur-3xl" />
          <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-[var(--green)]/15 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-[var(--navy)] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold-dark)]" />
            Исследовательский школьный проект
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
            Мудрость женщин в сказках: какие качества помогают людям сегодня?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--navy)]/75 sm:text-xl">
            Ответь на вопросы, узнай, какие качества проявляются в твоих
            ответах, и посмотри, где они могут пригодиться
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white shadow-md transition hover:bg-[var(--navy-soft)]"
            >
              Начать путешествие
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/professions"
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--navy)]/20 bg-white px-5 py-3 font-semibold text-[var(--navy)] transition hover:border-[var(--gold)]"
            >
              <Compass className="h-4 w-4" />
              Посмотреть профессии
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-semibold text-[var(--navy)]/80 transition hover:bg-white/60"
            >
              <BookOpen className="h-4 w-4" />
              Узнать о проекте
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {chain.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--navy)]/10 bg-white/80 p-4 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2 text-[var(--gold-dark)]">
                <Star className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-wide">
                  Шаг {index + 1}
                </span>
              </div>
              <h2 className="text-lg font-semibold text-[var(--navy)]">
                {item.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--navy)]/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--navy)]">
              Сказочные героини
            </h2>
            <p className="mt-2 text-[var(--navy)]/70">
              Их поступки помогают увидеть качества, которые могут пригодиться и
              сегодня
            </p>
          </div>
          <Link
            href="/heroines"
            className="hidden text-sm font-semibold text-[var(--navy)] sm:inline-flex"
          >
            Все героини →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroines.map((heroine) => (
            <HeroineCard key={heroine.id} heroine={heroine} />
          ))}
        </div>
      </section>
    </div>
  );
}
