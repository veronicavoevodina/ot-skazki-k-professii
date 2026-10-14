import type { LucideIcon } from "lucide-react";
import {
  BookMarked,
  Dog,
  Fingerprint,
  Film,
  Leaf,
  Microscope,
  Orbit,
  Palette,
  ScanSearch,
  ShipWheel,
  Waypoints,
} from "lucide-react";

export interface FactSource {
  label: string;
  url: string;
}

export interface UnusualProfessionFactItem {
  id: number;
  title: string;
  summary: string;
  fact: string;
  qualities: string[];
  secret: string;
  sources: FactSource[];
  Icon: LucideIcon;
  iconLabel: string;
}

export interface FactQuizOption {
  id: string;
  text: string;
}

export interface FactQuizQuestion {
  id: number;
  question: string;
  kind: "profession" | "fairy";
  correctOptionId: string;
  explanation: string;
  options: FactQuizOption[];
}

export const unusualProfessionFacts: UnusualProfessionFactItem[] = [
  {
    id: 1,
    title: "Специалист по защите других планет",
    summary:
      "Специалист по планетарной защите проверяет, чтобы космические аппараты не переносили земные микроорганизмы туда, где учёные исследуют другие миры.",
    fact: "Перед космическими исследованиями оборудование тщательно очищают и проверяют, чтобы земные микробы не помешали поиску возможной внеземной жизни.",
    qualities: ["аккуратность", "ответственность", "внимание к мелочам"],
    secret:
      "Даже невидимые микроорганизмы учитываются всерьёз: для некоторых миссий важно не только собрать образцы, но и не перепутать следы Земли со следами другой планеты.",
    sources: [
      {
        label: "NASA Science — Planetary Protection Research",
        url: "https://science.nasa.gov/astrobiology/researchers/funded-research/ppr/",
      },
    ],
    Icon: Orbit,
    iconLabel: "Иконка орбиты и планеты",
  },
  {
    id: 2,
    title: "Собака-детектив и её проводник",
    summary:
      "Специально обученная собака вместе с проводником ищет запахи и следы животных, помогая защитникам природы.",
    fact: "В природоохранных проектах собак обучают находить следы редких или опасных для местной природы животных. Например, на Оркнейских островах собак использовали для поиска следов горностаев, угрожающих местной дикой природе.",
    qualities: ["наблюдательность", "терпение", "забота о животных"],
    secret:
      "Такой дуэт работает как команда: собака улавливает едва заметный запах, а проводник понимает её сигналы и помогает безопасно обследовать местность.",
    sources: [
      {
        label: "RSPB — Teach old dogs new tricks",
        url: "https://www.rspb.org.uk/helping-nature/so-many-ways/explore/teach-old-dogs-new-tricks",
      },
      {
        label: "RSPB — Orkney Native Wildlife Project: From Stoats to Survival",
        url: "https://www.rspb.org.uk/whats-happening/news/orkney-native-wildlife-project",
      },
    ],
    Icon: Dog,
    iconLabel: "Иконка собаки-ищейки",
  },
  {
    id: 3,
    title: "Судебный лингвист",
    summary:
      "Специалист исследует язык текстов, когда нужно разобраться в спорном сообщении, анонимном письме или особенностях авторского стиля.",
    fact: "Эксперт может сравнивать характерные слова, написание, построение предложений и другие языковые особенности. Но по одному признаку нельзя безошибочно установить автора текста.",
    qualities: [
      "любознательность",
      "внимательность",
      "любовь к языкам и логике",
    ],
    secret:
      "Судебный лингвист не угадывает автора как волшебник, а собирает языковые подсказки: повторяющиеся слова, необычные конструкции и привычки письма.",
    sources: [
      {
        label: "University of Manchester — Forensic Language Analysis Lab",
        url: "https://www.humanities.manchester.ac.uk/connect/business-engagement/consultancy/forensic-language-analysis-lab/",
      },
      {
        label: "Washington University Law Review — Who Wrote This?",
        url: "https://openscholarship.wustl.edu/law_lawreview/vol96/iss5/10/",
      },
    ],
    Icon: Fingerprint,
    iconLabel: "Иконка языка как следа",
  },
  {
    id: 4,
    title: "Судебный энтомолог",
    summary:
      "Специалист изучает насекомых в рамках расследований и научных исследований.",
    fact: "По виду насекомых и стадиям их развития эксперты иногда могут оценить, сколько времени прошло с определённого события. При этом обязательно учитывают температуру и другие условия.",
    qualities: [
      "терпение",
      "точность",
      "наблюдательность",
      "интерес к природе",
    ],
    secret:
      "Для такого анализа мало увидеть насекомое — нужно знать, в какой среде оно развивалось и как быстро менялось именно при этих условиях.",
    sources: [
      {
        label: "University of Florida — Fundamentals of Forensic Entomology",
        url: "https://maples-center.ufl.edu/continuing-education/online-continuing-education/forensic-entomology/",
      },
      {
        label: "Ask IFAS — Forensic Entomology",
        url: "https://ask.ifas.ufl.edu/topics/forensic-entomology",
      },
    ],
    Icon: Microscope,
    iconLabel: "Иконка насекомого и увеличения",
  },
  {
    id: 5,
    title: "Реставратор, который заглядывает внутрь картин",
    summary:
      "Реставратор изучает произведения искусства и помогает сохранять их для будущих поколений.",
    fact: "С помощью рентгеновских снимков специалисты могут исследовать внутреннюю структуру картины и обнаруживать скрытые детали или изменения, не разбирая произведение на части.",
    qualities: ["бережность", "усидчивость", "внимание к деталям"],
    secret:
      "Иногда внутри картины прячутся старые исправления художника, другие слои краски или следы прежнего ремонта — всё это помогает понять историю произведения.",
    sources: [
      {
        label: "Rijksmuseum — X-ray research",
        url: "https://www.rijksmuseum.nl/en/research/our-research/conservation-science/science/x-ray-research",
      },
      {
        label: "Rijksmuseum — Vermeer technical studies",
        url: "https://www.rijksmuseum.nl/en/research/our-research/conservation-science/paintings/vermeer-technical-studies",
      },
    ],
    Icon: ScanSearch,
    iconLabel: "Иконка исследования картины",
  },
  {
    id: 6,
    title: "Подводный археолог",
    summary:
      "Учёный исследует затонувшие корабли и другие следы прошлого под водой.",
    fact: "Для изучения глубоководных объектов специалисты могут использовать дистанционно управляемые подводные аппараты с камерами. Важно не только найти предмет, но и зафиксировать, где именно он лежит: его положение помогает понять историю корабля и события прошлого.",
    qualities: [
      "любознательность",
      "внимательность",
      "умение работать в команде",
    ],
    secret:
      "Под водой археологи всё чаще стараются сохранять объект на месте, подробно снимая его на видео и создавая цифровую модель без лишнего вмешательства.",
    sources: [
      {
        label: "NOAA Ocean Exploration — Maritime Archaeology",
        url: "https://oceanexplorer.noaa.gov/explainers/archaeology/",
      },
      {
        label:
          "NOAA Ocean Exploration — Exploring Wisconsin Shipwreck Coast National Marine Sanctuary at Scale",
        url: "https://oceanexplorer.noaa.gov/expedition/25shipwreck-coast-nms/",
      },
    ],
    Icon: ShipWheel,
    iconLabel: "Иконка подводного исследования",
  },
  {
    id: 7,
    title: "Создатель звуков для кино",
    summary:
      "Фоли-артист создаёт и записывает звуки для фильмов и мультфильмов, чтобы происходящее на экране казалось настоящим.",
    fact: "Звук шагов по разным поверхностям можно записать в студии, используя подходящие материалы и предметы. Иногда звук, который зритель слышит в фильме, создаётся совсем не тем предметом, который виден на экране.",
    qualities: ["воображение", "чувство ритма", "слух", "изобретательность"],
    secret:
      "Фоли-артист часто думает не о предмете, а о впечатлении: что нужно услышать зрителю, чтобы поверить в шаг, шорох, удар или движение ткани.",
    sources: [
      {
        label: "FilmSound.org — Foley Artistry",
        url: "https://filmsound.org/foley/",
      },
      {
        label: "FilmSound.org — What is Foley?",
        url: "https://www.filmsound.org/terminology/foley.htm",
      },
    ],
    Icon: Film,
    iconLabel: "Иконка кино и звука",
  },
  {
    id: 8,
    title: "Хранитель цифрового искусства",
    summary:
      "Специалист помогает сохранять произведения искусства, созданные с использованием видео, программ, цифровых технологий и других медиа.",
    fact: "Чтобы цифровое произведение можно было увидеть через много лет, иногда приходится сохранять не только сам файл, но и сведения о программе, оборудовании и способе воспроизведения.",
    qualities: [
      "терпение",
      "техническое мышление",
      "любознательность",
      "бережное отношение к истории",
    ],
    secret:
      "Иногда произведение живёт как целая инструкция: какой экран нужен, как должна работать программа и что важно не потерять при замене техники.",
    sources: [
      {
        label: "MoMA — Matters in Media Art",
        url: "https://www.moma.org/research/conservation/matters-in-media-art",
      },
      {
        label: "MoMA — What Does a Media Conservator Do?",
        url: "https://www.moma.org/explore/inside_out/2015/03/24/what-does-a-media-conservator-do/",
      },
    ],
    Icon: Waypoints,
    iconLabel: "Иконка цифрового искусства",
  },
];

export const surpriseFacts = [
  "Иногда важная профессия начинается с очень маленькой детали: следа, слова, пикселя или даже невидимого микроба.",
  "Некоторые специалисты работают так аккуратно, что лучший результат их труда — когда ничего лишнего не заметно.",
  "Подсказки для больших открытий могут скрываться в запахе, рентгеновском снимке, насекомом или необычном звуке.",
  "Удивительные профессии часто соединяют науку, внимательность и настоящее воображение.",
];

export const factQuizQuestions: FactQuizQuestion[] = [
  {
    id: 1,
    question: "Изучает насекомых, чтобы помочь расследованию.",
    kind: "profession",
    correctOptionId: "a",
    explanation:
      "Это реальная профессия: судебный энтомолог изучает насекомых и учитывает условия среды, чтобы помочь расследованию.",
    options: [
      { id: "a", text: "Реальная профессия" },
      { id: "b", text: "Сказочный персонаж" },
      { id: "c", text: "И то и другое" },
    ],
  },
  {
    id: 2,
    question: "Ищет следы животных с помощью обученной собаки.",
    kind: "profession",
    correctOptionId: "a",
    explanation:
      "Это реальная работа в природоохранных проектах: собака и проводник вместе помогают искать следы животных.",
    options: [
      { id: "a", text: "Реальная профессия" },
      { id: "b", text: "Сказочный персонаж" },
      { id: "c", text: "И то и другое" },
    ],
  },
  {
    id: 3,
    question: "Одним взмахом волшебной палочки превращает тыкву в карету.",
    kind: "fairy",
    correctOptionId: "b",
    explanation:
      "Это сказочная магия, а не современная профессия. Так бывает в сказках, где чудо происходит мгновенно.",
    options: [
      { id: "a", text: "Реальная профессия" },
      { id: "b", text: "Сказочный персонаж" },
      { id: "c", text: "И то и другое" },
    ],
  },
  {
    id: 4,
    question: "Создаёт звуки шагов и шорохов для фильма.",
    kind: "profession",
    correctOptionId: "a",
    explanation:
      "Это реальная профессия: фоли-артист записывает и подбирает звуки, чтобы экранная история звучала правдоподобно.",
    options: [
      { id: "a", text: "Реальная профессия" },
      { id: "b", text: "Сказочный персонаж" },
      { id: "c", text: "И то и другое" },
    ],
  },
  {
    id: 5,
    question: "Путешествует по волшебному лесу, исполняя желания.",
    kind: "fairy",
    correctOptionId: "b",
    explanation:
      "Это сказочная история. В реальном мире специалисты помогают людям знаниями, умениями и техникой, а не волшебством.",
    options: [
      { id: "a", text: "Реальная профессия" },
      { id: "b", text: "Сказочный персонаж" },
      { id: "c", text: "И то и другое" },
    ],
  },
];

export const factsHeroIllustration = {
  title: "Карта редких и удивительных дел",
  subtitle: "Следы, звёзды, тайны и открытия рядом с нами",
  icons: [BookMarked, Leaf, Palette],
};
