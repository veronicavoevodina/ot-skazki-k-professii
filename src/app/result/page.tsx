'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSyncExternalStore } from 'react'
import { BookOpen, RefreshCw, Sparkles, Users } from 'lucide-react'
import { ProfessionCard } from '@/components/ProfessionCard'
import { ResultSection } from '@/components/ResultSection'
import { qualities } from '@/data/qualities'
import {
  buildHeroineMatchText,
  buildProfessionInterestText,
  getKidQualityCards,
} from '@/lib/copy'
import { clearTestResult, loadTestResult } from '@/lib/storage'
import type { TestResult } from '@/lib/types'

const emptySubscribe = () => () => {}
const getServerSnapshot = () => null
const getClientReady = () => true
const getServerReady = () => false

function useIsClient () {
  return useSyncExternalStore(emptySubscribe, getClientReady, getServerReady)
}

function useStoredResult (): TestResult | null {
  return useSyncExternalStore(emptySubscribe, loadTestResult, getServerSnapshot)
}

export default function ResultPage () {
  const router = useRouter()
  const isClient = useIsClient()
  const result = useStoredResult()

  function handleRetake () {
    clearTestResult()
    router.push('/test')
  }

  if (!isClient) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-[var(--navy)]/70">
        Загружаем результат…
      </div>
    )
  }

  if (!result) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="mb-3 text-3xl font-semibold text-[var(--navy)]">
          Путешествие ещё не началось
        </h1>
        <p className="mb-6 text-[var(--navy)]/70">
          Ответь на вопросы — и узнаешь, какие качества проявились в твоих ответах.
        </p>
        <Link
          href="/test"
          className="inline-flex rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white"
        >
          Начать путешествие
        </Link>
      </div>
    )
  }

  const qualityCards = getKidQualityCards(result.qualityScores, 3)
  const primary = result.professionMatches.slice(0, 3)
  const heroine = result.heroineMatch

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-[var(--navy)] shadow-sm">
          <Sparkles className="h-4 w-4 text-[var(--gold-dark)]" />
          Результат путешествия
        </div>
        <h1 className="text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
          🌟 Твои качества
        </h1>
        <p className="mt-3 max-w-3xl text-[var(--navy)]/75">
          Посмотри, что особенно заметно в твоих ответах.
        </p>
      </div>

      <ResultSection title="">
        <div className="grid gap-3 sm:grid-cols-3">
          {qualityCards.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-[var(--navy)]">
                <span aria-hidden>{item.emoji}</span>
                {item.name}
              </div>
              <p className="text-sm leading-relaxed text-[var(--navy)]/75">{item.phrase}</p>
            </div>
          ))}
        </div>
      </ResultSection>

      <ResultSection title="🌟 Твой сказочный образ">
        <div className="rounded-3xl border border-[var(--navy)]/10 bg-white p-6 shadow-sm">
          <p className="mb-1 text-sm font-medium text-[var(--gold-dark)]">
            {heroine.heroine.story}
          </p>
          <h3 className="mb-3 text-2xl font-semibold text-[var(--navy)]">
            {heroine.heroine.name}
          </h3>
          <p className="mb-4 leading-relaxed text-[var(--navy)]/80">
            {buildHeroineMatchText(heroine)}
          </p>
          <p className="mb-4 text-sm text-[var(--navy)]/60">
            Твой профиль качеств похож на качества {heroine.heroine.name}.
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {heroine.sharedQualities.map((id) => (
              <span
                key={id}
                className="inline-flex items-center gap-1 rounded-full bg-[var(--cream)] px-2.5 py-1 text-xs text-[var(--navy)]"
              >
                <span aria-hidden>{qualities[id].emoji}</span>
                {qualities[id].name}
              </span>
            ))}
          </div>
          <Link
            href={`/heroines/${heroine.heroine.slug}`}
            className="text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold-dark)]"
          >
            Познакомиться с героиней →
          </Link>
        </div>
      </ResultSection>

      <ResultSection
        title="🚀 А где эти качества могут пригодиться?"
        subtitle="Твои качества могут быть полезны в разных профессиях. Вот несколько, о которых можно узнать больше:"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {primary.map(({ profession }) => (
            <ProfessionCard
              key={profession.id}
              profession={profession}
              interestText={buildProfessionInterestText(profession)}
              compact
            />
          ))}
        </div>
      </ResultSection>

      <section className="mb-10 rounded-3xl border border-[var(--navy)]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-semibold text-[var(--navy)]">
          📚 А при чём здесь сказки?
        </h2>
        <div className="space-y-3 leading-relaxed text-[var(--navy)]/80">
          <p>В сказках героиням тоже приходится решать трудные задачи.</p>
          <p>
            Василисе помогают ум и находчивость. Герде — смелость и настойчивость.
            Хаврошечке — трудолюбие. Дюймовочке — доброта и любознательность.
          </p>
          <p>
            Мы сравнили эти качества с твоими ответами и посмотрели, где они могут
            пригодиться сегодня.
          </p>
        </div>
      </section>

      <ResultSection title="Продолжить путешествие">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/professions"
            className="inline-flex items-center gap-2 rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white"
          >
            <BookOpen className="h-4 w-4" />
            Посмотреть профессии
          </Link>
          <Link
            href="/heroines"
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--navy)]/15 bg-white px-5 py-3 font-semibold text-[var(--navy)]"
          >
            <Users className="h-4 w-4" />
            Познакомиться с героинями
          </Link>
          <button
            type="button"
            onClick={handleRetake}
            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--navy)]/15 bg-white px-5 py-3 font-semibold text-[var(--navy)]"
          >
            <RefreshCw className="h-4 w-4" />
            Пройти тест ещё раз
          </button>
        </div>
      </ResultSection>

      <div className="rounded-2xl border border-[var(--navy)]/10 bg-white/80 p-4 text-sm leading-relaxed text-[var(--navy)]/70">
        Этот тест не выбирает профессию за тебя. Он помогает заметить качества,
        которые могут пригодиться в разных делах и профессиях.
      </div>
    </div>
  )
}
