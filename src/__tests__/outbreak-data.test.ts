interface OutbreakRecord {
  id: string;
  pathogen: string;
  lat: number;
  lng: number;
  date: string;
  region: string;
}

function isValidCoordinate(lat: number, lng: number): boolean {
  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180;
}

function filterByPathogen(records: OutbreakRecord[], query: string): OutbreakRecord[] {
  if (!query.trim()) return records;
  return records.filter(r =>
    r.pathogen.toLowerCase().includes(query.toLowerCase())
  );
}

function filterByRegion(records: OutbreakRecord[], region: string): OutbreakRecord[] {
  if (!region.trim()) return records;
  return records.filter(r =>
    r.region.toLowerCase().includes(region.toLowerCase())
  );
}

const mockOutbreaks: OutbreakRecord[] = [
  { id: '1', pathogen: 'SARS-CoV-2', lat: 9.0820, lng: 8.6753, date: '2024-01-15', region: 'Nigeria' },
  { id: '2', pathogen: 'Monkeypox', lat: 5.5600, lng: -0.2000, date: '2024-02-10', region: 'Ghana' },
  { id: '3', pathogen: 'Lassa virus', lat: 6.5244, lng: 3.3792, date: '2024-03-05', region: 'Nigeria' },
];

describe('Geographic coordinate validation', () => {
  it('accepts valid latitude/longitude pairs', () => {
    expect(isValidCoordinate(9.082, 8.675)).toBe(true);
    expect(isValidCoordinate(-33.9, 18.4)).toBe(true);
    expect(isValidCoordinate(0, 0)).toBe(true);
  });

  it('rejects out-of-range coordinates', () => {
    expect(isValidCoordinate(91, 0)).toBe(false);
    expect(isValidCoordinate(0, 181)).toBe(false);
    expect(isValidCoordinate(-91, -181)).toBe(false);
  });

  it('all mock outbreak records have valid coordinates', () => {
    mockOutbreaks.forEach(record => {
      expect(isValidCoordinate(record.lat, record.lng)).toBe(true);
    });
  });
});

describe('Outbreak search and filter logic', () => {
  it('returns all records when query is empty', () => {
    expect(filterByPathogen(mockOutbreaks, '')).toHaveLength(3);
  });

  it('filters records by pathogen name (case-insensitive)', () => {
    const result = filterByPathogen(mockOutbreaks, 'sars');
    expect(result).toHaveLength(1);
    expect(result[0].pathogen).toBe('SARS-CoV-2');
  });

  it('filters records by region', () => {
    const result = filterByRegion(mockOutbreaks, 'Nigeria');
    expect(result).toHaveLength(2);
  });

  it('returns empty array when no records match the filter', () => {
    const result = filterByPathogen(mockOutbreaks, 'Ebola');
    expect(result).toHaveLength(0);
  });
});

describe('Outbreak record structure', () => {
  it('all records have required fields', () => {
    mockOutbreaks.forEach(record => {
      expect(record).toHaveProperty('id');
      expect(record).toHaveProperty('pathogen');
      expect(record).toHaveProperty('lat');
      expect(record).toHaveProperty('lng');
      expect(record).toHaveProperty('date');
      expect(record).toHaveProperty('region');
    });
  });
});
