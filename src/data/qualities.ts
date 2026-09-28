import type { Quality, QualityId } from '@/lib/types'

export const QUALITY_IDS: QualityId[] = [
  'intelligence',
  'resourcefulness',
  'courage',
  'persistence',
  'kindness',
  'hard_work',
  'curiosity',
  'care',
]

export const qualities: Record<QualityId, Quality> = {
  intelligence: {
    id: 'intelligence',
    name: 'Ум',
    description: 'Любишь думать и искать ответы.',
    kidPhrase: 'Ты любишь думать и искать ответы.',
    emoji: '🧠',
    color: '#1e3a5f',
  },
  resourcefulness: {
    id: 'resourcefulness',
    name: 'Находчивость',
    description: 'Умеешь придумывать разные способы решения.',
    kidPhrase: 'Ты умеешь придумывать разные способы решения.',
    emoji: '💡',
    color: '#c9a227',
  },
  courage: {
    id: 'courage',
    name: 'Смелость',
    description: 'Можешь быть смелым, даже когда путь трудный.',
    kidPhrase: 'Ты можешь быть смелым, даже когда путь трудный.',
    emoji: '🦁',
    color: '#b45309',
  },
  persistence: {
    id: 'persistence',
    name: 'Настойчивость',
    description: 'Не сдаёшься и пробуешь снова.',
    kidPhrase: 'Ты не сдаёшься и пробуешь снова.',
    emoji: '💪',
    color: '#166534',
  },
  kindness: {
    id: 'kindness',
    name: 'Доброта',
    description: 'Умеешь быть добрым к другим.',
    kidPhrase: 'Ты умеешь быть добрым к другим.',
    emoji: '💛',
    color: '#ca8a04',
  },
  hard_work: {
    id: 'hard_work',
    name: 'Трудолюбие',
    description: 'Любишь трудиться и доводить дело до конца.',
    kidPhrase: 'Ты любишь трудиться и доводить дело до конца.',
    emoji: '🛠️',
    color: '#57534e',
  },
  curiosity: {
    id: 'curiosity',
    name: 'Любознательность',
    description: 'Тебе интересно узнавать новое.',
    kidPhrase: 'Тебе интересно узнавать новое.',
    emoji: '🔎',
    color: '#0e7490',
  },
  care: {
    id: 'care',
    name: 'Заботливость',
    description: 'Замечаешь, кому нужна помощь.',
    kidPhrase: 'Ты замечаешь, кому нужна помощь, и заботишься.',
    emoji: '🤲',
    color: '#9f1239',
  },
}

export const qualitiesList = QUALITY_IDS.map((id) => qualities[id])

export function getQualityName (id: QualityId): string {
  return qualities[id].name
}

export function formatQualityNames (ids: QualityId[]): string {
  const names = ids.map(getQualityName)
  if (names.length === 0) return ''
  if (names.length === 1) return names[0]
  if (names.length === 2) return `${names[0]} и ${names[1]}`
  return `${names.slice(0, -1).join(', ')} и ${names[names.length - 1]}`
}
