import { professions } from '@/data/professions'
import type { ProfessionMatch, QualityId, QualityScores } from '@/lib/types'

export function calculateProfessionMatches (
  qualityScores: QualityScores
): ProfessionMatch[] {
  const matches: ProfessionMatch[] = professions.map((profession) => {
    let score = 0

    for (const [qualityId, weight] of Object.entries(profession.qualities)) {
      const id = qualityId as QualityId
      score += (qualityScores[id] ?? 0) * (weight ?? 0)
    }

    return { profession, score }
  })

  return matches.sort((a, b) => b.score - a.score)
}

export function getTopProfessionMatches (
  qualityScores: QualityScores,
  top = 3,
  extra = 2
): { primary: ProfessionMatch[]; alsoInteresting: ProfessionMatch[] } {
  const all = calculateProfessionMatches(qualityScores)
  return {
    primary: all.slice(0, top),
    alsoInteresting: all.slice(top, top + extra),
  }
}
