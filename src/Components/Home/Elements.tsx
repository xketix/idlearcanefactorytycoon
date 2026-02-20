import React from "react";
import CircleCarousel from "../ElementCircle/MageElementSwitch";

const Elements: React.FC = () => {
  return (
    <section id="elements" className="flex flex-col gap-6 py-50 w-full">
      <h1 className="text-3xl font-share-tech-mono">Elements</h1>
      <div className="h-[1px] bg-custom-teal-500 w-20"></div>
      <CircleCarousel />
    </section>
  );
};

export default Elements;
