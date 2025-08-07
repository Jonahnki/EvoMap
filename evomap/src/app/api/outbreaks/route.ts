import { NextResponse } from 'next/server';
import { mockOutbreakData } from '@/lib/data/mockData';

export async function GET() {
  return NextResponse.json(mockOutbreakData);
}