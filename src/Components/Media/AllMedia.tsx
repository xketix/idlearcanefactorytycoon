import ImageGrid from "./ImageGrid";

import img1 from "../assets/imgs/Media/Mages.jpeg";
import img2 from "../assets/imgs/Media/Factory.jpeg";
import img3 from "../assets/imgs/Media/img_3.webp";

import Gear from "../../assets/Icons/Gear";
import HandCoin from "../../assets/Icons/HandCoin";
import Gamepad from "../../assets/Icons/Gamepad";
import Feature from "./Feature";
import type { Feature as FeatureInterface} from "../../Utils/Interfaces";

const features: FeatureInterface[] = [
  {
    Icon: Gear,
    title: "Magical Idle Factory Management",
    description:
      "Build and expand your own arcane production facility. Upgrade rooms, manage wizards, cast spells, and optimize your workflow — even while you’re offline.",
  },
  {
    Icon: HandCoin,
    title: "Player-Driven Online Market",
    description:
      "Trade resources in a living economy shaped by real players. Prices change with supply and demand, turning smart buying and selling into a powerful strategy tool.",
  },
  {
    Icon: Gamepad,
    title: "Relaxed Fantasy Tycoon Experience",
    description:
      "Enjoy short sessions, smooth progression, and a charming retro fantasy art style designed for casual and mobile-friendly gameplay.",
  },
];

const images = [img1, img2, img3, img1, img2, img3];

const AllMedia = () => {
  return (
    <div
      className="bg-[url('/src/assets/Imgs/Pattern/BG_linear.svg')]
        bg-no-repeat bg-center bg-top 
        px-10 lg:px-50 py-20"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-start flex-col gap-6">
          <h1 className="text-3xl font-share-tech-mono text-center">Features</h1>
          <div className="h-[1px] bg-custom-teal-500 w-20"></div>
        </div>

        <section id="features" className="flex gap-10 flex-col lg:flex-row">
          {features.map((f, idx) => (
            <Feature key={idx} Icon={f.Icon} title={f.title} description={f.description} />
          ))}
        </section>
      </div>

      <ImageGrid images={images} />
    </div>
  );
};

export default AllMedia;
