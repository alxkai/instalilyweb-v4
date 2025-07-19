import { NextResponse } from 'next/server';
import { getSRSLogo } from '@/lib/sanity';

// API route to get the SRS logo
export async function GET() {
  try {
    const logoUrl = await getSRSLogo();
    console.log("Server-side fetched SRS logo:", logoUrl);
    return NextResponse.json({ logoUrl });
  } catch (error) {
    console.error("Error fetching SRS logo in API route:", error);
    return NextResponse.json({ logoUrl: null }, { status: 500 });
  }
} 