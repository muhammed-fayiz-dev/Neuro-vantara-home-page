export interface SocialMedia {
  name: string;
  icon: string;
  href: string;
}

export const socialMedia: SocialMedia[] = [
  {
    name: "Facebook",
    icon: "/icon/media/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "/icon/media/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "/icon/media/linkedin.svg",
    href: "https://linkedin.com",
  },
  {
    name: "YouTube",
    icon: "/icon/media/youtube.svg",
    href: "https://youtube.com",
  },
];

export const contactData = {
  company: "Neuro Vanta",

  address: [
    "P.O. Box 13653, 901 – SIT Tower",
    "Dubai Silicon Oasis",
    "Dubai, UAE",
  ],

  email: "mail@360-wellness.com",

  phone: "+97143332175",
};