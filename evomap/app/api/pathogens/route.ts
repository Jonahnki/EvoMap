import { NextRequest, NextResponse } from 'next/server';
import { mockPathogenData } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');

    const data = mockPathogenData;

    if (id) {
      const pathogen = data.find(p => p.id === id);
      if (!pathogen) {
        return NextResponse.json({ error: 'Pathogen not found' }, { status: 404 });
      }
      return NextResponse.json(pathogen);
    }

    let pathogens = data;
    if (type) {
      const t = type.toLowerCase();
      pathogens = data.filter(p =>
        p.name.toLowerCase().includes(t) ||
        p.lineage.toLowerCase().includes(t)
      );
    }

    return NextResponse.json(pathogens);
  } catch (error) {
    console.error('Error fetching pathogens:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
