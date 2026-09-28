import { heroines } from '@/data/heroines'
import { QUALITY_IDS } from '@/data/qualities'
import type { HeroineMatch, QualityId, QualityScores } from '@/lib/types'

export function calculateHeroineMatches (
  qualityScores: QualityScores
): HeroineMatch[] {
  return heroines
    .map((heroine) => {
      let score = 0
      const sharedQualities: QualityId[] = []

      for (const [qualityId, weight] of Object.entries(heroine.qualities)) {
        const id = qualityId as QualityId
        const w = weight ?? 0
        score += (qualityScores[id] ?? 0) * w
        if (w > 0) sharedQualities.push(id)
      }

      sharedQualities.sort(
        (a, b) => (qualityScores[b] ?? 0) - (qualityScores[a] ?? 0)
      )

      return { heroine, score, sharedQualities }
    })
    .sort((a, b) => b.score - a.score)
}

export function getBestHeroineMatch (
  qualityScores: QualityScores
): HeroineMatch {
  const matches = calculateHeroineMatches(qualityScores)
  return matches[0]
}

/** Совпадение с ближайшей героиней: sum(userScore × heroineWeight) */
export function calculateHeroineMatch (
  qualityScores: QualityScores
): HeroineMatch {
  return getBestHeroineMatch(qualityScores)
}

export function getTopUserQualities (
  qualityScores: QualityScores,
  count = 4
): QualityId[] {
  return QUALITY_IDS
    .slice()
    .sort((a, b) => qualityScores[b] - qualityScores[a])
    .slice(0, count)
}
