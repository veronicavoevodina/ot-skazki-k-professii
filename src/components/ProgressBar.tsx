interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  color?: string
  className?: string
}

export function ProgressBar ({
  value,
  max = 100,
  label,
  color = 'var(--red)',
  className = '',
}: ProgressBarProps) {
  const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100))

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-1 flex items-center justify-between gap-2 text-sm font-semibold">
          <span>{label}</span>
          <span className="text-[var(--navy)]/60">{percent}%</span>
        </div>
      )}
      <div className="h-3 w-full overflow-hidden rounded-full border border-[var(--red)]/15 bg-[var(--linen)]">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percent}%`,
            background: `linear-gradient(90deg, ${color}, var(--gold))`,
          }}
        />
      </div>
    </div>
  )
}
