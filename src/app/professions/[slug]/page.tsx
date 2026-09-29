import Link from 'next/link'
import { notFound } from 'next/navigation'
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
      <Link
        href="/professions"
        className="text-sm font-medium text-[var(--muted)] hover:text-[var(--color-dark)]"
      >
        ← Все профессии
      </Link>

      <h1 className="mt-4 text-3xl font-semibold text-[var(--color-dark)] sm:text-4xl">
        {profession.title}
      </h1>
      <span className="heading-accent" aria-hidden />

      <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
        {profession.shortDescription}
      </p>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold text-[var(--color-dark)]">
          Чем занимается?
        </h2>
        <p className="leading-relaxed text-[var(--muted)]">{profession.whatDoes}</p>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">{profession.description}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">
          Какие качества могут пригодиться?
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {qualityIds.map((id) => (
            <div key={id} className="folk-card p-4">
              <div className="mb-1 font-medium text-[var(--color-dark)]">
                {qualities[id].name}
              </div>
              <p className="text-sm text-[var(--muted)]">{qualities[id].description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-3 text-2xl font-semibold text-[var(--color-dark)]">
          Какие школьные предметы могут пригодиться?
        </h2>
        <div className="flex flex-wrap gap-2">
          {profession.schoolSubjects.map((subject) => (
            <span key={subject} className="chip">
              {subject}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">
          Какая сказочная героиня напоминает об этих качествах?
        </h2>
        <div className="grid gap-3">
          {linkedHeroines.map(
            (heroine) =>
              heroine && (
                <Link
                  key={heroine.id}
                  href={`/heroines/${heroine.slug}`}
                  className="folk-card p-4 transition hover:border-[var(--color-green)]"
                >
                  <p className="text-xs font-medium text-[var(--color-coral)]">
                    {heroine.story}
                  </p>
                  <p className="text-lg font-semibold text-[var(--color-dark)]">
                    {heroine.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {heroine.shortDescription}
                  </p>
                </Link>
              )
          )}
        </div>
      </section>

      <div className="mt-10">
        <Link href="/test" className="btn-primary">
          Пройти тест
        </Link>
      </div>
    </div>
  )
}
