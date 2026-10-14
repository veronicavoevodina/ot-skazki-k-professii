import Image from 'next/image'
import {
  getProfessionImage,
  getProfessionImageByTitle,
} from '@/data/professionImages'

interface ProfessionThumbnailProps {
  title: string
  slug?: string
  variant?: 'card' | 'inline' | 'hero'
  className?: string
}

export function ProfessionThumbnail ({
  title,
  slug,
  variant = 'card',
  className = '',
}: ProfessionThumbnailProps) {
  const src =
    (slug && getProfessionImage(slug)) || getProfessionImageByTitle(title)

  if (!src) return null

  if (variant === 'inline') {
    return (
      <div
        className={`h-16 w-16 shrink-0 overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--card)] ${className}`}
      >
        <Image
          src={src}
          alt={title}
          className="h-full w-full object-cover"
          sizes="64px"
        />
      </div>
    )
  }

  if (variant === 'hero') {
    return (
      <div
        className={`overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--card)] shadow-[inset_0_0_0_3px_rgba(196,163,90,0.12)] ${className}`}
      >
        <Image
          src={src}
          alt={title}
          className="h-auto w-full max-h-[280px] object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
          priority
        />
      </div>
    )
  }

  return (
    <div
      className={`mb-4 overflow-hidden rounded-[12px] border border-[var(--border)] bg-[var(--card)] ${className}`}
    >
      <Image
        src={src}
        alt={title}
        className="h-36 w-full object-cover sm:h-40"
        sizes="(max-width: 640px) 100vw, 320px"
      />
    </div>
  )
}
