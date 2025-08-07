import dynamic from 'next/dynamic';

// Dynamically import GlobalMap to avoid SSR issues with Leaflet
const DemoGlobalMap = dynamic(() => import('../../src/components/maps/GlobalMap'), { ssr: false });

export default function MapPage() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Global Outbreak Map</h2>
      <DemoGlobalMap />
    </div>
  );
}