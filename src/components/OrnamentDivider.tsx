interface OrnamentDividerProps {
  className?: string;
}

/** Стилизованный белорусский геометрический орнамент (красно-белый) */
export function OrnamentDivider({ className = "" }: OrnamentDividerProps) {
  return (
    <div
      className={`flex w-full items-center justify-center gap-2 py-2 ${className}`}
      aria-hidden
    >
      <span className="h-px flex-1 bg-[var(--red)]/20" />
      <svg
        width="160"
        height="18"
        viewBox="0 0 160 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path d="M8 9 L12 5 L16 9 L12 13 Z" fill="var(--red)" />
        <rect x="22" y="7" width="4" height="4" fill="var(--red)" />
        <path d="M34 9 L40 3 L46 9 L40 15 Z" fill="var(--red)" />
        <rect x="52" y="5" width="3" height="8" fill="var(--red)" />
        <rect x="57" y="7" width="8" height="3" fill="var(--red)" />
        <path d="M74 9 L80 3 L86 9 L80 15 Z" fill="var(--gold)" />
        <rect x="92" y="7" width="8" height="3" fill="var(--red)" />
        <rect x="97" y="5" width="3" height="8" fill="var(--red)" />
        <path d="M112 9 L118 3 L124 9 L118 15 Z" fill="var(--red)" />
        <rect x="130" y="7" width="4" height="4" fill="var(--red)" />
        <path d="M142 9 L146 5 L150 9 L146 13 Z" fill="var(--red)" />
      </svg>
      <span className="h-px flex-1 bg-[var(--red)]/20" />
    </div>
  );
}

export function OrnamentCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M2 2 H14 M2 2 V14"
        stroke="var(--red)"
        strokeWidth="2"
        opacity="0.55"
      />
      <rect x="6" y="6" width="5" height="5" fill="var(--red)" opacity="0.7" />
      <path d="M14 8 L17 5 L20 8 L17 11 Z" fill="var(--gold)" opacity="0.85" />
    </svg>
  );
}
