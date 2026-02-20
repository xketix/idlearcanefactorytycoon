import type { EmblaCarouselType } from "embla-carousel";
import type { Character } from "../../Utils/Types";

interface TeamCarouselProps {
  emblaRef: (node: HTMLElement | null) => void;
  emblaApi: EmblaCarouselType | undefined;
  characters: Character[];
  activeIndex: number;
}

export default function TeamCarousel({
  emblaRef,
  emblaApi,
  characters,
  activeIndex,
}: TeamCarouselProps) {
  return (
    <div className="overflow-x-hidden mb-6 lg:py-3 lg:px-2" ref={emblaRef}>
      <div className="flex gap-4 md:gap-6">
        {characters.map((char, index) => (
          <div
            key={char.name}
            className="flex-[0_0_70%] sm:flex-[0_0_40%] lg:flex-[0_0_22%] cursor-pointer"
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <img
              src={
                activeIndex === index
                  ? char.activeImage
                  : char.inactiveImage
              }
              alt={char.name}
              className={`w-full h-auto transition-transform duration-300 ${
                activeIndex === index
                  ? "scale-105"
                  : "scale-95 opacity-50"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
