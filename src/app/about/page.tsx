import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="mb-2 text-sm font-medium text-[var(--gold-dark)]">
        Исследовательская работа
      </p>
      <h1 className="text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
        Мудрость женщин в сказках: какие качества помогают людям сегодня?
      </h1>

      <div className="mt-8 space-y-8 leading-relaxed text-[var(--navy)]/80">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            👋 Привет!
          </h2>
          <p>
            Меня зовут Артём. Я учусь во 2 «Б» классе и сделал это приложение
            как практическую часть своей исследовательской работы. Здесь можно
            пройти сказочное путешествие и узнать больше о себе и о профессиях —
            простым и интересным способом.
          </p>
        </section>

        <section className="rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            🔍 Что исследует проект
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
          <p className="mt-4 font-medium text-[var(--navy)]">
            Сказочные героини → их поступки → качества → современные профессии
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            ✨ Как работает приложение
          </h2>
          <ol className="list-none space-y-3">
            <li className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
              <span className="font-semibold text-[var(--gold-dark)]">1.</span>
              <span>
                Ты попадаешь в сказочную ситуацию и выбираешь, как поступил бы.
              </span>
            </li>
            <li className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
              <span className="font-semibold text-[var(--gold-dark)]">2.</span>
              <span>
                После ответов видно, какие качества проявились в твоих выборах.
              </span>
            </li>
            <li className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
              <span className="font-semibold text-[var(--gold-dark)]">3.</span>
              <span>
                Можно узнать, на качества какой сказочной героини они похожи.
              </span>
            </li>
            <li className="flex gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm">
              <span className="font-semibold text-[var(--gold-dark)]">4.</span>
              <span>
                Можно познакомиться с профессиями, где такие качества могут
                пригодиться.
              </span>
            </li>
          </ol>
        </section>

        <section className="rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            📖 Какие героини участвуют
          </h2>
          <ul className="space-y-2">
            <li>Настенька — сказка «Морозко»</li>
            <li>Василиса Премудрая</li>
            <li>Царевна-лягушка</li>
            <li>Герда — «Снежная королева»</li>
            <li>Хаврошечка</li>
            <li>Дюймовочка</li>
          </ul>
          <p className="mt-4 text-sm text-[var(--navy)]/70">
            У каждой героини есть свои сильные качества. О них можно прочитать
            на странице «Героини».
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            🚀 Как качества связаны с профессиями
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

        <section className="rounded-3xl border border-[var(--gold)]/30 bg-[var(--cream)] p-5">
          <p className="font-medium text-[var(--navy)]">
            Приложение помогает узнать свои сильные стороны и познакомиться с
            профессиями, в которых такие качества могут пригодиться.
          </p>
          <p className="mt-3 text-sm text-[var(--navy)]/75">
            Оно не говорит, кем ты станешь, когда вырастешь. Оно не выбирает
            профессию за тебя — только помогает узнать себя лучше и посмотреть,
            что бывает интересным.
          </p>
        </section>

        <section className="rounded-3xl border border-[var(--navy)]/10 bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-[var(--navy)]">
            ✏️ Об авторе
          </h2>
          <p className="font-semibold text-[var(--navy)]">Воеводин Артем</p>
          <p>ученик 2 «Б» класса</p>
          <p>ГУО «Средняя школа №51 г. Минска»</p>
        </section>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/test"
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white"
        >
          Начать тест
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/heroines"
          className="inline-flex rounded-2xl border border-[var(--navy)]/15 bg-white px-5 py-3 font-semibold text-[var(--navy)]"
        >
          Героини
        </Link>
        <Link
          href="/professions"
          className="inline-flex rounded-2xl border border-[var(--navy)]/15 bg-white px-5 py-3 font-semibold text-[var(--navy)]"
        >
          Профессии
        </Link>
      </div>
    </div>
  );
}
