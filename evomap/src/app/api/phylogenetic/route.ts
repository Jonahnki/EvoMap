import { NextResponse } from 'next/server';
import { mockPhylogeneticTree } from '@/lib/data/mockData';

export async function GET() {
  return NextResponse.json(mockPhylogeneticTree);
}