export interface News {
  count: number;
  included: null;
  input: string;
  result: NewsResult[];
  links: null;
}

export interface NewsResult {
  merchantId: number;
  status: string;
  name: null;
  featured: boolean;
  date: string;
  title: string;
  subtitle: string;
  slug: string;
  shortDescription: string;
  largeDescription: string;
  creationDate: string;
  lastUpdateDate: string;
  newId: number;
  imagesURL: string[];
  imageUrl: string;
  authors: any[];
  tags: any[];
  categories: any[];
  descriptions: Description[];
}

export interface Description {
  language: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  largeDescription: string;
}
