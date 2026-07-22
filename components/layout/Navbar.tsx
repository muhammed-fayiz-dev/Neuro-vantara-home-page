"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import ShutterSection from "../sections/ShutterSection"
import MenuIcon from "../ui/Menu/MenuIcon"
import SearchBar from "../ui/SearchBar/SearchBar"
import { IoSearch, IoClose } from "react-icons/io5"
import { AnimatePresence, motion } from "framer-motion"
import { PiPhoneLight } from "react-icons/pi"


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const [openMenu, setOpenMenu] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const lastScrollY = useRef<number>(0)
  const mobileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (openMenu || isSearchOpen) {
        setShowNavbar(true)
        return
      }
      const current = window.scrollY
      setAtTop(current <= 20)
      if (current < lastScrollY.current) {
        setShowNavbar(true)
      } else if (current > lastScrollY.current && current > 80) {
        setShowNavbar(false)
      }
      lastScrollY.current = current
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [openMenu, isSearchOpen])

  useEffect(() => {
    if (!isSearchOpen) return
    const t = setTimeout(() => mobileInputRef.current?.focus(), 200)
    return () => clearTimeout(t)
  }, [isSearchOpen])

  const toggleMenu = () => {
    setOpenMenu((prev) => {
      const next = !prev
      if (next) {
        setShowNavbar(true)
        setIsSearchOpen(false)
      }
      return next
    })
  }

  const toggleSearch = () => {
    setIsSearchOpen((prev) => {
      const next = !prev
      if (next) setShowNavbar(true)
      return next
    })
  }

  const iconColor = openMenu ? "text-extra-dark/80" : "text-white/80"
  const borderColor = openMenu
    ? "text-extra-dark/80 border-extra-dark/80"
    : "text-primary border-primary"

  return (
    <>
      <header
        className={`
          fixed inset-x-0 top-0 z-9999
          transition-all duration-300 ease-in-out py-[30px]
          lg:py-[50px]
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          ${
            atTop || openMenu
              ? "bg-transparent py-8"
              : "bg-black/20 backdrop-blur-xl py-5"
          }
        `}
      >
        {/* <RevealItem trigger="load" direction="down"> */}
          <div className="container flex items-center justify-between">
            {/* Left */}
            <div className="flex w-[30%] items-center z-9999">
              <button onClick={toggleMenu}>
                <MenuIcon
                  isOpen={openMenu}
                  className="w-[22px] h-auto sm:w-[30px] 2xl:w-[44px]"
                />
              </button>
            </div>

            {/* Center */}
            {/* <RevealItem trigger="load" direction="down"> */}
            <div className="flex w-[40%] items-center justify-center">
              <Image
                src={"/icon/logo-mask.svg"}
                width={320}
                height={40}
                alt="logo"
                className="w-39.5 h-5 md:w-xs md:h-10"
              />
            </div>
            {/* </RevealItem> */}

            {/* Right */}

            <div className="w-[30%] flex items-center justify-end gap-[11px] md:gap-[6px]">
              <button className="hidden lg:flex justify-center items-center bg-secondary text-extra-dark text-center leading-1 rounded-[50px] text-15 uppercase px-20 py-[3px] cursor-pointer 3xl:w-[109px] h-[30px] sm:h-8">
                Contact
              </button>
              <div
                className={`lg:hidden flex items-end overflow-hidden rounded-full border ${borderColor} h-[30px] sm:h-8 transition-colors duration-500`}
              >
                <button
                  onClick={toggleSearch}
                  aria-label={isSearchOpen ? "Close search" : "Open search"}
                  className="shrink-0 flex items-center justify-center w-[30px] sm:w-8 h-full cursor-pointer"
                >
                  <PiPhoneLight
                    className={`lg:hidden ${iconColor} w-auto h-[15px] sm:h-[18px]`}
                  />
                </button>
              </div>
              {/* Desktop / lg+: inline expanding pill */}
              <SearchBar
                openMenu={openMenu}
                isOpen={isSearchOpen}
                onToggle={toggleSearch}
                onClose={() => setIsSearchOpen(false)}
              />

              {/* Below lg: icon toggles to X, dropdown handled below (anchored to header) */}
              <div
                className={`xl:hidden flex items-end overflow-hidden rounded-full border ${borderColor} h-[30px] sm:h-8 transition-colors duration-500`}
              >
                <button
                  onClick={toggleSearch}
                  aria-label={isSearchOpen ? "Close search" : "Open search"}
                  className="shrink-0 flex items-center justify-center w-[30px] sm:w-8 h-full cursor-pointer"
                >
                  {isSearchOpen ? (
                    <IoClose
                      className={`${iconColor} w-auto h-[15px] sm:h-[18px]`}
                    />
                  ) : (
                    <IoSearch
                      className={`${iconColor} w-auto h-[15px] sm:h-[18px]`}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ x: "100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "100%", opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
                      className="xl:hidden absolute inset-x-0 top-130 overflow-hidden "
                    >
                      <div className="container pb-4 pt-3 flex justify-end ">
                        <div
                          className={`flex items-center overflow-hidden rounded-full border min-w-4px h-[30px] sm:h-8 ${
                            openMenu ? "border-extra-dark/80" : "border-primary"
                          }`}
                        >
                          <span className=" shrink-0 flex items-center justify-center w-8 h-full">
                            <IoSearch
                              className={`${iconColor} w-auto h-[15px] sm:h-[18px]  `}
                            />
                          </span>
                          <input
                            ref={mobileInputRef}
                            type="text"
                            placeholder="Search..."
                            className={`flex-1  text-sm outline-none placeholder-current  min-w-[260px]  ${
                              openMenu
                                ? "text-extra-dark placeholder:text-extra-dark/50 bg-primary"
                                : "text-white placeholder:text-white/50 bg-transparent"
                            }`}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        {/* </RevealItem> */}
      </header>
      <ShutterSection isOpen={openMenu} />
    </>
  )
}

export default Navbar
