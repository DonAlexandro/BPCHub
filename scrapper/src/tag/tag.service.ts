import { Injectable } from '@nestjs/common';
import { stringify } from 'qs';
import { backendRequest } from 'src/utils';
import { Tag } from './tag.entity';
import { CreateTagDTO } from './tag.dto';

@Injectable()
export class TagService {
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
