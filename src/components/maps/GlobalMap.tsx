import React from 'react';

interface GlobalMapProps {
  outbreaks: any[];
}

const GlobalMap: React.FC<GlobalMapProps> = ({ outbreaks }) => {
  return (
    <div>
      {outbreaks.map((_outbreak, index) => (
        <div key={index} className="map-marker">
          {/* Marker rendering */}
        </div>
      ))}
    </div>
  );
};

export default GlobalMap;
