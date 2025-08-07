import { NextRequest, NextResponse } from 'next/server';
import { mockPathogenData, mockOutbreakData } from '@/lib/data/mockData';

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  const q = query?.toLowerCase() || '';
  const pathogenResults = mockPathogenData.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.lineage.toLowerCase().includes(q) ||
    p.location.country.toLowerCase().includes(q)
  );
  const outbreakResults = mockOutbreakData.filter(o =>
    o.pathogen.toLowerCase().includes(q) ||
    o.location.country.toLowerCase().includes(q)
  );
  return NextResponse.json({ pathogens: pathogenResults, outbreaks: outbreakResults });
}