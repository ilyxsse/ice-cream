export type Flavor = {
  name: string;
  price: number;
};

export type Order = {
  timestamp: Date;
  items: { [flavor: string]: number };
  total: number;
};
