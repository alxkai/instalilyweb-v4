import { PortableTextBlock, Slug, Image } from 'sanity';

export interface PostType {
  _id?: string;
  name: string;
  description: string;
  createdAt: string;
  slug: Slug;
  thumbnail: Image;
  externalUrl?: string;
  videoUrl?: string;
  hidden?: boolean;
  gated?: boolean;
  gatedMessage?: string;
  images?: Image[];
  content?: PortableTextBlock[];
}

export interface OpenPositionType {
  _id?: string;
  title: string;
  slug?: Slug;
  location?: string;
  type?: "Full-time" | "Internship" | "";
  category?: "Engineering" | "Business" | "Design" | "";
  url?: string;
  hidden?: boolean;
  closed?: boolean;
  new?: boolean;
  _updatedAt?: string;
}

export interface ProfileType {
  _id: string;
  name: string;
  username?: string;
  position: string;
  description: string;
  role: string;
  order: number;
  img: Image;
  logos?: ProfileLogoType[];
}

export interface ProfileLogoType {
  img: Image;
  name: string;
  width: number;
} 