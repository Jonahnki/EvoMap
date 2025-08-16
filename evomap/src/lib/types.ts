export interface Outbreak {
  id: string;
  name: string;
  lat: number;
  lng: number;
  location: {
    country: string;
    region: string;
    city: string;
  };
  severity: 'low' | 'medium' | 'high' | 'critical';
  type: 'virus' | 'bacteria' | 'parasite' | 'fungus';
  cases: number;
  mortality_rate: number;
  first_detected: string;
  status: 'active' | 'contained' | 'resolved' | 'monitoring';
  description: string;
}

export interface Pathogen {
  id: string;
  name: string;
  type: string;
  lineage: string;
  mutations: string[];
  location: {
    country: string;
    region: string;
    city: string;
  };
  family: string;
  genome_type: string;
  transmission: string;
  symptoms: string[];
  mortality_rate: number;
  first_identified: string;
  geographic_distribution: string[];
  host_species: string[];
  description: string;
}

export interface PhylogeneticNode {
  id: string;
  name: string;
  parent: string | null;
  children: string[];
  mutations: string[];
  samples: number;
  date: string;
}

export interface SearchFilters {
  countries?: string[];
  pathogens?: string[];
  severity?: string[];
}

export interface SearchRequest {
  text: string;
  filters?: SearchFilters;
}

export interface SearchResponse {
  pathogens: Pathogen[];
  outbreaks: Outbreak[];
  total: number;
}
