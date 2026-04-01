module.exports = {
  map: jest.fn(() => ({ remove: jest.fn(), setView: jest.fn() })),
  tileLayer: jest.fn(() => ({ addTo: jest.fn() })),
  marker: jest.fn(() => ({ addTo: jest.fn(), bindPopup: jest.fn() })),
  icon: jest.fn(() => ({})),
  latLng: jest.fn((lat, lng) => ({ lat, lng })),
  CRS: { EPSG3857: {} },
};
