import Image from "next/image"
import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: "sm" | "md"
  theme?: "light" | "dark"
}

export default function Button({
  children,
  size = "sm",
  theme = "light",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`
    group inline-flex w-fit items-center
    rounded-full border
    transition-all duration-300
    whitespace-nowrap

    ${
      theme === "light"
        ? "border-secondary bg-primary/40 text-secondary hover:bg-primary hover:text-dark"
        : "border-secondary bg-transparent text-white hover:bg-white hover:text-black"
    }

    ${size === "sm" ? "h-8 px-2 pr-4" : "h-10 px-2.5 pr-5"}

    ${className}
  `}
    >
      <Image
        src="/icon/circle-arrow-right.svg"
        alt=""
        width={26}
        height={26}
        className="-ml-2 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      />

      <span className="ml-2 text-[10px] uppercase tracking-[0.12em]">
        {children}
      </span>
    </button>
  )
}
