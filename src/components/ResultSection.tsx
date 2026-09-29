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
        <>
          <h2 className="text-2xl font-semibold text-[var(--color-dark)] sm:text-3xl">
            {title}
          </h2>
          <span className="heading-accent mb-4" aria-hidden />
        </>
      ) : null}
      {subtitle && (
        <p className="mb-5 max-w-3xl text-[var(--muted)]">{subtitle}</p>
      )}
      {children}
    </section>
  )
}
