import Image from "next/image"
import { socialMedia } from "../../FooterSection/data/contactData"
import { navigationTitle } from "../data/menu.data"
import { AnimatePresence, motion, Variants } from "framer-motion"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import RevealItem from "@/components/animations/RevealItem"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const DesktopLayout = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(0)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const handleOpen = (index: number) => {
    setActiveIndex(index)
    if (navigationTitle[index].subNav?.length) {
      setIsSubMenuOpen(true)
    }
  }

  const handleClose = () => {
    setIsSubMenuOpen(false)
    setActiveIndex(null)
  }
  let shouldDim: boolean
  if (activeIndex !== null) {
    shouldDim =
      activeIndex !== null &&
      (navigationTitle[activeIndex].subNav?.length ?? 0) > 0
  }
  return (
    <>
      <div className="container ">
        <div className="flex border-t border-black/20">
          <div className="hidden xl:block shrink-0 mt-auto pb-60">
            <div className="flex flex-col gap-20 ">
              {socialMedia.map((media, ind) => (
                <RevealItem key={ind} trigger="viewport" direction="right">
                  <a href={media.href} key={media.name}>
                    <Image
                      src={media.icon}
                      alt={media.name}
                      width={30}
                      height={30}
                      className=" w-fit h-fit  transition-opacity hover:opacity-70"
                    />
                  </a>
                </RevealItem>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-end md:justify-start 2xl:justify-end flex-1 min-w-0 pb-[30px] md:pb-50 xl:pl-225 3xl:pl-[264px]  ">
            <nav className="pt-[30px] sm:pt-60 3xl:pt-50 md:pr-20">
              <ul className="flex flex-col gap-[30px] 3xl:gap-40">
                {navigationTitle.map((data, index) => (
            
                    <li
                      className="group"
                      key={index}
                      onMouseEnter={() =>
                        !isSubMenuOpen && setActiveIndex(index)
                      }
                      onMouseLeave={() =>
                        !isSubMenuOpen && setActiveIndex(null)
                      }
                      onClick={() => handleOpen(index)}
                    >
                      <a
                        className={`relative inline-flex flex-col w-fit ${shouldDim && activeIndex !== index ? "opacity-50" : "opacity:100"}`}
                      >
                        <span className="section-heading uppercase text-extra-dark transition-colors duration-300">
                          {data.nav}
                        </span>

                        <span
                          className="
        absolute
        left-0
        -bottom-1
        h-[3px]
        w-full
        bg-extra-dark
        origin-left
        scale-x-0
        transition-transform
        duration-500
        ease-out
        group-hover:scale-x-100
      "
                        />
                      </a>
                    </li>
                 
                ))}
              </ul>
            </nav>
            <AnimatePresence>
              {isSubMenuOpen && (
                <motion.div
                  key="submenu-panel"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  style={{ transformOrigin: "right" }}
                  className="md:hidden absolute inset-0 flex flex-col bg-primary"
                >
                  <div className="h-[90px] sm:h-[110px] shrink-0"></div>
                  <div className="container">
                    <div className="w-full h-px bg-black/20 mb-[30px]" />
                    <div className="flex items-center gap-20 mb-[10px]">
                      <span onClick={handleClose}>
                        <ChevronLeft
                          width={13}
                          height={13}
                          className="md:hidden h-[14px] w-auto text-extra-dark"
                        />
                      </span>
                      <span className="text-30 text-extra-dark">
                        {navigationTitle[activeIndex as number].nav}
                      </span>
                    </div>
                    <div className="flex flex-col pl-[36px]">
                      <AnimatePresence mode="wait">
                        {activeIndex !== null &&
                          navigationTitle[activeIndex].subNav && (
                            <motion.div
                              key={activeIndex}
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              className="flex flex-col gap-6"
                            >
                              <span className="text-19 text-extra-dark">
                                Overview
                              </span>
                              {navigationTitle[activeIndex].subNav.map(
                                (item) => (
                                  <motion.div
                                    key={item}
                                    variants={itemVariants}
                                    className="flex gap-[10px] sm:gap-20 items-center"
                                  >
                                    <span>
                                      <ChevronRight
                                        width={13}
                                        height={13}
                                        className="md:hidden h-[14px] w-auto text-extra-dark"
                                      />
                                    </span>
                                    <p className="text-19 text-extra-dark">
                                      {item}
                                    </p>
                                  </motion.div>
                                )
                              )}
                            </motion.div>
                          )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="md:border-black/20 md:border-l" />
          <div className="hidden md:flex flex-col  lg:min-w-[380px] 3xl:w-[674px] shrink-0 pl-50 3xl:pl-80">
            <div className="pt-10 flex flex-col gap-20 3xl:gap-30"></div>
            <div className="hidden md:flex flex-col gap-6">
              <AnimatePresence mode="wait">
                {activeIndex !== null &&
                  navigationTitle[activeIndex].subNav && (
                    <motion.div
                      key={activeIndex}
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="flex flex-col gap-6"
                    >
                      {navigationTitle[activeIndex].subNav.map((item) => (
                        <motion.p
                          key={item}
                          variants={itemVariants}
                          className="text-19 text-extra-dark"
                        >
                          {item}
                        </motion.p>
                      ))}
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
            <div className="mt-auto flex flex-col items-end pb-20 xl:pb-50 md:pt-80 2xl:pt-0 ">
              <a className="text-30 tracking-[-0.03em] text-extra-dark">
                mail@360-wellness.com
              </a>
              <a className="text-30 tracking-[-0.03em] text-extra-dark">
                +97143332175
              </a>
              <div className="hidden md:block lg:hidden shrink-0 mt-auto pb-60">
                <div className="flex flex gap-5 ">
                  {socialMedia.map((media) => (
                    <a href={media.href} key={media.name}>
                      <Image
                        src={media.icon}
                        alt={media.name}
                        width={30}
                        height={30}
                        className=" w-fit h-fit  transition-opacity hover:opacity-70"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden container">
          <div className="bg-black/20 h-px mb-[30px]" />

          <div className="flex flex-col gap-[2px] mb-[9px] sm:mb-20">
            <a className="text-30 tracking-[-0.03em] text-extra-dark">
              mail@360-wellness.com
            </a>
            <a className="text-30 tracking-[-0.03em] text-extra-dark">
              +97143332175
            </a>
          </div>
          <div className="flex gap-[30px] pb-[60px] sm:pb-50">
            {socialMedia.map((media) => (
              <a href={media.href} key={media.name}>
                <Image
                  src={media.icon}
                  alt={media.name}
                  width={30}
                  height={30}
                  className=" w-fit h-fit  transition-opacity hover:opacity-70"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopLayout
