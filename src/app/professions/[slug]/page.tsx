import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink } from 'lucide-react'
import { getHeroineById } from '@/data/heroines'
import { getProfessionBySlug, professions } from '@/data/professions'
import { qualities } from '@/data/qualities'
import type { QualityId } from '@/lib/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams () {
  return professions.map((p) => ({ slug: p.slug }))
}

export default async function ProfessionPage ({ params }: PageProps) {
  const { slug } = await params
  const profession = getProfessionBySlug(slug)

  if (!profession) notFound()

  const qualityIds = (Object.entries(profession.qualities) as [QualityId, number][])
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id)

  const linkedHeroines = profession.heroineIds
    .map((id) => getHeroineById(id))
    .filter(Boolean)

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/professions" className="text-sm font-medium text-[var(--navy)]/60 hover:text-[var(--navy)]">
        ← Все профессии
      </Link>

      <div className="mt-4 mb-2 flex items-center gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
          {profession.icon}
        </span>
        <h1 className="text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
          {profession.title}
        </h1>
      </div>

      <p className="mt-4 text-lg leading-relaxed text-[var(--navy)]/75">
        {profession.shortDescription}
      </p>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold text-[var(--navy)]">Чем занимается?</h2>
        <p className="leading-relaxed text-[var(--navy)]/80">{profession.whatDoes}</p>
        <p className="mt-3 leading-relaxed text-[var(--navy)]/70">{profession.description}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
          Какие качества могут пригодиться?
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {qualityIds.map((id) => (
            <div
              key={id}
              className="rounded-2xl border border-[var(--navy)]/10 bg-white p-4"
            >
              <div className="mb-1 flex items-center gap-2 font-medium text-[var(--navy)]">
                <span aria-hidden>{qualities[id].emoji}</span>
                {qualities[id].name}
              </div>
              <p className="text-sm text-[var(--navy)]/65">{qualities[id].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold text-[var(--navy)]">
          Какие школьные предметы могут пригодиться?
        </h2>
        <div className="flex flex-wrap gap-2">
          {profession.schoolSubjects.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-white px-3 py-1.5 text-sm text-[var(--navy)] shadow-sm"
            >
              {subject}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
          Какая сказочная героиня напоминает об этих качествах?
        </h2>
        <div className="grid gap-3">
          {linkedHeroines.map((heroine) => (
            heroine && (
              <Link
                key={heroine.id}
                href={`/heroines/${heroine.slug}`}
                className="rounded-2xl border border-[var(--navy)]/10 bg-white p-4 transition hover:border-[var(--gold)]"
              >
                <p className="text-xs font-medium text-[var(--gold-dark)]">{heroine.story}</p>
                <p className="text-lg font-semibold text-[var(--navy)]">{heroine.name}</p>
                <p className="mt-1 text-sm text-[var(--navy)]/65">{heroine.shortDescription}</p>
              </Link>
            )
          ))}
        </div>
      </section>

      {profession.education && profession.education.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
            Где получить образование?
          </h2>
          <div className="grid gap-3">
            {profession.education.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--navy)]/10 bg-white p-4 transition hover:border-[var(--gold)]"
              >
                <div>
                  <p className="font-semibold text-[var(--navy)]">{item.institution}</p>
                  <p className="text-sm text-[var(--navy)]/60">Узнать о специальности →</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[var(--navy)]/50" />
              </a>
            ))}
          </div>
        </section>
      )}

      <div className="mt-10">
        <Link
          href="/test"
          className="inline-flex rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white"
        >
          Пройти тест
        </Link>
      </div>
    </div>
  )
}
