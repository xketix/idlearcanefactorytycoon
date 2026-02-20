import { useState } from "react";
import ItemList from "../Components/Marketplace/ItemList";
import SearchField from "../Components/Marketplace/SearchField";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col items-center justify-center  py-20 px-4 bg-[url('/src/assets/Imgs/Pattern/BG_linear_Mobile.svg')] md:bg-[url('/src/assets/Imgs/Pattern/BG_linear.svg')] bg-no-repeat bg-top bg-center">
      <section className="flex flex-col items-center gap-4">
        {/* <h1 className="font-share-tech-mono text-4xl">Marketplace</h1>
        <p className="text-center">
          Behold the treasures currently roaming the market.
        </p> */}

        <div className="flex flex-col items-start gap-4">
          <h1 className="flex flex-col text-3xl justify-center font-share-tech-mono gap-2 md:flex-row md:gap-6">
            Marketplace
          </h1>
          <div className="h-[1px] bg-custom-teal-500 w-20"></div>
          <p>Behold the treasures currently roaming the market.</p>
        </div>

        
      

      <SearchField onSearch={setSearchQuery} />

      <ItemList searchQuery={searchQuery} />
      </section>
    </div>
  );
};

export default Marketplace;
