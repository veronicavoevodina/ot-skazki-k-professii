import Link from 'next/link'

export default function AboutPage () {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="mb-2 text-sm font-medium text-[var(--color-green)]">
        Исследовательская работа
      </p>
      <h1 className="text-3xl font-semibold text-[var(--color-dark)] sm:text-4xl">
        От сказки к профессии
      </h1>
      <span className="heading-accent" aria-hidden />

      <div className="mt-8 space-y-8 leading-relaxed text-[var(--muted)]">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Привет!
          </h2>
          <p>
            Меня зовут Артём. Я учусь во 2 «Б» классе и сделал это приложение
            как практическую часть своей исследовательской работы. Здесь можно
            пройти сказочное путешествие и узнать больше о себе и о профессиях —
            простым и интересным способом.
          </p>
        </section>

        <section className="folk-card p-5">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Что исследует проект
          </h2>
          <p className="mb-3">
            В сказках героини часто попадают в трудные ситуации. Их поступки
            показывают, какие у них качества: ум, доброта, смелость, трудолюбие
            и другие.
          </p>
          <p>
            Я исследую, как эти качества из сказок связаны с качествами, которые
            помогают людям в современных профессиях.
          </p>
          <p className="mt-4 font-medium text-[var(--color-dark)]">
            Сказочные героини → их поступки → качества → современные профессии
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Как работает приложение
          </h2>
          <ol className="list-none space-y-3">
            {[
              'Ты попадаешь в сказочную ситуацию и выбираешь, как поступил бы.',
              'После ответов видно, какие качества проявились в твоих выборах.',
              'Можно узнать, на качества какой сказочной героини они похожи.',
              'Можно познакомиться с профессиями, где такие качества могут пригодиться.',
            ].map((text, index) => (
              <li key={text} className="folk-card flex gap-3 px-4 py-3">
                <span className="font-bold text-[var(--color-green)]">{index + 1}.</span>
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="folk-card p-5">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Какие героини участвуют
          </h2>
          <ul className="space-y-2">
            <li>Настенька — сказка «Морозко»</li>
            <li>Василиса Премудрая</li>
            <li>Царевна-лягушка</li>
            <li>Герда — «Снежная королева»</li>
            <li>Хаврошечка</li>
            <li>Дюймовочка</li>
          </ul>
          <p className="mt-4 text-sm text-[var(--muted)]">
            У каждой героини есть свои сильные качества. О них можно прочитать
            на странице «Героини».
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Как качества связаны с профессиями
          </h2>
          <p className="mb-3">
            Например, ум и любознательность помогают учёному и инженеру. Доброта
            и заботливость — врачу и воспитателю. Смелость и настойчивость —
            спасателю и пожарному.
          </p>
          <p>
            В приложении одни и те же качества связывают сказку, героиню и
            профессию. Так видно, что качества из сказок могут быть полезны и
            сегодня.
          </p>
        </section>

        <section className="rounded-[16px] border border-[var(--border)] bg-[rgba(123,149,91,0.08)] p-5">
          <p className="font-semibold text-[var(--color-dark)]">
            Приложение помогает узнать свои сильные стороны и познакомиться с
            профессиями, в которых такие качества могут пригодиться.
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Оно не говорит, кем ты станешь, когда вырастешь. Оно не выбирает
            профессию за тебя — только помогает узнать себя лучше и посмотреть,
            что бывает интересным.
          </p>
        </section>

        <section className="folk-card folk-card-frame p-5 pt-6">
          <h2 className="mb-3 text-xl font-semibold text-[var(--color-dark)]">
            Об авторе
          </h2>
          <p className="font-semibold text-[var(--color-dark)]">Воеводин Артем</p>
          <p>ученик 2 «Б» класса</p>
          <p>ГУО «Средняя школа №51 г. Минска»</p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/test" className="btn-primary">
          Начать тест
        </Link>
        <Link href="/heroines" className="btn-secondary">
          Героини
        </Link>
        <Link href="/professions" className="btn-secondary">
          Профессии
        </Link>
      </div>
    </div>
  )
}
