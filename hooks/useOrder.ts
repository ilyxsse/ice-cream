import { useState, useCallback } from 'react';
import { MenuItem } from '../types/menu';

export function useOrder() {
  const [order, setOrder] = useState<MenuItem[]>([]);

  const addItem = useCallback((item: MenuItem) => {
    setOrder(prev => [...prev, item]);
  }, []);

  const removeItem = useCallback((itemId: string) => {
    setOrder(prev => prev.filter(item => item.id !== itemId));
  }, []);

  const clearOrder = useCallback(() => {
    setOrder([]);
  }, []);

  const hasItems = order.length > 0;
  const totalPrice = order.reduce((sum, item) => sum + item.price, 0);

  return {
    order,
    addItem,
    removeItem,
    clearOrder,
    hasItems,
    totalPrice
  };
} 