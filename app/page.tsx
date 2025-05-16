'use client';

import React, { useState } from 'react';
import { IceCreamCone, ShoppingBasket } from 'lucide-react';
import { MENU } from '@/types/menu';
import { useOrderManager } from '@/hooks/useOrderManager';
import OrderHistoryModal from '@/components/OrderHistoryModal';
import MenuItemCard from '@/components/MenuItemCard';
import Button from '@/components/ui/Button';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { counts, orderHistory, increment, decrement, getTotal, addToBasket, getItemId } = useOrderManager();
  const total = getTotal();

  const renderSection = (title: string, category: 'taste' | 'sauce' | 'nuts') => {
    const items = MENU.filter(item => item.category === category);
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <div className="space-y-4">
          {items.map((item) => {
            const id = getItemId(item.category, item.name);
            return (
              <MenuItemCard
                key={id}
                item={item}
                count={counts[id] || 0}
                onIncrement={() => increment(item.category, item.name)}
                onDecrement={() => decrement(item.category, item.name)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-[var(--background)] text-[var(--foreground)] font-sans">
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

        {renderSection('Taste', 'taste')}
        {renderSection('Sauce', 'sauce')}
        {renderSection('Nuts', 'nuts')}

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
    </div>
  );
}
