import { FC } from "react"

interface BannerFeatureProps {
  id: string
  title: string
  active: boolean
  onClick: () => void
}

const BannerFeature: FC<BannerFeatureProps> = ({
  id,
  title,
  active,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="group flex flex-col">
      <span
        className={`"text-19 mb-[14px]  ${active ? "text-white" : "text-white/80"}`}
      >
        {id}
      </span>

      <h3
        className={`"text-19 mb-[24px]  ${active ? "text-white" : "text-white/80"}`}
      >
        {title}
      </h3>

      <div
        className={`
        h-px
        transition-all
        duration-500
        ${active ? "bg-white" : "bg-white/30"}
    `}
      />
    </div>
  )
}

export default BannerFeature
