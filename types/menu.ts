export type MenuItem = {
  name: string;
  price: number;
  category: 'taste' | 'sauce' | 'nuts';
};

export type Order = {
  timestamp: Date;
  items: { [key: string]: number };
  total: number;
};

export const MENU: MenuItem[] = [
  // Taste
  { name: 'Caramel', price: 7, category: 'taste' },
  { name: 'Turron', price: 10, category: 'taste' },
  { name: 'Frisa', price: 8, category: 'taste' },
  { name: 'Chocolate', price: 7, category: 'taste' },
  { name: 'Lemon', price: 7, category: 'taste' },

  // Sauce
  { name: 'Caramel', price: 0, category: 'sauce' },
  { name: 'Chocolate', price: 0, category: 'sauce' },
  { name: 'Frisa', price: 0, category: 'sauce' },

  // Nuts
  { name: 'Pistachio', price: 5, category: 'nuts' },
  { name: 'Almond', price: 3, category: 'nuts' },
  { name: 'Chocolate', price: 2, category: 'nuts' },
]; 