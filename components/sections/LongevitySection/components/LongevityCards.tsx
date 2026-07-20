"use client"

import LongevityCard from "./Card"

import longevityCardData, { ImageData } from "../data/longevityCardData"
import LongevityImageCard from "./LongevityImage"
interface CardProps {
  indexId: number
}

export default function LongevityCards({ indexId }: CardProps) {
  return (
    <div className="flex justify-start gap-5">
      {longevityCardData[indexId].imageSrc.map((card: ImageData) => (
        <LongevityCard
          key={card.image}
          imageSrc={card.image}
          title={card.footNote}
        />
        // <LongevityImageCard
        //     key={card.image}
        //     image={card.image}
        //     footNote={card.footNote}
        //   />
      ))}
    </div>
  )
}
