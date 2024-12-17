import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Vyhledat..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
    </div>
  );
}