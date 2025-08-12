import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Pathogen from '@/models/Pathogen';

export async function GET() {
  try {
    await connectToDatabase();
    const pathogens = await Pathogen.find({});
    return NextResponse.json({ success: true, data: pathogens });
  } catch (error) {
    console.error("Error fetching pathogens:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch pathogens" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const newPathogen = await Pathogen.create(body);
    return NextResponse.json({ success: true, data: newPathogen });
  } catch (error) {
    console.error("Error creating pathogen:", error);
    return NextResponse.json({ success: false, error: "Failed to create pathogen" }, { status: 500 });
  }
}
