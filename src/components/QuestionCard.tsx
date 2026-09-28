'use client'

import type { Question } from '@/lib/types'
import { AnswerOption } from '@/components/AnswerOption'

interface QuestionCardProps {
  question: Question
  questionNumber: number
  total: number
  selectedAnswerId?: string
  onSelect: (answerId: string) => void
}

const LETTERS = ['А', 'Б', 'В', 'Г']

export function QuestionCard ({
  question,
  questionNumber,
  total,
  selectedAnswerId,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[var(--navy)]/10 bg-white shadow-sm">
      <div
        className="flex items-center gap-3 px-5 py-4 sm:px-8"
        style={{ backgroundColor: `${question.themeColor}18` }}
      >
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm"
          aria-hidden
        >
          {question.themeEmoji}
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--navy)]/55">
            Испытание {questionNumber} из {total}
          </p>
          <p className="text-sm font-medium text-[var(--navy)]">{question.themeLabel}</p>
        </div>
      </div>

      <div className="p-5 sm:p-8">
        <h2 className="mb-6 text-xl font-semibold leading-snug text-[var(--navy)] sm:text-2xl">
          {question.text}
        </h2>
        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => (
            <AnswerOption
              key={answer.id}
              letter={LETTERS[index] ?? String(index + 1)}
              text={answer.text}
              selected={selectedAnswerId === answer.id}
              onSelect={() => onSelect(answer.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
