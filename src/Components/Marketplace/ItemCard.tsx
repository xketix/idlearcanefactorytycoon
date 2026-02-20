import type { ItemCardProps } from "../../Utils/Types";
import { getItemImage } from "./ItemImages";
import Coin from "../../assets/Imgs/Items/PixelCoin.png";

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="flex bg-custom-violet-900 py-2 rounded-md shadow-md items-center">
      <div className="flex flex-1 rounded-l-md py-3 pl-3 items-center gap-3">
        <img
          src={getItemImage(item.item_name)}
          alt={`Item ${item.item_name}`}
          className="w-12 h-12 object-contain ml-3"
          loading="eager"
        />
        <p>{item.item_name}</p>
      </div>

      <div className="flex flex-1 rounded-l-md py-3 pr-3 items-center gap-10">
        <div className="flex-1 py-3 text-center justify-center">
          {item.quantity}
        </div>

        <div className="flex flex-1 rounded-r-md py-3 items-center justify-center">
          <p>{item.price_per_item}</p>
          <img
            src={Coin}
            alt={`${item.item_name}`}
            className="w-6 h-6 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
