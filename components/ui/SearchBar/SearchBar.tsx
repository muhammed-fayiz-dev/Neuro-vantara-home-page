"use client"

import { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoSearch, IoClose } from "react-icons/io5"

interface Props {
  openMenu: boolean
  isOpen: boolean
  onToggle: () => void
  onClose: () => void
}

const SearchBar: React.FC<Props> = ({ openMenu, isOpen, onToggle, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const t = setTimeout(() => inputRef.current?.focus(), 150)
    return () => clearTimeout(t)
  }, [isOpen])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [onClose])

  const iconColor = openMenu ? "text-extra-dark/80" : "text-white/80"
  const borderColor = openMenu
    ? "text-extra-dark/80 border-extra-dark/80"
    : "text-primary border-primary"

  return (
    <div ref={wrapperRef} className="relative hidden xl:flex items-center">
      <motion.div
        className={`flex items-center overflow-hidden rounded-full border ${borderColor} h-[30px] sm:h-8 transition-colors duration-500`}
        animate={{ width: isOpen ? 240 : 32 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <button
          onClick={onToggle}
          aria-label={isOpen ? "Close search" : "Open search"}
          className="shrink-0 flex items-center justify-center w-[30px] sm:w-8 h-full cursor-pointer"
        >
          <IoSearch className={`${iconColor} w-auto h-[15px] sm:h-[18px]`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: isOpen ? 0.15 : 0 }}
              className="flex items-center flex-1 min-w-0 h-full"
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className={`flex-1 min-w-0 bg-transparent outline-none text-15 pr-10 ${
                  openMenu
                    ? "text-extra-dark placeholder:text-extra-dark/50"
                    : "text-white placeholder:text-white/50"
                }`}
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="shrink-0 flex items-center justify-center w-[30px] sm:w-8 h-full cursor-pointer"
              >
                <IoClose className={`${iconColor} w-auto h-[15px] sm:h-[18px]`} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default SearchBar