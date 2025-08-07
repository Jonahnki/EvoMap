import { create } from 'zustand';
import { FilterState } from './types';

interface AppState {
  selectedPathogen: string | null;
  dateRange: [Date, Date];
  activeFilters: FilterState;
  searchQuery: string;
  setSelectedPathogen: (pathogen: string | null) => void;
  setDateRange: (range: [Date, Date]) => void;
  updateFilters: (filters: Partial<FilterState>) => void;
  setSearchQuery: (query: string) => void;
}

const defaultFilters: FilterState = {
  countries: [],
  pathogens: [],
  mutations: [],
  severity: [],
  dateRange: [new Date('2019-01-01'), new Date()],
};

export const useAppStore = create<AppState>((set) => ({
  selectedPathogen: null,
  dateRange: [new Date('2019-01-01'), new Date()],
  activeFilters: defaultFilters,
  searchQuery: '',
  setSelectedPathogen: (pathogen) => set({ selectedPathogen: pathogen }),
  setDateRange: (range) => set({ dateRange: range }),
  updateFilters: (filters) => set((state) => ({
    activeFilters: { ...state.activeFilters, ...filters },
  })),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));