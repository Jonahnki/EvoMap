import { useEffect, useState } from 'react';
import { Outbreak } from '@/lib/types';

export function useOutbreaks() {
  const [outbreaks, setOutbreaks] = useState<Outbreak[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOutbreaks() {
      try {
        setLoading(true);
        const response = await fetch('/api/outbreaks');
        if (!response.ok) {
          throw new Error('Failed to fetch outbreaks');
        }
        const data = await response.json();
        setOutbreaks(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchOutbreaks();
  }, []);

  return { outbreaks, loading, error };
}
