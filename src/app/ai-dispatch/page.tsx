import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { FullWidthCTA } from "@/components/layout/full-width-cta";
import SubstackArticleListSection from "@/components/layout/substack-article-list";
import { AboutHero } from "@/components/layout/about-hero";
import type { Metadata } from "next";
import { XMLParser } from 'fast-xml-parser';
import { PostType } from "@/lib/types";

export const metadata: Metadata = {
  title: "The AI Dispatch | InstaLILY AI",
  openGraph: {
    title: "The AI Dispatch | InstaLILY AI"
  }
};

export const revalidate = 1800;

async function fetchSubstackArticles(): Promise<PostType[]> {
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
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return itemsArray.map((item: any, index: number) => ({
      _id: `substack-${index}`,
      name: item.title || '',
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || '',
      externalUrl: item.link || '',
      createdAt: item.pubDate || '',
      slug: { 
        current: (item.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
        _type: 'slug'
      },
      thumbnail: item.enclosure?.['@_url'] ? {
        directUrl: item.enclosure['@_url']
      } : { asset: { _ref: '' } },
      hidden: false
    })) as PostType[];
  } catch (error) {
    console.error('Error fetching Substack articles:', error);
    return [];
  }
}

export default async function AIDispatchPage() {
  const articles = await fetchSubstackArticles();

  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto sm:pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="The AI Dispatch"
          description="Fresh insights on AI, automation, and the future of work from the InstaLILY team."
        />
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SubstackArticleListSection articleList={articles} />
          </div>
        </section>

        <FullWidthCTA />
      </main>
      <Footer />
    </div>
  );
} 