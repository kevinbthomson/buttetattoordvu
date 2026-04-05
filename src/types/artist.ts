export type Artist = {
  _id: string;
  _type: 'artist';
  name: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  order: number;
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  instagram: string;
  portfolio?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  }[];
};
