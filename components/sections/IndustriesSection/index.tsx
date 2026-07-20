import Section from "@/components/layout/SectionLayout"
import { industriesData } from "./data/industriesData"
import IndustriesCard from "./components/IndustriesCard"
import HospitalIcon from "@/public/icon/system spaces/HospitalIcon"
import RevealItem from "@/components/animations/RevealItem"
import SystemsCards from "./components/SystemsCards"
import Image from "next/image"

const IndustriesSection = () => {
  return (
    <section className="bg-primary overflow-hidden py-[60px] lg:py-120 3xl:py-[177px]">
      <div className="container">
        <div
          className="
        grid
        xl:grid-cols-[360px_minmax(0,1fr)]
        items-center
        gap-x-[90px]
        3xl:grid-cols-[420px_minmax(0,1fr)]
        3xl:gap-x-[140px]
      "
        >
          {/* Empty column so heading starts with right content */}
          <div className="hidden xl:block" />

          <RevealItem
            trigger="viewport"
            className="text-section text-extra-dark mb-16 lg:mb-60"
          >
            A SYSTEM FOR EVERY SPACE
          </RevealItem>

          {/* Left Illustration */}
          <div className="hidden xl:flex justify-center items-center">
            <Image
              src="/icon/system spaces/clinic.svg"
              width={380}
              height={380}
              alt=""
              className="w-auto h-[300px] 3xl:h-[360px]"
            />
          </div>

          {/* Right List */}
          <div>
            <ul className="hidden xl:block border-t border-[#c9b8a8]">
              {industriesData.map((item, index) => (
                <SystemsCards key={index} title={item.title} />
              ))}
            </ul>

            <RevealItem trigger="viewport">
              <ul className="xl:hidden border-t border-border-color">
                {industriesData.map((item, index) => (
                  <IndustriesCard
                    key={index}
                    title={item.title}
                    icon={item.icon}
                  />
                ))}
              </ul>
            </RevealItem>
          </div>
        </div>
      </div>
    </section>
  )
}
export default IndustriesSection
