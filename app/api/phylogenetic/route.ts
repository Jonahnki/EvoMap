import { NextRequest, NextResponse } from 'next/server';
import { phylogeneticData } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pathogen = searchParams.get('pathogen');

    // For now, return the same tree data regardless of pathogen
    // In a real implementation, this would filter based on the pathogen type
    let treeData = phylogeneticData;

    if (pathogen) {
      // Filter tree data based on pathogen if needed
      // This is a placeholder for future implementation
      treeData = phylogeneticData.filter(node => 
        node.name.toLowerCase().includes(pathogen.toLowerCase())
      );
    }

    return NextResponse.json(treeData);
  } catch (error) {
    console.error('Error fetching phylogenetic data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}