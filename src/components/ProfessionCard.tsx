import Image from 'next/image'
import Link from 'next/link'
import { getProfessionImage } from '@/data/professionImages'
import { qualities } from '@/data/qualities'
import type { Profession, QualityId } from '@/lib/types'
import { getProfessionKeyQualities } from '@/lib/copy'

interface ProfessionCardProps {
  profession: Profession
  whyText?: string
  interestText?: string
  compact?: boolean
}

export function ProfessionCard ({
  profession,
  whyText,
  interestText,
  compact = false,
}: ProfessionCardProps) {
  const keyQualities = getProfessionKeyQualities(profession)
  const image = getProfessionImage(profession.slug)
  const detailHref = `/professions/${profession.slug}`

  if (!image) {
    return (
      <article className="folk-card folk-card-frame flex h-full flex-col p-5 pt-6">
        <h3 className="text-lg font-semibold text-[var(--color-dark)]">
          {profession.title}
        </h3>
        {!compact && (
          <p className="mt-2 text-sm text-[var(--muted)]">
            {profession.shortDescription}
          </p>
        )}
        <div className="mt-4 mb-4 flex flex-wrap gap-2">
          {keyQualities.map((id: QualityId) => (
            <span key={id} className="chip">
              {qualities[id].name}
            </span>
          ))}
        </div>
        <Link href={detailHref} className="link-accent mt-auto text-sm">
          Подробнее
        </Link>
      </article>
    )
  }

  return (
    <article className="profession-card-media folk-card folk-card-frame group relative aspect-square w-full overflow-hidden p-0">
      <Link
        href={detailHref}
        className="absolute inset-0 flex flex-col outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-green)] focus-visible:ring-offset-2"
      >
        {/* sharp base */}
        <Image
          src={image}
          alt={profession.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* blurred layer — fades in toward bottom / text */}
        <span className="profession-card-blur" aria-hidden>
          <Image
            src={image}
            alt=""
            fill
            className="scale-110 object-cover blur-[14px]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </span>

        <span className="profession-card-scrim" aria-hidden />

        <span className="relative z-[1] mt-auto flex flex-col gap-2 p-5 pt-20">
          <span className="text-xl font-semibold leading-tight text-[#faf6ef]">
            {profession.title}
          </span>
          {!compact && (
            <span className="text-sm leading-relaxed text-[rgba(250,246,239,0.92)]">
              {profession.shortDescription}
            </span>
          )}
          {interestText && (
            <span className="text-sm leading-relaxed text-[rgba(250,246,239,0.92)]">
              {interestText}
            </span>
          )}
          {whyText && (
            <span className="text-sm leading-relaxed text-[rgba(250,246,239,0.92)]">
              {whyText}
            </span>
          )}
          <span className="mt-1 flex flex-wrap gap-2">
            {keyQualities.map((id: QualityId) => (
              <span key={id} className="profession-card-chip">
                {qualities[id].name}
              </span>
            ))}
          </span>
          <span className="mt-1 text-sm font-semibold text-[#cfe0b8]">
            Подробнее
          </span>
        </span>
      </Link>
    </article>
  )
}
