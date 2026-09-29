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
  color = 'var(--color-green)',
  className = '',
}: ProgressBarProps) {
  const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100))

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="mb-1 flex items-center justify-between gap-2 text-sm font-semibold text-[var(--color-dark)]">
          <span>{label}</span>
          <span className="text-[var(--muted)]">{percent}%</span>
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[rgba(196,163,90,0.25)]">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  )
}
