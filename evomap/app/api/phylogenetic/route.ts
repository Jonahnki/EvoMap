import { NextRequest, NextResponse } from 'next/server';
import { mockPhylogeneticTree } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const pathogen = searchParams.get('pathogen');

    let treeData = mockPhylogeneticTree;

    if (pathogen) {
      treeData = mockPhylogeneticTree.filter(node => 
        node.name.toLowerCase().includes(pathogen.toLowerCase())
      );
    }

    return NextResponse.json({
      success: true,
      data: treeData
    });
  } catch (error) {
    console.error('Error fetching phylogenetic data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
