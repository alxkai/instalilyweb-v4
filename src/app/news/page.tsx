import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { FullWidthCTA } from "@/components/layout/full-width-cta";
import { getPosts } from "@/lib/sanity";
import SubstackArticleListSection from "@/components/layout/substack-article-list";
import { AboutHero } from "@/components/layout/about-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Announcements | InstaLILY AI",
  openGraph: {
    title: "News & Announcements | InstaLILY AI"
  }
};

export default async function NewsPage() {
  const allPosts = await getPosts();
  const newsArticles = allPosts.filter(post => 
    !post.name.toLowerCase().includes('substack') && 
    !post.description.toLowerCase().includes('substack') &&
    !(post.externalUrl && post.externalUrl.includes('substack'))
  );

  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-50 w-full">
        <div className="w-full max-w-[1340px] mx-auto pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="News & Announcements"
          description="The latest updates, articles, and press from the InstaLILY AI team."
        />
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SubstackArticleListSection articleList={newsArticles} />
          </div>
        </section>

        <FullWidthCTA />
      </main>
      <Footer />
    </div>
  );
} 