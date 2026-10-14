import Image from "next/image";
import allProfessionsImage from "@/assets/all-professions.jpg";
import { ProfessionQuiz } from "@/components/ProfessionQuiz";

export default function QuizPage() {
  return (
    <div>
      <section className="quiz-hero">
        <Image
          src={allProfessionsImage}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="quiz-hero-blur" aria-hidden>
          <Image
            src={allProfessionsImage}
            alt=""
            fill
            className="scale-110 object-cover object-center blur-[14px]"
            sizes="100vw"
          />
        </div>

        <div className="quiz-hero-scrim" aria-hidden />

        <div className="relative z-[1] mx-auto mt-auto w-full max-w-3xl px-4 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-36">
          <div className="mb-3 section-label !border-[rgba(250,246,239,0.35)] !bg-[rgba(40,53,57,0.35)] !text-[#faf6ef]">
            Коллекция загадок
          </div>
          <h1 className="quiz-hero-title text-3xl sm:text-4xl">
            Викторина о профессиях
          </h1>
          <span className="heading-accent heading-accent-green" aria-hidden />
          <p className="mt-4 max-w-2xl text-[rgba(250,246,239,0.9)]">
            Прочитай загадку и попробуй догадаться, какая профессия скрывается
            на обратной стороне карточки.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <ProfessionQuiz />
      </div>
    </div>
  );
}
