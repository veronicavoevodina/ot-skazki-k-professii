import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
    <article className="flex h-full flex-col rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-start gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--cream)] text-2xl">
          {profession.icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-[var(--navy)]">{profession.title}</h3>
          {!compact && (
            <p className="mt-1 text-sm text-[var(--navy)]/70">{profession.shortDescription}</p>
          )}
        </div>
      </div>

      {interestText && (
        <p className="mb-3 text-sm leading-relaxed text-[var(--navy)]/80">{interestText}</p>
      )}

      {whyText && (
        <p className="mb-3 text-sm leading-relaxed text-[var(--navy)]/70">{whyText}</p>
      )}

      <div className="mb-4 flex flex-wrap gap-2">
        {keyQualities.map((id: QualityId) => (
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
        href={`/professions/${profession.slug}`}
        className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold-dark)]"
      >
        Подробнее
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
