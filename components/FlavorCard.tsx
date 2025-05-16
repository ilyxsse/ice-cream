import React from 'react';
import { Flavor } from '@/types/flavor';
import { Minus, Plus } from 'lucide-react';
import Button from './ui/Button';

interface FlavorCardProps {
  flavor: Flavor;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function FlavorCard({ flavor, count, onIncrement, onDecrement }: FlavorCardProps) {
  return (
    <div className="flex justify-between items-center border p-3 rounded">
      <div>
        <div className="font-medium">{flavor.name}</div>
        <div className="text-sm text-gray-500">
          {flavor.price === 0 ? 'FREE' : `${flavor.price.toFixed(2)} MAD`}
        </div>
      </div>
      <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
} 