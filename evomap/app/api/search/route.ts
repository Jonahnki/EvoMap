import { NextRequest, NextResponse } from 'next/server';
import { mockPathogenData as allPathogenData, mockOutbreakData as outbreakData } from '../../../src/lib/data/mockData';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text, filters } = body;

    if (!text) {
      return NextResponse.json({ error: 'Search text is required' }, { status: 400 });
    }

    const lowerText = text.toLowerCase();
    
    // Search in pathogen data
    const pathogenResults = allPathogenData.filter(pathogen => 
      pathogen.name.toLowerCase().includes(lowerText) ||
      pathogen.lineage.toLowerCase().includes(lowerText) ||
      pathogen.mutations.some(mutation => 
        mutation.toLowerCase().includes(lowerText)
      ) ||
      pathogen.location.country.toLowerCase().includes(lowerText)
    );
    
    // Search in outbreak data
    const outbreakResults = outbreakData.filter(outbreak =>
      outbreak.pathogen.toLowerCase().includes(lowerText) ||
      outbreak.location.country.toLowerCase().includes(lowerText)
    );

    // Apply filters if provided
    let filteredPathogens = pathogenResults;
    let filteredOutbreaks = outbreakResults;

    if (filters) {
      if (filters.countries && filters.countries.length > 0) {
        filteredPathogens = filteredPathogens.filter(p => 
          filters.countries.includes(p.location.country)
        );
        filteredOutbreaks = filteredOutbreaks.filter(o => 
          filters.countries.includes(o.location.country)
        );
      }

      if (filters.pathogens && filters.pathogens.length > 0) {
        filteredPathogens = filteredPathogens.filter(p => 
          filters.pathogens.includes(p.name)
        );
        filteredOutbreaks = filteredOutbreaks.filter(o => 
          filters.pathogens.includes(o.pathogen)
        );
      }

      if (filters.severity && filters.severity.length > 0) {
        filteredOutbreaks = filteredOutbreaks.filter(o => 
          filters.severity.includes(o.severity)
        );
      }
    }

    const results = {
      pathogens: filteredPathogens,
      outbreaks: filteredOutbreaks,
      total: filteredPathogens.length + filteredOutbreaks.length
    };

    return NextResponse.json(results);
  } catch (error) {
    console.error('Error processing search:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}