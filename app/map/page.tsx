"use client";
import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import GlobalMap to avoid SSR issues with Leaflet
const DemoGlobalMap = dynamic(() => import('../../src/components/maps/GlobalMap'), { 
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-gray-200 flex items-center justify-center">Loading map...</div>
});

export default function MapPage() {
  const [error] = useState<string | null>(null);

  if (error) {
    return (
      <div className="max-w-7xl mx-auto py-8">
        <h2 className="text-2xl font-bold mb-4">Global Outbreak Map</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error loading map: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Global Outbreak Map</h2>
      <div className="bg-blue-50 p-4 rounded mb-4">
        <p className="text-sm text-blue-800">
          Interactive map showing outbreak locations worldwide. Use the time slider to filter by date.
        </p>
      </div>
      <DemoGlobalMap />
    </div>
  );
}