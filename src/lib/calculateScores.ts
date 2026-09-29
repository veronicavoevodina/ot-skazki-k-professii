import { QUALITY_IDS } from '@/data/qualities'
import type { Answer, QualityId, QualityScores } from '@/lib/types'

export function createEmptyScores (): QualityScores {
  return QUALITY_IDS.reduce((acc, id) => {
    acc[id] = 0
    return acc
  }, {} as QualityScores)
}

/** Один ответ = +1 к одному качеству */
export function calculateQualityScores (answers: Answer[]): QualityScores {
  const scores = createEmptyScores()

  for (const answer of answers) {
    for (const [qualityId, value] of Object.entries(answer.scores)) {
      if (!value) continue
      const id = qualityId as QualityId
      scores[id] += 1
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

/**
 * До 3 ведущих качеств.
 * Если несколько качеств делят балл «на границе» топа — показываем все из этой группы.
 * Качества с 0 баллами не включаются.
 */
export function getLeadingQualities (
  scores: QualityScores,
  minCount = 3
): QualityId[] {
  const ranked = rankQualities(scores).filter((item) => item.score > 0)
  if (ranked.length === 0) return []

  const leading: { id: QualityId; score: number }[] = []

  for (const item of ranked) {
    if (leading.length < minCount) {
      leading.push(item)
      continue
    }

    const lastScore = leading[leading.length - 1].score
    if (item.score === lastScore) {
      leading.push(item)
      continue
    }

    break
  }

  return leading.map((item) => item.id)
}
