import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { qualities } from '@/data/qualities'
import type { Heroine, QualityId } from '@/lib/types'

interface HeroineCardProps {
  heroine: Heroine
}

export function HeroineCard ({ heroine }: HeroineCardProps) {
  const qualityIds = Object.keys(heroine.qualities) as QualityId[]

  return (
    <article className="flex h-full flex-col rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--gold-dark)]">
        {heroine.story}
      </p>
      <h3 className="mb-2 text-xl font-semibold text-[var(--navy)]">{heroine.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--navy)]/70">
        {heroine.shortDescription}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {qualityIds.map((id) => (
          <span
            key={id}
            className="inline-flex items-center gap-1 rounded-full bg-[var(--cream)] px-2.5 py-1 text-xs text-[var(--navy)]"
          >
            <span aria-hidden>{qualities[id].emoji}</span>
            {qualities[id].name}
          </span>
        ))}
      </div>

      <Link
        href={`/heroines/${heroine.slug}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold-dark)]"
      >
        Узнать больше
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
