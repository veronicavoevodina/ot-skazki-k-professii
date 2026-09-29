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

const LETTERS = [
  { letter: 'А', name: 'Аз' },
  { letter: 'Б', name: 'Буки' },
  { letter: 'В', name: 'Веди' },
  { letter: 'Г', name: 'Глаголь' },
]

export function QuestionCard ({
  question,
  questionNumber,
  total,
  selectedAnswerId,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="folk-card folk-card-frame overflow-hidden">
      <div className="border-b border-[var(--border)] px-5 py-4 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-cinnabar)]">
          Испытание {questionNumber} из {total}
        </p>
        <p className="mt-1 text-sm font-semibold text-[var(--color-dark)]">
          {question.themeLabel}
        </p>
      </div>

      <div className="p-5 sm:p-8">
        <h2 className="mb-6 text-xl leading-snug sm:text-2xl">
          {question.text}
        </h2>
        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => {
            const mark = LETTERS[index] ?? { letter: String(index + 1), name: '' }
            return (
              <AnswerOption
                key={answer.id}
                letter={mark.letter}
                letterName={mark.name}
                text={answer.text}
                selected={selectedAnswerId === answer.id}
                onSelect={() => onSelect(answer.id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
