'use client'

import { useMemo, useState } from 'react'
import { ProfessionCard } from '@/components/ProfessionCard'
import { professions } from '@/data/professions'
import { qualitiesList } from '@/data/qualities'
import type { QualityId } from '@/lib/types'

export default function ProfessionsPage () {
  const [filter, setFilter] = useState<QualityId | 'all'>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return professions
    return professions.filter((p) => (p.qualities[filter] ?? 0) > 0)
  }, [filter])

  const activeQuality = filter === 'all' ? null : qualitiesList.find((q) => q.id === filter)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
        Каталог профессий
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--navy)]/70">
        Эти направления связаны с качествами из теста. Результат не назначает профессию —
        он помогает выбрать, о чём узнать больше.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`rounded-full px-3 py-1.5 text-sm transition ${
            filter === 'all'
              ? 'bg-[var(--navy)] text-white'
              : 'bg-white text-[var(--navy)] hover:bg-[var(--navy)]/5'
          }`}
        >
          Все
        </button>
        {qualitiesList.map((quality) => (
          <button
            key={quality.id}
            type="button"
            onClick={() => setFilter(quality.id)}
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              filter === quality.id
                ? 'bg-[var(--navy)] text-white'
                : 'bg-white text-[var(--navy)] hover:bg-[var(--navy)]/5'
            }`}
          >
            {quality.emoji} {quality.name}
          </button>
        ))}
      </div>

      {activeQuality && (
        <p className="mt-4 text-sm font-medium text-[var(--navy)]">
          Профессии, где важна {activeQuality.name.toLowerCase()}
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((profession) => (
          <ProfessionCard key={profession.id} profession={profession} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-[var(--navy)]/60">По этому качеству пока нет профессий.</p>
      )}
    </div>
  )
}
