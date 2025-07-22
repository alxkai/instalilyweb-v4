import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { getPost, getPosts } from '@/lib/sanity'
import { urlForImage } from '@/lib/sanity'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { RelatedPosts } from '@/components/layout/related-posts'
import { AboutHero } from '@/components/layout/about-hero'
import { SocialShare } from '@/components/ui/social-share'

interface NewsArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface PostImage {
  asset: {
    _ref: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts
    .filter((post: { slug?: { current?: string } }) => post.slug && post.slug.current)
    .map((post: { slug: { current: string } }) => ({
      slug: post.slug.current,
    }));
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const imageUrl = post.thumbnail ? urlForImage(post.thumbnail) : null;
  const publishDate = post.createdAt ? new Date(post.createdAt).toISOString() : undefined;

  return {
    title: post.name,
    description: post.description,
    openGraph: {
      title: post.name,
      description: post.description,
      type: 'article',
      publishedTime: publishDate,
      authors: ['InstaLILY AI Team'],
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.name
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.name,
      description: post.description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: `https://instalily.ai/news/${slug}`
    },
    keywords: [
      'InstaLILY AI',
      'AI automation',
      'enterprise AI',
      'B2B workflows',
      'news',
      'announcements'
    ],
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createPortableTextComponents = (images: any[] = []): PortableTextComponents => ({
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value);
      if (!imageUrl) return null;
      
      return (
        <div className="my-8">
          <Image
            src={imageUrl}
            alt=""
            width={800}
            height={600}
            className="w-full h-auto rounded-lg"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-4">{children}</h3>,
    normal: ({ children }) => {
      const processedChildren = React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          const imageRegex = /<IMAGE_(\d+)>/g;
          const parts = child.split(imageRegex);
          
          return parts.map((part, index) => {
            const imageNumber = parseInt(part);
            if (!isNaN(imageNumber) && images && images[imageNumber - 1]) {
              const imageUrl = urlForImage(images[imageNumber - 1]);
              if (imageUrl) {
                return (
                  <div key={index} className="my-8">
                    <Image
                      src={imageUrl}
                      alt=""
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                );
              }
            }
            return part;
          });
        }
        return child;
      });

      return <p className="body-copy text-gray-700 mb-4">{processedChildren}</p>;
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
  },
});

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params;
  const post = await getPost(slug);
  const allPosts = await getPosts();

  if (!post) {
    notFound();
  }

  if (post.externalUrl) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
          <p className="mb-4">You are being redirected to the article.</p>
          <a 
            href={post.externalUrl} 
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here if you are not redirected automatically
          </a>
        </div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = "${post.externalUrl}";`,
          }}
        />
      </div>
    );
  }

  const thumbnailUrl = post.thumbnail ? urlForImage(post.thumbnail) : null;
  const publishDate = post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  const portableTextComponents = createPortableTextComponents(post.images || []);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: post.name }
  ];

  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto sm:pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[90px]">
        <AboutHero
          title="News & Announcements"
          description="The latest updates, articles, and press from the InstaLILY AI team."
        />
        <section className="bg-[#fdfff7] py-12 sm:py-16">
          <article className="max-w-4xl mx-auto px-4">
            <Breadcrumbs items={breadcrumbItems} className="mb-8" />
          
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 leading-tight">{post.name}</h1>
            
            {publishDate && (
              <p className="text-gray-500 mb-4">{publishDate}</p>
            )}
            
            <p className="body-copy text-gray-600 mb-8">{post.description}</p>
            
            <SocialShare 
              url={`https://instalily.ai/news/${slug}`}
              title={post.name}
              description={post.description}
              className="mb-8"
            />
            
            {thumbnailUrl && (
              <div className="mb-8">
                <Image
                  src={thumbnailUrl}
                  alt={post.name}
                  width={800}
                  height={400}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            )}
          </header>
          
          {post.content && Array.isArray(post.content) && post.content.length > 0 && (
            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={post.content} 
                components={portableTextComponents}
              />
            </div>
          )}
          
          {post.videoUrl && (
            <div className="mt-8">
              <div className="aspect-video">
                <iframe
                  src={post.videoUrl}
                  title={post.name}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <RelatedPosts 
            posts={allPosts} 
            currentPostId={post._id || ''} 
            maxPosts={3} 
          />
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
} 