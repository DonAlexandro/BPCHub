import { CategoryService } from 'src/category';
import { ScrapeTemplate } from '../scrape.template';
import { TagService } from 'src/tag';
import { Test } from '@nestjs/testing';

describe('ScrapeTemplate', () => {
  let scrapeTemplate: ScrapeTemplate;
  let tagService: TagService;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const scrapperModule = await Test.createTestingModule({
      providers: [ScrapeTemplate, TagService, CategoryService],
    }).compile();

    scrapeTemplate = scrapperModule.get<ScrapeTemplate>(ScrapeTemplate);
    tagService = scrapperModule.get<TagService>(TagService);
    categoryService = scrapperModule.get<CategoryService>(CategoryService);
  });

  describe('createTagsConnect', () => {
    it('should return undefined if there is no tags in parsed article object', async () => {
      const tagsConnect = await scrapeTemplate.createTagsConnect([]);

      expect(tagsConnect).toBe(undefined);
    });

    it('should return 1 found tag and 1 created tag', async () => {
      const parsedTags = ['Tag 1', 'Tag 2'];

      tagService.findByTitle = jest.fn().mockResolvedValueOnce({ id: 1 }).mockResolvedValueOnce(null);
      tagService.create = jest.fn().mockResolvedValue({ id: 2 });

      const tagsConnect = await scrapeTemplate.createTagsConnect(parsedTags);

      expect(tagsConnect).toEqual({ connect: [1, 2] });
    });
  });

  describe('createCategoryConnect', () => {
    it('should return connect with the found category', async () => {
      categoryService.findByTitle = jest.fn().mockResolvedValue({ id: 1 });

      const categoryConnect = await scrapeTemplate.createCategoryConnect('Category 1');

      expect(categoryConnect).toEqual({ connect: [1] });
    });

    it('should return connect with the newly created category', async () => {
      categoryService.findByTitle = jest.fn().mockResolvedValue(null);
      categoryService.create = jest.fn().mockResolvedValue({ id: 2 });

      const categoryConnect = await scrapeTemplate.createCategoryConnect('Category 2');

      expect(categoryConnect).toEqual({ connect: [2] });
    });
  });
});
