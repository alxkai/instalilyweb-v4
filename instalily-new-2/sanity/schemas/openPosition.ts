export interface OpenPositionType {
  _id: string;
  title: string;
  category: string;
  type: string;
  url: string;
  hidden: boolean;
  slug?: {
    current: string;
    _type: string;
  };
}

export default {
  name: 'openPosition',
  title: 'Open Positions',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'hidden',
      title: 'Hidden',
      type: 'boolean',
      initialValue: false,
    },
  ],
} 