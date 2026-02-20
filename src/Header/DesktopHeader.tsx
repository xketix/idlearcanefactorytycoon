import SocialIcons from "../Components/SocialIcons/SocialIcons";
import Navigation from "./Navigation";

export default function DesktopHeader() {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-custom-violet-900 text-custom-beige-100 font-share-tech-mono  shadow-md">
      <div className="flex items-center justify-between px-10 py-4">
        <span className="text-lg font-semibold tracking-wide">LOGO</span>

        <Navigation
          className="flex gap-10 text-sm tracking-wide flex text-center"
          linkClass="transition-colors hover:text-custom-teal-500"
        />

        <SocialIcons />
      </div>
    </section>
  );
}
