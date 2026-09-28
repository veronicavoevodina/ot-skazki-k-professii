import type { Heroine } from '@/lib/types'

export const heroines: Heroine[] = [
  {
    id: 'nastenka',
    slug: 'nastenka',
    name: 'Настенька',
    story: 'Морозко',
    trial: 'Осталась одна в зимнем лесу и должна была выдержать испытание холодом и страхом.',
    deed: 'Отвечала Морозко мягко и доброжелательно, не жаловалась и продолжала трудиться даже в трудной ситуации.',
    shortDescription: 'Доброта, заботливость и трудолюбие помогают ей пройти суровое испытание.',
    qualities: {
      kindness: 3,
      persistence: 2,
      hard_work: 3,
      care: 2,
    },
    professionConnections: ['teacher', 'educator', 'doctor', 'cook'],
  },
  {
    id: 'vasilisa',
    slug: 'vasilisa',
    name: 'Василиса Премудрая',
    story: 'Царевна-лягушка / Василиса Премудрая',
    trial: 'Получает очень трудные задания и должна найти выход.',
    deed: 'С помощью ума и находчивости превращает сложные поручения в выполнимые дела.',
    shortDescription: 'Ум и находчивость помогают ей находить решения в сложных ситуациях.',
    qualities: {
      intelligence: 3,
      resourcefulness: 3,
      curiosity: 2,
    },
    professionConnections: ['scientist', 'engineer', 'programmer', 'designer'],
  },
  {
    id: 'frog-princess',
    slug: 'frog-princess',
    name: 'Царевна-лягушка',
    story: 'Царевна-лягушка',
    trial: 'Должна выполнить царские задания лучше всех, оставаясь в необычном облике.',
    deed: 'Проявляет мастерство и изобретательность: создаёт удивительные вещи и находит выход из трудных положений.',
    shortDescription: 'Мастерство и находчивость помогают ей справиться с царскими заданиями.',
    qualities: {
      resourcefulness: 3,
      intelligence: 2,
      hard_work: 2,
    },
    professionConnections: ['designer', 'engineer', 'programmer', 'cook'],
  },
  {
    id: 'gerda',
    slug: 'gerda',
    name: 'Герда',
    story: 'Снежная королева',
    trial: 'Отправляется в долгий и опасный путь, чтобы спасти друга.',
    deed: 'Несмотря на страх и препятствия, продолжает идти и не оставляет Кая.',
    shortDescription: 'Смелость и настойчивость ведут её через все испытания ради друга.',
    qualities: {
      courage: 3,
      persistence: 3,
      kindness: 2,
    },
    professionConnections: ['rescuer', 'firefighter'],
  },
  {
    id: 'havroshechka',
    slug: 'havroshechka',
    name: 'Хаврошечка',
    story: 'Крошечка-Хаврошечка',
    trial: 'Вынуждена много трудиться и терпеть несправедливость в доме мачехи.',
    deed: 'Старательно выполняет тяжёлую работу и не сдаётся.',
    shortDescription: 'Трудолюбие и настойчивость помогают ей выстоять в трудных условиях.',
    qualities: {
      hard_work: 3,
      persistence: 3,
      care: 2,
    },
    professionConnections: ['cook', 'educator', 'teacher'],
  },
  {
    id: 'thumbelina',
    slug: 'thumbelina',
    name: 'Дюймовочка',
    story: 'Дюймовочка',
    trial: 'Оказывается в незнакомом большом мире и проходит через многие опасности.',
    deed: 'Сохраняет доброту и любознательность, помогает другим и ищет своё место.',
    shortDescription: 'Доброта и любознательность помогают ей найти свой путь.',
    qualities: {
      kindness: 3,
      curiosity: 3,
      care: 2,
    },
    professionConnections: ['scientist', 'doctor', 'educator'],
  },
]

export function getHeroineBySlug (slug: string): Heroine | undefined {
  return heroines.find((h) => h.slug === slug)
}

export function getHeroineById (id: string): Heroine | undefined {
  return heroines.find((h) => h.id === id)
}
