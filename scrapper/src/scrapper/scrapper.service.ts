import { Injectable } from '@nestjs/common';
import { ScrapeTemplate } from './templates';
import { ArticleService } from 'src/article';
import { ScrapperGateway } from './scrapper.gateway';

@Injectable()
export class ScrapperService {
  constructor(
    private readonly scrapeTemplate: ScrapeTemplate,
    private readonly articleService: ArticleService,
    private readonly scrapperGateway: ScrapperGateway,
  ) {}

  async scrape() {
    const parsedArticles = await this.scrapeTemplate.parseArticles();

    const articles = await Promise.all(
      parsedArticles.map(async (article) => {
        const existingArticle = await this.articleService.findByTitle(article.title);

        if (!existingArticle) {
          const categoryConnect = await this.scrapeTemplate.createCategoryConnect(article.category);
          const tagsConnect = await this.scrapeTemplate.createTagsConnect(article.tags);

          const newArticle = { ...article, category: categoryConnect, tags: tagsConnect };

          return this.articleService.create(newArticle);
        }
      }),
    );

    // Filter articles to keep only new ones in the array and remove nulls
    const newArticles = articles.filter((article) => article);

    this.scrapperGateway.sendArticlesUpdate(newArticles);
  }
}
