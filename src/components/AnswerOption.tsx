"use client";

interface AnswerOptionProps {
  letter: string;
  text: string;
  selected: boolean;
  onSelect: () => void;
}

export function AnswerOption({
  letter,
  text,
  selected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition ${
        selected
          ? "border-[var(--red)] bg-[var(--red)] text-white"
          : "border-[var(--navy)]/12 bg-[var(--card)] text-[var(--navy)] hover:border-[var(--red)]/45 hover:bg-[#fff8f0]"
      }`}
    >
      <span
        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${
          selected
            ? "bg-[var(--gold)] text-[var(--ink)]"
            : "bg-[var(--linen)] text-[var(--navy)]"
        }`}
      >
        {letter}
      </span>
      <span className="text-sm font-semibold leading-relaxed sm:text-base">
        {text}
      </span>
    </button>
  );
}
