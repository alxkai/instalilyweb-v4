import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PostType } from '@/lib/types';
import { urlForImage } from '@/lib/sanity';
import { Card } from '@/components/ui/card';

interface RelatedPostsProps {
  posts: PostType[];
  currentPostId: string;
  maxPosts?: number;
}

export function RelatedPosts({ posts, currentPostId, maxPosts = 3 }: RelatedPostsProps) {
  const relatedPosts = posts
    .filter(post => post._id !== currentPostId && !post.hidden && !post.externalUrl)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">Other Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => {
          const imageUrl = post.thumbnail ? urlForImage(post.thumbnail) : null;
          const publishDate = post.createdAt 
            ? new Date(post.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) 
            : null;

          return (
            <Card key={post._id} className="group hover:shadow-lg transition-shadow duration-200">
              <Link href={`/news/${post.slug.current}`} className="block">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  {imageUrl ? (
                    <Image 
                      src={imageUrl} 
                      alt={post.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  {publishDate && (
                    <p className="text-sm text-gray-500">
                      {publishDate}
                    </p>
                  )}
                </div>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
} 