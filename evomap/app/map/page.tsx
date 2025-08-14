'use client';

import GlobalMap from '@/components/maps/GlobalMap';

// Example outbreak data
const mockOutbreaks = [
  { id: '1', name: 'Outbreak A (San Francisco)', lat: 37.7749, lng: -122.4194 },
  { id: '2', name: 'Outbreak B (London)', lat: 51.5074, lng: -0.1278 },
  { id: '3', name: 'Outbreak C (Tokyo)', lat: 35.6895, lng: 139.6917 },
];

export default function MapPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Global Outbreak Map</h1>
      <p className="text-gray-600 mb-6">
        Interactive map showing active outbreaks around the world.
      </p>

      {/* Render the map and pass outbreak data */}
      <GlobalMap outbreaks={mockOutbreaks} />
    </div>
  );
}
