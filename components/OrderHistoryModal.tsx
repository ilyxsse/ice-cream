'use client';

import React from 'react';
import { Order } from '@/types/flavor';
import { History, X } from 'lucide-react';

type Props = {
  orders: Order[];
  onClose: () => void;
};

export default function OrderHistoryModal({ orders, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute right-4 rounded hover:bg-red-700"
        >
          <X />
        </button>

        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          <History /> Order History
        </h2>

        {orders.length === 0 ? (
          <p className="text-gray-500 text-sm">No past orders.</p>
        ) : (
          <ul className="space-y-4 max-h-72 overflow-y-auto pr-2">
            {orders.map((order, index) => (
              <li key={index} className="border p-3 rounded">
                <div className="text-xs text-gray-400">
                  {order.timestamp.toLocaleString()}
                </div>
                <ul className="text-sm mt-1">
                  {Object.entries(order.items).map(([flavor, qty]) => (
                    <li key={flavor}>
                      {flavor}: {qty}
                    </li>
                  ))}
                </ul>
                <div className="text-right font-semibold mt-2">
                  Total: {order.total.toFixed(2)} MAD
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
