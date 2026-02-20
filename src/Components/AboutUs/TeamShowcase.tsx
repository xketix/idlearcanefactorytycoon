import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { characters } from "./Characters";

import TeamCarousel from "./TeamCarousel";
import TeamDots from "./TeamDots";
import TeamDetails from "./TeamDetails";

export default function TeamShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: false,
    containScroll: "keepSnaps",
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="mx-auto">
      <TeamCarousel
        emblaRef={emblaRef}
        emblaApi={emblaApi}
        characters={characters}
        activeIndex={activeIndex}
      />

      <TeamDots
        characters={characters}
        activeIndex={activeIndex}
        emblaApi={emblaApi}
      />

      <TeamDetails activeChar={characters[activeIndex]} />
    </div>
  );
}
