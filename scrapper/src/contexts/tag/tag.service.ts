import { Injectable, UseInterceptors } from '@nestjs/common';
import { stringify } from 'qs';
import { ConnectionInterceptor, backendRequest } from 'src/utils';
import { Tag } from './tag.entity';
import { CreateTagDTO } from './tag.dto';

@Injectable()
export class TagService {
  constructor(private readonly connectionInterceptor: ConnectionInterceptor) {}
  /**
   * This function returns required by Strapi object to create a relation between tags and articles
   * Read more in the official documentaion: https://docs.strapi.io/dev-docs/api/rest/relations.
   * It will return `undefined` if no tags array is presented in the `article` object or the array is empty
   *
   * @param {string[]} tags - a tags array to find them by their titles
   */
  @UseInterceptors(ConnectionInterceptor)
  async createTagsConnection(tags: string[]) {
    if (tags?.length) {
      const tagIds = await Promise.all(
        tags.map(async (parsedTag) => {
          let tag = await this.findByTitle(parsedTag);

          if (!tag) {
            tag = await this.create({ title: parsedTag });
          }

          return tag.id;
        }),
      );

      return this.connectionInterceptor.intercept(tagIds);
    }
  }

  async create(createTagDto: CreateTagDTO): Promise<Tag> {
    const tag = await backendRequest.post('/tags', { data: createTagDto });

    return tag.data.data;
  }

  async findByTitle(title: string): Promise<Tag> {
    const searchParams = stringify({ filters: { title: { $eq: title } } });

    const tags = await backendRequest.get('/tags?' + searchParams);

    return tags.data.data;
  }
}
