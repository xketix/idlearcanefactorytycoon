import type { EmblaCarouselType } from "embla-carousel";
import type { Character } from "../../Utils/Types";

interface TeamDotsProps {
  characters: Character[];
  activeIndex: number;
  emblaApi: EmblaCarouselType | undefined;
}

export default function TeamDots({
  characters,
  activeIndex,
  emblaApi,
}: TeamDotsProps) {
  return (
    <div className="flex justify-center gap-2 mb-6">
      {characters.map((_, index) => (
        <button
          key={index}
          onClick={() => emblaApi?.scrollTo(index)}
          className={`w-3 h-3 border-2 border-custom-beige-100 transition-all cursor-pointer ${
            activeIndex === index
              ? "bg-custom-beige-100 scale-110"
              : "bg-transparent opacity-50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
