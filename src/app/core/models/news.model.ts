export interface News {
  count: number;
  included: null;
  input: string;
  result: NewsResult[];
  links: null;
}

export interface NewsResult {
  merchantId: number;
  status: string | null;
  name: string | null;
  featured: boolean;
  date: string | null;
  title: string | null;
  subtitle: string | null;
  slug: string | null;
  shortDescription: string | null;
  largeDescription: string | null;
  creationDate: string | null;
  lastUpdateDate: string | null;
  newId: number
  imagesURL: [string] | null;
  imageUrl: string | null;
  metatags?: Metatags[]
  descriptions?: Descriptions[]
  authors: any[] | null;
  categories: any[] | null;
  tags: any[] | null;
}

export interface Metatags {
  merchantId: number;
  status: string | null;
  name: string | null;
  typeId: number;
  creationDate: string | null;
  lastUpdateDate: string | null;
  metatagId: number;
  typeName: string | null;
  descriptions?: Descriptions[]
}

export interface Descriptions {
  language: string;
  slug?: string | null;
  title: string | null;
  subtitle?: string | null;
  shortDescription?: string | null;
  largeDescription?: string | null;
  description?: string | null;
  keywords?: string | null;
  creationDate?: string | null;
  lastUpdateDate?: string | null;
}
