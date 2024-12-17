import React from 'react';
import { MENU_ITEMS } from '../../constants/menu';

interface DropdownMenuProps {
  isOpen: boolean;
}

export default function DropdownMenu({ isOpen }: DropdownMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
      {MENU_ITEMS.map((item) => (
        <button
          key={item.id}
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}