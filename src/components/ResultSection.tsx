import type { ReactNode } from 'react'

interface ResultSectionProps {
  title: string
  children: ReactNode
  subtitle?: string
}

export function ResultSection ({ title, subtitle, children }: ResultSectionProps) {
  return (
    <section className="mb-10">
      {title ? (
        <h2 className="mb-2 text-2xl font-semibold text-[var(--navy)] sm:text-3xl">{title}</h2>
      ) : null}
      {subtitle && (
        <p className="mb-5 max-w-3xl text-[var(--navy)]/70">{subtitle}</p>
      )}
      {children}
    </section>
  )
}
