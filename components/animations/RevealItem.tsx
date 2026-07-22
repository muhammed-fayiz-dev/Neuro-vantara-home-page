"use client"

import { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

type Direction = "up" | "down" | "left" | "right"

interface RevealItemProps {
  children: React.ReactNode
  className?: string
  duration?: number
  delay?: number
  trigger?: "load" | "viewport" | "scroll"
  start?: string
  direction?: Direction
}

// Maps a direction to the gsap "from" vars.
// "up"    -> text moves from bottom to up   (yPercent 100 -> 0)
// "down"  -> text moves from top to bottom  (yPercent -100 -> 0)
// "left"  -> text moves from right to left  (xPercent 100 -> 0)
// "right" -> text moves from left to right  (xPercent -100 -> 0)
function getFromVars(direction: Direction) {
  switch (direction) {
    case "down":
      return { yPercent: -100 }
    case "left":
      return { xPercent: 100 }
    case "right":
      return { xPercent: -100 }
    case "up":
    default:
      return { yPercent: 100 }
  }
}

function getToVars(direction: Direction) {
  switch (direction) {
    case "left":
    case "right":
      return { xPercent: 0 }
    case "up":
    case "down":
    default:
      return { yPercent: 0 }
  }
}

export default function RevealItem({
  children,
  className = "",
  duration = 1.2,
  delay = 0,
  trigger = "viewport",
  start = "top 85%",
  direction = "up",
}: RevealItemProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useGSAP(
    () => {
      if (!textRef.current) return

      const fromVars = getFromVars(direction)
      const toVars = getToVars(direction)

      switch (trigger) {
        case "load":
          gsap.fromTo(
            textRef.current,
            {
              yPercent: getFromVars(direction).yPercent,
              xPercent: getFromVars(direction).xPercent,
            },
            {
              ...getToVars(direction),
              duration,
              delay,
              ease: "power4.out",
              clearProps: "transform",
            }
          )
          break

        case "viewport":
          gsap.fromTo(
            textRef.current,
            {
              yPercent: getFromVars(direction).yPercent,
              xPercent: getFromVars(direction).xPercent,
            },
            {
              ...getToVars(direction),
              duration,
              delay,
              ease: "power4.out",
              clearProps: "transform",
              scrollTrigger: {
                trigger: wrapperRef.current,
                start,
                once: true,
              },
            }
          )
          break

        case "scroll":
          gsap.fromTo(textRef.current, fromVars, {
            ...toVars,
            ease: "none",
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top bottom",
              end: "top center",
              scrub: true,
            },
          })
          break
      }
    },
    {
      scope: wrapperRef,
      dependencies: [direction, trigger, start, duration, delay],
    }
  )

  return (
    <div ref={wrapperRef} className="overflow-hidden">
      <span
        ref={textRef}
        className={`block will-change-transform ${className}`}
      >
        {children}
      </span>
    </div>
  )
}
