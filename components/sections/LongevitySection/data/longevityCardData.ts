export interface LongevityCardDataType {
  id: number
  imageSrc: ImageData[]
  title: string
}

export interface ImageData {
  image: string
  footNote: string
}

const longevityCardData: LongevityCardDataType[] = [
  {
    id: 1,
    imageSrc: [
      {
        image: "/longevity_files/Longevity-card-image-1.png",
        footNote: "Infrared Saunas",
      },
      {
        image: "/longevity_files/Longevity-card-image-2.jpg",
        footNote: "Salt Therapy Rooms (Halotherapy)",
      },
      {
        image: "/longevity_files/Longevity-card-image-3.jpg",
        footNote: "Finnish Sauna",
      },
    ],
    title: "Recovery & Regeneration Therapies",
  },
  {
    id: 2,
    imageSrc: [
      {
        image: "/longevity_files/Longevity-card-image-1.png",
        footNote: "Hyperbaric Oxygen Therapy",
      },
      {
        image: "/longevity_files/Longevity-card-image-4.jpg",
        footNote: "Cryotherapy Chamber",
      },
    ],
    title: "Oxygen & Cellular Enhancement",
  },
  {
    id: 3,
    imageSrc: [
      {
        image: "/longevity_files/Longevity-card-image-2.jpg",
        footNote: "Salt Therapy Rooms (Halotherapy)",
      },
      {
        image: "/longevity_files/Longevity-card-image-3.jpg",
        footNote: "Finnish Sauna",
      },
    ],
    title: "Thermal Detoxification",
  },
  {
    id: 4,
    imageSrc: [
      {
        image: "/longevity_files/Longevity-card-image-4.jpg",
        footNote: "Red Light Therapy",
      },
      {
        image: "/longevity_files/Longevity-card-image-1.png",
        footNote: "Near Infrared Therapy",
      },
    ],
    title: "Light & Photobiomodulation",
  },
  {
    id: 5,
    imageSrc: [
      {
        image: "/longevity_files/Longevity-card-image-2.jpg",
        footNote: "Neurofeedback",
      },
      {
        image: "/longevity_files/Longevity-card-image-1.png",
        footNote: "Brain Stimulation Therapy",
      },
    ],
    title: "Neuro & Cognitive Optimization",
  },
]

export default longevityCardData
