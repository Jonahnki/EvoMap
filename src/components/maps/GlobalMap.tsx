import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Outbreak {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

interface GlobalMapProps {
  outbreaks: Outbreak[];
}

// Override default icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/images/marker-icon-2x.png',
  iconUrl: '/leaflet/images/marker-icon.png',
  shadowUrl: '/leaflet/images/marker-shadow.png',
});

const GlobalMap: React.FC<GlobalMapProps> = ({ outbreaks }) => {
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {outbreaks.map((ob) => (
        <Marker key={ob.id} position={[ob.lat, ob.lng]}>
          <Popup>{ob.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalMap;

