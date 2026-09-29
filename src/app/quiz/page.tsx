import { ProfessionQuiz } from '@/components/ProfessionQuiz'

export default function QuizPage () {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-3 section-label">Коллекция загадок</div>
      <h1 className="text-3xl sm:text-4xl">Викторина о профессиях</h1>
      <span className="heading-accent heading-accent-green" aria-hidden />
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Прочитай загадку и попробуй догадаться, какая профессия скрывается на
        обратной стороне карточки.
      </p>

      <div className="mt-10">
        <ProfessionQuiz />
      </div>
    </div>
  )
}
