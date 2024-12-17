import React from 'react';

interface AdvertisementProps {
  position: 'left' | 'right';
}

export default function Advertisement({ position }: AdvertisementProps) {
  return (
    <div className="hidden lg:block w-32 h-[600px] bg-white rounded-lg shadow-md">
      <div className="p-4 text-center text-gray-500">
        Reklama ({position})
      </div>
    </div>
  );
}