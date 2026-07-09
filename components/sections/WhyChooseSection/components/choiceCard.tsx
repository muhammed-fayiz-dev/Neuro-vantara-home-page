import Image from "next/image";

interface ChoiceCardProps {
  icon: string;
  title: string;
  description?: string;
}

export function ChoiceCard({
  icon,
  title,
  description,
}: ChoiceCardProps) {
  return (
   <article
  className="
    group
    flex min-h-[320px] flex-col
    border-r border-white
    bg-secondary
    px-8 py-8
    transition-colors duration-300 ease-in-out
    hover:bg-[#c4aa8d]
    
  "
>
  {/* Icon */}
  <div>
    <Image
      src={icon}
      alt={title}
      width={36}
      height={36}
      className="transition duration-300
    group-hover:brightness-0
    group-hover:invert"
    />
  </div>

  {/* Content */}
  <div className="mt-auto">
    <h3 className="text-xl font-light text-dark transition-colors duration-300 group-hover:text-white">
      {title}
    </h3>

    {description && (
      <p className="mt-4 text-sm leading-7 text-neutral-600 transition-colors duration-300 group-hover:text-white/90">
        {description}
      </p>
    )}
  </div>
</article>
  );
}