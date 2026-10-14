'use client'

import Image from 'next/image'
import { getProfessionImageByTitle } from '@/data/professionImages'
import { qualities } from '@/data/qualities'
import type { ProfessionRiddle } from '@/lib/types'

interface RiddleCardProps {
  riddle: ProfessionRiddle
  isFlipped: boolean
  onToggle: () => void
}

function formatNumber (id: number): string {
  return String(id).padStart(2, '0')
}

export function RiddleCard ({ riddle, isFlipped, onToggle }: RiddleCardProps) {
  const number = formatNumber(riddle.id)
  const qualityNames = riddle.qualities.map((id) => qualities[id].name)
  const professionImage = getProfessionImageByTitle(riddle.profession)

  return (
    <button
      type="button"
      className={`riddle-card${isFlipped ? ' is-flipped' : ''}`}
      aria-pressed={isFlipped}
      aria-label={
        isFlipped
          ? `Загадка ${number}: ${riddle.profession}. Нажми, чтобы скрыть ответ`
          : `Загадка ${number}. Нажми, чтобы узнать ответ`
      }
      onClick={onToggle}
    >
      <span className="riddle-card-inner">
        <span className="riddle-card-face riddle-card-front">
          <span className="riddle-card-number">{number}</span>
          <span className="riddle-card-riddle">{riddle.riddle}</span>
          <span className="riddle-card-hint">Нажми на карточку, чтобы узнать ответ</span>
        </span>

        <span className="riddle-card-face riddle-card-back">
          <span className="riddle-card-number">{number}</span>
          <span
            className={`riddle-card-back-row${professionImage ? ' has-photo' : ''}`}
          >
            <span className="riddle-card-back-text">
              <span className="riddle-card-profession">{riddle.profession}</span>
              <span className="riddle-card-description">{riddle.description}</span>
              <span className="riddle-card-qualities-label">Какие качества пригодятся?</span>
              <span className="riddle-card-qualities">
                {qualityNames.map((name) => (
                  <span key={name} className="riddle-card-badge">
                    {name}
                  </span>
                ))}
              </span>
            </span>
            {professionImage && (
              <span className="riddle-card-photo" aria-hidden>
                <Image
                  src={professionImage}
                  alt=""
                  width={144}
                  height={144}
                  className="riddle-card-photo-img"
                />
              </span>
            )}
          </span>
        </span>
      </span>
    </button>
  )
}
