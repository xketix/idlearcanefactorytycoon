import TeamShowcase from "../Components/AboutUs/TeamShowcase";

const AboutUs = () => {
  return (
    <div
      className="bg-[url('/src/assets/Imgs/Pattern/BG_linear.svg')]
        bg-no-repeat bg-center bg-top 
        px-10 lg:px-50 py-20"
    >
      <section className="flex flex-col items-start gap-6 ">
        <div className="flex flex-start flex-col gap-6">
          <h1 className=" text-3xl font-share-tech-mono">About Us</h1>
          <div className="h-[1px] bg-custom-teal-500 w-20"></div>
        </div>
        <p className="text-md">
          Hi, we are Nankaina Studio – a five-person team based in Hanover. This
          game idea originally started as a university project but has now grown
          into a true passion project. Our goal is to create a fantasy-themed
          idle game where players can not only gather resources and craft items
          but also trade with others on an online marketplace. We focus on fun
          gameplay, an intuitive crafting system, and a vibrant community that
          shapes the player experience together.
        </p>
      </section>

      <div className="">
        <section className="flex flex-col  py-20 gap-6 ">
          <div className="flex flex-start flex-col gap-6">
            <h1 className=" text-3xl font-share-tech-mono">Meet the Team</h1>
            <div className="h-[1px] bg-custom-teal-500 w-20"></div>
          </div>
          <TeamShowcase />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
