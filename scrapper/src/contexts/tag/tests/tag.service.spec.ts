import { ConnectionInterceptor } from 'src/utils';
import { TagService } from '../tag.service';
import { Test } from '@nestjs/testing';

describe('TagService', () => {
  let tagService: TagService;

  beforeEach(async () => {
    const scrapperModule = await Test.createTestingModule({
      providers: [TagService, ConnectionInterceptor],
    }).compile();

    tagService = scrapperModule.get<TagService>(TagService);
  });

  describe('createTagsConnection', () => {
    it('should return undefined if there is no tags in parsed article object', async () => {
      const tagsConnect = await tagService.createTagsConnection([]);

      expect(tagsConnect).toBe(undefined);
    });

    it('should return 1 found tag and 1 created tag', async () => {
      const parsedTags = ['Tag 1', 'Tag 2'];

      tagService.findByTitle = jest.fn().mockResolvedValueOnce({ id: 1 }).mockResolvedValueOnce(null);
      tagService.create = jest.fn().mockResolvedValue({ id: 2 });

      const tagsConnect = await tagService.createTagsConnection(parsedTags);

      expect(tagsConnect).toEqual({ connect: [1, 2] });
    });
  });
});
