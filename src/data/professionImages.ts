import type { StaticImageData } from 'next/image'
import cookImage from '@/assets/повар.jpg'
import designerImage from '@/assets/designer.jpg'
import doctorImage from '@/assets/doctor.jpg'
import educatorImage from '@/assets/educator.jpg'
import engineerImage from '@/assets/engineer.jpg'
import firefighterImage from '@/assets/firefighter.jpg'
import programmerImage from '@/assets/programmer.jpg'
import rescuerImage from '@/assets/rescuer.jpg'
import scientistImage from '@/assets/scientist.jpg'
import teacherImage from '@/assets/teacher.jpg'

export const professionImages: Record<string, StaticImageData> = {
  scientist: scientistImage,
  engineer: engineerImage,
  programmer: programmerImage,
  doctor: doctorImage,
  teacher: teacherImage,
  educator: educatorImage,
  rescuer: rescuerImage,
  firefighter: firefighterImage,
  designer: designerImage,
  cook: cookImage,
}

/** Название профессии (как в каталоге / викторине) → slug с картинкой */
export const professionSlugByTitle: Record<string, string> = {
  'Учёный': 'scientist',
  'Инженер': 'engineer',
  'Учитель': 'teacher',
  'Программист': 'programmer',
  'Дизайнер': 'designer',
  'Пожарный': 'firefighter',
  'Спасатель': 'rescuer',
  'Врач': 'doctor',
  'Воспитатель': 'educator',
  'Повар': 'cook',
}

export function getProfessionImage (slug: string): StaticImageData | undefined {
  return professionImages[slug]
}

export function getProfessionImageByTitle (title: string): StaticImageData | undefined {
  const slug = professionSlugByTitle[title]
  return slug ? professionImages[slug] : undefined
}
