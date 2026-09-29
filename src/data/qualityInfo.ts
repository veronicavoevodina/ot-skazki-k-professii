import { getProfessionById } from '@/data/professions'
import type { QualityId, RelatedProfession } from '@/lib/types'

export interface QualityInfo {
  label: string
  emoji: string
  description: string
  professions: string[]
}

/** Качество → описание и профессии, где оно может пригодиться */
export const qualityInfo: Record<QualityId, QualityInfo> = {
  intelligence: {
    label: 'Ум',
    emoji: '🧠',
    description:
      'Помогает разбираться в сложных задачах, находить связи и понимать, как что-то устроено.',
    professions: ['Учёный', 'Инженер', 'Учитель', 'Программист'],
  },
  resourcefulness: {
    label: 'Находчивость',
    emoji: '💡',
    description:
      'Помогает придумывать новые решения и находить выход из необычных ситуаций.',
    professions: ['Инженер', 'Программист', 'Изобретатель', 'Дизайнер'],
  },
  courage: {
    label: 'Смелость',
    emoji: '💪',
    description:
      'Помогает решаться на действия в сложных или незнакомых ситуациях.',
    professions: ['Пожарный', 'Спасатель', 'Врач', 'Журналист'],
  },
  persistence: {
    label: 'Настойчивость',
    emoji: '🎯',
    description:
      'Помогает не бросать начатое дело и продолжать двигаться к цели.',
    professions: ['Учёный', 'Спортсмен', 'Инженер', 'Программист'],
  },
  kindness: {
    label: 'Доброта',
    emoji: '❤️',
    description:
      'Помогает поддерживать других людей и относиться к ним с уважением.',
    professions: ['Учитель', 'Врач', 'Воспитатель', 'Ветеринар'],
  },
  hard_work: {
    label: 'Трудолюбие',
    emoji: '🔨',
    description:
      'Помогает выполнять работу старательно и доводить практические дела до результата.',
    professions: ['Повар', 'Строитель', 'Ветеринар', 'Инженер'],
  },
  patience: {
    label: 'Терпение',
    emoji: '🌱',
    description:
      'Помогает спокойно выполнять дело, ждать результата и не торопиться.',
    professions: ['Учитель', 'Врач', 'Ветеринар', 'Садовод'],
  },
  care: {
    label: 'Заботливость',
    emoji: '🤝',
    description:
      'Помогает замечать, когда другому нужна помощь, и заботиться о нём.',
    professions: ['Врач', 'Ветеринар', 'Воспитатель', 'Социальный работник'],
  },
  curiosity: {
    label: 'Любознательность',
    emoji: '🔎',
    description:
      'Помогает задавать вопросы, узнавать новое и исследовать окружающий мир.',
    professions: ['Учёный', 'Учитель', 'Исследователь', 'Журналист'],
  },
}

const TITLE_TO_SLUG: Record<string, string> = {
  Учёный: 'scientist',
  Инженер: 'engineer',
  Учитель: 'teacher',
  Программист: 'programmer',
  Дизайнер: 'designer',
  Пожарный: 'firefighter',
  Спасатель: 'rescuer',
  Врач: 'doctor',
  Воспитатель: 'educator',
  Повар: 'cook',
}

/** Собирает уникальные профессии из ведущих качеств (без рейтинга) */
export function collectRelatedProfessions (
  leadingQualities: QualityId[]
): RelatedProfession[] {
  const seen = new Set<string>()
  const result: RelatedProfession[] = []

  for (const qualityId of leadingQualities) {
    for (const title of qualityInfo[qualityId].professions) {
      if (seen.has(title)) continue
      seen.add(title)

      const slug = TITLE_TO_SLUG[title]
      const catalog = slug ? getProfessionById(slug) : undefined

      result.push({
        title,
        slug: catalog?.slug,
      })
    }
  }

  return result
}
