'use client';

import React, { useState } from 'react';
import { IceCreamCone, ShoppingBasket, X } from 'lucide-react';
import { menuData } from '@/types/menu';
import { useOrderManager } from '@/hooks/useOrderManager';
import OrderHistoryModal from '@/components/OrderHistoryModal';
import MenuItemCard from '@/components/MenuItemCard';
import Button from '@/components/ui/Button';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const { counts, orderHistory, increment, decrement, getTotal, addToBasket, getItemId, resetOrder } = useOrderManager();
  const total = getTotal();
  const hasItems = Object.keys(counts).length > 0;

  const renderSection = (title: string, category: 'flavor' | 'sauce' | 'nut') => {
    const items = category === 'flavor' ? menuData.flavors :
                 category === 'sauce' ? menuData.sauces :
                 menuData.nuts;
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <div className="space-y-4">
          {items.map((item) => {
            const id = getItemId(item.type, item.name);
            return (
              <MenuItemCard
                key={id}
                item={item}
                count={counts[id] || 0}
                onIncrement={() => increment(item.type, item.name)}
                onDecrement={() => decrement(item.type, item.name)}
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
            onClick={() => setShowModal(true)}
            className="p-1 hover:bg-orange-500"
          >
            <ShoppingBasket size={30} />
          </Button>
        </div>

        {renderSection('Taste', 'flavor')}
        {renderSection('Sauce', 'sauce')}
        {renderSection('Nuts', 'nut')}

        <div className="flex gap-3 mt-6">
          <Button
            onClick={addToBasket}
            disabled={!hasItems}
            fullWidth
            className="py-2"
          >
            {!hasItems ? 'Add to basket' : `Add ${total.toFixed(2)} MAD to basket`}
          </Button>
          {hasItems && (
            <Button
              variant="danger"
              onClick={resetOrder}
              className="py-2 px-4"
            >
              Cancel
            </Button>
          )}
        </div>

        {showModal && (
          <OrderHistoryModal orders={orderHistory} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
}
