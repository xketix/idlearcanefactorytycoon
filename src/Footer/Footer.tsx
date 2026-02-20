import Instagram from "../assets/Icons/Instagram";
import Steam from "../assets/Icons/Steam";
import Full_Logo from "../assets/Icons/Full_Logo";
import Patreon from "../assets/Icons/Patreon";

const hoverClass = "hover:text-custom-teal-500";

export default function Footer() {
  return (
    <footer className="w-screen bg-custom-violet-900 text-custom-beige-100 px-6 lg:px-10 py-10 lg:py-20 flex flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-10 lg:gap-15 lg:flex-row lg:justify-center lg:items-start ">
        {/* Published By */}
        <div className="flex flex-col gap-3">
          <h3 className="text-sm ">Published by</h3>
          <Full_Logo width={150} height={40} fill="#f2ede5" />
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <span className="text-sm ">Social Media</span>
          <div className="flex gap-5 items-center">
            <button className={hoverClass}>
              <Steam width={26} height={26} />
            </button>
            <button className={hoverClass}>
              <Patreon width={24} height={26} />
            </button>
            <button className={hoverClass}>
              <Instagram width={26} height={26} />
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-2 text-sm">
          <span className="">Contact</span>
          <span className={`text-xs ${hoverClass} cursor-pointer`}>
            nankaina@example.com
          </span>
          <span className={`text-xs ${hoverClass} cursor-pointer`}>
            +49 1234 5678900
          </span>
          <span className={`text-xs ${hoverClass} cursor-pointer`}>
            Am Marstall 1a, 30159 Hannover
          </span>
        </div>

        
      </div>
     
      {/* Copyright */}
        <div className="flex lg:justify-center text-sm lg:border-t lg:border-custom-beige-200 lg:pt-6 lg:mx-50">
          © Nankaina Studio. All rights reserved.
        </div>
    </footer>
  );
}
