import { create } from 'zustand';
import { FilterState, OutbreakData, PathogenData } from './types';

interface AppState {
  // State
  selectedPathogen: string | null;
  dateRange: [Date, Date];
  activeFilters: FilterState;
  searchQuery: string;
  selectedOutbreak: OutbreakData | null;
  selectedPathogenData: PathogenData | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setSelectedPathogen: (pathogen: string | null) => void;
  setDateRange: (range: [Date, Date]) => void;
  updateFilters: (filters: Partial<FilterState>) => void;
  setSearchQuery: (query: string) => void;
  setSelectedOutbreak: (outbreak: OutbreakData | null) => void;
  setSelectedPathogenData: (pathogen: PathogenData | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  resetFilters: () => void;
}

const defaultFilters: FilterState = {
  countries: [],
  dateRange: [new Date('2020-01-01'), new Date()],
  pathogens: [],
  mutations: [],
  severity: ['low', 'medium', 'high', 'critical']
};

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  selectedPathogen: null,
  dateRange: [new Date('2020-01-01'), new Date()],
  activeFilters: defaultFilters,
  searchQuery: '',
  selectedOutbreak: null,
  selectedPathogenData: null,
  isLoading: false,
  error: null,

  // Actions
  setSelectedPathogen: (pathogen) => set({ selectedPathogen: pathogen }),
  
  setDateRange: (range) => set({ dateRange: range }),
  
  updateFilters: (filters) => set((state) => ({
    activeFilters: { ...state.activeFilters, ...filters }
  })),
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  setSelectedOutbreak: (outbreak) => set({ selectedOutbreak: outbreak }),
  
  setSelectedPathogenData: (pathogen) => set({ selectedPathogenData: pathogen }),
  
  setLoading: (loading) => set({ isLoading: loading }),
  
  setError: (error) => set({ error }),
  
  resetFilters: () => set({
    activeFilters: defaultFilters,
    searchQuery: '',
    selectedPathogen: null,
    selectedOutbreak: null,
    selectedPathogenData: null
  })
}));