import Link from "next/link";
import { notFound } from "next/navigation";
import { getHeroineBySlug, heroines } from "@/data/heroines";
import { getProfessionById } from "@/data/professions";
import { qualities } from "@/data/qualities";
import type { QualityId } from "@/lib/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return heroines.map((h) => ({ slug: h.slug }));
}

export default async function HeroinePage({ params }: PageProps) {
  const { slug } = await params;
  const heroine = getHeroineBySlug(slug);

  if (!heroine) notFound();

  const qualityIds = (
    Object.entries(heroine.qualities) as [QualityId, number][]
  )
    .sort((a, b) => b[1] - a[1])
    .map(([id]) => id);

  const linkedProfessions = heroine.professionConnections
    .map((id) => getProfessionById(id))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/heroines"
        className="text-sm font-medium text-[var(--navy)]/60 hover:text-[var(--navy)]"
      >
        ← Все героини
      </Link>

      <p className="mt-4 text-sm font-medium uppercase tracking-wide text-[var(--gold-dark)]">
        {heroine.story}
      </p>
      <h1 className="mt-1 text-3xl font-semibold text-[var(--navy)] sm:text-4xl">
        {heroine.name}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--navy)]/75">
        {heroine.shortDescription}
      </p>

      <section className="mt-10 rounded-3xl border border-[var(--navy)]/10 bg-white p-6">
        <h2 className="mb-2 text-xl font-semibold text-[var(--navy)]">
          Испытание
        </h2>
        <p className="leading-relaxed text-[var(--navy)]/75">{heroine.trial}</p>

        <h2 className="mb-2 mt-6 text-xl font-semibold text-[var(--navy)]">
          Поступок
        </h2>
        <p className="leading-relaxed text-[var(--navy)]/75">{heroine.deed}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
          Качества
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {qualityIds.map((id) => (
            <div
              key={id}
              className="rounded-2xl border border-[var(--navy)]/10 bg-white p-4"
            >
              <div className="mb-1 flex items-center gap-2 font-medium text-[var(--navy)]">
                <span aria-hidden>{qualities[id].emoji}</span>
                {qualities[id].name}
              </div>
              <p className="text-sm text-[var(--navy)]/65">
                {qualities[id].description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--navy)]">
          Современные профессии, где это качество может пригодиться
        </h2>
        <div className="grid gap-3">
          {linkedProfessions.map(
            (profession) =>
              profession && (
                <Link
                  key={profession.id}
                  href={`/professions/${profession.slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-[var(--navy)]/10 bg-white p-4 transition hover:border-[var(--gold)]"
                >
                  <span className="text-2xl">{profession.icon}</span>
                  <div>
                    <p className="font-semibold text-[var(--navy)]">
                      {profession.title}
                    </p>
                    <p className="text-sm text-[var(--navy)]/65">
                      {profession.shortDescription}
                    </p>
                  </div>
                </Link>
              ),
          )}
        </div>
      </section>

      <div className="mt-10">
        <Link
          href="/test"
          className="inline-flex rounded-2xl bg-[var(--navy)] px-5 py-3 font-semibold text-white"
        >
          Пройти тест
        </Link>
      </div>
    </div>
  );
}
