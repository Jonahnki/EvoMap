import { create } from 'zustand';

interface AppState {
  // Add your state properties here when needed
  filters: {
    severity?: string;
    pathogenType?: string;
  };
  setFilters: (filters: Partial<AppState['filters']>) => void;
}

const useStore = create<AppState>((set) => ({
  filters: {},
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
}));

export default useStore;
