import Image from "next/image"

interface Props {
  icon: string
}

const BrandCard = ({ icon }: Props) => {
  return (
    <article
      className="
        flex
        items-center
        justify-center
        border
        border-border-muted
        bg-white

        w-[156px]
        h-[107px]

        sm:w-[200px]
        sm:h-[160px]

        lg:w-[270px]
        lg:h-[185px]

        2xl:w-[280px]
        2xl:h-[190px]

        3xl:w-[366px]
        3xl:h-[250px]

        flex-shrink-0

        p-8

        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-md
      "
    >
      <Image
        src={icon}
        alt="Brand logo"
        width={180}
        height={80}
        className="h-auto w-full object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    </article>
  )
}

export default BrandCard