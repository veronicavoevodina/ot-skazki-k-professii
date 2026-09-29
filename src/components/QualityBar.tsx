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
        <span className="font-semibold text-[var(--color-dark)]">{quality.name}</span>
        <span className="text-sm font-bold text-[var(--color-green)]">{score}</span>
      </div>
      <ProgressBar value={score} max={maxScore || 1} color="var(--color-green)" />
    </div>
  )
}
