// File: app/api/pathogens/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { mockPathogenData as allPathogenData, getPathogensByType } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    if (id) {
      const pathogen = allPathogenData.find(p => p.id === id);
      if (!pathogen) {
        return NextResponse.json({ error: 'Pathogen not found' }, { status: 404 });
      }
      return NextResponse.json(pathogen);
    }

    const pathogens = type ? getPathogensByType(type) : allPathogenData;
    
    return NextResponse.json(pathogens);
  } catch (error) {
    console.error('Error fetching pathogens:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

