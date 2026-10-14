import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProfessionThumbnail } from "@/components/ProfessionThumbnail";
import { getHeroineBySlug, heroineImages, heroines } from "@/data/heroines";
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

  const heroineImage = heroineImages[heroine.id];

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
        className="text-sm font-medium text-[var(--muted)] hover:text-[var(--color-dark)]"
      >
        ← Все героини
      </Link>

      <section className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_180px] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-[var(--color-coral)]">
            {heroine.story}
          </p>
          <h1 className="mt-1 text-3xl font-semibold text-[var(--color-dark)] sm:text-4xl">
            {heroine.name}
          </h1>
          <span className="heading-accent" aria-hidden />
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            {heroine.shortDescription}
          </p>
        </div>

        {heroineImage && (
          <div className="overflow-hidden rounded-[20px] border border-[var(--border)] bg-[rgba(250,246,239,0.82)] shadow-[0_10px_24px_rgba(40,53,57,0.06)]">
            <Image
              src={heroineImage}
              alt={heroine.name}
              className="h-auto w-full object-cover"
              placeholder="blur"
              priority
            />
          </div>
        )}
      </section>

      <section className="folk-card mt-10 p-6">
        <h2 className="mb-2 text-xl font-semibold text-[var(--color-dark)]">
          Испытание
        </h2>
        <p className="leading-relaxed text-[var(--muted)]">{heroine.trial}</p>

        <h2 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-dark)]">
          Поступок
        </h2>
        <p className="leading-relaxed text-[var(--muted)]">{heroine.deed}</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">
          Качества
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {qualityIds.map((id) => (
            <div key={id} className="folk-card p-4">
              <div className="mb-1 font-medium text-[var(--color-dark)]">
                {qualities[id].name}
              </div>
              <p className="text-sm text-[var(--muted)]">
                {qualities[id].description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">
          Современные профессии, где это качество может пригодиться
        </h2>
        <div className="grid gap-3">
          {linkedProfessions.map(
            (profession) =>
              profession && (
                <Link
                  key={profession.id}
                  href={`/professions/${profession.slug}`}
                  className="folk-card flex gap-4 p-4 transition hover:border-[var(--color-green)]"
                >
                  <ProfessionThumbnail
                    title={profession.title}
                    slug={profession.slug}
                    variant="inline"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--color-dark)]">
                      {profession.title}
                    </p>
                    <p className="text-sm text-[var(--muted)]">
                      {profession.shortDescription}
                    </p>
                  </div>
                </Link>
              ),
          )}
        </div>
      </section>

      <div className="mt-10">
        <Link href="/test" className="btn-primary">
          Пройти тест
        </Link>
      </div>
    </div>
  );
}
