import { Connect } from 'src/shared/types';
import { ParsedArticle } from './article.entity';

export interface CreateArticleDTO extends Omit<ParsedArticle, 'category' | 'tags'> {
  category: Connect;
  tags: Connect;
}
