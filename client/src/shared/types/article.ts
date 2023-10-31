import { Category } from './category';
import { Nullable } from './common';
import { Tag } from './tag';

export interface Article {
  id: number;
  attributes: {
    title: string;
    externalId?: string;
    views?: Nullable<number>;
    description?: string;
    image?: string;
    content?: Nullable<string>;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    externalPublishDate?: Date;
    externalLink?: string;
    category: {
      data: Category;
    };
    tags?: {
      data: Tag[];
    };
  };
}
