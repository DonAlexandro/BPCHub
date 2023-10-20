import { StorageWorker } from '../storage';

class ViewsAdapter {
  private key = 'viewedArticles';
  private storage = new StorageWorker(localStorage);

  setViewedArticle(articleId: number) {
    const viewedArticles = this.getViewedArticles();

    if (!viewedArticles) {
      return this.storage.setItem(this.key, JSON.stringify([articleId]));
    }

    const viewedArticlesList: number[] = JSON.parse(viewedArticles);
    viewedArticlesList.push(articleId);

    this.storage.setItem(this.key, JSON.stringify(viewedArticlesList));
  }

  getViewedArticle(articleId: number) {
    const viewedArticles = this.getViewedArticles();

    if (viewedArticles) {
      const viewedArticlesList: number[] = JSON.parse(viewedArticles);
      const viewedArticle = viewedArticlesList.find((id) => id === articleId);

      return viewedArticle;
    }
  }

  private getViewedArticles() {
    return this.storage.getItem(this.key);
  }
}

export const viewsAdapter = new ViewsAdapter();
