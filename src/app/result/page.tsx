'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useMemo, useSyncExternalStore } from 'react'
import { ResultSection } from '@/components/ResultSection'
import { qualityInfo, collectRelatedProfessions } from '@/data/qualityInfo'
import { getLeadingQualities } from '@/lib/calculateScores'
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

  const view = useMemo(() => {
    if (!result) return null

    const leadingIds =
      result.leadingQualities?.length > 0
        ? result.leadingQualities
        : getLeadingQualities(result.qualityScores)

    return {
      qualityCards: leadingIds.map((id) => ({
        id,
        name: qualityInfo[id].label,
        phrase: qualityInfo[id].description,
      })),
      // всегда заново — без icon из старого localStorage
      relatedProfessions: collectRelatedProfessions(leadingIds).map(({ title, slug }) => ({
        title,
        slug,
      })),
    }
  }, [result])

  function handleRetake () {
    clearTestResult()
    router.push('/test')
  }

  if (!isClient) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-[var(--muted)]">
        Загружаем результат…
      </div>
    )
  }

  if (!result || !view) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="mb-3 text-3xl font-semibold">
          Путешествие ещё не началось
        </h1>
        <p className="mb-6 text-[var(--muted)]">
          Ответь на вопросы — и узнаешь, какие качества проявились в твоих ответах.
        </p>
        <Link href="/test" className="btn-primary">
          Начать путешествие
        </Link>
      </div>
    )
  }

  return (
    <div className="result-page mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-8">
        <div className="mb-3 section-label">Результат путешествия</div>
        <h1 className="text-3xl sm:text-4xl">Твои сильные качества</h1>
        <span className="heading-accent" aria-hidden />
        <p className="mt-4 max-w-3xl text-[var(--muted)]">
          По твоим ответам чаще всего проявились:
        </p>
      </div>

      <ResultSection title="">
        <div
          className={`grid gap-3 ${
            view.qualityCards.length > 3
              ? 'sm:grid-cols-2 lg:grid-cols-4'
              : 'sm:grid-cols-3'
          }`}
        >
          {view.qualityCards.map((item) => (
            <div key={item.id} className="folk-card p-5">
              <h3 className="mb-2 text-lg">{item.name}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">{item.phrase}</p>
            </div>
          ))}
        </div>
      </ResultSection>

      <ResultSection
        title="Где эти качества могут пригодиться?"
        subtitle="Такие качества важны в разных профессиях. Узнай больше!"
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {view.relatedProfessions.map((item) => {
            const card = (
              <div className="folk-card p-4">
                <p className="font-semibold text-[var(--color-dark)]">{item.title}</p>
              </div>
            )

            if (item.slug) {
              return (
                <Link key={item.title} href={`/professions/${item.slug}`}>
                  {card}
                </Link>
              )
            }

            return <div key={item.title}>{card}</div>
          })}
        </div>
      </ResultSection>

      <section className="folk-card mb-10 p-6">
        <h2 className="mb-3 text-2xl">Откуда взялись эти качества?</h2>
        <span className="heading-accent mb-4" aria-hidden />
        <div className="space-y-3 leading-relaxed text-[var(--muted)]">
          <p>Мы нашли эти качества, когда изучали поступки героинь сказок.</p>
          <p>
            Герда проявляет смелость и настойчивость. Василиса Премудрая — ум и
            находчивость. Настенька — доброту, терпение и трудолюбие.
            Хаврошечка — трудолюбие и терпение. Дюймовочка — доброту и
            любознательность. Царевна-лягушка — находчивость и мастерство.
          </p>
        </div>
      </section>

      <ResultSection title="Продолжить путешествие">
        <div className="flex flex-wrap gap-3">
          <Link href="/professions" className="btn-primary">
            Посмотреть профессии
          </Link>
          <Link href="/heroines" className="btn-secondary">
            Познакомиться с героинями
          </Link>
          <button type="button" onClick={handleRetake} className="btn-secondary">
            Пройти тест ещё раз
          </button>
        </div>
      </ResultSection>

      <div className="rounded-[12px] border border-[var(--border)] bg-[rgba(196,163,90,0.12)] p-4 text-sm leading-relaxed text-[var(--muted)]">
        Этот тест не выбирает профессию за тебя. Он помогает заметить качества,
        которые могут пригодиться в разных делах и профессиях.
      </div>
    </div>
  )
}
