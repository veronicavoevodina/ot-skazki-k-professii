import { QUALITY_IDS } from '@/data/qualities'
import type { Answer, QualityId, QualityScores } from '@/lib/types'

export function createEmptyScores (): QualityScores {
  return QUALITY_IDS.reduce((acc, id) => {
    acc[id] = 0
    return acc
  }, {} as QualityScores)
}

export function calculateQualityScores (answers: Answer[]): QualityScores {
  const scores = createEmptyScores()

  for (const answer of answers) {
    for (const [qualityId, value] of Object.entries(answer.scores)) {
      const id = qualityId as QualityId
      scores[id] += value ?? 0
    }
  }

  return scores
}

export function rankQualities (
  scores: QualityScores
): { id: QualityId; score: number }[] {
  return QUALITY_IDS
    .map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score)
}
