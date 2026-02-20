import React from "react";
import FireWizard from "../../assets/Imgs/Wizards/FireMageElement.png";

const Description: React.FC = () => {
  return (
    <section id="description" className="flex w-full py-50">
      <div className="flex flex-col justify-center items-start gap-6 w-full">
        <div className="flex justify-start items-end gap-4">
          <h1 className="flex flex-col text-3xl justify-start font-share-tech-mono gap-2 md:flex-row md:gap-6">
            <span>Build Magic.</span>
            <span>Trade Smart.</span>
            <span>Rule the Market.</span>
          </h1>
          <img
            src={FireWizard}
            alt="Fire Wizard"
            className="h-auto object-contain md:hidden lg:hidden sm:block w-[20%]"
          />
        </div>

        <div className="h-[1px] bg-custom-teal-500 w-20"></div>

        <p className="text-md">
          Nankaina Studio proudly presents Idle Arcane Factory Tycoon – a fun
          and lovingly crafted idle game that combines classic tycoon mechanics
          with a charming fantasy world. Players take on the role of a factory
          manager who oversees a magical production facility. Prices constantly
          shift based on global player activity — supply and demand shape the
          economy in real time. Sell products when rare to maximize profit or
          buy when prices drop. The goal is to build an increasingly complex and
          productive magic factory through smart planning, clever upgrades, and
          strategic use of magic.
        </p>
      </div>
      <img
        src={FireWizard}
        alt="Fire Wizard"
        className="h-auto object-contain hidden lg:block md:block"
      />
    </section>
  );
};

export default Description;
