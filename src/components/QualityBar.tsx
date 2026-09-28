import { qualities } from '@/data/qualities'
import type { QualityId } from '@/lib/types'
import { ProgressBar } from '@/components/ProgressBar'

interface QualityBarProps {
  id: QualityId
  score: number
  maxScore: number
}

export function QualityBar ({ id, score, maxScore }: QualityBarProps) {
  const quality = qualities[id]

  return (
    <div className="folk-card p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-semibold text-[var(--navy)]">
          <span aria-hidden>{quality.emoji}</span>
          <span>{quality.name}</span>
        </div>
        <span className="text-sm font-bold text-[var(--red)]">{score}</span>
      </div>
      <ProgressBar value={score} max={maxScore || 1} color={quality.color} />
    </div>
  )
}
