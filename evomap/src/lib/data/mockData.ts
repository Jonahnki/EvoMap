import { PathogenData, OutbreakData, PhylogeneticNode } from "../types";

// Mock Pathogen Data
export const mockPathogenData: PathogenData[] = [
  {
    id: "covid-alpha-001",
    name: "SARS-CoV-2",
    lineage: "Alpha",
    mutations: ["N501Y", "D614G"],
    location: {
      country: "United Kingdom",
      region: "England",
      coordinates: [51.509865, -0.118092],
    },
    collectionDate: new Date("2020-09-20"),
    submissionDate: new Date("2020-09-25"),
    sequenceData: undefined,
    clade: "20I/501Y.V1",
    quality: "high",
  },
  {
    id: "covid-delta-001",
    name: "SARS-CoV-2",
    lineage: "Delta",
    mutations: ["L452R", "T478K"],
    location: {
      country: "India",
      region: "Maharashtra",
      coordinates: [19.75148, 75.713888],
    },
    collectionDate: new Date("2021-02-15"),
    submissionDate: new Date("2021-02-20"),
    sequenceData: undefined,
    clade: "21A/S:478K",
    quality: "medium",
  },
  {
    id: "flu-h1n1-001",
    name: "Influenza A",
    lineage: "H1N1",
    mutations: ["K163Q", "D225G"],
    location: {
      country: "USA",
      region: "California",
      coordinates: [36.778259, -119.417931],
    },
    collectionDate: new Date("2019-12-01"),
    submissionDate: new Date("2019-12-05"),
    sequenceData: undefined,
    clade: "6B.1A",
    quality: "high",
  },
  {
    id: "rsv-001",
    name: "RSV",
    lineage: "A",
    mutations: ["F protein N276S"],
    location: {
      country: "Australia",
      region: "New South Wales",
      coordinates: [-33.8688, 151.2093],
    },
    collectionDate: new Date("2022-06-10"),
    submissionDate: new Date("2022-06-15"),
    sequenceData: undefined,
    clade: undefined,
    quality: "medium",
  },
 enhancement/comprehensive-repository-updates

  {
    id: "noro-001",
    name: "Norovirus",
    lineage: "GII.4",
    mutations: ["P2A", "P2B", "P2C"],
    location: {
      country: "Japan",
      region: "Tokyo",
      coordinates: [35.6762, 139.6503],
    },
    collectionDate: new Date("2022-12-20"),
    submissionDate: new Date("2023-01-05"),
    sequenceData: undefined,
    clade: "GII.4 Sydney",
    quality: "high",
  },
 main
];

// Mock Outbreak Data
export const mockOutbreakData: OutbreakData[] = [
  {
    id: "outbreak-001",
    pathogen: "SARS-CoV-2",
    location: {
      country: "United Kingdom",
      coordinates: [51.509865, -0.118092],
    },
    cases: 1200,
    date: new Date("2020-10-01"),
    severity: "high",
  },
  {
    id: "outbreak-002",
    pathogen: "SARS-CoV-2",
    location: {
      country: "India",
      coordinates: [19.75148, 75.713888],
    },
    cases: 5000,
    date: new Date("2021-03-01"),
    severity: "critical",
  },
  {
    id: "outbreak-003",
    pathogen: "Influenza A",
    location: {
      country: "USA",
      coordinates: [36.778259, -119.417931],
    },
    cases: 300,
    date: new Date("2019-12-10"),
    severity: "medium",
  },
  {
    id: "outbreak-004",
    pathogen: "RSV",
    location: {
      country: "Australia",
      coordinates: [-33.8688, 151.2093],
    },
    cases: 150,
    date: new Date("2022-06-20"),
    severity: "low",
  },
 enhancement/comprehensive-repository-updates

  {
    id: "outbreak-005",
    pathogen: "RSV",
    location: {
      country: "United States",
      coordinates: [39.8283, -98.5795],
    },
    cases: 8000,
    date: new Date("2022-12-01"),
    severity: "medium",
  },
  {
    id: "outbreak-006",
    pathogen: "SARS-CoV-2",
    location: {
      country: "United Kingdom",
      coordinates: [51.5074, -0.1278],
    },
    cases: 12000,
    date: new Date("2020-12-20"),
    severity: "medium",
  },
  {
    id: "outbreak-007",
    pathogen: "SARS-CoV-2",
    location: {
      country: "Brazil",
      coordinates: [-14.235, -51.9253],
    },
    cases: 35000,
    date: new Date("2021-03-10"),
    severity: "high",
  },
  {
    id: "outbreak-008",
    pathogen: "SARS-CoV-2",
    location: {
      country: "South Africa",
      coordinates: [-30.5595, 22.9375],
    },
    cases: 18000,
    date: new Date("2021-02-15"),
    severity: "medium",
  },
  {
    id: "outbreak-009",
    pathogen: "SARS-CoV-2",
    location: {
      country: "Germany",
      coordinates: [51.1657, 10.4515],
    },
    cases: 9000,
    date: new Date("2021-05-01"),
    severity: "low",
  },
  {
    id: "outbreak-010",
    pathogen: "Influenza A",
    location: {
      country: "Canada",
      coordinates: [56.1304, -106.3468],
    },
    cases: 7000,
    date: new Date("2022-08-15"),
    severity: "low",
  },
  {
    id: "outbreak-011",
    pathogen: "Influenza A",
    location: {
      country: "Japan",
      coordinates: [36.2048, 138.2529],
    },
    cases: 11000,
    date: new Date("2022-09-10"),
    severity: "medium",
  },
  {
    id: "outbreak-012",
    pathogen: "RSV",
    location: {
      country: "France",
      coordinates: [46.6034, 1.8883],
    },
    cases: 5000,
    date: new Date("2022-12-10"),
    severity: "low",
  },
  {
    id: "outbreak-013",
    pathogen: "Norovirus",
    location: {
      country: "China",
      coordinates: [35.8617, 104.1954],
    },
    cases: 8000,
    date: new Date("2023-01-15"),
    severity: "medium",
  },
  {
    id: "outbreak-014",
    pathogen: "Norovirus",
    location: {
      country: "United States",
      coordinates: [37.0902, -95.7129],
    },
    cases: 6000,
    date: new Date("2023-02-01"),
    severity: "low",
  },
main
];

// Mock Phylogenetic Tree Data
export const mockPhylogeneticTree: PhylogeneticNode[] = [
  {
    id: "root",
    name: "SARS-CoV-2",
    children: ["alpha", "delta"],
    mutations: [],
    branchLength: 0,
    date: new Date("2019-12-01"),
  },
  {
    id: "alpha",
    name: "Alpha",
    parent: "root",
    children: ["alpha-1"],
    mutations: ["N501Y"],
    branchLength: 0.1,
    date: new Date("2020-09-20"),
  },
  {
    id: "alpha-1",
    name: "Alpha-1",
    parent: "alpha",
    children: [],
    mutations: ["D614G"],
    branchLength: 0.05,
    date: new Date("2020-10-01"),
  },
  {
    id: "delta",
    name: "Delta",
    parent: "root",
    children: ["delta-1"],
    mutations: ["L452R"],
    branchLength: 0.2,
    date: new Date("2021-02-15"),
  },
  {
    id: "delta-1",
    name: "Delta-1",
    parent: "delta",
    children: [],
    mutations: ["T478K"],
    branchLength: 0.07,
    date: new Date("2021-03-01"),
  },
enhancement/comprehensive-repository-updates
];

];
main
