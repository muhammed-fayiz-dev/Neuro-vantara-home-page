"use client"

import Image from "next/image"
import { forwardRef } from "react"
import clsx from "clsx"

interface SlideButtonProps {
  direction: "prev" | "next"
  disabled?: boolean
  onClick?: () => void
  className?: string
  directionSrc:string
  
}

const SlideButton = forwardRef<HTMLButtonElement, SlideButtonProps>(
  ({ direction, disabled = false, onClick, className,directionSrc }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          `
          flex items-center justify-center
          shrink-0 rounded-full
          bg-extra-dark
          cursor-pointer active:scale-95
          transition-all duration-200
          disabled:opacity-40 disabled:cursor-not-allowed

          w-[40px] h-[40px]
          sm:w-[45px] sm:h-[45px]
          xl:w-[50px] xl:h-[50px]
          `,
          className
        )}
      >
        <div
          className={clsx(
            "relative w-[9px] h-[18px] xl:w-[12px] xl:h-[20px]",
           
          )}
        >
          <Image
            src={directionSrc}
            alt={direction === "prev" ? "Previous" : "Next"}
            fill
            className="object-contain"
          />
        </div>
      </button>
    )
  }
)

SlideButton.displayName = "SlideButton"

export default SlideButton