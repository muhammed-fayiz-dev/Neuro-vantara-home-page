import FooterColumn from "./FooterColumn"
import { footerLinks } from "../data/navigationData"

export default function FooterNavigation() {
  return (
    <div className="grid gap-16 md:grid-cols-3">
      {footerLinks.map((section) => (
        <FooterColumn
          key={section.title}
          section={section}
        />
      ))}
    </div>
  )
}