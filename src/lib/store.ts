import create from 'zustand';

interface StoreState {
  _pathogen?: string;
  _range?: [number, number];
  _filters?: Record<string, unknown>;
  _query?: string;
}

export const useStore = create<StoreState>(() => ({}));
