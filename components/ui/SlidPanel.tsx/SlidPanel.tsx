"use client"

import { AnimatePresence, motion, Variants } from "framer-motion"
import { ReactNode } from "react"
import { ChevronLeft } from "lucide-react"

type Props = {
  isOpen: boolean
  title?: string
  onClose: () => void
  children: ReactNode
}

const panelVariants: Variants = {
  closed: { x: "100%", transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
  open: { x: 0, transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] } },
}

export default function SlidePanel({ isOpen, title, onClose, children }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          variants={panelVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="absolute inset-0 top-200 z-50 flex flex-col bg-primary overflow-y-auto"
        >
          <header className="flex items-center gap-4 border-b border-black/10 px-6 py-5 shrink-0">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-extra-dark"
              aria-label="Back"
            >
              <ChevronLeft size={22} />
              <span>Back</span>
            </button>

            {title && (
              <h2 className="text-lg font-medium text-extra-dark">{title}</h2>
            )}
          </header>

          <div className="flex-1 p-6">{children}</div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}