// Mock API for development and demo purposes
export interface PhylogeneticTree {
  name: string;
  description: string;
  newick: string;
  nodeCount: number;
  timespan: string;
}

export interface SpeciesInfo {
  name: string;
  commonName?: string;
  classification: {
    kingdom: string;
    phylum: string;
    class: string;
    order: string;
    family: string;
    genus: string;
    species: string;
  };
  description?: string;
}

export const mockPhylogenyApi = {
  async fetchDemoTrees(): Promise<PhylogeneticTree[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const response = await fetch('/datasets/demo_trees.json');
    const data = await response.json();
    
    return Object.values(data) as PhylogeneticTree[];
  },
  
  async searchSpecies(query: string): Promise<string[]> {
    // Mock species search
    const mockSpecies = [
      'Homo sapiens', 'Pan troglodytes', 'Gorilla gorilla',
      'Pongo pygmaeus', 'Macaca mulatta', 'Mus musculus', 
      'Rattus norvegicus', 'Canis lupus', 'Felis catus',
      'Drosophila melanogaster', 'Caenorhabditis elegans',
      'Arabidopsis thaliana', 'Saccharomyces cerevisiae'
    ];
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return mockSpecies.filter(species => 
      species.toLowerCase().includes(query.toLowerCase())
    );
  },

  async getSpeciesInfo(speciesName: string): Promise<SpeciesInfo | null> {
    // Mock species information lookup
    const mockSpeciesData: Record<string, SpeciesInfo> = {
      'Homo sapiens': {
        name: 'Homo sapiens',
        commonName: 'Human',
        classification: {
          kingdom: 'Animalia',
          phylum: 'Chordata',
          class: 'Mammalia',
          order: 'Primates',
          family: 'Hominidae',
          genus: 'Homo',
          species: 'sapiens'
        },
        description: 'Modern humans, the only extant members of the subtribe Hominina.'
      },
      'Pan troglodytes': {
        name: 'Pan troglodytes',
        commonName: 'Chimpanzee',
        classification: {
          kingdom: 'Animalia',
          phylum: 'Chordata',
          class: 'Mammalia',
          order: 'Primates',
          family: 'Hominidae',
          genus: 'Pan',
          species: 'troglodytes'
        },
        description: 'Common chimpanzee, our closest living relative sharing ~98.8% DNA similarity.'
      }
    };

    await new Promise(resolve => setTimeout(resolve, 300));
    
    return mockSpeciesData[speciesName] || null;
  },

  async validateNewickFormat(newickString: string): Promise<{ valid: boolean; error?: string }> {
    // Basic Newick format validation
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (!newickString.trim()) {
      return { valid: false, error: 'Empty input' };
    }
    
    if (!newickString.endsWith(';')) {
      return { valid: false, error: 'Newick string must end with semicolon' };
    }
    
    // Check for balanced parentheses
    let balance = 0;
    for (const char of newickString) {
      if (char === '(') balance++;
      if (char === ')') balance--;
      if (balance < 0) {
        return { valid: false, error: 'Unbalanced parentheses' };
      }
    }
    
    if (balance !== 0) {
      return { valid: false, error: 'Unbalanced parentheses' };
    }
    
    return { valid: true };
  },

  async generateRandomTree(nodeCount: number): Promise<string> {
    // Generate a random tree for testing purposes
    await new Promise(resolve => setTimeout(resolve, 200));
    
    if (nodeCount < 2) {
      throw new Error('Tree must have at least 2 nodes');
    }
    
    // Simple random tree generator (binary tree)
    const generateSubtree = (count: number): string => {
      if (count === 1) {
        return `Species_${Math.floor(Math.random() * 1000)}:${(Math.random() * 0.1).toFixed(3)}`;
      }
      
      const leftCount = Math.floor(count / 2);
      const rightCount = count - leftCount;
      
      const left = generateSubtree(leftCount);
      const right = generateSubtree(rightCount);
      
      return `(${left},${right}):${(Math.random() * 0.05).toFixed(3)}`;
    };
    
    return generateSubtree(nodeCount) + ';';
  }
};

// Export utility functions for tree processing
export const treeUtils = {
  parseNewick(newick: string): any {
    // Placeholder for actual Newick parsing logic
    // In a real implementation, this would parse the Newick format
    // and return a tree data structure
    console.log('Parsing Newick:', newick);
    return { nodes: [], edges: [] };
  },

  calculateTreeStats(newick: string): { nodeCount: number; maxDepth: number; leafCount: number } {
    // Mock tree statistics calculation
    const nodeCount = (newick.match(/[,()]/g) || []).length + 1;
    const leafCount = (newick.match(/,/g) || []).length + 1;
    const maxDepth = Math.ceil(Math.log2(leafCount));
    
    return { nodeCount, maxDepth, leafCount };
  }
};
