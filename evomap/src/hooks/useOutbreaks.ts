import { useEffect, useState } from 'react';
import { OutbreakData } from '@/types';

export function useOutbreaks() {
  const [outbreaks, setOutbreaks] = useState<OutbreakData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOutbreaks() {
      try {
        const res = await fetch('/api/outbreaks');
        if (!res.ok) throw new Error('Failed to fetch outbreaks');
        const data = await res.json();
        setOutbreaks(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchOutbreaks();
  }, []);

  return { outbreaks, loading, error };
}
