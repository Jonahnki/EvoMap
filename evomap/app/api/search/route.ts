import { NextRequest, NextResponse } from 'next/server';
import { mockPathogenData as allPathogenData, mockOutbreakData as outbreakData } 
  from '../../../src/lib/data/mockData';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, filters } = body;

    if (!text) {
      return NextResponse.json({ error: 'Search text is required' }, { status: 400 });
    }

    const lowerText = text.toLowerCase();

    // Filter pathogen data by text search
    const pathogenResults = allPathogenData.filter(pathogen => 
      pathogen.name.toLowerCase().includes(lowerText) ||
      pathogen.lineage.toLowerCase().includes(lowerText) ||
      pathogen.mutations.some(mutation => mutation.toLowerCase().includes(lowerText)) ||
      pathogen.location.country.toLowerCase().includes(lowerText)
    );

    // Filter outbreak data by text search (using 'type' and 'name' instead of 'pathogen')
    const outbreakResults = outbreakData.filter(outbreak =>
      outbreak.type.toLowerCase().includes(lowerText) ||
      outbreak.name.toLowerCase().includes(lowerText) ||
      outbreak.location.country.toLowerCase().includes(lowerText)
    );

    // Apply optional filters if present
    let filteredPathogens = pathogenResults;
    let filteredOutbreaks = outbreakResults;

    if (filters) {
      if (filters.countries?.length) {
        filteredPathogens = filteredPathogens.filter(p => filters.countries.includes(p.location.country));
        filteredOutbreaks = filteredOutbreaks.filter(o => filters.countries.includes(o.location.country));
      }

      if (filters.pathogens?.length) {
        filteredPathogens = filteredPathogens.filter(p => filters.pathogens.includes(p.name));
        filteredOutbreaks = filteredOutbreaks.filter(o => filters.pathogens.includes(o.name));
      }

      if (filters.severity?.length) {
        filteredOutbreaks = filteredOutbreaks.filter(o => filters.severity.includes(o.severity));
      }
    }

    return NextResponse.json({
      pathogens: filteredPathogens,
      outbreaks: filteredOutbreaks,
      total: filteredPathogens.length + filteredOutbreaks.length
    });
  } catch (error) {
    console.error('Error processing search:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
