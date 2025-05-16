import React from 'react';
import { MenuItem } from '@/types/menu';
import { Minus, Plus } from 'lucide-react';
import Button from './ui/Button';

interface MenuItemCardProps {
  item: MenuItem;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function MenuItemCard({ item, count, onIncrement, onDecrement }: MenuItemCardProps) {
  const isSauce = item.type === 'sauce';

  return (
    <div className="flex justify-between items-center border p-3 rounded">
      <div>
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500">
          {item.price === 0 ? 'FREE' : `${item.price.toFixed(2)} MAD`}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isSauce ? (
          <Button
            variant={count > 0 ? "danger" : "success"}
            icon={count > 0 ? Minus : Plus}
            onClick={count > 0 ? onDecrement : onIncrement}
            className="p-1"
          />
        ) : (
          <>
            {count > 0 && (
              <Button
                variant="danger"
                icon={Minus}
                onClick={onDecrement}
                className="p-1"
              />
            )}
            <span>{count}</span>
            <Button
              variant="success"
              icon={Plus}
              onClick={onIncrement}
              className="p-1"
            />
          </>
        )}
      </div>
    </div>
  );
} 