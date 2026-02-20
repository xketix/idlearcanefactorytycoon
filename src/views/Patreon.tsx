import Patreons from "../Components/Patreon/Patreons";

const Patreon = () => {
  return (
    <section
      className="flex flex-col items-start gap-6 py-20 lg:px-50 px-10 bg-[url('/src/assets/Imgs/Pattern/BG_linear_Mobile.svg')]
      lg:bg-[url('/src/assets/Imgs/Pattern/BG_linear.svg')]
        bg-repeat md:bg-no-repeat bg-center bg-top bg-fixed"
    >
      <div className="flex flex-col justify-start items-start gap-4">
        <h1 className="flex flex-col text-3xl justify-start font-share-tech-mono gap-2">
          Thank You!
        </h1>
        <div className="h-[1px] bg-custom-teal-500 w-20"></div>
        <p className="text-md">
          This project wouldn't exist without you. Your support makes everything
          possible - thank you for being part of this journey! {"<3"}{" "}
        </p>
      </div>
      <Patreons />
    </section>
  );
};

export default Patreon;
