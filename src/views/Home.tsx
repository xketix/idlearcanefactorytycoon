import React from "react";
import Hero from "../Components/Home/Hero";
import Description from "../Components/Home/Description";
import Elements from "../Components/Home/Elements";

const Home: React.FC = () => {
  return (
    <div
      id="bg-container"
      className="bg-[url('/src/assets/Imgs/Pattern/BG_radial.svg')] bg-no-repeat bg-center bg-top min-h-screen w-full lg:px-50 px-10"
    >
      <Hero />
      <Description />
      <div className="h-[1px] bg-custom-beige-100/50 flex-1"></div>
      <Elements />
    </div>
  );
};

export default Home;
