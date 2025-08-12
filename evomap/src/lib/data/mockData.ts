import { PathogenData, OutbreakData, PhylogeneticNode } from '../types';

// COVID-19 Variants
export const covidVariants: PathogenData[] = [
  {
    id: 'covid-001',
    name: 'SARS-CoV-2',
    lineage: 'B.1.1.7',
    mutations: ['N501Y', 'A570D', 'D614G', 'P681H'],
    location: {
      country: 'United Kingdom',
      region: 'England',
      coordinates: [51.5074, -0.1278]
    },
    collectionDate: new Date('2020-09-20'),
    submissionDate: new Date('2020-12-14'),
    clade: 'Alpha',
    quality: 'high'
  },
  {
    id: 'covid-002',
    name: 'SARS-CoV-2',
    lineage: 'B.1.351',
    mutations: ['K417N', 'E484K', 'N501Y', 'D614G'],
    location: {
      country: 'South Africa',
      region: 'Gauteng',
      coordinates: [-26.2041, 28.0473]
    },
    collectionDate: new Date('2020-10-08'),
    submissionDate: new Date('2020-12-18'),
    clade: 'Beta',
    quality: 'high'
  },
  {
    id: 'covid-003',
    name: 'SARS-CoV-2',
    lineage: 'P.1',
    mutations: ['K417T', 'E484K', 'N501Y', 'D614G'],
    location: {
      country: 'Brazil',
      region: 'Amazonas',
      coordinates: [-3.1190, -60.0217]
    },
    collectionDate: new Date('2020-11-04'),
    submissionDate: new Date('2021-01-12'),
    clade: 'Gamma',
    quality: 'high'
  },
  {
    id: 'covid-004',
    name: 'SARS-CoV-2',
    lineage: 'B.1.617.2',
    mutations: ['L452R', 'T478K', 'D614G', 'P681R'],
    location: {
      country: 'India',
      region: 'Maharashtra',
      coordinates: [19.0760, 72.8777]
    },
    collectionDate: new Date('2020-10-05'),
    submissionDate: new Date('2021-04-20'),
    clade: 'Delta',
    quality: 'high'
  },
  {
    id: 'covid-005',
    name: 'SARS-CoV-2',
    lineage: 'B.1.1.529',
    mutations: ['A67V', 'H69del', 'V70del', 'T95I', 'G142D', 'V143Y', 'Y144del', 'Y145del'],
    location: {
      country: 'Botswana',
      region: 'Gaborone',
      coordinates: [-24.6282, 25.9231]
    },
    collectionDate: new Date('2021-11-09'),
    submissionDate: new Date('2021-11-24'),
    clade: 'Omicron',
    quality: 'high'
  }
];

// Influenza Strains
export const influenzaStrains: PathogenData[] = [
  {
    id: 'flu-001',
    name: 'Influenza A',
    lineage: 'H1N1',
    mutations: ['S31N', 'D222G', 'H275Y'],
    location: {
      country: 'Mexico',
      region: 'Mexico City',
      coordinates: [19.4326, -99.1332]
    },
    collectionDate: new Date('2009-03-15'),
    submissionDate: new Date('2009-04-23'),
    clade: 'Pandemic H1N1',
    quality: 'high'
  },
  {
    id: 'flu-002',
    name: 'Influenza A',
    lineage: 'H3N2',
    mutations: ['N145S', 'K160T', 'D225G'],
    location: {
      country: 'Australia',
      region: 'Victoria',
      coordinates: [-37.8136, 144.9631]
    },
    collectionDate: new Date('2022-06-10'),
    submissionDate: new Date('2022-07-15'),
    clade: 'Seasonal H3N2',
    quality: 'high'
  }
];

// Other Pathogens
export const otherPathogens: PathogenData[] = [
  {
    id: 'rsv-001',
    name: 'Respiratory Syncytial Virus',
    lineage: 'RSV-A',
    mutations: ['L274F', 'K68N', 'T72I'],
    location: {
      country: 'United States',
      region: 'California',
      coordinates: [36.7783, -119.4179]
    },
    collectionDate: new Date('2022-11-15'),
    submissionDate: new Date('2022-12-01'),
    clade: 'RSV-A ON1',
    quality: 'medium'
  },
  {
    id: 'noro-001',
    name: 'Norovirus',
    lineage: 'GII.4',
    mutations: ['P2A', 'P2B', 'P2C'],
    location: {
      country: 'Japan',
      region: 'Tokyo',
      coordinates: [35.6762, 139.6503]
    },
    collectionDate: new Date('2022-12-20'),
    submissionDate: new Date('2023-01-05'),
    clade: 'GII.4 Sydney',
    quality: 'high'
  }
];

// Outbreak Data
export const outbreakData: OutbreakData[] = [
  {
    id: 'outbreak-001',
    pathogen: 'SARS-CoV-2',
    location: {
      country: 'United States',
      coordinates: [39.8283, -98.5795]
    },
    cases: 25000,
    date: new Date('2021-01-15'),
    severity: 'high'
  },
  {
    id: 'outbreak-002',
    pathogen: 'SARS-CoV-2',
    location: {
      country: 'India',
      coordinates: [20.5937, 78.9629]
    },
    cases: 400000,
    date: new Date('2021-04-20'),
    severity: 'critical'
  },
  {
    id: 'outbreak-003',
    pathogen: 'Influenza A',
    location: {
      country: 'Australia',
      coordinates: [-25.2744, 133.7751]
    },
    cases: 15000,
    date: new Date('2022-07-10'),
    severity: 'medium'
  },
  {
    id: 'outbreak-004',
    pathogen: 'RSV',
    location: {
      country: 'United States',
      coordinates: [39.8283, -98.5795]
    },
    cases: 8000,
    date: new Date('2022-12-01'),
    severity: 'medium'
  }
];

// Phylogenetic Tree Data
export const phylogeneticData: PhylogeneticNode[] = [
  {
    id: 'root',
    name: 'Wuhan-Hu-1',
    children: ['alpha', 'beta'],
    mutations: [],
    branchLength: 0,
    date: new Date('2019-12-01')
  },
  {
    id: 'alpha',
    name: 'Alpha Variant',
    parent: 'root',
    children: ['delta', 'omicron'],
    mutations: ['N501Y', 'A570D', 'D614G', 'P681H'],
    branchLength: 0.15,
    date: new Date('2020-09-20')
  },
  {
    id: 'beta',
    name: 'Beta Variant',
    parent: 'root',
    children: [],
    mutations: ['K417N', 'E484K', 'N501Y', 'D614G'],
    branchLength: 0.12,
    date: new Date('2020-10-08')
  },
  {
    id: 'delta',
    name: 'Delta Variant',
    parent: 'alpha',
    children: [],
    mutations: ['L452R', 'T478K', 'D614G', 'P681R'],
    branchLength: 0.08,
    date: new Date('2020-10-05')
  },
  {
    id: 'omicron',
    name: 'Omicron Variant',
    parent: 'alpha',
    children: [],
    mutations: ['A67V', 'H69del', 'V70del', 'T95I', 'G142D'],
    branchLength: 0.10,
    date: new Date('2021-11-09')
  }
];

// Combine all pathogen data
export const allPathogenData: PathogenData[] = [
  ...covidVariants,
  ...influenzaStrains,
  ...otherPathogens
];

// Helper function to get data by pathogen type
export const getPathogensByType = (type: string): PathogenData[] => {
  switch (type.toLowerCase()) {
    case 'covid':
    case 'sars-cov-2':
      return covidVariants;
    case 'influenza':
    case 'flu':
      return influenzaStrains;
    case 'rsv':
      return otherPathogens.filter(p => p.name.includes('RSV'));
    case 'norovirus':
      return otherPathogens.filter(p => p.name.includes('Norovirus'));
    default:
      return allPathogenData;
  }
};

// Helper function to get outbreaks by severity
export const getOutbreaksBySeverity = (severity: string): OutbreakData[] => {
  return outbreakData.filter(outbreak => outbreak.severity === severity);
};

// Helper function to get outbreaks by country
export const getOutbreaksByCountry = (country: string): OutbreakData[] => {
  return outbreakData.filter(outbreak => 
    outbreak.location.country.toLowerCase().includes(country.toLowerCase())
  );
};