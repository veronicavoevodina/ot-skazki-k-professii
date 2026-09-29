import Link from 'next/link'
import { qualities } from '@/data/qualities'
import type { Heroine, QualityId } from '@/lib/types'

interface HeroineCardProps {
  heroine: Heroine
}

export function HeroineCard ({ heroine }: HeroineCardProps) {
  const qualityIds = Object.keys(heroine.qualities) as QualityId[]

  return (
    <article className="folk-card folk-card-frame flex h-full flex-col p-5 pt-6">
      <p className="mb-1 text-xs font-bold uppercase tracking-wide text-[var(--color-coral)]">
        {heroine.story}
      </p>
      <h3 className="mb-2 text-xl font-semibold text-[var(--color-dark)]">{heroine.name}</h3>
      <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">
        {heroine.shortDescription}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {qualityIds.map((id) => (
          <span key={id} className="chip">
            {qualities[id].name}
          </span>
        ))}
      </div>

      <Link href={`/heroines/${heroine.slug}`} className="link-accent mt-auto text-sm">
        Узнать больше
      </Link>
    </article>
  )
}
