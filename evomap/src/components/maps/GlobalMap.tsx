"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Outbreak {
  id: string;
  name: string;
  lat: number;
  lng: number;
  country: string;
}

interface GlobalMapProps {
  outbreaks: Outbreak[];
}

const GlobalMap: React.FC<GlobalMapProps> = ({ outbreaks }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {outbreaks.map((outbreak) => (
        <Marker key={outbreak.id} position={[outbreak.lat, outbreak.lng]}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg">{outbreak.name}</h3>
              <p className="text-sm text-gray-600">{outbreak.country}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default GlobalMap;
