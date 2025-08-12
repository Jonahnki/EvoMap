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
];