import { Category } from 'src/contexts/category';
import { Nullable } from 'src/shared/types';
import { Tag } from 'src/contexts/tag';

export interface ParsedArticle {
  title: string;
  image: string;
  externalId: string;
  category: string;
  externalPublishDate: Date;
  description: string;
  tags?: string[];
}

export interface ParsedAd {
  title: string;
  category: string;
  externalLink: string;
}

export interface Article {
  title: string;
  externalId?: string;
  views: Nullable<number>;
  description?: string;
  image?: string;
  content: Nullable<string>;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  externalPublishDate?: Date;
  externalLink?: string;
}

export interface ExtendedArticle extends Article {
  category: {
    data: Category;
  };
  tags?: {
    data: Tag[];
  };
}
