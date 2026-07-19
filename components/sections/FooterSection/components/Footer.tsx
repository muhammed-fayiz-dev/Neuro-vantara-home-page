import Section from "@/components/layout/SectionLayout"
import FooterNavigation from "./FooterNavigation"

export default function Footer() {
  return (
    <Section className="pt-0">
      <div className=" border-t border-border-muted pt-20">
        <FooterNavigation />
      </div>
    </Section>
  )
}
