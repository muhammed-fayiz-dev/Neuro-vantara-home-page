"use client"

import LongevityCard from "./Card"

import longevityCardData, { ImageData } from "../data/longevityCardData"
interface CardProps{

  indexId:number
}

export default function LongevityCards({indexId}:CardProps) {


  return (
    <div className="flex gap-3">
      
        {longevityCardData[indexId].imageSrc.map((card:ImageData) => (
          <LongevityCard
            key={card.image}
            imageSrc={card.image}
            title={card.footNote}
          />
        ))}
      
    </div>
  )
}
