import type { ItemListProps } from "../../Utils/Types";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
import { UseItems } from "./UseItems";

const ItemList: React.FC<ItemListProps> = ({ searchQuery }) => {
  const { items, loading, currentPage, lastPage, setCurrentPage } =
    UseItems(searchQuery);

  return (
    <div className="flex flex-col gap-2 mt-5 w-full max-w-lg">
      {/* Header */}
      <div className="flex gap-2">
        <div className="font-share-tech-mono flex-1 bg-custom-violet-900 rounded-l-md py-3 pl-3 pr-20 text-md">
          Name
        </div>
        <div className="font-share-tech-mono flex-1 bg-custom-violet-900 py-3 text-center text-md">
          Quantity
        </div>
        <div className="font-share-tech-mono flex-1 bg-custom-violet-900 rounded-r-md py-3 text-center text-md">
          Price
        </div>
      </div>

      {/* Listings */}
      {loading ? (
        <p className="text-center text-white mt-4">Loading...</p>
      ) : items.length > 0 ? (
        items.map((item) => <ItemCard key={item.id} item={item} />)
      ) : (
        <p className="text-center text-sm opacity-70 mt-4">
          Keine Treffer gefunden
        </p>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ItemList;
