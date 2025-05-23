'use client';

import React from 'react';
import { Order } from '@/types/menu';
import { History, X } from 'lucide-react';
import Button from './ui/Button';

type Props = {
  orders: Order[];
  onClose: () => void;
};

export default function OrderHistoryModal({ orders, onClose }: Props) {
  const formatOrderItems = (items: { [key: string]: number }) => {
    const categories = {
      flavor: [] as string[],
      sauce: [] as string[],
      nut: [] as string[],
    };

    Object.entries(items).forEach(([item, quantity]) => {
      const [name, type] = item.split(' (');
      const cleanType = type.replace(')', '') as keyof typeof categories;
      if (cleanType === 'sauce') {
        categories[cleanType].push(name);
      } else {
        categories[cleanType].push(`${name} (x${quantity})`);
      }
    });

    return categories;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <Button
          variant="danger"
          icon={X}
          onClick={onClose}
          className="absolute right-4 p-1"
        />

        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <History /> Order History
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-sm">No past orders.</p>
        ) : (
          <ul className="space-y-6 max-h-72 overflow-y-auto pr-2">
            {orders.map((order, index) => {
              const categories = formatOrderItems(order.items);
              return (
                <li key={index} className="border p-4 rounded">
                  <div className="text-sm text-gray-400 mb-2">
                    {order.timestamp.toLocaleDateString()}, {order.timestamp.toLocaleTimeString()}
                  </div>
                  
                  {categories.flavor.length > 0 && (
                    <div className="mb-2">
                      <div className="font-medium">Flavors:</div>
                      {categories.flavor.map((item, i) => (
                        <div key={i} className="ml-2">{item}</div>
                      ))}
                    </div>
                  )}

                  {categories.sauce.length > 0 && (
                    <div className="mb-2">
                      <div className="font-medium">Sauces:</div>
                      {categories.sauce.map((item, i) => (
                        <div key={i} className="ml-2">{item}</div>
                      ))}
                    </div>
                  )}

                  {categories.nut.length > 0 && (
                    <div className="mb-2">
                      <div className="font-medium">Nuts:</div>
                      {categories.nut.map((item, i) => (
                        <div key={i} className="ml-2">{item}</div>
                      ))}
                    </div>
                  )}

                  <div className="text-right font-semibold mt-2 border-t pt-2">
                    Total: {order.total.toFixed(2)} MAD
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
