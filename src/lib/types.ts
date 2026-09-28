export type QualityId =
  | 'intelligence'
  | 'resourcefulness'
  | 'courage'
  | 'persistence'
  | 'kindness'
  | 'hard_work'
  | 'curiosity'
  | 'care'

export interface Quality {
  id: QualityId
  name: string
  description: string
  kidPhrase: string
  emoji: string
  color: string
}

export interface Answer {
  id: string
  text: string
  scores: Partial<Record<QualityId, number>>
}

export interface Question {
  id: string
  text: string
  themeEmoji: string
  themeLabel: string
  themeColor: string
  answers: Answer[]
}

export interface Profession {
  id: string
  slug: string
  title: string
  shortDescription: string
  description: string
  whatDoes: string
  schoolSubjects: string[]
  qualities: Partial<Record<QualityId, number>>
  heroineIds: string[]
  education?: {
    institution: string
    url: string
  }[]
  icon: string
}

export interface Heroine {
  id: string
  slug: string
  name: string
  story: string
  trial: string
  deed: string
  shortDescription: string
  qualities: Partial<Record<QualityId, number>>
  professionConnections: string[]
}

export type QualityScores = Record<QualityId, number>

export interface ProfessionMatch {
  profession: Profession
  score: number
}

export interface HeroineMatch {
  heroine: Heroine
  score: number
  sharedQualities: QualityId[]
}

export interface TestResult {
  qualityScores: QualityScores
  rankedQualities: { id: QualityId; score: number }[]
  professionMatches: ProfessionMatch[]
  heroineMatch: HeroineMatch
  completedAt: string
}
