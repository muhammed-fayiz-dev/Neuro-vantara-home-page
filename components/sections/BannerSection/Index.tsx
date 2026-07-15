"use client"
import Image from "next/image"
import { FC } from "react"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { DesktopBanner } from "./components/DesktopBanner"
import MobileBanner from "./components/MobileBanner"
interface BannerProps {
  title: string
  description: string
  features: {
    id: string
    title: string
    image: string
  }[]
}

const Banner: FC<BannerProps> = ({ title, description, features }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [activeIndex, features.length])
  return (
    <section className="sticky top-0 h-screen bg-black overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={features[activeIndex].image}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.9,
          }}
          className="absolute inset-0"
        >
          <Image
            src={features[activeIndex].image}
            alt={features[activeIndex].title}
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main Content */}
      <DesktopBanner
        title={title}
        description={description}
        features={features}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <MobileBanner
        title={title}
        description={description}
        features={features}
        activeIndex={activeIndex}
      />
    </section>
  )
}

export default Banner
