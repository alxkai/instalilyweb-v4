import { NavBar } from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/layout/cta-section";
import { getPosts } from "@/sanity/query_new";
import SubstackArticleListSection from "../ai-dispatch/components/SubstackArticleListSection";
import type { Metadata } from "next";
import { AboutHero } from "../about/components/hero";

export const metadata: Metadata = {
  title: "News & Announcements | InstaLILY AI",
  openGraph: {
    title: "News & Announcements | InstaLILY AI"
  }
};

export default async function NewsPage() {
  const allPosts = await getPosts();
  // Filter OUT Substack articles to show only news
  const newsArticles = allPosts.filter(post => 
    !post.name.toLowerCase().includes('substack') && 
    !post.description.toLowerCase().includes('substack') &&
    !(post.externalUrl && post.externalUrl.includes('substack'))
  );

  return (
    <>
      <NavBar />
      <main>
        <AboutHero
          title="News & Announcements"
          description="The latest updates, articles, and press from the InstaLILY AI team."
        />
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <SubstackArticleListSection articleList={newsArticles} />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
} 
