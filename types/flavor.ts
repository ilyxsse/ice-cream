export type Flavor = {
  name: string;
  price: number;
  category: 'taste' | 'sauce' | 'nuts';
};

export type Order = {
  timestamp: Date;
  items: { [flavor: string]: number };
  total: number;
};
