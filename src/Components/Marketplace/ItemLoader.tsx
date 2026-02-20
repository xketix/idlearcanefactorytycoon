import { getItems } from "../../Utils/ApiRequests";

export const ItemsLoader = async () => {
  const response = await getItems();
  console.log("Items in Loader:", response);

  return { listings: response.Listings ?? [] };
};
