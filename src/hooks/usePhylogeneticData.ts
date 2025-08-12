import useSWR from 'swr';
import { PhylogeneticNode } from '@/lib/types';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function usePhylogeneticData() {
  const { data, error, isLoading } = useSWR<PhylogeneticNode[]>('/api/phylogenetic', fetcher);
  return {
    data,
    isLoading,
    isError: !!error,
  };
}