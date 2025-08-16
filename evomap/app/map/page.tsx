'use client';

import dynamic from 'next/dynamic';
import { mockOutbreakData } from '@/lib/data/mockData';

// Dynamically import GlobalMap to avoid SSR issues with Leaflet
const GlobalMap = dynamic(() => import('@/components/maps/GlobalMap'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-96">Loading map...</div>
});

export default function MapPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Global Outbreak Map</h1>
      <p className="text-gray-600 mb-6">
        Interactive map showing active outbreaks around the world.
      </p>
      
      {/* Render the map and pass the complete outbreak data */}
      <GlobalMap outbreaks={mockOutbreakData} />
    </div>
  );
}
