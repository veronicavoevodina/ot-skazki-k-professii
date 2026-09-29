import type { Profession } from '@/lib/types'

export const professions: Profession[] = [
  {
    id: 'scientist',
    slug: 'scientist',
    title: 'Учёный',
    shortDescription: 'Исследует мир, задаёт вопросы и ищет ответы с помощью экспериментов и анализа.',
    description:
      'Учёный изучает природу, общество или технологии, чтобы открывать новое знание. В этой профессии важны любознательность, умение думать и не сдаваться в долгой работе.',
    whatDoes:
      'Ставит гипотезы, проводит исследования, анализирует данные, пишет статьи и делится открытиями с другими.',
    schoolSubjects: ['Математика', 'Физика', 'Химия', 'Биология', 'Информатика'],
    qualities: {
      intelligence: 3,
      curiosity: 3,
      resourcefulness: 2,
      persistence: 2,
    },
    heroineIds: ['vasilisa', 'thumbelina'],
    icon: '🔬',
    education: [
      {
        institution: 'МГУ имени М. В. Ломоносова',
        url: 'https://www.msu.ru/',
      },
      {
        institution: 'НИУ ВШЭ',
        url: 'https://www.hse.ru/',
      },
    ],
  },
  {
    id: 'engineer',
    slug: 'engineer',
    title: 'Инженер',
    shortDescription: 'Придумывает и создаёт технические решения для реальных задач.',
    description:
      'Инженер превращает идеи в работающие устройства, конструкции и системы. Ему помогают ум, находчивость и умение доводить проект до результата.',
    whatDoes:
      'Проектирует, рассчитывает, тестирует и улучшает технические системы — от мостов до приложений и механизмов.',
    schoolSubjects: ['Математика', 'Физика', 'Информатика', 'Черчение / технология'],
    qualities: {
      intelligence: 3,
      resourcefulness: 3,
      curiosity: 2,
      persistence: 2,
    },
    heroineIds: ['vasilisa', 'frog-princess'],
    icon: '⚙️',
    education: [
      {
        institution: 'МГТУ им. Н. Э. Баумана',
        url: 'https://bmstu.ru/',
      },
      {
        institution: 'СПбПУ Петра Великого',
        url: 'https://www.spbstu.ru/',
      },
    ],
  },
  {
    id: 'programmer',
    slug: 'programmer',
    title: 'Программист',
    shortDescription: 'Пишет программы и ищет способы решать задачи с помощью кода.',
    description:
      'Программист создаёт сайты, приложения и цифровые сервисы. В работе нужны логика, находчивость и желание разбираться в новом.',
    whatDoes:
      'Пишет код, исправляет ошибки, придумывает алгоритмы и улучшает цифровые продукты.',
    schoolSubjects: ['Информатика', 'Математика', 'Английский язык'],
    qualities: {
      intelligence: 3,
      resourcefulness: 3,
      curiosity: 2,
      persistence: 2,
    },
    heroineIds: ['vasilisa', 'frog-princess'],
    icon: '💻',
    education: [
      {
        institution: 'ИТМО',
        url: 'https://itmo.ru/',
      },
      {
        institution: 'МФТИ',
        url: 'https://mipt.ru/',
      },
    ],
  },
  {
    id: 'doctor',
    slug: 'doctor',
    title: 'Врач',
    shortDescription: 'Помогает людям беречь здоровье и выздоравливать.',
    description:
      'Врач диагностирует заболевания, назначает лечение и поддерживает пациентов. Здесь важны ум, заботливость и настойчивость.',
    whatDoes:
      'Осматривает пациентов, ставит диагнозы, назначает лечение и следит за восстановлением.',
    schoolSubjects: ['Биология', 'Химия', 'Русский язык'],
    qualities: {
      intelligence: 3,
      care: 3,
      kindness: 2,
      patience: 2,
    },
    heroineIds: ['nastenka', 'thumbelina'],
    icon: '🩺',
    education: [
      {
        institution: 'Сеченовский Университет',
        url: 'https://www.sechenov.ru/',
      },
      {
        institution: 'РНИМУ им. Н. И. Пирогова',
        url: 'https://rsmu.ru/',
      },
    ],
  },
  {
    id: 'teacher',
    slug: 'teacher',
    title: 'Учитель',
    shortDescription: 'Объясняет новое и помогает ученикам расти.',
    description:
      'Учитель передаёт знания, поддерживает интерес к учёбе и помогает каждому ученику двигаться вперёд. Нужны доброта, терпение и любознательность.',
    whatDoes:
      'Готовит уроки, объясняет материал, проверяет работы и поддерживает учеников.',
    schoolSubjects: ['Русский язык', 'Педагогика (кружки)', 'Любимый предмет'],
    qualities: {
      intelligence: 2,
      kindness: 3,
      patience: 3,
      curiosity: 2,
    },
    heroineIds: ['nastenka', 'havroshechka'],
    icon: '📚',
    education: [
      {
        institution: 'МПГУ',
        url: 'https://mpgu.su/',
      },
      {
        institution: 'РГПУ им. А. И. Герцена',
        url: 'https://www.herzen.spb.ru/',
      },
    ],
  },
  {
    id: 'educator',
    slug: 'educator',
    title: 'Воспитатель',
    shortDescription: 'Заботится о детях, помогает им учиться дружить и познавать мир.',
    description:
      'Воспитатель создаёт безопасную и тёплую среду для детей. В этой профессии особенно важны заботливость, доброта и терпение.',
    whatDoes:
      'Организует игры и занятия, помогает детям в повседневных делах и поддерживает их развитие.',
    schoolSubjects: ['Биология', 'Русский язык', 'Творческие кружки'],
    qualities: {
      care: 3,
      kindness: 3,
      patience: 3,
      hard_work: 2,
    },
    heroineIds: ['nastenka', 'havroshechka', 'thumbelina'],
    icon: '🧒',
    education: [
      {
        institution: 'МПГУ',
        url: 'https://mpgu.su/',
      },
    ],
  },
  {
    id: 'rescuer',
    slug: 'rescuer',
    title: 'Спасатель',
    shortDescription: 'Приходит на помощь в опасных и сложных ситуациях.',
    description:
      'Спасатель помогает людям при чрезвычайных происшествиях. Здесь нужны смелость, настойчивость и умение быстро находить решение.',
    whatDoes:
      'Участвует в поисково-спасательных работах, оказывает первую помощь и действует в команде.',
    schoolSubjects: ['ОБЖ', 'Физкультура', 'Биология'],
    qualities: {
      courage: 3,
      persistence: 3,
      resourcefulness: 2,
      care: 2,
    },
    heroineIds: ['gerda'],
    icon: '🛟',
    education: [
      {
        institution: 'Академия ГПС МЧС России',
        url: 'https://academygps.ru/',
      },
    ],
  },
  {
    id: 'firefighter',
    slug: 'firefighter',
    title: 'Пожарный',
    shortDescription: 'Тушит пожары и спасает людей в опасных условиях.',
    description:
      'Пожарный работает там, где нужна быстрая и смелая помощь. Важны мужество, выносливость и умение действовать сообща.',
    whatDoes:
      'Тушит возгорания, эвакуирует людей, проверяет оборудование и тренируется для сложных вызовов.',
    schoolSubjects: ['ОБЖ', 'Физкультура', 'Физика'],
    qualities: {
      courage: 3,
      persistence: 3,
      hard_work: 2,
      resourcefulness: 2,
    },
    heroineIds: ['gerda'],
    icon: '🚒',
    education: [
      {
        institution: 'Академия ГПС МЧС России',
        url: 'https://academygps.ru/',
      },
    ],
  },
  {
    id: 'designer',
    slug: 'designer',
    title: 'Дизайнер',
    shortDescription: 'Придумывает, как вещи, интерфейсы и пространства могут выглядеть и работать.',
    description:
      'Дизайнер соединяет красоту и удобство. В работе помогают находчивость, любознательность и внимание к людям.',
    whatDoes:
      'Создаёт макеты, визуальные концепции, продумывает пользовательский опыт и оформляет идеи.',
    schoolSubjects: ['ИЗО', 'Информатика', 'Технология'],
    qualities: {
      resourcefulness: 3,
      curiosity: 3,
      intelligence: 2,
      persistence: 2,
    },
    heroineIds: ['frog-princess', 'vasilisa'],
    icon: '🎨',
    education: [
      {
        institution: 'Британская высшая школа дизайна',
        url: 'https://britishdesign.ru/',
      },
      {
        institution: 'НИУ ВШЭ — Школа дизайна',
        url: 'https://design.hse.ru/',
      },
    ],
  },
  {
    id: 'cook',
    slug: 'cook',
    title: 'Повар',
    shortDescription: 'Готовит блюда и заботится о вкусе, качестве и людях за столом.',
    description:
      'Повар создаёт еду, которая радует и питает. Здесь важны трудолюбие, терпение и заботливость.',
    whatDoes:
      'Составляет меню, готовит блюда, следит за качеством продуктов и работает в команде кухни.',
    schoolSubjects: ['Технология', 'Химия', 'Биология'],
    qualities: {
      hard_work: 3,
      patience: 3,
      care: 2,
      resourcefulness: 2,
    },
    heroineIds: ['havroshechka', 'nastenka'],
    icon: '👨‍🍳',
    education: [
      {
        institution: 'Российский университет кооперации',
        url: 'https://www.ruc.su/',
      },
    ],
  },
]

export function getProfessionBySlug (slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug)
}

export function getProfessionById (id: string): Profession | undefined {
  return professions.find((p) => p.id === id)
}
