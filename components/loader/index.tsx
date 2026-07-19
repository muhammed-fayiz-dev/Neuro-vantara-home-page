"use client"

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

interface LoaderProps {
  onComplete?: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const shimmerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete })

    gsap.set(glowRef.current, { opacity: 0, scale: 0.9 })
    gsap.set(logoRef.current, { opacity: 0, scale: 0.85, filter: "blur(6px)" })
    gsap.set(shimmerRef.current, { backgroundPosition: "-200% 0%" })

    // 1. background wakes up
    tl.to(glowRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
    })
      // keep it drifting the whole time
      .to(
        glowRef.current,
        {
          backgroundPosition: "100% 50%",
          duration: 3.5,
          ease: "sine.inOut",
        },
        "<"
      )
      // 2. brand reveal
      .to(
        logoRef.current,
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.9"
      )
      // shimmer sweep across the wordmark
      .to(
        shimmerRef.current,
        {
          backgroundPosition: "200% 0%",
          duration: 1.4,
          ease: "power2.inOut",
        },
        "-=0.6"
      )
      .to({}, { duration: 0.5 }) // hold
      // 3. exit
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "power3.inOut",
      })
  }, [])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* animated background glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(120deg, #7F6157 0%, #C9B6AC 35%, #BFA373 65%, #7F6157 100%)",
          backgroundSize: "250% 250%",
          backgroundPosition: "0% 50%",
          opacity: 0.35,
        }}
      />

      {/* logo with gradient shimmer */}
      <div ref={logoRef} className="relative z-10">
        <div
          ref={shimmerRef}
          className="w-89 h-54 md:w-400 md:h-100"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #7F6157 -1051.2%, #C9B6AC -688.94%, #BFA373 -281.41%, #FFFFFF 80.85%)",
            backgroundSize: "300% 300%",
            WebkitMaskImage: "url(/icon/logo-mask.svg)",
            maskImage: "url(/icon/logo-mask.svg)",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>
    </div>
  )
}
