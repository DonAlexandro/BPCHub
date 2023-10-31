import { Connect } from 'src/shared/types';
import { ParsedArticle } from './article.entity';

export interface CreateArticleDTO extends Omit<Partial<ParsedArticle>, 'category' | 'tags'> {
  category: Connect;
  externalLink?: string;
  tags?: Connect;
}
