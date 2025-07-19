import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { urlForImage } from '@/lib/sanity';

interface ProfileLogo {
  name: string;
  url?: string;
  width: number;
}

interface ProfileWithLogos {
  _id: string;
  name: string;
  logos?: { _ref: string }[];  // References to profileLogo documents
}

// API route to get all profile logos
export async function GET() {
  try {
    // First get all profiles with their logo references
    const profileQuery = `*[_type == "profile"] {
      _id,
      name,
      logos
    }`;
    
    const profileResults = await client.fetch(profileQuery);
    console.log("Raw profile data from Sanity:", profileResults);
    
    // Collect all logo references to fetch in one go
    const logoRefs = new Set<string>();
    profileResults.forEach((profile: ProfileWithLogos) => {
      if (profile.logos && Array.isArray(profile.logos)) {
        profile.logos.forEach(logoRef => {
          if (logoRef && logoRef._ref) {
            logoRefs.add(logoRef._ref);
          }
        });
      }
    });
    
    console.log(`Found ${logoRefs.size} unique logo references across all profiles`);
    
    // If we have logo references, fetch the actual logo documents
    let logoDocuments: Record<string, any> = {};
    if (logoRefs.size > 0) {
      const logoRefs_array = Array.from(logoRefs);
      const logoQuery = `*[_type == "profileLogo" && _id in $refs] {
        _id,
        name,
        img,
        width
      }`;
      
      const logoResults = await client.fetch(logoQuery, { refs: logoRefs_array });
      console.log(`Fetched ${logoResults.length} logo documents:`, logoResults);
      
      // Create a map for quick lookup by ID
      logoDocuments = logoResults.reduce((acc: Record<string, any>, logo: any) => {
        if (logo._id) {
          acc[logo._id] = logo;
        }
        return acc;
      }, {});
    }
    
    // Create a map of profile IDs to their processed logos
    const logosMap: Record<string, ProfileLogo[]> = {};
    
    // Process the results to generate URLs from the logo references
    profileResults.forEach((profile: ProfileWithLogos) => {
      if (profile._id && profile.logos && Array.isArray(profile.logos)) {
        console.log(`Processing logos for ${profile.name} (ID: ${profile._id})`);
        
        // Process each logo reference to get the actual logo data
        const processedLogos = profile.logos
          .map((logoRef, index) => {
            if (!logoRef || !logoRef._ref) {
              console.log(`Invalid logo reference at index ${index}:`, logoRef);
              return null;
            }
            
            const logoDoc = logoDocuments[logoRef._ref];
            if (!logoDoc) {
              console.log(`Could not find logo document for reference: ${logoRef._ref}`);
              return null;
            }
            
            if (!logoDoc.img) {
              console.log(`Logo document missing img field:`, logoDoc);
              return null;
            }
            
            // Generate URL from the logo's img field
            const url = urlForImage(logoDoc.img);
            if (!url) {
              console.log(`Could not generate URL for logo:`, logoDoc);
              return null;
            }
            
            return {
              name: logoDoc.name || `Logo ${index + 1}`,
              url: url,
              width: logoDoc.width || 100
            };
          })
          .filter(Boolean) as ProfileLogo[];
        
        if (processedLogos.length > 0) {
          logosMap[profile._id] = processedLogos;
          console.log(`Added ${processedLogos.length} logos for ${profile.name} (ID: ${profile._id})`);
        }
      }
    });
    
    console.log("Processed logos map:", Object.keys(logosMap).length > 0 ? 
      `${Object.keys(logosMap).length} profiles with logos` : 
      "No profiles with logos found");
    
    return NextResponse.json(logosMap);
  } catch (error) {
    console.error("Error fetching all profile logos in API route:", error);
    return NextResponse.json({}, { status: 500 });
  }
} 