"use client";
import { MapContainer, TileLayer, Popup, Circle, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useMemo, useEffect } from 'react';
import { OutbreakData } from '../../lib/types';
import { mockOutbreakData as outbreakData } from '../../lib/data/mockData';

// COVID variant color mapping (by clade/lineage)
const covidVariantColors: Record<string, string> = {
  Alpha: '#3B82F6',   // Blue
  Beta: '#10B981',    // Green
  Delta: '#F59E0B',   // Orange
  Omicron: '#EF4444', // Red
};

// Updated severity color mapping
const severityColors: Record<OutbreakData['severity'], string> = {
  low: '#10B981',      // green
  medium: '#F59E0B',   // yellow/orange
  high: '#EF4444',     // red
  critical: '#A21CAF', // purple (for critical, fallback)
};

// Helper to get marker color by pathogen/variant
function getMarkerColor(outbreak: OutbreakData) {
  // COVID-19 variants by clade
  if (outbreak.pathogen === 'SARS-CoV-2') {
    // Try to match clade from mockData (Alpha, Beta, Delta, Omicron)
    // For demo, use location.country or id to infer clade if not present
    // In real data, clade should be a property
    const clade = (() => {
      if (outbreak.id.includes('001')) return 'Alpha';
      if (outbreak.id.includes('002')) return 'Beta';
      if (outbreak.id.includes('004')) return 'Delta';
      if (outbreak.id.includes('005')) return 'Omicron';
      return 'Alpha';
    })();
    return covidVariantColors[clade] || '#3B82F6';
  }
  // Other pathogens: use severity
  return severityColors[outbreak.severity];
}

// Props interface
export interface GlobalMapProps {
  outbreakData: OutbreakData[];
  selectedPathogen?: string;
  dateRange: [Date, Date];
  onOutbreakClick: (outbreak: OutbreakData) => void;
}

// Default icon fix for React-Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export const GlobalMap = ({
  outbreakData: outbreaks,
  selectedPathogen,
  dateRange,
  onOutbreakClick,
}: GlobalMapProps) => {
  const [isClient, setIsClient] = useState(false);
  const [sliderDate, setSliderDate] = useState(dateRange[1]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter outbreaks by pathogen and date
  const filteredOutbreaks = useMemo(() => {
    return outbreaks.filter((o) => {
      const inPathogen = selectedPathogen ? o.pathogen === selectedPathogen : true;
      const inDate = o.date >= dateRange[0] && o.date <= sliderDate;
      return inPathogen && inDate;
    });
  }, [outbreaks, selectedPathogen, dateRange, sliderDate]);

  // Get all unique dates for the slider
  const allDates = useMemo(() => {
    const dates = outbreaks.map((o) => o.date.getTime());
    const unique = Array.from(new Set(dates)).sort((a, b) => a - b);
    return unique.map((t) => new Date(t));
  }, [outbreaks]);

  // Map center
  const center: [number, number] = [20, 0];

  if (!isClient) {
    return <div className="w-full h-[600px] bg-gray-200 flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div className="w-full h-[600px] relative">
      {/* Time Slider */}
      <div className="absolute z-[1000] left-1/2 -translate-x-1/2 top-4 bg-white/80 rounded-lg px-4 py-2 shadow flex flex-col items-center">
        <label className="text-xs font-medium mb-1">Date: {sliderDate.toISOString().slice(0, 10)}</label>
        <input
          type="range"
          min={0}
          max={allDates.length - 1}
          value={allDates.findIndex((d) => d.getTime() === sliderDate.getTime())}
          onChange={(e) => setSliderDate(allDates[Number(e.target.value)])}
          className="w-64"
        />
      </div>
      <MapContainer center={center} zoom={2} scrollWheelZoom className="w-full h-full rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredOutbreaks.length > 10
          ? (
            filteredOutbreaks.map((outbreak) => (
              <Marker
                key={outbreak.id}
                position={outbreak.location.coordinates as [number, number]}
                eventHandlers={{
                  click: () => onOutbreakClick(outbreak),
                }}
                icon={L.divIcon({
                  className: '',
                  html: `<div style="background:${getMarkerColor(outbreak)};width:18px;height:18px;border-radius:50%;border:2px solid #fff;box-shadow:0 0 4px #0002;"></div>`
                })}
              >
                <Popup>
                  <div className="min-w-[180px]">
                    <div className="font-semibold text-base mb-1">{outbreak.pathogen}</div>
                    <div className="text-xs text-gray-600 mb-1">{outbreak.location.country}</div>
                    <div className="text-xs mb-1">Cases: <span className="font-bold">{outbreak.cases.toLocaleString()}</span></div>
                    <div className="text-xs mb-1">Severity: <span className="font-bold" style={{ color: severityColors[outbreak.severity] }}>{outbreak.severity}</span></div>
                    <div className="text-xs">Date: {outbreak.date.toISOString().slice(0, 10)}</div>
                  </div>
                </Popup>
              </Marker>
            ))
          )
          : (
            filteredOutbreaks.map((outbreak) => (
              <Circle
                key={outbreak.id}
                center={outbreak.location.coordinates as [number, number]}
                radius={Math.max(20000, outbreak.cases * 2)}
                pathOptions={{ color: getMarkerColor(outbreak), fillOpacity: 0.5 }}
                eventHandlers={{
                  click: () => onOutbreakClick(outbreak),
                }}
              >
                <Popup>
                  <div className="min-w-[180px]">
                    <div className="font-semibold text-base mb-1">{outbreak.pathogen}</div>
                    <div className="text-xs text-gray-600 mb-1">{outbreak.location.country}</div>
                    <div className="text-xs mb-1">Cases: <span className="font-bold">{outbreak.cases.toLocaleString()}</span></div>
                    <div className="text-xs mb-1">Severity: <span className="font-bold" style={{ color: severityColors[outbreak.severity] }}>{outbreak.severity}</span></div>
                    <div className="text-xs">Date: {outbreak.date.toISOString().slice(0, 10)}</div>
                  </div>
                </Popup>
              </Circle>
            ))
          )}
      </MapContainer>
    </div>
  );
};

// For testing/demo: default export with mock data
const DemoGlobalMap = () => {
  const [selected, setSelected] = useState<OutbreakData | null>(null);
  const minDate = outbreakData.reduce((min, o) => o.date < min ? o.date : min, outbreakData[0].date);
  const maxDate = outbreakData.reduce((max, o) => o.date > max ? o.date : max, outbreakData[0].date);
  
  return (
    <div className="p-4">
      <GlobalMap
        outbreakData={outbreakData}
        dateRange={[minDate, maxDate]}
        onOutbreakClick={setSelected}
      />
      {selected && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <div className="font-bold">Selected Outbreak:</div>
          <pre className="text-xs mt-2">{JSON.stringify(selected, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DemoGlobalMap;