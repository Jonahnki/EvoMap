import useSWR from 'swr';
import { OutbreakData, FilterState } from '../lib/types';
import { outbreakData } from '../lib/data/mockData';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useOutbreaks = (filters?: Partial<FilterState>) => {
  const queryParams = filters ? new URLSearchParams(
    Object.entries(filters)
      .filter(([, value]) => 
        value !== undefined && value !== null && 
        (typeof value === 'string' ? value !== '' : true) &&
        !Array.isArray(value) // Skip arrays for now
      )
      .map(([key, value]) => [key, String(value)])
  ).toString() : '';

  const { data, error, isLoading, mutate } = useSWR<OutbreakData[]>(
    `/api/outbreaks${queryParams ? `?${queryParams}` : ''}`,
    fetcher,
    {
      fallbackData: outbreakData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    outbreaks: data || [],
    isLoading,
    error,
    mutate
  };
};

export const useOutbreak = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR<OutbreakData>(
    id ? `/api/outbreaks/${id}` : null,
    fetcher,
    {
      fallbackData: outbreakData.find(o => o.id === id),
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    outbreak: data,
    isLoading,
    error,
    mutate
  };
};