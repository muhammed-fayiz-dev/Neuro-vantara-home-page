import Section from "@/components/layout/SectionLayout"
import ContactForm from "./components/ContactForm"
import RevealItem from "@/components/animations/RevealItem"

const FormSection = () => {
  return (
    <Section className="bg-secondary overflew-hidden">
      <div className="mb-[30px] sm:mb-60 md:mb-100">
        {/* Left */}
      
          <RevealItem className="section-heading mb-[5px] sm:mb-20">
            Where Intelligence Meets Longevity
          </RevealItem>

          <RevealItem className=" text-150 uppercase  leading-none text-extra-dark">
            Begin Here.
          </RevealItem>
      </div>
       

        {/* Right */}
        <ContactForm />
    </Section>
  )
}

export default FormSection
