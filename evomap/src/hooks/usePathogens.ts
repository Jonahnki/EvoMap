import useSWR from 'swr';
import { PathogenData } from '@/lib/types';
 enhancement/comprehensive-repository-updates
import { mockPathogenData as allPathogenData } from '@/lib/data/mockData';
 main

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function usePathogens() {
  const { data, error, isLoading } = useSWR<PathogenData[]>('/api/pathogens', fetcher);
  return {
    data,
    isLoading,
    isError: !!error,
  };
}

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