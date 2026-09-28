import { getProfessionById } from '@/data/professions'
import { formatQualityNames, getQualityName, qualities } from '@/data/qualities'
import type { HeroineMatch, Profession, QualityId, QualityScores } from '@/lib/types'
import { getTopUserQualities } from '@/lib/calculateHeroineMatch'

const PROFESSION_ACCUSATIVE: Record<string, string> = {
  scientist: 'учёный',
  engineer: 'инженер',
  programmer: 'программист',
  doctor: 'врач',
  teacher: 'учитель',
  educator: 'воспитатель',
  rescuer: 'спасатель',
  firefighter: 'пожарный',
  designer: 'дизайнер',
  cook: 'повар',
}

const PROFESSION_WHY: Record<string, string> = {
  scientist: 'В этой профессии полезно любить узнавать новое и искать ответы.',
  engineer: 'В этой профессии полезно уметь придумывать решения и не бояться сложных задач.',
  programmer: 'В этой профессии полезно решать задачи и искать разные способы их решения.',
  doctor: 'В этой профессии полезно помогать людям и заботиться о них.',
  teacher: 'В этой профессии полезно объяснять новое и помогать другим учиться.',
  educator: 'В этой профессии полезно заботиться о детях и помогать им.',
  rescuer: 'В этой профессии полезно быть смелым и не сдаваться.',
  firefighter: 'В этой профессии полезно быть смелым и помогать людям в беде.',
  designer: 'В этой профессии полезно придумывать красивые и удобные вещи.',
  cook: 'В этой профессии полезно трудиться руками и заботиться о других.',
}

export function buildHeroineMatchText (match: HeroineMatch): string {
  const topShared = match.sharedQualities.slice(0, 2)
  const qualitiesText = formatQualityNames(topShared).toLowerCase()
  const name = match.heroine.name

  return [
    `По твоим ответам тебе особенно близки качества ${name}.`,
    `Ты часто выбирал ответы, связанные с ${qualitiesText}.`,
    `Эти качества помогают ${getHeroineShortHelp(match.heroine.id)}.`,
  ].join(' ')
}

function getHeroineShortHelp (id: string): string {
  switch (id) {
    case 'nastenka':
      return 'Настеньке быть доброй и трудолюбивой даже в трудных испытаниях'
    case 'vasilisa':
      return 'Василисе справляться со сложными заданиями'
    case 'frog-princess':
      return 'Царевне-лягушке выполнять необычные царские задания'
    case 'gerda':
      return 'Герде идти вперёд и не оставлять друга'
    case 'havroshechka':
      return 'Хаврошечке трудиться и не сдаваться'
    case 'thumbelina':
      return 'Дюймовочке быть доброй и узнавать новое'
    default:
      return 'героям сказок справляться с трудными задачами'
  }
}

export function buildProfessionWhyText (profession: Profession): string {
  return PROFESSION_WHY[profession.id]
    ?? 'В этой профессии могут пригодиться качества из твоих ответов.'
}

export function buildProfessionInterestText (profession: Profession): string {
  const title = PROFESSION_ACCUSATIVE[profession.id] ?? profession.title.toLowerCase()
  return `Тебе может быть интересно узнать, чем занимается ${title}. ${buildProfessionWhyText(profession)}`
}

export function getProfessionKeyQualities (profession: Profession): QualityId[] {
  return (Object.entries(profession.qualities) as [QualityId, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([id]) => id)
}

export function getTopQualityLabels (
  qualityScores: QualityScores,
  count = 3
): string {
  const top = getTopUserQualities(qualityScores, count)
  return formatQualityNames(top).toLowerCase()
}

export function getKidQualityCards (
  qualityScores: QualityScores,
  count = 3
): { id: QualityId; emoji: string; name: string; phrase: string }[] {
  return getTopUserQualities(qualityScores, count).map((id) => ({
    id,
    emoji: qualities[id].emoji,
    name: qualities[id].name,
    phrase: qualities[id].kidPhrase,
  }))
}

export function getQualityLabel (id: QualityId): string {
  return getQualityName(id)
}

export function resolveProfessions (ids: string[]): Profession[] {
  return ids
    .map((id) => getProfessionById(id))
    .filter((p): p is Profession => Boolean(p))
}
