'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, Sparkles } from 'lucide-react'
import { QuestionCard } from '@/components/QuestionCard'
import { ProgressBar } from '@/components/ProgressBar'
import { questions } from '@/data/questions'
import { calculateHeroineMatch } from '@/lib/calculateHeroineMatch'
import { calculateProfessionMatches } from '@/lib/calculateProfessions'
import { calculateQualityScores, rankQualities } from '@/lib/calculateScores'
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
    const professionMatches = calculateProfessionMatches(qualityScores)
    const heroineMatch = calculateHeroineMatch(qualityScores)

    saveTestResult({
      qualityScores,
      rankedQualities,
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
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-[var(--navy)] shadow-sm">
          <Sparkles className="h-4 w-4 text-[var(--gold-dark)]" />
          Волшебное путешествие
        </div>
      </div>

      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between text-sm text-[var(--navy)]/70">
          <span>
            Испытание {currentIndex + 1} из {total}
          </span>
          <span>{Math.round(((currentIndex + 1) / total) * 100)}%</span>
        </div>
        <ProgressBar
          value={currentIndex + 1}
          max={total}
          color="var(--gold)"
        />
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
          className="inline-flex items-center gap-2 rounded-2xl border border-[var(--navy)]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[var(--navy)] transition enabled:hover:border-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад
        </button>

        <p className="text-right text-sm text-[var(--navy)]/55">
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
