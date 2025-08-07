import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Placeholder: Accepts any file/data, returns success
  return NextResponse.json({ success: true, message: 'Upload endpoint is a placeholder. No data stored.' });
}