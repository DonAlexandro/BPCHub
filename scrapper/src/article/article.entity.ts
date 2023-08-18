import { Category } from 'src/category';
import { Nullable } from 'src/shared/types';
import { Tag } from 'src/tag';

export interface ParsedArticle {
  title: string;
  image: string;
  externalId: string;
  category: string;
  externalPublishDate: Date;
  description: string;
  tags?: string[];
}

export interface Article {
  title: string;
  externalId: string;
  views: Nullable<number>;
  description: string;
  image: string;
  content: Nullable<string>;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  externalPublishDate: Date;
}

export interface ExtendedArticle extends Article {
  category: {
    data: Category;
  };
  tags: {
    data: Tag[];
  };
}
