export const mockOutbreakData = [
  {
    id: '1',
    name: 'COVID-19 Delta Variant',
    lat: 40.7128,
    lng: -74.0060,
    location: {
      country: 'USA',
      region: 'New York',
      city: 'New York City'
    },
    severity: 'high' as const,
    type: 'virus' as const,
    cases: 15420,
    mortality_rate: 2.3,
    first_detected: '2021-06-01',
    status: 'active' as const,
    description: 'Highly transmissible COVID-19 variant first detected in India'
  },
  {
    id: '2',
    name: 'Influenza A (H3N2)',
    lat: 51.5074,
    lng: -0.1278,
    location: {
      country: 'UK',
      region: 'England',
      city: 'London'
    },
    severity: 'medium' as const,
    type: 'virus' as const,
    cases: 8750,
    mortality_rate: 0.8,
    first_detected: '2023-10-15',
    status: 'monitoring' as const,
    description: 'Seasonal influenza strain with increased transmissibility'
  },
  {
    id: '3',
    name: 'Marburg Virus',
    lat: -1.2921,
    lng: 36.8219,
    location: {
      country: 'Kenya',
      region: 'Nairobi',
      city: 'Nairobi'
    },
    severity: 'critical' as const,
    type: 'virus' as const,
    cases: 34,
    mortality_rate: 24.5,
    first_detected: '2023-11-20',
    status: 'contained' as const,
    description: 'Highly lethal hemorrhagic fever virus outbreak contained through rapid response'
  },
  {
    id: '4',
    name: 'Drug-resistant TB',
    lat: 28.6139,
    lng: 77.2090,
    location: {
      country: 'India',
      region: 'Delhi',
      city: 'New Delhi'
    },
    severity: 'high' as const,
    type: 'bacteria' as const,
    cases: 2340,
    mortality_rate: 15.2,
    first_detected: '2023-08-10',
    status: 'active' as const,
    description: 'Multi-drug resistant tuberculosis strain spreading in urban areas'
  },
  {
    id: '5',
    name: 'Candida auris',
    lat: -33.8688,
    lng: 151.2093,
    location: {
      country: 'Australia',
      region: 'New South Wales',
      city: 'Sydney'
    },
    severity: 'medium' as const,
    type: 'fungus' as const,
    cases: 127,
    mortality_rate: 8.7,
    first_detected: '2023-09-05',
    status: 'monitoring' as const,
    description: 'Antifungal-resistant yeast causing healthcare-associated infections'
  }
];

export default mockOutbreakData;

export const mockPhylogeneticTree = [
  {
    id: '1',
    name: 'SARS-CoV-2',
    parent: null,
    children: ['2', '3'],
    mutations: [],
    samples: 1500,
    date: '2019-12-01'
  },
  {
    id: '2',
    name: 'Alpha Variant',
    parent: '1',
    children: ['4'],
    mutations: ['N501Y', 'P681H'],
    samples: 800,
    date: '2020-09-01'
  },
  {
    id: '3',
    name: 'Beta Variant',
    parent: '1',
    children: [],
    mutations: ['E484K', 'N501Y'],
    samples: 600,
    date: '2020-10-01'
  },
  {
    id: '4',
    name: 'Delta Variant',
    parent: '2',
    children: [],
    mutations: ['L452R', 'T478K'],
    samples: 1200,
    date: '2021-01-01'
  }
];

export const mockPathogenData = [
  {
    id: '1',
    name: 'SARS-CoV-2',
    type: 'virus',
    lineage: 'B.1.1.7',
    mutations: ['N501Y', 'P681H', 'T716I'],
    location: {
      country: 'USA',
      region: 'New York',
      city: 'New York City'
    },
    family: 'Coronaviridae',
    genome_type: 'RNA',
    transmission: 'respiratory droplets',
    symptoms: ['fever', 'cough', 'shortness of breath'],
    mortality_rate: 2.3,
    first_identified: '2019-12-01',
    geographic_distribution: ['worldwide'],
    host_species: ['human', 'bat'],
    description: 'Novel coronavirus causing COVID-19 pandemic'
  },
  {
    id: '2',
    name: 'Influenza A H1N1',
    type: 'virus',
    lineage: 'A/H1N1pdm09',
    mutations: ['H275Y', 'S31N'],
    location: {
      country: 'Mexico',
      region: 'Veracruz',
      city: 'La Gloria'
    },
    family: 'Orthomyxoviridae',
    genome_type: 'RNA',
    transmission: 'respiratory droplets',
    symptoms: ['fever', 'cough', 'body aches'],
    mortality_rate: 0.1,
    first_identified: '2009-04-15',
    geographic_distribution: ['worldwide'],
    host_species: ['human', 'swine'],
    description: 'Pandemic influenza strain'
  },
  {
    id: '3',
    name: 'Ebola virus',
    type: 'virus',
    lineage: 'Zaire ebolavirus',
    mutations: ['A82V', 'GP T544I'],
    location: {
      country: 'Democratic Republic of Congo',
      region: 'Ebola River',
      city: 'Yambuku'
    },
    family: 'Filoviridae',
    genome_type: 'RNA',
    transmission: 'bodily fluids',
    symptoms: ['fever', 'bleeding', 'organ failure'],
    mortality_rate: 50.0,
    first_identified: '1976-08-01',
    geographic_distribution: ['Central Africa', 'West Africa'],
    host_species: ['human', 'fruit bat'],
    description: 'Highly lethal hemorrhagic fever virus'
  }
];
