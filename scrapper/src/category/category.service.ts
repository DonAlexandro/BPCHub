import { Injectable } from '@nestjs/common';
import { stringify } from 'qs';
import { backendRequest } from 'src/utils';
import { Category } from './category.entity';
import { CreateCategoryDTO } from './category.dto';

@Injectable()
export class CategoryService {
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
