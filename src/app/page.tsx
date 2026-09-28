import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Sparkles } from "lucide-react";
import { HeroineCard } from "@/components/HeroineCard";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { heroines } from "@/data/heroines";

const chain = [
  { title: "Сказка", desc: "Ситуация из сказки", icon: "📖" },
  { title: "Твой выбор", desc: "Как бы ты поступил", icon: "✨" },
  { title: "Качества", desc: "Думать, помогать, пробовать…", icon: "🌿" },
  { title: "Профессии", desc: "Где это может пригодиться", icon: "🚀" },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="section-label mb-5">
            <Sparkles className="h-3.5 w-3.5 text-[var(--gold-dark)]" />
            Исследовательский школьный проект · Беларусь
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-[var(--navy)] sm:text-5xl lg:text-6xl">
            От сказки к профессии
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--navy)]/75 sm:text-xl">
            Ответь на вопросы, узнай, какие качества проявляются в твоих
            ответах, и посмотри, где они могут пригодиться
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/test" className="btn-primary text-base">
              Начать путешествие
              <ArrowRight className="h-4 w-4" />
            </Link>
            {/* <Link href="/professions" className="btn-secondary text-base">
              <Compass className="h-4 w-4" />
              Посмотреть профессии
            </Link>
            <Link href="/about" className="btn-ghost text-base">
              <BookOpen className="h-4 w-4" />
              Узнать о проекте
            </Link> */}
          </div>
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6">
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
            className="hidden text-sm font-bold text-[var(--red)] sm:inline-flex"
          >
            Все героини →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heroines.map((heroine) => (
            <HeroineCard key={heroine.id} heroine={heroine} />
          ))}
        </div>
      </section> */}
    </div>
  );
}
