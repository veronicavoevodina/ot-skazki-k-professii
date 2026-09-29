import Link from 'next/link'
import { qualities } from '@/data/qualities'
import type { Profession, QualityId } from '@/lib/types'
import { getProfessionKeyQualities } from '@/lib/copy'

interface ProfessionCardProps {
  profession: Profession
  whyText?: string
  interestText?: string
  compact?: boolean
}

export function ProfessionCard ({
  profession,
  whyText,
  interestText,
  compact = false,
}: ProfessionCardProps) {
  const keyQualities = getProfessionKeyQualities(profession)

  return (
    <article className="folk-card folk-card-frame flex h-full flex-col p-5 pt-6">
      <h3 className="text-lg font-semibold text-[var(--color-dark)]">{profession.title}</h3>
      {!compact && (
        <p className="mt-2 text-sm text-[var(--muted)]">{profession.shortDescription}</p>
      )}

      {interestText && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{interestText}</p>
      )}

      {whyText && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{whyText}</p>
      )}

      <div className="mt-4 mb-4 flex flex-wrap gap-2">
        {keyQualities.map((id: QualityId) => (
          <span key={id} className="chip">
            {qualities[id].name}
          </span>
        ))}
      </div>

      <Link
        href={`/professions/${profession.slug}`}
        className="link-accent mt-auto text-sm"
      >
        Подробнее
      </Link>
    </article>
  )
}
