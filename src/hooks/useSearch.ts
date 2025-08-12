import useSWRMutation from 'swr/mutation';

async function searchFetcher(url: string, { arg }: { arg: { query: string } }) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arg),
  });
  return res.json();
}

export function useSearch() {
  const { trigger, data, error, isMutating } = useSWRMutation('/api/search', searchFetcher);
  return {
    search: trigger,
    data,
    isLoading: isMutating,
    isError: !!error,
  };
}