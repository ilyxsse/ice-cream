'use client';

import React, { useState } from 'react';
import { IceCreamCone, ShoppingBasket } from 'lucide-react';
import { FLAVORS, SAUCES, NUTS } from '@/config/flavors';
import { useOrderManager } from '@/hooks/useOrderManager';
import OrderHistoryModal from './OrderHistoryModal';
import FlavorCard from './FlavorCard';
import Button from './ui/Button';

export default function IceCreamBuilder() {
  const [showModal, setShowModal] = useState(false);
  const { counts, orderHistory, increment, decrement, getTotal, addToBasket, getItemId } = useOrderManager();
  const total = getTotal();

  const renderSection = (title: string, items: typeof FLAVORS) => (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="space-y-4">
        {items.map((item) => {
          const id = getItemId(item.category, item.name);
          return (
            <FlavorCard
              key={id}
              flavor={item}
              count={counts[id] || 0}
              onIncrement={() => increment(item.category, item.name)}
              onDecrement={() => decrement(item.category, item.name)}
            />
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <IceCreamCone /> Ice Cream Builder
        </h1>
        <Button
          variant="secondary"
          icon={ShoppingBasket}
          onClick={() => setShowModal(true)}
        />
      </div>

      {renderSection('Taste', FLAVORS)}
      {renderSection('Sauce', SAUCES)}
      {renderSection('Nuts', NUTS)}

      <Button
        onClick={addToBasket}
        disabled={total === 0}
        fullWidth
        className="mt-6 py-2"
      >
        {total === 0 ? 'Add to basket' : `Add ${total.toFixed(2)} MAD to basket`}
      </Button>

      {showModal && (
        <OrderHistoryModal orders={orderHistory} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
