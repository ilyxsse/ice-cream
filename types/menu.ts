export interface MenuItem {
  id: string;
  name: string;
  price: number;
  type: 'flavor' | 'sauce' | 'nut';
}

export interface MenuData {
  flavors: MenuItem[];
  sauces: MenuItem[];
  nuts: MenuItem[];
}

export type Order = {
  timestamp: Date;
  items: { [key: string]: number };
  total: number;
};

export const menuData: MenuData = {
  flavors: [
    { id: 'caramel', name: 'Caramel', price: 7, type: 'flavor' },
    { id: 'turron', name: 'Turron', price: 10, type: 'flavor' },
    { id: 'frisa', name: 'Frisa', price: 8, type: 'flavor' },
    { id: 'chocolate', name: 'Chocolate', price: 7, type: 'flavor' },
    { id: 'lemon', name: 'Lemon', price: 7, type: 'flavor' }
  ],
  sauces: [
    { id: 'caramel-sauce', name: 'Caramel', price: 0, type: 'sauce' },
    { id: 'chocolate-sauce', name: 'Chocolate', price: 0, type: 'sauce' },
    { id: 'frisa-sauce', name: 'Frisa', price: 0, type: 'sauce' }
  ],
  nuts: [
    { id: 'pistachio', name: 'Pistachio', price: 5, type: 'nut' },
    { id: 'almond', name: 'Almond', price: 3, type: 'nut' },
    { id: 'chocolate-nut', name: 'Chocolate', price: 2, type: 'nut' }
  ]
}; 