'use client';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
import { OutbreakData } from '@/types';
import L from '@/lib/leaflet-icons'; // Use our fixed leaflet import

type GlobalMapProps = {
  outbreaks: OutbreakData[];
};

const GlobalMap = ({ outbreaks }: GlobalMapProps) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup>
        {outbreaks.map((outbreak, idx) => (
          <Marker
            key={idx}
            position={[outbreak.location.coordinates.lat, outbreak.location.coordinates.lng]}
          >
            <Popup>
              <strong>{outbreak.name}</strong>
              <br />
              {outbreak.location.country}, {outbreak.location.region}
            </Popup>
            <Circle
              center={[outbreak.location.coordinates.lat, outbreak.location.coordinates.lng]}
              radius={50000}
              color="red"
            />
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default GlobalMap;
