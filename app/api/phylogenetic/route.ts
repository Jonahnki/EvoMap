import { NextRequest, NextResponse } from 'next/server';
import { mockPhylogeneticTree as phylogeneticData } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pathogen = searchParams.get('pathogen');

    let treeData = phylogeneticData;

    if (pathogen) {
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

