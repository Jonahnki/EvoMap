// File: src/hooks/useOutbreaks.ts
import useSWR from 'swr';
import { OutbreakData } from '@/lib/types';
import { mockOutbreakData as outbreakData } from '@/lib/data/mockData'; // ✅ added import

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useOutbreaks(pathogen?: string, dateRange?: [Date, Date]) {
  const { data, error, isLoading } = useSWR<OutbreakData[]>('/api/outbreaks', fetcher);
  
  let filtered = data;
  
  if (data && pathogen) {
    filtered = filtered.filter(o => o.pathogen === pathogen);
  }
  
  if (filtered && dateRange) {
    filtered = filtered.filter(o => {
      const d = new Date(o.date);
      return d >= dateRange[0] && d <= dateRange[1];
    });
  }
  
  return {
    data: filtered,
    isLoading,
    isError: !!error,
  };
}

export const useOutbreak = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR<OutbreakData>(
    id ? `/api/outbreaks/${id}` : null,
    fetcher,
    {
      fallbackData: outbreakData.find(o => o.id === id), // ✅ outbreakData now defined
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return {
    outbreak: data,
    isLoading,
    error,
    mutate,
  };
};

