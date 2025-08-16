import { useState, useEffect } from 'react';

// TODO: Replace with actual API calls when backend is ready
const mockPathogens = [
  {
    id: '1',
    name: 'COVID-19 Variant',
    lat: 40.7128,
    lng: -74.0060,
    location: { country: 'USA', region: 'New York' },
    severity: 'high' as const,
    type: 'virus' as const,
  },
  {
    id: '2', 
    name: 'Influenza A',
    lat: 51.5074,
    lng: -0.1278,
    location: { country: 'UK', region: 'London' },
    severity: 'medium' as const,
    type: 'virus' as const,
  },
];

export function usePathogens() {
  const [pathogens, setPathogens] = useState(mockPathogens);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Fetch real data from API
    setLoading(false);
  }, []);

  return { pathogens, loading, error };
}
