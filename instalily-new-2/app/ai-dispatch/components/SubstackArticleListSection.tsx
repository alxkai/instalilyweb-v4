import { urlForImage } from "@/lib/sanity";
import { PostType } from "@/sanity/types_new";
import { FC } from "react";

const SubstackArticleCard: FC<any> = ({
  name,
  description,
  externalUrl,
  thumbnail,
  slug,
  createdAt,
}) => {
  const url = externalUrl ? externalUrl : `/article/${slug.current}`;

  const date = new Date(createdAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  // Handle both Sanity images and direct URLs
  const imageUrl = thumbnail?.directUrl ? thumbnail.directUrl : urlForImage(thumbnail);

  return (
    <a
      href={url}
      {...(externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      rel="noopener noreferrer"
    >
      <div className="col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="aspect-video">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="p-2">
        <p className="text-xl my-2 text-gray-500 font-semibold">{name}</p>
        <p className="text-sm mb-2 text-muted-foreground">{formattedDate}</p>
      </div>
    </a>
  );
};

interface SubstackArticleListProp {
  articleList: any[];
}

export default function SubstackArticleListSection({ articleList }: SubstackArticleListProp) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {articleList
        .filter((article) => !article.hidden)
        .map((article, index) => (
          <SubstackArticleCard {...article} key={index} />
        ))}
    </div>
  );
} 