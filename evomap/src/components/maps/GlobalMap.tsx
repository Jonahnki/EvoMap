'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@/lib/leaflet-config';
import { Outbreak } from '../../lib/types';

interface GlobalMapProps {
  outbreaks: Outbreak[];
}

const GlobalMap: React.FC<GlobalMapProps> = ({ outbreaks }) => {
  const center: LatLngExpression = [0, 0];
  
  return (
    <MapContainer 
      center={center} 
      zoom={2} 
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {outbreaks.map((outbreak) => (
        <Marker 
          key={outbreak.id} 
          position={[outbreak.lat, outbreak.lng] as LatLngExpression}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{outbreak.name}</h3>
              <p className="text-sm text-gray-600">
                {outbreak.location.city}, {outbreak.location.country}
              </p>
              <div className="mt-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  outbreak.severity === 'critical' ? 'bg-red-100 text-red-800' :
                  outbreak.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                  outbreak.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {outbreak.severity.toUpperCase()}
                </span>
              </div>
              <p className="mt-2 text-sm">{outbreak.description}</p>
              <div className="mt-2 text-xs text-gray-500">
                <p>Cases: {outbreak.cases.toLocaleString()}</p>
                <p>Mortality Rate: {outbreak.mortality_rate}%</p>
                <p>Status: {outbreak.status}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalMap;
