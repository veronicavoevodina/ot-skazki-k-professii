import { HeroineCard } from '@/components/HeroineCard'
import { heroines } from '@/data/heroines'

export default function HeroinesPage () {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
        Сказочные героини
      </h1>
      <p className="mt-3 max-w-3xl text-[var(--navy)]/70">
        Через поступки героинь можно увидеть качества — а через качества — современные профессии,
        где эти качества могут пригодиться.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {heroines.map((heroine) => (
          <HeroineCard key={heroine.id} heroine={heroine} />
        ))}
      </div>
    </div>
  )
}
