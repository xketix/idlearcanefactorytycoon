import axios from "axios";

export const getItems = async (page = 1, perPage = 16) => {
  const response = await axios.get("http://127.0.0.1:8000/api/marketlistings", {
    params: { page, per_page: perPage },
  });
  return response.data;
};

export const getMarketplaceItems = async (
  page = 1,
  perPage = 1,
  search?: string,
) => {
  const response = await axios.get("http://127.0.0.1:8000/api/marketlistings", {
    params: {
      page,
      per_page: perPage,
      search: search || undefined,
    },
  });

  return response.data;
};
