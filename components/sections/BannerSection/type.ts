export interface Feature {
  id: string
  title: string
  image: string
}

export interface BannerProps {
  title: string
  description: string
  features: Feature[]
  descriptionMax_w: string
}

export interface DesktopBannerProps extends BannerProps {
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

export interface MobileBannerProps extends BannerProps {
  activeIndex: number
}
