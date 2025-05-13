'use client';

import React, { useState } from 'react';
import { Flavor, Order } from '@/types/flavor';
import OrderHistoryModal from './OrderHistoryModal';

const FLAVORS: Flavor[] = [
  { name: 'Vanilla', price: 2 },
  { name: 'Chocolate', price: 2.5 },
  { name: 'Strawberry', price: 2.2 },
];

export default function IceCreamBuilder() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [orderHistory, setOrderHistory] = useState<Order[]>([]);
  const [showModal, setShowModal] = useState(false);

  const increment = (flavor: string) => {
    setCounts(prev => ({ ...prev, [flavor]: (prev[flavor] || 0) + 1 }));
  };

  const decrement = (flavor: string) => {
    setCounts(prev => {
      const current = prev[flavor] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[flavor];
        return updated;
      }
      return { ...prev, [flavor]: current - 1 };
    });
  };

  const getTotal = () =>
    FLAVORS.reduce((sum, { name, price }) => sum + (counts[name] || 0) * price, 0);

  const handleAddToBasket = () => {
    const total = getTotal();
    if (total === 0) return;

    setOrderHistory(prev => [
      ...prev,
      { timestamp: new Date(), items: { ...counts }, total },
    ]);
    setCounts({});
  };

  const total = getTotal();

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">🍦 Ice Cream Builder</h1>
        <button onClick={() => setShowModal(true)} className="text-sm underline">
          Basket
        </button>
      </div>

      <div className="space-y-4">
        {FLAVORS.map(({ name, price }) => {
          const count = counts[name] || 0;
          return (
            <div
              key={name}
              className="flex justify-between items-center border p-3 rounded"
            >
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-sm text-gray-500">${price.toFixed(2)}</div>
              </div>
              <div className="flex items-center gap-2">
                {count > 0 && (
                  <button
                    onClick={() => decrement(name)}
                    className="px-2 py-1 border rounded"
                  >
                    −
                  </button>
                )}
                <span>{count}</span>
                <button
                  onClick={() => increment(name)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={handleAddToBasket}
        disabled={total === 0}
        className={`w-full mt-6 py-2 rounded font-semibold ${
          total === 0
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-orange-500 text-white hover:bg-orange-600'
        }`}
      >
        {total === 0 ? 'Add to basket' : `Add $${total.toFixed(2)} to basket`}
      </button>

      {showModal && (
        <OrderHistoryModal orders={orderHistory} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
