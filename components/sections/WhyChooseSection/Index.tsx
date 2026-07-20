"use client"

import { useEffect, useRef, useState } from "react"

import RevealItem from "@/components/animations/RevealItem"
import { choiceData } from "./data/choiceData"
import { ChoiceCard } from "./components/choiceCard"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import Image from "next/image"

export default function WhyChooseSection() {
  const [batchStart, setBatchStart] = useState(0)
  const [positionInBatch, setPositionInBatch] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const swiperRef = useRef<SwiperType | null>(null)

  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (hoveredIndex !== null) return

    const interval = setInterval(() => {
      const swiper = swiperRef.current
      if (!swiper) return

      const visible = Number(swiper.params.slidesPerView)

      setPositionInBatch((prev) => {
        // Activate next card inside current viewport
        if (prev < visible - 1) {
          return prev + 1
        }

        // Move to next batch
        const nextBatch = (batchStart + visible) % choiceData.length

        swiper.slideToLoop(nextBatch)

        setBatchStart(nextBatch)

        return 0
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [batchStart, hoveredIndex])
  const activeIndex = (batchStart + positionInBatch) % choiceData.length
  return (
    <section className="relative w-full bg-secondary py-[60px] sm:py-0 sm:pt-120 overflow-hidden">
      {/* Header */}

      <div className="container flex flex-col justify-between sm:flex-row sm:items-start">
        <RevealItem
          trigger="viewport"
          className="flex-1
      whitespace-nowrap
     section-heading
      mb-[15px] sm:mb-20 lg:mb-60"
        >
          WHY NEURO VANTA
        </RevealItem>
        <div className="sm:hidden w-full bg-[#FBF7F4] h-px mb-[15px] sm:mb-0" />
        <div className="flex items-center  justify-between sm:justify-end mb-[30px] sm:mb-0">
          {/* Mobile Counter */}

          <div className=" sm:hidden bg-dark  h-[22px] w-[50px] flex items-center justify-center text-[12px] text-semibold rounded-[51px]">
            <span className="text-white">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <span className="text-white">/</span>

            <span className="text-white/50">
              {String(choiceData.length).padStart(2, "0")}
            </span>
          </div>

          {/* Navigation */}

          <div className="flex items-center 2xl:hidden justify-end gap-[10px] shrink-0">
            <button
              ref={prevRef}
              className="
              
        flex items-center justify-center rounded-full shrink-0 cursor-pointer active:scale-95
        w-[40px] h-[40px]
        sm:w-[45px] sm:h-[45px]
        xl:w-[50px] xl:h-[50px]
        bg-extra-dark
        disabled:opacity-40 disabled:cursor-not-allowed
        transition-all duration-200
        
      
            "
            >
              <div className="relative w-[9px] h-[18px] xl:w-[12px] xl:h-[20px] transition-transform duration-500 ">
                <Image
                  src="/icon/left-arrow.svg"
                  alt="Circle arrow right"
                  fill
                  className="object-contain transition-transform duration-500"
                />
              </div>
            </button>

            <button
              ref={nextRef}
              className="
                  flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            rounded-full
            bg-extra-dark
            transition
            active:scale-95

            sm:h-[45px]
            sm:w-[45px]

            xl:h-[50px]
            xl:w-[50px]
            "
            >
              <div className="relative w-[9px] h-[18px] xl:w-[12px] xl:h-[20px] transition-transform duration-500 ">
                <Image
                  src="/icon/right-arrow.svg"
                  alt="Circle arrow right"
                  fill
                  className="object-contain transition-transform duration-500"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}

      <div
        className="w-full h-px hidden sm:block"
        style={{
          background:
            "linear-gradient(270deg, rgba(251,247,244,.1) 0%, rgb(251,247,244) 48.08%, rgba(251,247,244,.1) 100%)",
        }}
      />

      {/* Swiper */}

      <Swiper
        modules={[Navigation]}
        loop
        speed={700}
        onSwiper={(swiper) => {
          swiperRef.current = swiper

          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }

          swiper.navigation.init()
          swiper.navigation.update()
        }}
        onSlideChange={(swiper) => {
          setBatchStart(swiper.realIndex)
          setPositionInBatch(0)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        {choiceData.map((choice, index) => (
          <SwiperSlide key={choice.title} className="!h-auto">
            <RevealItem trigger="viewport" className="h-full">
              {/* Matches devtools exactly: !min-h on mobile, !h (fixed) from sm up */}
              <div
                className="
                  !min-h-[230px] sm:!h-[400px] xl:!h-[520px] 3xl:!h-[571px]
                "
              >
                <ChoiceCard
                  icon={choice.icon}
                  title={choice.title}
                  description={choice.description as string}
                  active={
                    hoveredIndex !== null
                      ? hoveredIndex === index
                      : activeIndex === index
                  }
                  onHoverStart={() => {
                    setHoveredIndex(index)
                  }}

                  onHoverEnd={() => {
                    setHoveredIndex(null)
                  }}
                />
              </div>
            </RevealItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
