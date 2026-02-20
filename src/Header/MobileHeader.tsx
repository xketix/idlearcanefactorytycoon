import { useState } from "react";
import Burger from "../Utils/Burger";
import Navigation from "./Navigation";
import SocialIcons from "../Components/SocialIcons/SocialIcons";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-custom-violet-900 text-custom-beige-100 font-share-tech-mono">
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm font-semibold tracking-wide">LOGO</span>
        <Burger open={open} setOpen={setOpen} />
      </div>

      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-[1500ms]
          ${open ? "max-h-[100vh]" : "max-h-0"}
          bg-custom-violet-700 shadow-md`}
      >
        <div className="flex flex-col items-center pt-24 pb-24 gap-10">
          <Navigation
            className="flex flex-col items-center gap-8 text-md tracking-wide"
            linkClass="transition-opacity hover:text-custom-teal-500"
            onLinkClick={() => setOpen(false)}
          />

          <SocialIcons size={30} />
        </div>
      </div>
    </header>
  );
}
