export interface FeatureProps {
  Icon: React.FC<{ width: number; fill: string }>;
  title: string;
  description: string;
}

export interface Feature {
  Icon: React.FC<{ width: number; fill: string }>;
  title: string;
  description: string;
}

export interface SearchFieldProps {
  onSearch?: (query: string) => void;
}

export interface NavigationProps {
  className?: string;
  linkClass?: string;
  onLinkClick?: () => void;
}