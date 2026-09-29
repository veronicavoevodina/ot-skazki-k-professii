'use client'

import { useState } from 'react'
import { RiddleCard } from '@/components/RiddleCard'
import { professionRiddles } from '@/data/professionRiddles'

export function ProfessionQuiz () {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  function toggleCard (id: number) {
    setFlippedCards((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="flex flex-col gap-5">
      {professionRiddles.map((item) => (
        <RiddleCard
          key={item.id}
          riddle={item}
          isFlipped={flippedCards.has(item.id)}
          onToggle={() => toggleCard(item.id)}
        />
      ))}
    </div>
  )
}
