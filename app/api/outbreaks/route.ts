import { NextRequest, NextResponse } from 'next/server';
import { mockOutbreakData as outbreakData } from '../../../src/lib/data/mockData';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const country = searchParams.get('country');
    const severity = searchParams.get('severity');
    const pathogen = searchParams.get('pathogen');

    if (id) {
      const outbreak = outbreakData.find(o => o.id === id);
      if (!outbreak) {
        return NextResponse.json({ error: 'Outbreak not found' }, { status: 404 });
      }
      return NextResponse.json(outbreak);
    }

    let filteredOutbreaks = outbreakData;

    if (country) {
      filteredOutbreaks = filteredOutbreaks.filter(o => 
        o.location.country.toLowerCase().includes(country.toLowerCase())
      );
    }

    if (severity) {
      filteredOutbreaks = filteredOutbreaks.filter(o => o.severity === severity);
    }

    if (pathogen) {
      filteredOutbreaks = filteredOutbreaks.filter(o => 
        o.pathogen.toLowerCase().includes(pathogen.toLowerCase())
      );
    }

    return NextResponse.json(filteredOutbreaks);
  } catch (error) {
    console.error('Error fetching outbreaks:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

