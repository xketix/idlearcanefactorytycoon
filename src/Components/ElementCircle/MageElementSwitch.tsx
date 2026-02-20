import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fire1 from "../../assets/Imgs/Wizards/Fire.png";
import fire2 from "../../assets/Imgs/Wizards/FireGray.png";
import fire3 from "../../assets/Imgs/Wizards/Fire.png";
import fire4 from "../../assets/Imgs/Wizards/FireGray.png";
import fire5 from "../../assets/Imgs/Wizards/Fire.png";
import fire6 from "../../assets/Imgs/Wizards/FireGray.png";
import WaterMage from "../../assets/Imgs/Wizards/WaterMage.png";
import EarthMage from "../../assets/Imgs/Wizards/EarthMage.png";
import FireMage from "../../assets/Imgs/Wizards/FireMage.png";
import LightMage from "../../assets/Imgs/Wizards/LightMage.png";
import DarknessMage from "../../assets/Imgs/Wizards/DarknessMage.png";
import WindMage from "../../assets/Imgs/Wizards/WindMage.png";
import type { ElementItem } from "../../Utils/Types";

const elements: ElementItem[] = [
  {
    id: "fire",
    name: "Feuer",
    image: fire1,
    mageImage: FireMage,
    description:
      "Der Feuer-Orb wird in Herstellungsprozessen eingesetzt, bei denen Materialien erhitzt, geschmolzen oder veredelt werden müssen. Es ist eine grundlegende Voraussetzung für die Verarbeitung von Metallen sowie für die Herstellung von Glas und ähnlichen Werkstoffen.",
  },
  {
    id: "water",
    name: "Wasser",
    image: fire2,
    mageImage: WaterMage,
    description:
      "Der Wasser-Orb spielt eine wichtige Rolle bei kühlenden und reinigenden Herstellungsprozessen. Es wird häufig verwendet, um Materialien zu stabilisieren, Mischungen zu verarbeiten oder bestimmte Arbeitsschritte kontrolliert abzuschließen.",
  },
  {
    id: "earth",
    name: "Erde",
    image: fire3,
    mageImage: EarthMage,
    description:
      "Der Erde-Orb steht für feste, natürliche Ressourcen und bildet die Grundlage vieler Herstellungsrezepte. Es wird vor allem bei der Verarbeitung von Erz, Stein und anderen mineralischen Materialien benötigt.",
  },
  {
    id: "wind",
    name: "Wind",
    image: fire4,
    mageImage: WindMage,
    description:
      "Der Wind-Orb wird bei Herstellungsprozessen eingesetzt, die Präzision oder Bewegung erfordern. Es unterstützt unter anderem die Verarbeitung leichter Materialien und spielt eine Rolle bei der Herstellung von Glas oder fein gearbeiteten Bauteilen.",
  },
  {
    id: "light",
    name: "Licht",
    image: fire5,
    mageImage: LightMage,
    description:
      "Der Licht-Orb kommt bei fortgeschrittenen oder besonders hochwertigen Herstellungsprozessen zum Einsatz. Es wird häufig für veredelte Gegenstände verwendet, bei denen Reinheit und Qualität eine zentrale Rolle spielen.",
  },
  {
    id: "darkness",
    name: "Dunkelheit",
    image: fire6,
    mageImage: DarknessMage,
    description:
      "Der Dunkelheits-Orb ermöglicht spezielle und experimentelle Herstellungsprozesse. Es wird für seltene oder instabile Materialien genutzt, deren Eigenschaften sich von herkömmlichen Werkstoffen deutlich unterscheiden.",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -120 : 120,
    opacity: 0,
  }),
};

const MageElementSwitch: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + elements.length) % elements.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % elements.length);
  };

  return (
    <section className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
      {/* Mage + Element */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <AnimatePresence>
            <motion.img
              key={elements[index].id}
              src={elements[index].mageImage}
              alt={`Wizard ${elements[index].name}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
            />
          </AnimatePresence>

          {/* Hand / Element */}
          <div className="absolute left-[84%] top-[39%] -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-[140px] h-[140px] lg:w-[238px] lg:h-[238px] overflow-hidden">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={elements[index].id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    src={elements[index].image}
                    alt={elements[index].name}
                    className="w-[160px] h-[160px] lg:w-[280px] lg:h-[280px] object-contain select-none pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={prev}
            className="relative px-6 py-2 text-lg font-share-tech-mono text-custom-violet-900 bg-custom-teal-500 rounded-sm border-2 border-custom-violet-900 shadow-md hover:bg-custom-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-custom-violet-900 cursor-pointer"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="relative px-6 py-2 text-lg font-share-tech-mono text-custom-violet-900 bg-custom-teal-500 rounded-sm border-2 border-custom-violet-900 shadow-md hover:bg-custom-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-custom-violet-900 cursor-pointer"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Textfeld */}
      <div className="w-full lg:w-[250px] mt-4 lg:mt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={elements[index].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-custom-violet-900 p-4 rounded shadow"
          >
            <h2 className="text-lg font-bold">{elements[index].name}</h2>
            <p className="text-sm mt-2">{elements[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MageElementSwitch;
