import { CategoryService } from '../category.service';
import { Test } from '@nestjs/testing';

describe('CategoryService', () => {
  let categoryService: CategoryService;

  beforeEach(async () => {
    const scrapperModule = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    categoryService = scrapperModule.get<CategoryService>(CategoryService);
  });

  describe('createCategoryConnection', () => {
    it('should return connect with the found category', async () => {
      categoryService.findByTitle = jest.fn().mockResolvedValue({ id: 1 });

      const categoryConnect = await categoryService.createCategoryConnection('Category 1');

      expect(categoryConnect).toEqual({ connect: [1] });
    });

    it('should return connect with the newly created category', async () => {
      categoryService.findByTitle = jest.fn().mockResolvedValue(null);
      categoryService.create = jest.fn().mockResolvedValue({ id: 2 });

      const categoryConnect = await categoryService.createCategoryConnection('Category 2');

      expect(categoryConnect).toEqual({ connect: [2] });
    });
  });
});
