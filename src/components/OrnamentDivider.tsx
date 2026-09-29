interface OrnamentDividerProps {
  className?: string
}

export function OrnamentDivider ({ className = '' }: OrnamentDividerProps) {
  return (
    <div
      className={`flex w-full items-center justify-center gap-3 py-3 ${className}`}
      aria-hidden
    >
      <span className="h-px flex-1 bg-[rgba(196,163,90,0.55)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cinnabar)]" />
      <span className="h-px w-10 bg-[var(--color-ochre)]" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cinnabar)]" />
      <span className="h-px flex-1 bg-[rgba(196,163,90,0.55)]" />
    </div>
  )
}
