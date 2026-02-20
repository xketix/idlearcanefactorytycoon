export type MarketOffer = {
  id: number;
  item_id: number;
  seller_id: number;
  price: number;
  stock: number;
};

export type Item = {
  id: number;
  item_name: string;
  unity_key: string;
  marketOffer?: MarketOffer;
};

export type ItemCardProps = {
  item: Listing;
};

export type IconProps = {
  stroke?: string;
  fill?: string;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number;
};

export type Listing = {
  id: string;
  item_name: string;
  item_id: number;
  quantity: number;
  price_per_item: number;
};

export type FetchItemsResponse = {
  data: Listing[];
  current_page: number;
  last_page: number;
  total: number;
};

export interface Character {
  name: string;
  activeImage: string;
  inactiveImage: string;
  description: string;
  fav: string;
  likes: string;
  dislikes: string;
}

export type ElementItem = {
  id: string;
  name: string;
  image: string;
  mageImage: string;
  description: string;
};

export type ItemListProps = {
  searchQuery: string;
};

export type PaginationProps = {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
};