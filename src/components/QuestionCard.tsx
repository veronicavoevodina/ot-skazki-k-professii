"use client";

import type { Question } from "@/lib/types";
import { AnswerOption } from "@/components/AnswerOption";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  total: number;
  selectedAnswerId?: string;
  onSelect: (answerId: string) => void;
}

const LETTERS = ["А", "Б", "В", "Г"];

export function QuestionCard({
  question,
  questionNumber,
  total,
  selectedAnswerId,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="folk-card overflow-hidden">
      <div
        className="flex items-center gap-3 border-b border-[var(--red)]/10 px-5 py-4 sm:px-8"
        style={{ backgroundColor: `${question.themeColor}14` }}
      >
        <span
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[var(--red)]/15 bg-[var(--card)] text-3xl"
          aria-hidden
        >
          {question.themeEmoji}
        </span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--red)]">
            Испытание {questionNumber} из {total}
          </p>
          <p className="text-sm font-semibold text-[var(--navy)]">
            {question.themeLabel}
          </p>
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
  );
}
