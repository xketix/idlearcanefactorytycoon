import Instagram from "../../assets/Icons/Instagram";
import Patreon from "../../assets/Icons/Patreon";
import Steam from "../../assets/Icons/Steam";

export default function SocialIcons({ size = 26, className = "" }) {
  return (
    <div className={`flex items-center gap-6 opacity-90 ${className}`}>
      <button className="hover:text-custom-teal-500 transition-colors">
        <Steam width={size} height={size} />
      </button>
      <button className="hover:text-custom-teal-500 transition-colors">
        <Patreon width={size - 2} height={size} />
      </button>
      <button className="hover:text-custom-teal-500 transition-colors">
        <Instagram width={size} height={size} />
      </button>
    </div>
  );
}
