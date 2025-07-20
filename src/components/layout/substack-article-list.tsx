"use client"

import { urlForImage } from "@/lib/sanity";
import { PostType } from "@/lib/types";
import { FC } from "react";
import { Card } from "@/components/ui/card";

interface SubstackArticleCardProps {
  name: string;
  description: string;
  externalUrl?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thumbnail?: any;
  slug: { current: string } | { _type: string; current: string };
  createdAt: string;
}

const SubstackArticleCard: FC<SubstackArticleCardProps> = ({
  name,
  description,
  externalUrl,
  thumbnail,
  slug,
  createdAt,
}) => {
  const imageUrl = thumbnail?.directUrl || (thumbnail?.asset ? urlForImage(thumbnail) : null);
  const slugCurrent = slug && typeof slug === 'object' && 'current' in slug ? slug.current : '';
  
  const handleClick = () => {
    if (externalUrl) {
      window.open(externalUrl, '_blank');
    } else if (slugCurrent) {
      window.location.href = `/news/${slugCurrent}`;
    }
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={handleClick}>
      <div className="aspect-video relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">No image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="text-sm text-gray-500">
          {new Date(createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
    </Card>
  );
};

interface SubstackArticleListProps {
  articleList: (PostType | {
    _id?: string;
    name: string;
    description: string;
    externalUrl?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    thumbnail?: any;
    slug: { current: string };
    createdAt: string;
    hidden?: boolean;
  })[];
}

export default function SubstackArticleListSection({ articleList }: SubstackArticleListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {articleList
        .filter((article) => !article.hidden)
        .map((article, index) => (
          <SubstackArticleCard {...article} key={article._id || article.slug.current} />
        ))}
    </div>
  );
} 