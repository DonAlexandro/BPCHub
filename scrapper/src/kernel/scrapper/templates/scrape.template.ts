import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import { bpcRequest, withTimeout } from 'src/utils';
import { ParsedAd, ParsedArticle } from 'src/contexts/article';

@Injectable()
export class ScrapeTemplate {
  async parseArticles(): Promise<ParsedArticle[]> {
    const { $, html } = await this.loadHtml();

    const articles = [];

    $('#sp-main-body .article-list .article', html.data).each(function () {
      const image = $('.article-intro-image img', this).attr().src;
      const title = $('.article-header a', this).text().trim();
      const category = $('.article-info .category-name a', this).text().trim() || 'Без категорії';
      const externalId = $('.article-info', this)
        .first()
        .contents()
        .filter(function () {
          return this.type === 'text';
        })
        .text()
        .trim();
      const externalPublishDate = $('.article-info .published time', this).attr().datetime;
      const description = $('.articleBody > p', this).text().trim();

      const tags = [];

      $('.tags li', this).each(function () {
        const tag = $('a', this).text().trim();

        tags.push(tag);
      });

      articles.push({
        image,
        title,
        externalId,
        category,
        externalPublishDate: new Date(externalPublishDate),
        description,
        tags,
      });
    });

    return articles;
  }

  async parseAds(): Promise<ParsedAd[]> {
    const { $, html } = await this.loadHtml();

    const ads = [];

    $('#sp-main-body .sp-module_poster .mod-list li', html.data).each(function () {
      const title = $('.mod-articles-category-title', this).text().trim();
      const externalLink = $('.mod-articles-category-title', this).attr().href;
      const category = 'Оголошення';

      ads.push({ title, category, externalLink });
    });

    return ads;
  }

  private async loadHtml() {
    const RESPONSE_TIMEOUT = 10000;

    const html = await withTimeout<AxiosResponse<any, any>>(bpcRequest.get(''), RESPONSE_TIMEOUT);
    const $ = cheerio.load(html.data);

    return { $, html };
  }
}
