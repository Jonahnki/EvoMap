<MapContainer center={center} zoom={2} scrollWheelZoom className="w-full h-full rounded-lg">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {filteredOutbreaks.length > 10 ? (
    <MarkerClusterGroup>
      {filteredOutbreaks.map((outbreak) => (
        <Marker
          key={outbreak.id}
          position={outbreak.location.coordinates as [number, number]}
          eventHandlers={{ click: () => onOutbreakClick(outbreak) }}
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
      ))}
    </MarkerClusterGroup>
  ) : (
    filteredOutbreaks.map((outbreak) => (
      <Circle
        key={outbreak.id}
        center={outbreak.location.coordinates as [number, number]}
        radius={Math.max(20000, outbreak.cases * 2)}
        pathOptions={{ color: getMarkerColor(outbreak), fillOpacity: 0.5 }}
        eventHandlers={{ click: () => onOutbreakClick(outbreak) }}
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

