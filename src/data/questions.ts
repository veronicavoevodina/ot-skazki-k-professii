import type { Question } from '@/lib/types'

export const questions: Question[] = [
  {
    id: 'q1',
    themeEmoji: '🧙‍♀️',
    themeLabel: 'Василиса Премудрая — волшебное задание',
    themeColor: '#7c3aed',
    text: 'Представь, что ты оказался на месте Василисы Премудрой. Тебе дали очень трудное задание, а времени осталось совсем немного. Что ты сделаешь?',
    answers: [
      {
        id: 'a',
        text: 'Хорошо подумаю и попробую найти решение.',
        scores: { intelligence: 2, persistence: 1 },
      },
      {
        id: 'b',
        text: 'Придумаю необычный способ выполнить задание.',
        scores: { resourcefulness: 2, intelligence: 1 },
      },
      {
        id: 'c',
        text: 'Попрошу кого-нибудь объяснить то, чего я не понимаю.',
        scores: { curiosity: 2, care: 1 },
      },
      {
        id: 'd',
        text: 'Буду пробовать снова, пока не получится.',
        scores: { persistence: 2, hard_work: 1 },
      },
    ],
  },
  {
    id: 'q2',
    themeEmoji: '❄️',
    themeLabel: 'Герда — снежный путь',
    themeColor: '#0e7490',
    text: 'Представь, что ты отправился вместе с Гердой искать Кая. По дороге встретилось много препятствий. Что ты сделаешь?',
    answers: [
      {
        id: 'a',
        text: 'Не остановлюсь и продолжу путь.',
        scores: { persistence: 2, courage: 1 },
      },
      {
        id: 'b',
        text: 'Подумаю, как можно обойти препятствие.',
        scores: { resourcefulness: 2, intelligence: 1 },
      },
      {
        id: 'c',
        text: 'Попрошу помощи у тех, кто может помочь.',
        scores: { care: 2, kindness: 1 },
      },
      {
        id: 'd',
        text: 'Вернусь домой, потому что путь оказался слишком трудным.',
        scores: {},
      },
    ],
  },
  {
    id: 'q3',
    themeEmoji: '🌲',
    themeLabel: 'Морозко — зимний лес',
    themeColor: '#1e3a5f',
    text: 'Представь, что ты оказался в зимнем лесу и встретил Морозко. Он спрашивает тебя, умеешь ли ты помогать другим. Как ты поступишь?',
    answers: [
      {
        id: 'a',
        text: 'Расскажу, кому я недавно помогал.',
        scores: { kindness: 2, care: 1 },
      },
      {
        id: 'b',
        text: 'Предложу помочь тому, кто замёрз или заблудился.',
        scores: { care: 2, kindness: 1 },
      },
      {
        id: 'c',
        text: 'Поздороваюсь и постараюсь быть вежливым.',
        scores: { kindness: 2 },
      },
      {
        id: 'd',
        text: 'Сначала посмотрю, нужна ли кому-нибудь помощь.',
        scores: { care: 2, intelligence: 1 },
      },
    ],
  },
  {
    id: 'q4',
    themeEmoji: '🐄',
    themeLabel: 'Хаврошечка — работа',
    themeColor: '#b45309',
    text: 'Представь, что тебе нужно помочь Хаврошечке выполнить много работы до вечера. Что тебе больше всего подходит?',
    answers: [
      {
        id: 'a',
        text: 'Начну делать работу и постараюсь закончить её.',
        scores: { hard_work: 2, persistence: 1 },
      },
      {
        id: 'b',
        text: 'Сначала решу, что нужно сделать первым.',
        scores: { intelligence: 2, hard_work: 1 },
      },
      {
        id: 'c',
        text: 'Предложу работать вместе.',
        scores: { care: 2, kindness: 1 },
      },
      {
        id: 'd',
        text: 'Если не получится с первого раза, попробую ещё.',
        scores: { persistence: 2, hard_work: 1 },
      },
    ],
  },
  {
    id: 'q5',
    themeEmoji: '🌷',
    themeLabel: 'Дюймовочка — незнакомый мир',
    themeColor: '#be185d',
    text: 'Представь, что ты оказался в мире, где всё вокруг совсем незнакомое. Что тебе захотелось бы сделать?',
    answers: [
      {
        id: 'a',
        text: 'Узнать, как здесь всё устроено.',
        scores: { curiosity: 2, intelligence: 1 },
      },
      {
        id: 'b',
        text: 'Познакомиться с новыми героями.',
        scores: { kindness: 2, curiosity: 1 },
      },
      {
        id: 'c',
        text: 'Помочь тому, кому нужна помощь.',
        scores: { kindness: 2, care: 1 },
      },
      {
        id: 'd',
        text: 'Отправиться исследовать незнакомые места.',
        scores: { curiosity: 2, courage: 1 },
      },
    ],
  },
  {
    id: 'q6',
    themeEmoji: '🐸',
    themeLabel: 'Царевна-лягушка — царское задание',
    themeColor: '#166534',
    text: 'Царю нужно выполнить необычное задание. Представь, что такое задание дали тебе. Как ты будешь его выполнять?',
    answers: [
      {
        id: 'a',
        text: 'Придумаю свой способ.',
        scores: { resourcefulness: 2, intelligence: 1 },
      },
      {
        id: 'b',
        text: 'Сначала разберусь, что именно нужно сделать.',
        scores: { intelligence: 2, curiosity: 1 },
      },
      {
        id: 'c',
        text: 'Попробую сделать всё своими руками.',
        scores: { hard_work: 2, persistence: 1 },
      },
      {
        id: 'd',
        text: 'Посмотрю, как это делают другие, и попробую сам.',
        scores: { curiosity: 2, resourcefulness: 1 },
      },
    ],
  },
  {
    id: 'q7',
    themeEmoji: '🤝',
    themeLabel: 'Помощь другу',
    themeColor: '#ca8a04',
    text: 'Представь, что твой друг пытается решить сложную задачу, но у него не получается. Что ты сделаешь?',
    answers: [
      {
        id: 'a',
        text: 'Помогу ему разобраться.',
        scores: { kindness: 2, care: 1 },
      },
      {
        id: 'b',
        text: 'Попробую объяснить задачу по-другому.',
        scores: { intelligence: 2, care: 1 },
      },
      {
        id: 'c',
        text: 'Вместе придумаем другой способ.',
        scores: { resourcefulness: 2, kindness: 1 },
      },
      {
        id: 'd',
        text: 'Подбодрю его и скажу, чтобы он попробовал ещё раз.',
        scores: { care: 2, persistence: 1 },
      },
    ],
  },
  {
    id: 'q8',
    themeEmoji: '🛠️',
    themeLabel: 'Волшебная мастерская',
    themeColor: '#57534e',
    text: 'Ты попал в волшебную мастерскую. Перед тобой лежат разные задания. Что тебе было бы интереснее всего?',
    answers: [
      {
        id: 'a',
        text: 'Провести опыт и узнать, почему что-то происходит.',
        scores: { curiosity: 2, intelligence: 1 },
      },
      {
        id: 'b',
        text: 'Придумать и собрать новый предмет.',
        scores: { resourcefulness: 2, hard_work: 1 },
      },
      {
        id: 'c',
        text: 'Придумать, как сделать предмет красивым.',
        scores: { resourcefulness: 2, curiosity: 1 },
      },
      {
        id: 'd',
        text: 'Сделать что-нибудь полезное для другого человека.',
        scores: { care: 2, kindness: 1 },
      },
    ],
  },
  {
    id: 'q9',
    themeEmoji: '📖',
    themeLabel: 'Волшебная библиотека',
    themeColor: '#9f1239',
    text: 'В библиотеке ты нашёл волшебную книгу. Она может ответить только на один твой вопрос. Что тебе интереснее узнать?',
    answers: [
      {
        id: 'a',
        text: 'Почему происходят разные явления?',
        scores: { curiosity: 2, intelligence: 1 },
      },
      {
        id: 'b',
        text: 'Как устроены сложные вещи?',
        scores: { intelligence: 2, curiosity: 1 },
      },
      {
        id: 'c',
        text: 'Что находится в далёких странах?',
        scores: { curiosity: 2, courage: 1 },
      },
      {
        id: 'd',
        text: 'Как можно помочь людям?',
        scores: { care: 2, kindness: 1 },
      },
    ],
  },
  {
    id: 'q10',
    themeEmoji: '🧚',
    themeLabel: 'Сказочный помощник',
    themeColor: '#c9a227',
    text: 'Представь, что ты стал помощником сказочного героя. Какое задание ты бы выбрал?',
    answers: [
      {
        id: 'a',
        text: 'Найти ответ на загадочную задачу.',
        scores: { intelligence: 2, curiosity: 1 },
      },
      {
        id: 'b',
        text: 'Починить сломанный волшебный предмет.',
        scores: { resourcefulness: 2, hard_work: 1 },
      },
      {
        id: 'c',
        text: 'Помочь герою, который попал в беду.',
        scores: { kindness: 2, care: 1 },
      },
      {
        id: 'd',
        text: 'Отправиться в путешествие и узнать что-нибудь новое.',
        scores: { curiosity: 2, courage: 1 },
      },
    ],
  },
]
