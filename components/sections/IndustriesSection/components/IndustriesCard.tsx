import Image from "next/image";

interface Props {
  title: string;
}

const IndustriesCard:React.FC<Props>=({ title })=> {
  return (
    <article
      className="
        group
        flex
        items-center
        justify-between
        border-t
        border-border-default
        py-6
        transition-colors
        duration-300
      "
    >
      <h3
        className="
          text-lg
          text-extra-dark
          transition-colors
          duration-300
          group-hover:text-dark
        "
      >
        {title}
      </h3>

      <Image
        src="/icon/arrow-to-top-right.svg"
        alt=""
        width={28}
        height={28}
        className="
          opacity-0
          -translate-x-2
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </article>
  );
}

export default IndustriesCard