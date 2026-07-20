"use client"

import Image from "next/image"
import Link from "next/link"

interface LongevityImageCardProps {
  image: string
  footNote: string
  href?: string
}

export default function LongevityImageCard({
  image,
  footNote,
  href = "#",
}: LongevityImageCardProps) {
  return (
    <div className="relative overflow-hidden">
      <Link href={href} className="group block">
        <div className="relative overflow-hidden h-[250px] sm:h-[320px] lg:h-[420px] 3xl:h-[550px]">
          <Image
            src={image}
            alt={footNote}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Arrow */}
          <div className="absolute top-5 right-5 translate-x-8 -translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            <Image
              src="/icons/top-right-arrow.svg"
              alt=""
              width={80}
              height={80}
              className="h-10 w-10 xl:h-20 xl:w-20"
            />
          </div>
        </div>

        <div className="overflow-hidden mt-[10px] md:mt-8">
          <p className="text-extra-dark tracking-[-0.03em] ">
            {footNote}
          </p>
        </div>
      </Link>
    </div>
  )
}