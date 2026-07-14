import Image from "next/image"

interface Props {
  imageSrc: string
  title: string
}

export default function LongevityCard({ imageSrc, title }: Props) {
  return (
    <article className="flex-none w-card-image">
      <div className="relative w-full aspect-553/550 overflow-hidden rounded-sm">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="553px"
        />
      </div>

      <h3 className="mt-5 text-30 font-light text-neutral-700">{title}</h3>
    </article>
  )
}
