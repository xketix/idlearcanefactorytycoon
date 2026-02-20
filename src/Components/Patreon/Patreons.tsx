import Kathleen from "../../assets/imgs/team/Kathleen_lg.png";
import Manu from "../../assets/imgs/team/Manu_lg.png";
import Finn from "../../assets/imgs/team/Finn_lg.png";
import Nizar from "../../assets/imgs/team/Nizar_lg.png";
import Tobi from "../../assets/imgs/team/Tobi_lg.png";

const characters = [
  {
    name: "Kathleen",
    activeImage: Kathleen,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
  {
    name: "Manuel",
    activeImage: Manu,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
  {
    name: "Nizar",
    activeImage: Nizar,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
  {
    name: "Finn",
    activeImage: Finn,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
  {
    name: "Tobi",
    activeImage: Tobi,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
  {
    name: "Julian",
    activeImage: Kathleen,
    since: "14.11.2025",
    placeholder: "Placeholder",
  },
];

export default function Patreons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-2">
      {characters.map((char, index) => (
        <div
          key={index}
          className="max-w-sm mx-auto flex flex-col bg-custom-violet-900 p-4 rounded-md"
        >
          {/* Image */}
          <div>
            <img
              src={char.activeImage}
              alt={char.name}
              className="w-full object-cover rounded-t-md"
            />
          </div>

          {/* Stats as divs */}
          <div className="bg-custom-violet-500 rounded-b-md overflow-hidden px-4 text-sm">
            <div className="flex justify-between py-4 border-b border-custom-beige-100">
              <span>Name:</span>
              <span>{char.name}</span>
            </div>
            <div className="flex justify-between py-4 border-b border-custom-beige-100">
              <span>Supporter since:</span>
              <span>{char.since}</span>
            </div>
            <div className="flex justify-between py-4">
              <span>Placeholder:</span>
              <span>{char.placeholder}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
