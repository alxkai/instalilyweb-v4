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
  logos?: { _ref: string }[];
}

interface LogoDocument {
  _id: string;
  name: string;
  img: {
    asset: {
      _ref: string;
    };
  };
  width: number;
}

export async function GET() {
  try {
    const profileQuery = `*[_type == "profile"] {
      _id,
      name,
      logos
    }`;
    
    const profileResults = await client.fetch(profileQuery);
    
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
    
    let logoDocuments: Record<string, LogoDocument> = {};
    if (logoRefs.size > 0) {
      const logoRefs_array = Array.from(logoRefs);
      const logoQuery = `*[_type == "profileLogo" && _id in $refs] {
        _id,
        name,
        img,
        width
      }`;
      
      const logoResults: LogoDocument[] = await client.fetch(logoQuery, { refs: logoRefs_array });
      
      logoDocuments = logoResults.reduce((acc: Record<string, LogoDocument>, logo: LogoDocument) => {
        if (logo._id) {
          acc[logo._id] = logo;
        }
        return acc;
      }, {});
    }
    
    const logosMap: Record<string, ProfileLogo[]> = {};
    
    profileResults.forEach((profile: ProfileWithLogos) => {
      if (profile._id && profile.logos && Array.isArray(profile.logos)) {
        const processedLogos = profile.logos
          .map((logoRef, index) => {
            if (!logoRef || !logoRef._ref) {
              return null;
            }
            
            const logoDoc = logoDocuments[logoRef._ref];
            if (!logoDoc || !logoDoc.img) {
              return null;
            }
            
            const url = urlForImage(logoDoc.img);
            if (!url) {
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
        }
      }
    });
    
    return NextResponse.json(logosMap);
  } catch (error) {
    console.error('Error fetching profile logos:', error);
    return NextResponse.json({}, { status: 500 });
  }
} 