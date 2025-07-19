export interface PostType {
  _id: string;
  name: string;
  description: string;
  externalUrl?: string;
  thumbnail: any;
  slug: { current: string };
  createdAt: string;
  hidden?: boolean;
}

const post = {
  name: 'post',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      description: 'If provided, clicking the post will navigate to this external URL',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      description: 'Hide this post from the website',
      initialValue: false,
    },
  ],
}

export default post; 