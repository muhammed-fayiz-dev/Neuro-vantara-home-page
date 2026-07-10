export interface FooterSection {
  title: string
  columns: {
    links: {
      label: string
      href: string
    }[]
  }[]
}

export const footerLinks: FooterSection[] = [
  {
    title: "Solutions",
    columns: [
      {
        links: [
          { label: "Bespoke Wellness & Longevity Solutions", href: "#" },
          { label: "Well Space Design", href: "#" },
        ],
      },
    ],
  },

  {
    title: "Longevity Systems",
    columns: [
      {
        links: [
          { label: "Recovery & Regeneration Systems", href: "#" },
          { label: "Oxygen & Cellular Enhancement", href: "#" },
          { label: "Thermal Detoxification", href: "#" },
          { label: "Light & Photo Biomodulation", href: "#" },
        ],
      },
      {
        links: [
          { label: "Neuro & Cognitive Optimization", href: "#" },
          { label: "Metabolic & Performance Optimization", href: "#" },
          { label: "Diagnostics & Bio-Monitoring", href: "#" },
          { label: "Mind–Body Immersion Experiences", href: "#" },
        ],
      },
    ],
  },

  {
    title: "Quick Links",
    columns: [
      {
        links: [
          { label: "About Neuro Vanta", href: "#" },
          { label: "Careers", href: "#" },
          { label: "The Neuro Vanta Journey", href: "#" },
        ],
      },
    ],
  },
]