import { NavBar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/layout/cta-section";
import SubstackArticleListSection from "./components/SubstackArticleListSection";
import type { Metadata } from "next";
import { AboutHero } from "../about/components/hero";
import { XMLParser } from 'fast-xml-parser';

export const metadata: Metadata = {
  title: "The AI Dispatch | InstaLILY AI",
  openGraph: {
    title: "The AI Dispatch | InstaLILY AI"
  }
};

export const revalidate = 1800;

interface SubstackArticle {
  name: string;
  description: string;
  externalUrl: string;
  createdAt: string;
  slug: { current: string };
  thumbnail?: { asset: { url: string } } | { directUrl: string };
}

async function fetchSubstackArticles(): Promise<SubstackArticle[]> {
  try {
    const response = await fetch('https://instalilyai.substack.com/feed', {
      headers: {
        'User-Agent': 'InstaLILY-RSS-Bot/1.0',
      },
      next: { revalidate: 1800 }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    const xmlContent = await response.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: '@_'
    });
    
    const result = parser.parse(xmlContent);
    const items = result.rss?.channel?.item || [];
    const itemsArray = Array.isArray(items) ? items : [items];
    
    return itemsArray.map((item: any) => ({
      name: item.title || '',
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || '',
      externalUrl: item.link || '',
      createdAt: item.pubDate || '',
      slug: { 
        current: (item.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') 
      },
      thumbnail: item.enclosure?.['@_url'] ? {
        directUrl: item.enclosure['@_url']
      } : undefined
    }));
  } catch (error) {
    console.error('Error fetching Substack articles:', error);
    return [];
  }
}

export default async function AIDispatchPage() {
  const articles = await fetchSubstackArticles();

  return (
    <>
      <NavBar />
      <main>
        <AboutHero
          title="The AI Dispatch"
          description="Stay informed with the AI news that matters most to industrial and distribution operators. We curate and deliver the latest insights, trends, and breakthroughs shaping the future of your industry."
        />
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SubstackArticleListSection articleList={articles} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
} 