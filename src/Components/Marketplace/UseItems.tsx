import { useEffect, useState } from "react";
import type { Listing } from "../../Utils/Types";
import { getMarketplaceItems } from "../../Utils/ApiRequests";

export function UseItems(searchQuery: string) {
  const [items, setItems] = useState<Listing[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchItems = async (page: number) => {
    setLoading(true);
    try {
      const data = await getMarketplaceItems(page, 1, searchQuery);
      setItems(data.data);
      setLastPage(data.last_page);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage, searchQuery]);

  return {
    items,
    loading,
    currentPage,
    lastPage,
    setCurrentPage,
  };
}
