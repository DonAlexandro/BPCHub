import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import * as cheerio from 'cheerio';
import { bpcRequest, withTimeout } from 'src/utils';
import { ParsedArticle } from 'src/article';
import { CategoryService } from 'src/category';
import { TagService } from 'src/tag';

@Injectable()
export class ScrapeTemplate {
  constructor(private readonly categoryService: CategoryService, private readonly tagService: TagService) {}

  // TODO: Move this method to the tagsService, as it's not the task of the scrapping
  /**
   * This function returns required by Strapi object to create a relation between tags and articles
   * Read more in the official documentaion: https://docs.strapi.io/dev-docs/api/rest/relations.
   * It will return `undefined` if no tags array is presented in the `article` object or the array is empty
   *
   * @param {string[]} tags - a tags array to find them by their titles
   */
  async createTagsConnect(tags: string[]) {
    if (tags && tags.length) {
      const tagIds = await Promise.all(
        tags.map(async (parsedTag) => {
          let tag = await this.tagService.findByTitle(parsedTag);

          if (!tag) {
            tag = await this.tagService.create({ title: parsedTag });
          }

          return tag.id;
        }),
      );

      // TODO: Create a new util called RelationFabric and this object to connect method out there
      // Reason: if Strapi dev team will ever deside to change the API of relations creation, we'll have 1 place to edit
      return { connect: tagIds };
    }
  }

  // TODO: Move this method to the categoryService, as it's not the task of the scrapping
  /**
   * This function returns required by Strapi object to create a relation between category and articles
   * Read more in the official documentaion: https://docs.strapi.io/dev-docs/api/rest/relations
   *
   * @param {string} parsedCategory - a category to find it by its title
   */
  async createCategoryConnect(parsedCategory: string) {
    let category = await this.categoryService.findByTitle(parsedCategory);

    if (!category) {
      category = await this.categoryService.create({ title: parsedCategory });
    }

    // TODO: Create a new util called RelationFabric and this object to connect method out there
    return { connect: [category.id] };
  }

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

  private async loadHtml() {
    const RESPONSE_TIMEOUT = 10000;

    const html = await withTimeout<AxiosResponse<any, any>>(bpcRequest.get(''), RESPONSE_TIMEOUT);
    const $ = cheerio.load(html.data);

    return { $, html };
  }
}
