export interface PathogenData {
  id: string;
  name: string;
  lineage: string;
  mutations: string[];
  location: {
    country: string;
    region?: string;
    coordinates: [number, number];
  };
  collectionDate: Date;
  submissionDate: Date;
  sequenceData?: string;
  clade?: string;
  quality?: 'high' | 'medium' | 'low';
}

export interface OutbreakData {
  id: string;
  pathogen: string;
  location: {
    country: string;
    coordinates: [number, number];
  };
  cases: number;
  date: Date;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface PhylogeneticNode {
  id: string;
  name: string;
  parent?: string;
  children: string[];
  mutations: string[];
  branchLength: number;
  date?: Date;
}

export interface FilterState {
  countries: string[];
  dateRange: [Date, Date];
  pathogens: string[];
  mutations: string[];
  severity: ('low' | 'medium' | 'high' | 'critical')[];
}

export interface SearchQuery {
  text: string;
  filters: FilterState;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
}