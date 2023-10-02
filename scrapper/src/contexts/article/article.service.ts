import { Injectable } from '@nestjs/common';
import { stringify } from 'qs';
import { backendRequest } from 'src/utils';
import { CreateArticleDTO } from './article.dto';
import { Article, ExtendedArticle } from './article.entity';
import { SingleResponse } from 'src/shared/types';

type CreationResponseType = Promise<SingleResponse<ExtendedArticle>>;
type FindByTitleResponseType = Promise<SingleResponse<Article>>;

@Injectable()
export class ArticleService {
  async create(createArticleDto: CreateArticleDTO): CreationResponseType {
    const searchParams = stringify({ populate: '*' });

    const article = await backendRequest.post('/articles?' + searchParams, { data: createArticleDto });

    return article.data.data;
  }

  async findByTitle(title: string): FindByTitleResponseType {
    const searchParams = stringify({ filters: { title: { $eq: title } } });

    const articles = await backendRequest.get('/articles?' + searchParams);
    const article = articles.data.data[0];

    return article;
  }
}
