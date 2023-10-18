import { Injectable } from '@nestjs/common';
import { stringify } from 'qs';
import { Connection, backendRequest } from 'src/utils';
import { Category } from './category.entity';
import { CreateCategoryDTO } from './category.dto';
import { Connect } from 'src/shared/types';

@Injectable()
export class CategoryService {
  /**
   * This function returns required by Strapi object to create a relation between category and articles
   * Read more in the official documentaion: https://docs.strapi.io/dev-docs/api/rest/relations
   *
   * @param {string} parsedCategory - a category to find it by its title
   */
  async createCategoryConnection(parsedCategory: string): Promise<Connect>;
  @Connection
  async createCategoryConnection(parsedCategory: string): Promise<any> {
    let category = await this.findByTitle(parsedCategory);

    if (!category) {
      category = await this.create({ title: parsedCategory });
    }

    return category.id;
  }

  async create(createCategoryDto: CreateCategoryDTO): Promise<Category> {
    const category = await backendRequest.post('/categories', { data: createCategoryDto });

    return category.data.data;
  }

  async findByTitle(title: string): Promise<Category> {
    const searchParams = stringify({ filters: { title: { $eq: title } } });

    const categories = await backendRequest.get(`/categories?${searchParams}`);
    const category = categories.data.data[0];

    return category;
  }
}
