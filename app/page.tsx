import Banner from "@/components/sections/BannerSection/Index"
import Hero from "@/components/sections/HeroSection/Index"
import LongevityIndex from "@/components/sections/LongevitySection/index"
import { bannerData } from "@/components/sections/BannerSection/data/bannerData"
import AdvancedSection from "@/components/sections/AdvancedLongevitySection"
import BrandSection from "@/components/sections/BrandSection/Index"
import FormSection from "@/components/sections/FormSection/Index"
import IndustriesSection from "@/components/sections/IndustriesSection"
import WhyChooseSection from "@/components/sections/WhyChooseSection/Index"
import FooterSection from "@/components/sections/FooterSection/Index"

export default function Page() {
  return (
    <>
      <div className="relative">
        <Hero />
        <div className="sticky top-0 overflew-hidden">
          <Banner
            title="BESPOKE WELLNESS & LONGEVITY SOLUTIONS"
            description="Neurovanta equips businesses and individuals with advanced longevity
systems - purpose-built to strengthen wellness offerings, enhance client
outcomes and set a higher standard of care"
            features={bannerData.section1}
            descriptionMax_w="2xl:max-w-[52ch]"
          />
        </div>
        <div className="sticky top-0 overflew-hidden">
          <Banner
            title="WELLNESS SPACE DESIGN"
            description="From concept to completion, we design and deliver intelligent wellness environments that meet
the operational demands of modern wellness businesses."
            features={bannerData.section2}
            descriptionMax_w="2xl:max-w-[65ch]"
          />
        </div>
      </div>

      <LongevityIndex />

      <AdvancedSection />
      <WhyChooseSection />
      <IndustriesSection />
      <BrandSection />
      <FormSection />
      <FooterSection />
    </>
  )
}
