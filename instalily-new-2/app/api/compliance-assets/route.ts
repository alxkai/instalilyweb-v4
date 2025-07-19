import { NextResponse } from 'next/server';
import { getSiteResource } from '@/lib/sanity';

// API route to get compliance assets
export async function GET() {
  try {
    // Fetch both assets in parallel
    const [soc2, hipaa] = await Promise.all([
      getSiteResource('soc2'),
      getSiteResource('hipaa')
    ]);
    
    return NextResponse.json({
      soc2,
      hipaa
    });
  } catch (error) {
    console.error("Error fetching compliance assets in API route:", error);
    return NextResponse.json({}, { status: 500 });
  }
} 