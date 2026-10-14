import Link from "next/link";
import { BookOpenText, Sparkles, Stars } from "lucide-react";
import { FactsExplorer } from "@/components/FactsExplorer";
import { FactsQuiz } from "@/components/FactsQuiz";
import { factsHeroIllustration } from "@/data/facts";

export default function FactsPage() {
  const [LeftIcon, CenterIcon, RightIcon] = factsHeroIllustration.icons;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="relative overflow-hidden rounded-[24px] border border-[var(--border)] bg-[linear-gradient(135deg,rgba(250,246,239,0.96),rgba(243,235,224,0.98))] px-5 py-8 shadow-[0_10px_30px_rgba(40,53,57,0.06)] sm:px-8 sm:py-10">
        <div className="facts-hero-glow" aria-hidden />
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div className="relative z-10">
            <div className="section-label mb-4">
              Редкие профессии и настоящие открытия
            </div>
            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-[var(--color-dark)] sm:text-4xl lg:text-5xl">
              Профессии, о которых вы могли не знать
            </h1>
            <span className="heading-accent" aria-hidden />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              За привычными вещами скрывается удивительная работа специалистов.
              Кто-то ищет следы животных, кто-то изучает насекомых, а кто-то
              помогает сохранять картины и даже другие планеты!
            </p>
          </div>

          <div className="relative z-10">
            <div className="facts-illustration folk-card folk-card-frame mx-auto max-w-md p-5 pt-6">
              <div className="flex items-center justify-between text-[var(--color-ochre)]">
                <Stars className="h-5 w-5" aria-hidden />
                <Sparkles
                  className="h-6 w-6 text-[var(--color-cinnabar)]"
                  aria-hidden
                />
                <Stars className="h-5 w-5" aria-hidden />
              </div>
              <div className="mt-5 flex items-end justify-center gap-3 sm:gap-4">
                <div className="facts-illustration-badge">
                  <LeftIcon className="h-6 w-6" aria-hidden />
                </div>
                <div
                  className="facts-illustration-book"
                  role="img"
                  aria-label="Книга с картой необычных профессий"
                >
                  <BookOpenText
                    className="h-14 w-14 text-[var(--color-cinnabar)] sm:h-16 sm:w-16"
                    aria-hidden
                  />
                </div>
                <div className="facts-illustration-badge">
                  <CenterIcon className="h-6 w-6" aria-hidden />
                </div>
                <div className="facts-illustration-badge hidden sm:flex">
                  <RightIcon className="h-6 w-6" aria-hidden />
                </div>
              </div>
              <p className="mt-5 text-center font-semibold text-[var(--color-dark)]">
                {factsHeroIllustration.title}
              </p>
              <p className="mt-2 text-center text-sm leading-relaxed text-[var(--muted)]">
                {factsHeroIllustration.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div>
          <div className="section-label">8 необычных профессий</div>
          <h2 className="mt-4 text-3xl text-[var(--color-dark)] sm:text-4xl">
            Реальные задачи, которые удивляют
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
            На этой странице собраны профессии, о которых знают не все. У каждой
            — своя важная задача, необычный факт и секрет, который помогает
            лучше понять работу специалиста.
          </p>
        </div>

        <div className="mt-8">
          <FactsExplorer />
        </div>
      </section>

      <section className="mt-12">
        <FactsQuiz />
      </section>

      <section className="mt-12 folk-card folk-card-frame p-5 pt-6 sm:p-6 sm:pt-7">
        <div className="section-label">
          Почему это интересно и детям, и взрослым
        </div>
        <h2 className="mt-4 text-3xl text-[var(--color-dark)] sm:text-4xl">
          Мир профессий шире, чем кажется
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-[var(--muted)]">
          Необычные профессии показывают, что важная работа может быть связана с
          наукой, природой, искусством, технологиями и вниманием к мельчайшим
          деталям. Иногда именно такие специалисты помогают делать большие
          открытия и сохранять ценные знания.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Одни профессии помогают защищать природу и редких животных.",
            "Другие сохраняют произведения искусства и исторические тайны.",
            "Некоторые специалисты работают со звуком, языком и цифровыми технологиями.",
            "Для многих задач нужна не только наука, но и воображение.",
            "Даже маленькая деталь может стать важной подсказкой.",
            "Любознательность и терпение часто открывают путь к редкому делу.",
          ].map((text) => (
            <article
              key={text}
              className="rounded-[16px] border border-[var(--border)] bg-[rgba(250,246,239,0.8)] p-4"
            >
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-[16px] border border-[rgba(196,163,90,0.35)] bg-[rgba(196,163,90,0.1)] px-4 py-4 text-base leading-relaxed text-[var(--color-dark)] sm:px-5">
          Чем больше узнаёшь о мире профессий, тем легче заметить: за многими
          привычными вещами стоит чья-то редкая, точная и очень интересная
          работа.
        </p>
      </section>

      <section className="mt-12 rounded-[24px] border border-[var(--border)] bg-[rgba(250,246,239,0.88)] px-5 py-6 sm:px-6">
        <div className="section-label">Куда перейти дальше</div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/" className="btn-secondary">
            На главную
          </Link>
          <Link href="/test" className="btn-primary">
            Пройти тест
          </Link>
          <Link href="/quiz" className="btn-secondary">
            Играть в викторину
          </Link>
          <Link href="/professions" className="btn-secondary">
            Узнать о профессиях
          </Link>
        </div>
      </section>
    </div>
  );
}
