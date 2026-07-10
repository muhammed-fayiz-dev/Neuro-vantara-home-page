import React from "react"
import { contactData, socialMedia } from "../data/contactData"
import Image from "next/image"
import Section from "@/components/layout/SectionLayout"

const FooterBrand = () => {
  return (
    <Section className="pt-0">

      <h1
        className="
        w-full
        text-center
        text-brand
        leading-none
        font-light
        lowercase
        tracking-tight
        bg-neuro-gradient
        bg-clip-text
        text-transparent
        "
      >
        neuro vanta
      </h1>

      {/* Bottom */}
      <div className="mt-10 lg:mt-20 grid gap:12 md:gap-16 lg:grid-cols-[1fr_1.4fr]">
        {/* Address */}
        <div className="space-y-1 text-sm text-neutral-600">
          {contactData.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col  items-center ">
          <a
            href={`mailto:${contactData.email}`}
            className="text-3xl lg:text-5xl font-light text-extra-dark"
          >
            {contactData.email}
          </a>

          <a
            href={`tel:${contactData.phone}`}
            className="mt-4 text-3xl lg:text-5xl font-light text-extra-dark"
          >
            {contactData.phone}
          </a>

          {/* Social */}
          <div className="mt-8 flex gap-6">
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
    </Section>
  )
}

export default FooterBrand
