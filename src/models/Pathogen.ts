// src/models/Pathogen.ts

export interface Pathogen {
  id: string;
  name: string;
  lineage: string;
  mutations: string[];
  clade?: string;
  quality: string;
  location: {
    country: string;
    region?: string;
    city?: string;
    coordinates: [number, number];
  };
  collectionDate: Date;
  submissionDate: Date;
  sequenceData?: string;
}

// Assign to a variable first to satisfy ESLint
const defaultPathogen: Pathogen = {
  id: "default-001",
  name: "Unknown Pathogen",
  lineage: "Unknown",
  mutations: [],
  quality: "unknown",
  location: {
    country: "Unknown",
    coordinates: [0, 0],
  },
  collectionDate: new Date(),
  submissionDate: new Date(),
  sequenceData: undefined,
};

// Export the variable (not anonymous)
export default defaultPathogen;
