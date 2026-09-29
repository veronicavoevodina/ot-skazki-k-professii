import type { Quality, QualityId } from '@/lib/types'

export const QUALITY_IDS: QualityId[] = [
  'intelligence',
  'resourcefulness',
  'courage',
  'persistence',
  'kindness',
  'hard_work',
  'patience',
  'care',
  'curiosity',
]

export const qualities: Record<QualityId, Quality> = {
  intelligence: {
    id: 'intelligence',
    name: 'Ум',
    description:
      'Помогает разбираться в сложных задачах, находить связи и понимать, как что-то устроено.',
    kidPhrase:
      'Ты любишь думать, разбираться в задачах и понимать, как что-то устроено.',
    emoji: '🧠',
    color: '#1e3a5f',
  },
  resourcefulness: {
    id: 'resourcefulness',
    name: 'Находчивость',
    description:
      'Помогает придумывать новые решения и находить выход из необычных ситуаций.',
    kidPhrase:
      'Ты умеешь искать необычные решения и придумывать новые способы справиться с задачей.',
    emoji: '💡',
    color: '#c9a227',
  },
  courage: {
    id: 'courage',
    name: 'Смелость',
    description:
      'Помогает решаться на действия в сложных или незнакомых ситуациях.',
    kidPhrase:
      'Ты можешь быть смелым и решаться на действия, даже когда ситуация новая или трудная.',
    emoji: '💪',
    color: '#b45309',
  },
  persistence: {
    id: 'persistence',
    name: 'Настойчивость',
    description:
      'Помогает не бросать начатое дело и продолжать двигаться к цели.',
    kidPhrase: 'Ты не сдаёшься и продолжаешь двигаться к цели.',
    emoji: '🎯',
    color: '#166534',
  },
  kindness: {
    id: 'kindness',
    name: 'Доброта',
    description:
      'Помогает поддерживать других людей и относиться к ним с уважением.',
    kidPhrase:
      'Ты замечаешь чувства других людей и стараешься относиться к ним хорошо.',
    emoji: '❤️',
    color: '#ca8a04',
  },
  hard_work: {
    id: 'hard_work',
    name: 'Трудолюбие',
    description:
      'Помогает выполнять работу старательно и доводить практические дела до результата.',
    kidPhrase:
      'Ты любишь трудиться старательно и доводить дело до результата.',
    emoji: '🔨',
    color: '#57534e',
  },
  patience: {
    id: 'patience',
    name: 'Терпение',
    description:
      'Помогает спокойно выполнять дело, ждать результата и не торопиться.',
    kidPhrase:
      'Ты умеешь спокойно делать дело, ждать результата и не торопиться.',
    emoji: '🌱',
    color: '#4d7c0f',
  },
  care: {
    id: 'care',
    name: 'Заботливость',
    description:
      'Помогает замечать, когда другому нужна помощь, и заботиться о нём.',
    kidPhrase: 'Ты замечаешь, когда другому нужна помощь, и заботишься о нём.',
    emoji: '🤝',
    color: '#9f1239',
  },
  curiosity: {
    id: 'curiosity',
    name: 'Любознательность',
    description:
      'Помогает задавать вопросы, узнавать новое и исследовать окружающий мир.',
    kidPhrase:
      'Ты любишь узнавать новое, задавать вопросы и исследовать окружающий мир.',
    emoji: '🔎',
    color: '#0e7490',
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
