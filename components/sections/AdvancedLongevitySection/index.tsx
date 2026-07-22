import Section from "@/components/layout/SectionLayout"
// import { AdvancedLongevityCard } from
import { title, description } from "./data/advancedLongevityData"

import Button from "@/components/ui/Button/Button"
import RevealItem from "@/components/animations/RevealItem"
import AdvancedLongevityCard from "./components/AdvancedLongevityCard"

export default function AdvancedSection() {
  return (
    <Section className="bg-primary overflew-hidden">
      {/* Top */}
      <div className="mb-section">
        <RevealItem
          trigger="viewport"
          className="section-heading max-w-[31ch] mb-[15px] sm:mb-20 md:mb-[50px]"
        >
          {title}
        </RevealItem>

        <RevealItem
          trigger="viewport"
          className="w-full max-w-[820px] 3xl:max-w-[735px] description-text"
        >
          {description}
        </RevealItem>
      </div>

      {/* Bottom */}
      <div
        className=" 
     flex
    flex-col
    gap-[30px]

    lg:flex-row
    lg:items-end
    lg:justify-between
    lg:gap-x-170"
      >
        <RevealItem trigger="viewport" direction="right">
          <Button theme="dark">About Neuro Vanta</Button>
        </RevealItem>

        {/* <div className="w-full lg:flex-1 lg:max-w-[1136px]"> */}
        <AdvancedLongevityCard />
        {/* </div> */}
      </div>
    </Section>
  )
}
