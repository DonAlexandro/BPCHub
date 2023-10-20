import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ScrapeTemplate } from './templates';
import { ArticleService } from 'src/contexts/article';
import { ScrapperGateway } from './scrapper.gateway';
import { TagService } from 'src/contexts/tag';
import { CategoryService } from 'src/contexts/category';

@Injectable()
export class ScrapperService {
  constructor(
    private readonly scrapeTemplate: ScrapeTemplate,
    private readonly tagService: TagService,
    private readonly categoryService: CategoryService,
    private readonly articleService: ArticleService,
    private readonly scrapperGateway: ScrapperGateway,
  ) {}

  @Cron(CronExpression.EVERY_HOUR)
  async scrape() {
    const parsedArticles = await this.scrapeTemplate.parseArticles();

    const articles = await Promise.all(
      parsedArticles.map(async (article) => {
        const existingArticle = await this.articleService.findOne({
          title: article.title,
          externalId: article.externalId,
        });

        if (!existingArticle) {
          const categoryConnection = await this.categoryService.createCategoryConnection(article.category);
          const tagsConnection = await this.tagService.createTagsConnection(article.tags);

          const newArticle = { ...article, category: categoryConnection, tags: tagsConnection };

          return this.articleService.create(newArticle);
        }
      }),
    );

    // Filter articles to keep only new ones in the array and remove nulls
    const newArticles = articles.filter((article) => article);

    this.scrapperGateway.sendArticlesUpdate(newArticles);
  }
}
