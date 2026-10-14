"use client";

import { useRef, useState } from "react";
import { Sparkles, Stars } from "lucide-react";
import { surpriseFacts, unusualProfessionFacts } from "@/data/facts";

export function FactsExplorer() {
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const [openedSecrets, setOpenedSecrets] = useState<Record<number, boolean>>(
    {},
  );
  const [surpriseText, setSurpriseText] = useState(surpriseFacts[0]);
  const [highlightedId, setHighlightedId] = useState<number | null>(null);

  function toggleSecret(id: number) {
    setOpenedSecrets((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  function handleSurprise() {
    const randomCard =
      unusualProfessionFacts[
        Math.floor(Math.random() * unusualProfessionFacts.length)
      ];
    const randomFact =
      surpriseFacts[Math.floor(Math.random() * surpriseFacts.length)];

    setSurpriseText(randomFact);
    setHighlightedId(randomCard.id);
    setOpenedSecrets((prev) => ({
      ...prev,
      [randomCard.id]: true,
    }));

    const target = cardRefs.current[randomCard.id - 1];
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <div className="space-y-8">
      <div className="facts-surprise-panel rounded-[20px] border border-[var(--border)] px-5 py-5 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="section-label">Секретный свиток</div>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-dark)] sm:text-lg">
              {surpriseText}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSurprise}
            className="btn-primary min-w-[168px] self-start"
          >
            <Sparkles className="h-4 w-4" aria-hidden />
            Удиви меня!
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {unusualProfessionFacts.map((item, index) => {
          const Icon = item.Icon;
          const isOpen = Boolean(openedSecrets[item.id]);
          const isHighlighted = highlightedId === item.id;

          return (
            <article
              key={item.id}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className={`folk-card folk-card-frame facts-story-card flex h-full flex-col p-5 pt-6 ${
                isHighlighted ? "facts-story-card-active" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold tracking-[0.16em] text-[var(--color-green)]">
                    {String(item.id).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl leading-tight text-[var(--color-dark)]">
                    {item.title}
                  </h3>
                </div>
                <div
                  className="facts-icon-box"
                  role="img"
                  aria-label={item.iconLabel}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
              </div>

              <div className="mt-4 rounded-[16px] border border-[rgba(196,163,90,0.28)] bg-[rgba(250,246,239,0.72)] p-4">
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  Кто это?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.summary}
                </p>
              </div>

              <div className="mt-4 rounded-[16px] border border-[rgba(181,53,67,0.24)] bg-[rgba(181,53,67,0.06)] p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-[var(--color-dark)]">
                  <Stars
                    className="h-4 w-4 text-[var(--color-cinnabar)]"
                    aria-hidden
                  />
                  А вы знали?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.fact}
                </p>
              </div>

              <div className="mt-4 rounded-[16px] border border-[rgba(123,149,91,0.26)] bg-[rgba(123,149,91,0.08)] p-4">
                <p className="text-sm font-semibold text-[var(--color-dark)]">
                  Какая суперсила нужна?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.qualities.map((quality) => (
                    <span key={quality} className="chip">
                      {quality}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => toggleSecret(item.id)}
                className="btn-secondary mt-5 w-full sm:w-auto"
                aria-expanded={isOpen}
                aria-controls={`fact-secret-${item.id}`}
              >
                {isOpen ? "Спрятать секрет" : "Открыть секрет"}
              </button>

              <div
                id={`fact-secret-${item.id}`}
                className={`facts-secret-panel ${isOpen ? "is-open" : ""}`}
              >
                <div className="rounded-[16px] border border-[rgba(196,163,90,0.3)] bg-[rgba(255,253,248,0.8)] p-4">
                  <p className="text-sm font-semibold text-[var(--color-dark)]">
                    Секрет профессии
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {item.secret}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
