"use client"

import { useState } from "react"
import LongevityCards from "./components/LongevityCards"
import LongevitySectionHeader from "./components/LongevitySectionHeader"
import Section from "@/components/layout/SectionLayout"

export default function LongevityIndex() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectCategory = (ind) => {
    setSelectedIndex(ind)
  }
 
  return (
    <Section>
      <div className="sticky top-0 h-screen bg-white">
        <div className="flex h-full flex-col justify-center">
          <LongevitySectionHeader selectCategory={selectCategory} />

          <LongevityCards indexId={selectedIndex} />
        </div>
      </div>
    </Section>
  )
}
