import React from "react";
import Double_Chevron_Down from "../../assets/Icons/Double_Chevron_Down";
import Full_Logo from "../../assets/Icons/Full_Logo";

const Hero: React.FC = () => {
  const scrollToDescription = () => {
    const next = document.getElementById("description");
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-[calc(100svh-72px)] flex flex-col items-center justify-center gap-10 relative"
    >
      <div className="hidden lg:block">
        <Full_Logo width={650} height={163} fill="#f2ede5" />
      </div>
      <div className="md:block hidden lg:hidden">
        <Full_Logo width={450} fill="#f2ede5" />
      </div>
      <div className="block md:hidden">
        <Full_Logo width={300} fill="#f2ede5" />
      </div>

      {/* Hero Button */}
      <div className="flex items-center w-full px-6">
        <div className="h-[1px] bg-custom-beige-100/50 flex-1"></div>
        <div className="border border-custom-beige-100/50 p-2 rounded-sm">
          <button
            className="cursor-pointer relative px-7 py-2 text-lg font-share-tech-mono
              text-custom-violet-900 bg-custom-teal-500 rounded-sm border-2 border-custom-violet-900
              shadow-md hover:bg-custom-teal-400 transition-colors
              focus:outline-none focus:ring-2 focus:ring-custom-violet-900
              after:absolute after:inset-0 after:border after:border-custom-teal-200 after:rounded-sm after:pointer-events-none"
          >
            BUY ON STEAM
          </button>
        </div>
        <div className="h-[1px] bg-custom-beige-100/50 flex-1"></div>
      </div>

      {/* Chevron */}
      <button
        onClick={scrollToDescription}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <Double_Chevron_Down width={25} height={25} fill="#f2ede5" />
      </button>
    </section>
  );
};

export default Hero;
