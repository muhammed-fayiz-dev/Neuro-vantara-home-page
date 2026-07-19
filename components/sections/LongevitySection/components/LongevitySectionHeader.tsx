"use client"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import longevityCardData, {
  LongevityCardDataType,
} from "../data/longevityCardData"
import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LongevityHeaderProps {
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

const LongevitySectionHeader: React.FC<LongevityHeaderProps> = ({
  selectedIndex,
  setSelectedIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick)

    return () => document.removeEventListener("mousedown", handleClick)
  }, [])
  const columns = 2
  const lastRowStart =
    Math.floor((longevityCardData.length - 1) / columns) * columns
  return (
    <header className="flex flex-wrap xl:flex-nowrap items-start justify-between  lg:flex-row lg:justify-between">
      <div className="flex self-stretch">
        <h2 className="section-heading ">LONGEVITY SYSTEMS</h2>
      </div>

      <div className="hidden grid-cols-2 gap-x-10 md:grid">
        {longevityCardData.map((category: LongevityCardDataType, ind) => {
          const isLastRow = ind >= lastRowStart

          return (
            <div
              key={category.id}
              onClick={() => setSelectedIndex(ind)}
              className={`
    group
    relative
    flex
    cursor-pointer
    items-center
    justify-between
    overflow-hidden
    border-[#c9c9c9]
    py-3
    ${isLastRow ? "" : "border-b"}
  `}
            >
              {/* Gradient Overlay */}
              <div
                className="
    absolute
    inset-0
    opacity-0
    transition-opacity
    duration-300
    group-hover:opacity-100
    bg-[radial-gradient(ellipse_140%_100%_at_center,rgba(224,224,224,.35)_0%,rgba(224,224,224,.12)_55%,transparent_100%)]
  "
              />
              {/* Content */}
              <p
                className={`relative z-10 text-19 transition-colors duration-200 ${
                  selectedIndex === ind
                    ? "font-medium text-neutral-900"
                    : "text-extra-dark"
                }`}
              >
                {category.title}
              </p>

              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
                className={`relative z-10 transition-all duration-300 ${
                  selectedIndex === ind
                    ? "translate-x-0 opacity-100"
                    : "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }`}
              />
            </div>
          )
        })}
      </div>
      {/* mobile layout */}
      <div ref={ref} className="relative md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
      flex
      w-full
      items-center
      justify-between
      rounded-sm
      // py-[15px]
      border-t
      border-b
      border-extra-dark/60
    "
        >
          <span className=" text-19 text-extra-dark ">
            {longevityCardData[selectedIndex].title}
          </span>

          <ChevronDown
            width={30}
            height={30}
            className={` text-extra-dark ptransition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
                scaleY: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scaleY: 1,
              }}
              exit={{
                opacity: 0,
                y: -10,
                scaleY: 0.95,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
          absolute
          left-0
          right-0
          top-full
          z-50
          mt-3
          origin-top
          rounded-sm
          bg-white
          shadow-xl
          border
          border-neutral-200
          overflow-hidden
        "
            >
              {longevityCardData.map((category, index) => {
                if (index === selectedIndex) return null

                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedIndex(index)
                      setIsOpen(false)
                    }}
                    className="
                flex
                w-full
                items-center
                border-b
                border-neutral-200
                px-5
               py-4
                text-left
                hover:bg-neutral-50
              "
                  >
                    {category.title}
                  </button>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default LongevitySectionHeader
