import { Test } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
import { ScrapeTemplate } from '../templates';
import { ArticleService } from 'src/article';
import { ScrapperGateway } from '../scrapper.gateway';
import { ScrapperService } from '../scrapper.service';
import { TagService } from 'src/tag';
import { CategoryService } from 'src/category';

describe('ScrapperService', () => {
  let scrapeTemplate: ScrapeTemplate;
  let articleService: ArticleService;
  let scrapperGateway: ScrapperGateway;
  let scrapperService: ScrapperService;

  beforeEach(async () => {
    const scrapperModule = await Test.createTestingModule({
      providers: [ScrapperGateway, ScrapeTemplate, ArticleService, ScrapperService, TagService, CategoryService],
    }).compile();

    scrapeTemplate = scrapperModule.get<ScrapeTemplate>(ScrapeTemplate);
    articleService = scrapperModule.get<ArticleService>(ArticleService);
    scrapperGateway = scrapperModule.get<ScrapperGateway>(ScrapperGateway);
    scrapperService = scrapperModule.get<ScrapperService>(ScrapperService);
  });

  describe('scrape', () => {
    it('should return an array with only 1 parsed article, because another one already exists in the DB', async () => {
      const leftArticle = { title: faker.lorem.words(5) };
      const categoryFixture = { id: 1, data: { title: 'Test Category' } };

      scrapeTemplate.parseArticles = jest
        .fn()
        .mockResolvedValue([leftArticle].concat([{ title: faker.lorem.words(5) }]));

      articleService.findByTitle = jest.fn().mockResolvedValueOnce(null).mockResolvedValueOnce({});

      scrapeTemplate.createCategoryConnect = jest.fn().mockResolvedValue({ connect: [1] });
      scrapeTemplate.createTagsConnect = jest.fn().mockResolvedValue(undefined);
      articleService.create = jest.fn().mockResolvedValue({ ...leftArticle, category: categoryFixture });

      scrapperGateway.sendArticlesUpdate = jest.fn();

      await scrapperService.scrape();

      expect(scrapperGateway.sendArticlesUpdate).toBeCalledWith([{ ...leftArticle, category: categoryFixture }]);
    });
  });
});