'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { QuestionCard } from '@/components/QuestionCard'
import { ProgressBar } from '@/components/ProgressBar'
import { questions } from '@/data/questions'
import { calculateHeroineMatch } from '@/lib/calculateHeroineMatch'
import { calculateProfessionMatches } from '@/lib/calculateProfessions'
import { calculateQualityScores, getLeadingQualities, rankQualities } from '@/lib/calculateScores'
import { collectRelatedProfessions } from '@/data/qualityInfo'
import { saveTestResult } from '@/lib/storage'
import type { Answer } from '@/lib/types'

export default function TestPage () {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [isFinishing, setIsFinishing] = useState(false)
  const advancingRef = useRef(false)

  const total = questions.length
  const question = questions[currentIndex]
  const selectedAnswerId = selectedAnswers[question.id]
  const isLast = currentIndex === total - 1
  const canGoBack = currentIndex > 0

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentIndex])

  function finishTest (answersMap: Record<string, string>) {
    const chosen: Answer[] = questions.map((q) => {
      const answer = q.answers.find((a) => a.id === answersMap[q.id])
      if (!answer) throw new Error(`Missing answer for ${q.id}`)
      return answer
    })

    const qualityScores = calculateQualityScores(chosen)
    const rankedQualities = rankQualities(qualityScores)
    const leadingQualities = getLeadingQualities(qualityScores)
    const relatedProfessions = collectRelatedProfessions(leadingQualities)
    const professionMatches = calculateProfessionMatches(qualityScores)
    const heroineMatch = calculateHeroineMatch(qualityScores)

    saveTestResult({
      qualityScores,
      rankedQualities,
      leadingQualities,
      relatedProfessions,
      professionMatches,
      heroineMatch,
      completedAt: new Date().toISOString(),
    })

    router.push('/result')
  }

  function handleSelect (answerId: string) {
    if (isFinishing || advancingRef.current) return

    const nextAnswers = {
      ...selectedAnswers,
      [question.id]: answerId,
    }
    setSelectedAnswers(nextAnswers)
    advancingRef.current = true

    window.setTimeout(() => {
      if (isLast) {
        setIsFinishing(true)
        finishTest(nextAnswers)
        return
      }
      setCurrentIndex((i) => i + 1)
      advancingRef.current = false
    }, 280)
  }

  function handleBack () {
    if (!canGoBack || isFinishing || advancingRef.current) return
    setCurrentIndex((i) => i - 1)
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-6 text-center">
        <div className="section-label mb-2">Волшебное путешествие</div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm font-semibold text-[var(--muted)]">
          <span>
            Испытание {currentIndex + 1} из {total}
          </span>
          <span>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
        <ProgressBar value={currentIndex + 1} max={total} />
      </div>

      <QuestionCard
        question={question}
        questionNumber={currentIndex + 1}
        total={total}
        selectedAnswerId={selectedAnswerId}
        onSelect={handleSelect}
      />

      <div className="mt-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={handleBack}
          disabled={!canGoBack || isFinishing}
          className="btn-secondary !px-4 !py-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:transform-none"
        >
          Назад
        </button>

        <p className="text-right text-sm text-[var(--muted)]">
          {isFinishing
            ? 'Считаем результат…'
            : isLast
              ? 'Выбери ответ — и узнаешь результат'
              : 'Выбери один вариант'}
        </p>
      </div>
    </div>
  )
}
