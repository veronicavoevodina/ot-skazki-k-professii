"use client";

import { useMemo, useState } from "react";
import { factQuizQuestions } from "@/data/facts";

type AnswersMap = Record<number, string>;

export function FactsQuiz() {
  const [answers, setAnswers] = useState<AnswersMap>({});

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = factQuizQuestions.length;
  const isComplete = answeredCount === totalQuestions;

  const correctCount = useMemo(
    () =>
      factQuizQuestions.reduce((count, question) => {
        return (
          count + (answers[question.id] === question.correctOptionId ? 1 : 0)
        );
      }, 0),
    [answers],
  );

  function selectAnswer(questionId: number, optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  }

  function resetQuiz() {
    setAnswers({});
  }

  return (
    <div className="space-y-5">
      <div className="folk-card p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-label">Мини-викторина</p>
            <h3 className="mt-3 text-2xl text-[var(--color-dark)] sm:text-3xl">
              Профессия или сказка?
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">
              Прочитай описание и реши, относится ли оно к реальной профессии
              или к сказочной истории.
            </p>
          </div>
          <div className="rounded-[14px] border border-[var(--border)] bg-[rgba(123,149,91,0.08)] px-4 py-3 text-sm font-semibold text-[var(--color-dark)]">
            Правильных ответов: {correctCount} из {totalQuestions}
          </div>
        </div>
      </div>

      {factQuizQuestions.map((question) => {
        const selectedOptionId = answers[question.id];
        const isAnswered = Boolean(selectedOptionId);
        const isCorrect = selectedOptionId === question.correctOptionId;

        return (
          <section
            key={question.id}
            className="folk-card folk-card-frame p-5 pt-6 sm:p-6 sm:pt-7"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(196,163,90,0.14)] font-semibold text-[var(--color-cinnabar)]">
                {question.id}
              </div>
              <div>
                <h4 className="text-xl text-[var(--color-dark)]">
                  {question.question}
                </h4>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Выбери, это настоящая профессия или сказочная история.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {question.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                const showCorrect =
                  isAnswered && option.id === question.correctOptionId;
                const showIncorrect =
                  isAnswered &&
                  isSelected &&
                  option.id !== question.correctOptionId;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => selectAnswer(question.id, option.id)}
                    className={[
                      "facts-option w-full rounded-[14px] border px-4 py-3 text-left transition",
                      isSelected ? "facts-option-selected" : "",
                      showCorrect ? "facts-option-correct" : "",
                      showIncorrect ? "facts-option-incorrect" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-pressed={isSelected}
                    aria-label={`Вопрос ${question.id}. Вариант ответа: ${option.text}`}
                  >
                    <span className="flex items-start gap-3">
                      <span className="facts-option-marker" aria-hidden>
                        {option.id.toUpperCase()}
                      </span>
                      <span className="pt-0.5 text-base text-[var(--color-dark)]">
                        {option.text}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <div
                className={`mt-5 rounded-[14px] border px-4 py-3 ${
                  isCorrect
                    ? "border-[rgba(123,149,91,0.35)] bg-[rgba(123,149,91,0.12)]"
                    : "border-[rgba(181,53,67,0.28)] bg-[rgba(181,53,67,0.08)]"
                }`}
                aria-live="polite"
              >
                <p className="font-semibold text-[var(--color-dark)]">
                  {isCorrect ? "Верно!" : "Попробуй ещё раз!"}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  {question.explanation}
                </p>
              </div>
            )}
          </section>
        );
      })}

      {isComplete && (
        <section className="folk-card p-5 sm:p-6">
          <h4 className="text-2xl text-[var(--color-dark)]">
            Викторина завершена
          </h4>
          <p className="mt-3 text-[var(--muted)]">
            Ты ответил правильно на {correctCount} из {totalQuestions} вопросов.
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Отлично! Настоящие профессии тоже бывают почти сказочными, если
            внимательно присмотреться к тому, чем занимаются люди.
          </p>
          <button
            type="button"
            onClick={resetQuiz}
            className="btn-primary mt-5"
          >
            Пройти ещё раз
          </button>
        </section>
      )}
    </div>
  );
}
