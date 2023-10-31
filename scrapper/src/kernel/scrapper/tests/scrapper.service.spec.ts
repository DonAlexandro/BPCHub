import { Test } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
import { ScrapeTemplate } from '../templates';
import { ArticleService } from 'src/contexts/article';
import { ScrapperGateway } from '../scrapper.gateway';
import { ScrapperService } from '../scrapper.service';
import { TagService } from 'src/contexts/tag';
import { CategoryService } from 'src/contexts/category';

describe('ScrapperService', () => {
  let scrapeTemplate: ScrapeTemplate;
  let articleService: ArticleService;
  let scrapperGateway: ScrapperGateway;
  let scrapperService: ScrapperService;
  let tagService: TagService;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const scrapperModule = await Test.createTestingModule({
      providers: [ScrapperGateway, ScrapeTemplate, ArticleService, ScrapperService, TagService, CategoryService],
    }).compile();

    scrapeTemplate = scrapperModule.get<ScrapeTemplate>(ScrapeTemplate);
    articleService = scrapperModule.get<ArticleService>(ArticleService);
    scrapperGateway = scrapperModule.get<ScrapperGateway>(ScrapperGateway);
    scrapperService = scrapperModule.get<ScrapperService>(ScrapperService);
    tagService = scrapperModule.get<TagService>(TagService);
    categoryService = scrapperModule.get<CategoryService>(CategoryService);
  });

  describe('scrape', () => {
    it('should return an array with only 1 parsed article, because another one already exists in the DB', async () => {
      const leftArticle = { title: faker.lorem.words(5) };
      const ad = { title: faker.lorem.words(5) };

      const categoryFixture = { id: 1, data: { title: 'Test Category' } };
      const adCategoryFixture = { id: 2, data: { title: 'Ad' } };

      scrapeTemplate.parseArticles = jest
        .fn()
        .mockResolvedValue([leftArticle].concat([{ title: faker.lorem.words(5) }]));

      scrapeTemplate.parseAds = jest.fn().mockResolvedValue([ad]);

      articleService.findOne = jest.fn().mockResolvedValueOnce(null).mockResolvedValueOnce({});

      categoryService.createCategoryConnection = jest
        .fn()
        .mockResolvedValueOnce({ connect: [1] })
        .mockResolvedValueOnce({ connect: [2] });
      tagService.createTagsConnection = jest.fn().mockResolvedValue(undefined);
      articleService.create = jest
        .fn()
        .mockResolvedValueOnce({ ...leftArticle, category: categoryFixture })
        .mockResolvedValueOnce({ ...ad, category: adCategoryFixture });

      scrapperGateway.sendArticlesUpdate = jest.fn();
      scrapperGateway.sendAdsUpdate = jest.fn();

      await scrapperService.scrape();

      expect(scrapperGateway.sendArticlesUpdate).toBeCalledWith([{ ...leftArticle, category: categoryFixture }]);
      expect(scrapperGateway.sendAdsUpdate).toBeCalledWith([{ ...ad, category: adCategoryFixture }]);
    });
  });
});
