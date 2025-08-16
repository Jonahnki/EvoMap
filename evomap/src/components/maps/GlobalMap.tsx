import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/lib/leaflet-config';
import { Outbreak } from '../../lib/types';

interface GlobalMapProps {
  outbreaks: Outbreak[];
}

const GlobalMap: React.FC<GlobalMapProps> = ({ outbreaks }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {outbreaks.map(o => (
        <Marker key={o.id} position={[o.lat, o.lng]}>
          <Popup>
            <strong>{o.name}</strong><br />
            {o.location.country}<br />
            Severity: {o.severity}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalMap;
