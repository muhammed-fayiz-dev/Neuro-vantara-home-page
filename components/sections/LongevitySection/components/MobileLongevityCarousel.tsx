"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { ImageData } from "../data/longevityCardData";
import LongevityCard from "./Card";

interface Props {
  images: ImageData[];
}

export default function MobileLongevityCarousel({ images }: Props) {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedSlide(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();

  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="md:hidden">
      {/* Embla Viewport */}
      <div
        ref={emblaRef}
        className="overflow-hidden"
      >
        {/* Embla Container */}
        <div className="flex items-center">
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_72%] px-3"
              animate={{
                scale: selectedSlide === index ? 1 : 0.82,
                opacity: selectedSlide === index ? 1 : 0.4,
                filter:
                  selectedSlide === index
                    ? "blur(0px)"
                    : "blur(1px)",
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >
              <LongevityCard
                imageSrc={item.image}
                title={item.footNote}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-900 hover:text-white"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition hover:bg-neutral-900 hover:text-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Pagination */}
      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedSlide === index
                ? "w-8 bg-neutral-900"
                : "w-2 bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}