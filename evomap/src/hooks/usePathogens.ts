import useSWR from 'swr';
import { PathogenData } from '../lib/types';
import { allPathogenData, getPathogensByType } from '../lib/data/mockData';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const usePathogens = (type?: string) => {
  const { data, error, isLoading, mutate } = useSWR<PathogenData[]>(
    type ? `/api/pathogens?type=${type}` : '/api/pathogens',
    fetcher,
    {
      fallbackData: type ? getPathogensByType(type) : allPathogenData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    pathogens: data || [],
    isLoading,
    error,
    mutate
  };
};

export const usePathogen = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR<PathogenData>(
    id ? `/api/pathogens/${id}` : null,
    fetcher,
    {
      fallbackData: allPathogenData.find(p => p.id === id),
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    pathogen: data,
    isLoading,
    error,
    mutate
  };
};