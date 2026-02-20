import type { Character } from "../../Utils/Types";

interface TeamDetailsProps {
  activeChar: Character;
}

export default function TeamDetails({ activeChar }: TeamDetailsProps) {
  return (
    <div
      className="p-6 rounded-md shadow-md transition-opacity duration-300
      bg-custom-violet-900 text-custom-beige-200"
    >
      <h3 className="text-lg font-bold mb-4">{activeChar.name}</h3>

      <div className="flex flex-col md:flex-row md:gap-6 md:items-start">
        <p className="text-sm mb-4 leading-relaxed">
          {activeChar.description}
        </p>

        <table className="w-full text-sm md:min-w-2xs md:max-w-md">
          <tbody>
            <tr className="border-b">
              <td className="pb-3">Favourite Part:</td>
              <td className="pb-3">{activeChar.fav}</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Likes:</td>
              <td className="py-3">{activeChar.likes}</td>
            </tr>
            <tr>
              <td className="pt-3">Dislikes:</td>
              <td className="pt-3">{activeChar.dislikes}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
