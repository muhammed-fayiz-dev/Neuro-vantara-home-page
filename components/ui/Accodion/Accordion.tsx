"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import clsx from "clsx"

import type { FooterSection } from "@/components/sections/FooterSection/data/navigationData" 

interface Props {
  section: FooterSection
}

export default function FooterAccordion({ section }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#E5DDD5]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-5"
      >
        <span className="text-24 text-extra-dark">{section.title}</span>

        <ChevronDown
          className={clsx(
            "transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-[800px] pb-6" : "max-h-0"
        )}
      >
        <div
          className={clsx(
            "gap-x-8 gap-y-3",
            section.columns.length === 1
              ? "flex flex-col"
              : "grid grid-cols-2"
          )}
        >
          {section.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-15 text-extra-dark hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}