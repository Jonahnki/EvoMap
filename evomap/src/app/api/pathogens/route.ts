import { NextResponse } from 'next/server';
import { mockPathogenData } from '@/lib/data/mockData';

export async function GET() {
  return NextResponse.json(mockPathogenData);
}