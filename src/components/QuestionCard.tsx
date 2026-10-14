"use client";

import Image from "next/image";
import type { Question } from "@/lib/types";
import { AnswerOption } from "@/components/AnswerOption";
import { getHeroineById, heroineImages } from "@/data/heroines";

interface RelatedHeroine {
  id: string;
  image: (typeof heroineImages)[string];
  name: string;
}

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  total: number;
  selectedAnswerId?: string;
  onSelect: (answerId: string) => void;
}

const LETTERS = [
  { letter: "А", name: "Аз" },
  { letter: "Б", name: "Буки" },
  { letter: "В", name: "Веди" },
  { letter: "Г", name: "Глаголь" },
];

export function QuestionCard({
  question,
  questionNumber,
  total,
  selectedAnswerId,
  onSelect,
}: QuestionCardProps) {
  const relatedHeroines = (question.heroineIds ?? [])
    .map((id) => {
      const image = heroineImages[id];
      const heroine = getHeroineById(id);

      if (!image || !heroine) {
        return null;
      }

      return {
        id,
        image,
        name: heroine.name,
      };
    })
    .filter((heroine): heroine is RelatedHeroine => heroine !== null);

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
        <div className="mb-6 grid gap-4 md:grid-cols-[minmax(0,1fr)_112px] md:items-start">
          <h2 className="text-xl leading-snug sm:text-2xl">{question.text}</h2>

          {relatedHeroines.length > 0 && (
            <div className="flex flex-wrap justify-start gap-2 md:justify-end">
              {relatedHeroines.map((heroine) => (
                <div
                  key={heroine.id}
                  className="overflow-hidden rounded-[14px] border border-[rgba(196,163,90,0.28)] bg-[rgba(250,246,239,0.72)]"
                >
                  <Image
                    src={heroine.image}
                    alt={heroine.name}
                    className="h-20 w-20 object-cover sm:h-30 sm:w-30"
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => {
            const mark = LETTERS[index] ?? {
              letter: String(index + 1),
              name: "",
            };
            return (
              <AnswerOption
                key={answer.id}
                letter={mark.letter}
                letterName={mark.name}
                text={answer.text}
                selected={selectedAnswerId === answer.id}
                onSelect={() => onSelect(answer.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
