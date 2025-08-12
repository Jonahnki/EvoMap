import { NextResponse } from 'next/server';

export async function POST(_req: Request) {
  // Upload handling logic here
  return NextResponse.json({ success: true });
}
