import { useState } from 'react';
import { Order } from '@/types/flavor';
import { FLAVORS, SAUCES, NUTS } from '@/config/flavors';

type ItemCount = {
  [key: string]: number;
};

export function useOrderManager() {
  const [counts, setCounts] = useState<ItemCount>({});
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);

  const getItemId = (category: string, name: string) => `${category}:${name}`;

  const increment = (category: string, name: string) => {
    const id = getItemId(category, name);
    setCounts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (category: string, name: string) => {
    const id = getItemId(category, name);
    setCounts(prev => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  const getTotal = () => {
    const allItems = [...FLAVORS, ...SAUCES, ...NUTS];
    return allItems.reduce((sum, item) => {
      const id = getItemId(item.category, item.name);
      return sum + (counts[id] || 0) * item.price;
    }, 0);
  };

  const addToBasket = () => {
    const total = getTotal();
    if (total === 0) return;

    // Convert the counts object to a more readable format for the order history
    const formattedItems: { [key: string]: number } = {};
    Object.entries(counts).forEach(([id, count]) => {
      const [category, name] = id.split(':');
      formattedItems[`${name} (${category})`] = count;
    });

    setOrderHistory(prev => [
      ...prev,
      { timestamp: new Date(), items: formattedItems, total },
    ]);
    setCounts({});
  };

  return {
    counts,
    orderHistory,
    increment,
    decrement,
    getTotal,
    addToBasket,
    getItemId,
  };
} 