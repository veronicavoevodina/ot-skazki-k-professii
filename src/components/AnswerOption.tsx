'use client'

interface AnswerOptionProps {
  letter: string
  letterName: string
  text: string
  selected: boolean
  onSelect: () => void
}

export function AnswerOption ({
  letter,
  letterName,
  text,
  selected,
  onSelect,
}: AnswerOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`flex w-full items-start gap-3 rounded-[12px] border px-4 py-3.5 text-left transition ${
        selected
          ? 'border-[var(--color-cinnabar)] bg-[rgba(181,53,67,0.08)] text-[var(--color-dark)]'
          : 'border-[rgba(196,163,90,0.45)] bg-[rgba(250,246,239,0.65)] text-[var(--color-dark)] hover:border-[var(--color-ochre-deep)] hover:bg-[rgba(196,163,90,0.1)]'
      }`}
    >
      <span className={`letter-mark ${selected ? 'is-selected' : ''}`} aria-hidden>
        <span className="letter-mark-main">{letter}</span>
        <span className="letter-mark-sub">{letterName}</span>
      </span>
      <span className="pt-1 text-sm font-medium leading-relaxed sm:text-base">{text}</span>
    </button>
  )
}
