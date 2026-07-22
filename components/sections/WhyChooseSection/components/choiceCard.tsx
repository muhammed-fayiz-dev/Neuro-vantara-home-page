"use client"

import Image from "next/image"
import clsx from "clsx"

import {  motion, Variants } from "framer-motion"

export const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
}
interface ChoiceCardProps {
  icon: string
  title: string
  description?: string
  active?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

interface ChoiceCardProps {
  icon: string
  title: string
  description?: string
  active?: boolean
  onHoverStart?: () => void
  onHoverEnd?: () => void
}

export function ChoiceCard({
  icon,
  title,
  description,
  active,
  onHoverStart,
  onHoverEnd,
}: ChoiceCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="
       relative h-full select-none pt-20 sm:pt-60 3xl:pt-80 px-20 sm:px-50 3xl:px-70 pb-20 sm:pb-70 3xl:pb-[74px] bg-[#FBF7F433] border-x border-x-[#FBF7F4]/10 sm:bg-transparent mx-[16px] sm:mx-0
      "
    >
      {/* Mobile Top Border */}
      <span
        className="absolute inset-x-0 top-0 h-px pointer-events-none sm:hidden"
        style={{
          background:
            "linear-gradient(270deg, rgba(251,247,244,.1) 0%, rgb(251,247,244) 48.08%, rgba(251,247,244,.1) 100%)",
        }}
      />

      {/* Mobile Bottom Border */}
      <span
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none sm:hidden"
        style={{
          background:
            "linear-gradient(270deg, rgba(251,247,244,.1) 0%, rgb(251,247,244) 48.08%, rgba(251,247,244,.1) 100%)",
        }}
      />

      {/* Desktop Divider */}
      <div className="hidden sm:block">
        <div
          className="absolute right-0 bottom-0 h-full w-[1px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(rgba(251, 247, 244, 0.1) 0%, rgb(251, 247, 244) 100%)",
          }}
        />
      </div>

      <div className="flex flex-col  h-full">
        {/* ICON — size-only, no color/invert change on active */}
        <div className="mb-[30px] sm:mb-0">
          <Image
            src={icon}
            alt={title}
            width={100}
            height={100}
            className={`h-[40px] w-[40px] sm:h-[50px] md:h-[70px] sm:w-auto`}
          />
        </div>

        {/* CONTENT */}
        <div className="mt-auto">
          <h3
            className={clsx(
              "transition-transform duration-500 ease-[cubic-bezier(.76,0,.24,1)] text-30 tracking-[-0.03em] text-extra-dark",
              active
                ? "-translate-y-6 mb-[10px] sm:mb-30"
                : "translate-y-0 mb-0"
            )}
          >
            {title}
          </h3>

          <div
            className={clsx(
              "grid overflow-hidden transition-all duration-500",
              active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}
          >
            <div className="overflow-hidden">
              <p
                className={clsx(
                  " text-extra-dark leading-[1.421] text-19 transition-all duration-500",
                  active
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3"
                )}
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
