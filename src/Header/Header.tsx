import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-custom-violet-900 text-custom-beige-100 font-share-tech-mono">
      <div className="block lg:hidden">
        <MobileHeader />
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
    </header>
  );
}
