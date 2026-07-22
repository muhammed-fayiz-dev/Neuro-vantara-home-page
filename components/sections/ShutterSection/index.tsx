import { motion, Variants } from "framer-motion"
import DesktopLayout from "./components/ShutterLayout"
import { useLayoutEffect, useRef, useState } from "react"

const layerVariants: Variants = {
  closed: (delay: number) => ({
    y: "-100%",
    transition: {
      duration: 0.8,
      delay: 0.16 - delay,
      ease: [0.76, 0, 0.24, 1],
    },
  }),

  open: (delay: number) => ({
    y: "0%",
    transition: {
      duration: 0.8,
      delay,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
}

interface Props {
  isOpen: boolean
}

const ShutterSection: React.FC<Props> = ({ isOpen }) => {
  const layers = [
    { bg: "#51463e", offset: 4 },
    { bg: "#e2d3c3", offset: 2 },
    { bg: "#f9f5f0", offset: 0 },
  ]

  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useLayoutEffect(() => {
    if (contentRef.current) {
      console.log({
        content: contentRef.current.offsetHeight,
        viewport: window.innerHeight,
      })

      setContentHeight(contentRef.current.offsetHeight)
    }
  }, [isOpen])

  return (
    <div
      className={`fixed inset-0 z-[9998] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            custom={index * 0.08}
            variants={layerVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="absolute left-0 right-0 top-0 overflow-y-auto"
            style={{
              background: layer.bg,
              height: contentHeight + layer.offset * 4,
              zIndex: index,
              
            }}
          >
            {index === layers.length - 1 && (
              <div
                ref={contentRef}
                className="pt-[90px] md:pt-[100px] lg:pt-[140px]"
              >
                <DesktopLayout />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ShutterSection
