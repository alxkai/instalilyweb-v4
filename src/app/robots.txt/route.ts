import { NextResponse } from 'next/server';

export async function GET() {
  const isProduction = process.env.ALLOW_INDEXING === 'true';
  
  const robotsTxt = isProduction
    ? `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://instalily.ai/sitemap.xml

# Crawl-delay for well-behaved crawlers
Crawl-delay: 1

# Block access to admin and private areas
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /.env*

# Allow specific important pages
Allow: /
Allow: /about
Allow: /careers
Allow: /news
Allow: /book-a-demo`
    : `User-agent: *
Disallow: /

# Block all crawling for non-production environments`;

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  });
} 