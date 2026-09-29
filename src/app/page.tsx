import Link from 'next/link'

export default function HomePage () {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="section-label mb-5">
            Исследовательский школьный проект · Беларусь
          </div>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-dark)] sm:text-5xl">
            От сказки к профессии
          </h1>
          <span className="heading-accent" aria-hidden />
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
            Ответь на вопросы, узнай, какие качества проявляются в твоих
            ответах, и посмотри, где они могут пригодиться
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/test" className="btn-primary text-base">
              Начать путешествие
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
