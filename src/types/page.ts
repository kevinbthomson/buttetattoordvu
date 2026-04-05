export type Page = {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  photo?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  summary: string;
  body?: any[]; // Portable Text blocks
};
