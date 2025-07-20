import React from 'react'
import { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { getPost, getPosts } from '@/lib/sanity'
import { urlForImage } from '@/lib/sanity'
import { Nav } from '@/components/layout/nav'
import { Footer } from '@/components/layout/footer'
import { CTASection } from '@/components/layout/cta-section'

interface NewsArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts
    .filter((post: any) => post.slug && post.slug.current)
    .map((post: any) => ({
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

  return {
    title: `${post.name} | InstaLILY AI`,
    description: post.description,
    openGraph: {
      title: `${post.name} | InstaLILY AI`,
      description: post.description,
    },
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
      // Check if any child contains image placeholders
      const processedChildren = React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          // Look for image placeholders like <IMAGE_1>, <IMAGE_2>, etc.
          const imageRegex = /<IMAGE_(\d+)>/g;
          const parts = child.split(imageRegex);
          
          return parts.map((part, index) => {
            // Check if this part is a number (from the regex capture group)
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
            // Return text parts as-is
            return part;
          });
        }
        return child;
      });

      return <p className="text-lg text-gray-700 mb-4">{processedChildren}</p>;
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

  if (!post) {
    notFound();
  }

  // Debug logging to understand the post structure
  console.log('Post data:', JSON.stringify(post, null, 2));
  console.log('Post images:', post.images);
  console.log('Post content sample:', post.content?.slice(0, 3));

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

  // Create components with access to post images
  const portableTextComponents = createPortableTextComponents(post.images || []);

  return (
    <div className="min-h-screen bg-[#fdfff7]">
      <div className="sticky top-0 z-[100] w-full">
        <div className="w-full max-w-[1340px] mx-auto sm:pt-4">
          <Nav />
        </div>
      </div>
      
      <main className="-mt-[74px] pt-[74px]">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 leading-tight">{post.name}</h1>
            
            {publishDate && (
              <p className="text-gray-500 mb-4">{publishDate}</p>
            )}
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.description}</p>
            
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
        </article>
      </main>
      <Footer />
    </div>
  );
} 