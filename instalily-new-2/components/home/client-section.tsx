"use client";

import { useRef, useEffect, useState } from "react";

// Client component that handles the ticker animation
function LogoTicker({ logos }: { logos: string[] }) {
  const tickerRef = useRef<HTMLDivElement>(null);
  
  // Create a sufficiently large number of duplicates to ensure true infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];
  
  return (
    <div className="ticker-wrapper">
      <div className="ticker-container" ref={tickerRef}>
        <div className="ticker">
          {duplicatedLogos.map((url: string, index: number) => {
            // Check if this is one of the last two logos in the original set
            const originalIndex = index % logos.length;
            const isOneOfLastTwo = logos.length > 0 && (
              originalIndex === logos.length - 1 || 
              originalIndex === logos.length - 2
            );
            
            return (
              <div 
                key={index}
                className="ticker-item"
              >
                <div className="logo-container">
                  <img
                    src={url}
                    alt={`Partner logo ${originalIndex + 1}`}
                    draggable={false}
                    className={`logo-image filter invert ${isOneOfLastTwo ? 'small' : ''}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        .ticker-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          margin: 30px 0;
        }
        
        .ticker-container {
          width: 100%;
          overflow: hidden;
        }
        
        .ticker {
          display: flex;
          animation: ticker 40s linear infinite;
        }
        
        .ticker-item {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          flex-shrink: 0;
          min-width: 200px;
        }
        
        .logo-container {
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-image {
          height: 75px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          object-position: center;
          transition: transform 0.3s ease;
        }
        
        .logo-image.small {
          height: 55px;
          max-width: 180px;
        }
        
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-200px * ${logos.length}));
          }
        }
        
      `}</style>
    </div>
  );
}

// Main client component that fetches data and renders the section
export function ClientSection() {
  // Use useState instead of useRef for state that should trigger re-renders
  const [logos, setLogos] = useState<string[]>([]);
  
  // Load logos with proper error handling
  useEffect(() => {
    async function loadLogos() {
      try {
        // Fetch from our API route instead of directly from Sanity
        const response = await fetch('/api/customer-logos');
        if (!response.ok) {
          throw new Error(`Failed to fetch logos: ${response.status}`);
        }
        const fetchedLogos = await response.json();
        console.log("Logos fetched from API route:", fetchedLogos);
        if (fetchedLogos && fetchedLogos.length > 0) {
          setLogos(fetchedLogos);
        }
      } catch (error) {
        console.error("Error loading logos:", error);
      }
    }
    
    loadLogos();
  }, []);

  return (
    <section id="client-section" className="bg-black text-white overflow-hidden relative">
      <div
        className="absolute top-0 left-0 w-full h-24 z-20 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #000 0%, transparent 100%)",
        }}
      />
      <div className="py-6">
        <p className="text-center text-gray-300 mb-3 mt-8 font-mono">TRUSTED BY INDUSTRY LEADERS</p>
        <LogoTicker logos={logos} />
      </div>
    </section>
  );
}

