import React from 'react';
import BusinessCard from './BusinessCard';

export default function BusinessGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* První řádek */}
      <BusinessCard />
      <BusinessCard />
      
      {/* Druhý řádek */}
      <BusinessCard />
      <BusinessCard />
    </div>
  );
}