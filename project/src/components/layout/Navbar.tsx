import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import SearchBar from '../ui/SearchBar';
import DropdownMenu from '../ui/DropdownMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            Logo
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl px-4">
            <SearchBar />
          </div>

          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600">
              Přihlášení
            </a>
            <a href="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Registrace
            </a>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-4 p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <DropdownMenu isOpen={isMenuOpen} />
    </nav>
  );
}