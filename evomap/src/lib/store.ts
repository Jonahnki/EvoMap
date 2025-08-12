import create from 'zustand';

interface StoreState {
  // Store properties here
}

export const useStore = create<StoreState>(() => ({}));
