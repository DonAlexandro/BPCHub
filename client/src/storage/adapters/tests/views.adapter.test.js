import { faker } from '@faker-js/faker';
import { viewsAdapter } from '../views.adapter';

describe('ViewsAdapter', () => {
  const mockViewsAdapter = (existingId) => {
    viewsAdapter['getViewedArticles'] = jest.fn().mockReturnValue(existingId ? JSON.stringify([existingId]) : null);
    viewsAdapter['storage'] = {
      setItem: jest.fn().mockImplementation((key, value) => {}),
    };
  };

  describe('setViewedArticle', () => {
    it('should save the new array with one article id', () => {
      mockViewsAdapter();

      const articleId = faker.string.uuid();
      viewsAdapter.setViewedArticle(articleId);

      expect(viewsAdapter.storage.setItem).toBeCalledWith('viewedArticles', JSON.stringify([articleId]));
    });

    it('should add the provided article id to the existing list', () => {
      const existingId = faker.string.uuid();

      mockViewsAdapter(existingId);

      const articleId = faker.string.uuid();
      viewsAdapter.setViewedArticle(articleId);

      expect(viewsAdapter.storage.setItem).toBeCalledWith('viewedArticles', JSON.stringify([existingId, articleId]));
    });
  });

  describe('getViewedArticle', () => {
    it('should return undefined if there are no viewed articles in storage', () => {
      mockViewsAdapter();

      const articleId = faker.string.uuid();
      const viewedArticleId = viewsAdapter.getViewedArticle(articleId);

      expect(viewedArticleId).toBe(undefined);
    });

    it('should return undefined if there is no article in storage with provided id', () => {
      const articleId = faker.string.uuid();

      mockViewsAdapter(articleId);

      const viewedArticleId = viewsAdapter.getViewedArticle(faker.string.uuid());

      expect(viewedArticleId).toBe(undefined);
    });

    it('should return the id of viewed article', () => {
      const articleId = faker.string.uuid();

      mockViewsAdapter(articleId);

      const viewedArticleId = viewsAdapter.getViewedArticle(articleId);

      expect(viewedArticleId).toBe(articleId);
    });
  });
});
