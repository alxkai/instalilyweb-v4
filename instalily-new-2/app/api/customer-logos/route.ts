import { NextResponse } from 'next/server';
import { getCustomerLogos } from '@/lib/sanity';

// API route to get customer logos
export async function GET() {
  try {
    const logos = await getCustomerLogos();
    console.log("Server-side fetched customer logos:", logos);
    return NextResponse.json(logos);
  } catch (error) {
    console.error("Error fetching logos in API route:", error);
    return NextResponse.json([], { status: 500 });
  }
} 