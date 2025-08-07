import useSWR from 'swr';
import { PhylogeneticNode } from '../lib/types';
import { phylogeneticData } from '../lib/data/mockData';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const usePhylogeneticData = (pathogenId?: string) => {
  const { data, error, isLoading, mutate } = useSWR<PhylogeneticNode[]>(
    pathogenId ? `/api/phylogenetic?pathogen=${pathogenId}` : '/api/phylogenetic',
    fetcher,
    {
      fallbackData: phylogeneticData,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  return {
    treeData: data || [],
    isLoading,
    error,
    mutate
  };
};