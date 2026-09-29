import { getProfessionById } from '@/data/professions'
import { formatQualityNames, getQualityName } from '@/data/qualities'
import { qualityInfo } from '@/data/qualityInfo'
import type { HeroineMatch, Profession, QualityId, QualityScores } from '@/lib/types'
import { getLeadingQualities } from '@/lib/calculateScores'

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
  const top = getLeadingQualities(qualityScores, count)
  return formatQualityNames(top).toLowerCase()
}

export function getKidQualityCards (
  qualityScores: QualityScores,
  count = 3
): { id: QualityId; emoji: string; name: string; phrase: string }[] {
  return getLeadingQualities(qualityScores, count).map((id) => ({
    id,
    emoji: qualityInfo[id].emoji,
    name: qualityInfo[id].label,
    phrase: qualityInfo[id].description,
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
