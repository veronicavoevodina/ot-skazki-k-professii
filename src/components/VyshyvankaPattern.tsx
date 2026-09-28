interface VyshyvankaPatternProps {
  className?: string
  opacity?: number
}

/** Геометрический орнамент в духе белорусской вышивки */
export function VyshyvankaPattern ({
  className = '',
  opacity = 0.12,
}: VyshyvankaPatternProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ opacity }}
    >
      {/* Вертикальная полоса ромбов */}
      <g fill="var(--red)">
        <path d="M60 8 L72 20 L60 32 L48 20 Z" />
        <rect x="56" y="16" width="8" height="8" />
        <path d="M60 40 L76 56 L60 72 L44 56 Z" />
        <path d="M60 48 L68 56 L60 64 L52 56 Z" fill="var(--milk)" />
        <rect x="42" y="52" width="8" height="8" />
        <rect x="70" y="52" width="8" height="8" />
        <path d="M60 80 L72 92 L60 104 L48 92 Z" />
        <rect x="56" y="88" width="8" height="8" />
        <path d="M60 112 L76 128 L60 144 L44 128 Z" />
        <path d="M60 120 L68 128 L60 136 L52 128 Z" fill="var(--milk)" />
        <rect x="42" y="124" width="8" height="8" />
        <rect x="70" y="124" width="8" height="8" />
      </g>
      {/* Боковые кресты / «крыжыкі» */}
      <g fill="var(--red)">
        <rect x="16" y="52" width="10" height="4" />
        <rect x="19" y="49" width="4" height="10" />
        <rect x="94" y="52" width="10" height="4" />
        <rect x="97" y="49" width="4" height="10" />
        <rect x="16" y="124" width="10" height="4" />
        <rect x="19" y="121" width="4" height="10" />
        <rect x="94" y="124" width="10" height="4" />
        <rect x="97" y="121" width="4" height="10" />
      </g>
      {/* Золотые акценты */}
      <g fill="var(--gold)">
        <path d="M28 20 L34 14 L40 20 L34 26 Z" />
        <path d="M80 20 L86 14 L92 20 L86 26 Z" />
        <path d="M28 92 L34 86 L40 92 L34 98 Z" />
        <path d="M80 92 L86 86 L92 92 L86 98 Z" />
      </g>
    </svg>
  )
}

/** Повторяющийся фон-вышивка для больших плоскостей */
export function VyshyvankaBackdrop ({ className = '' }: { className?: string }) {
  const tile = encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <g fill="#b31b2c">
        <path d="M32 6 L40 14 L32 22 L24 14 Z"/>
        <rect x="12" y="30" width="8" height="3"/>
        <rect x="14.5" y="27.5" width="3" height="8"/>
        <rect x="44" y="30" width="8" height="3"/>
        <rect x="46.5" y="27.5" width="3" height="8"/>
        <path d="M32 42 L40 50 L32 58 L24 50 Z"/>
      </g>
    </svg>
  `.trim())

  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,${tile}")`,
        backgroundSize: '72px 72px',
        opacity: 0.07,
      }}
    />
  )
}
