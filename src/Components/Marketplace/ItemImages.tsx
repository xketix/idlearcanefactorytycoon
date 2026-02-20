import Iron from "../../assets/Imgs/Items/PixelIron.png";
import Stone from "../../assets/Imgs/Items/PixelStone.png";
import FireOrb from "../../assets/Imgs/Wizards/Fire.png";
import Clock from "../../assets/Imgs/Items/PixelClock.png";
import Wood from "../../assets/Imgs/Items/PixelWood.png";

export const itemImageMap: Record<string, string> = {
  "Water Orb": Iron,
  "Earth Orb": Stone,
  "Fire Orb": FireOrb,
  "Light Orb": Clock,
  "Darkness Orb": Wood
};

export const getItemImage = (itemId: string): string => {
  return itemImageMap[itemId] ?? Iron;
};