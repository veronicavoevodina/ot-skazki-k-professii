'use client'

interface AnswerOptionProps {
  letter: string
  text: string
  selected: boolean
  onSelect: () => void
}

export function AnswerOption ({ letter, text, selected, onSelect }: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition ${
        selected
          ? 'border-[var(--navy)] bg-[var(--navy)] text-white shadow-md'
          : 'border-[var(--navy)]/15 bg-white text-[var(--navy)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/10'
      }`}
    >
      <span
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
          selected ? 'bg-[var(--gold)] text-[var(--navy)]' : 'bg-[var(--cream)] text-[var(--navy)]'
        }`}
      >
        {letter}
      </span>
      <span className="text-sm leading-relaxed sm:text-base">{text}</span>
    </button>
  )
}
