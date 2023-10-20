import { faker } from '@faker-js/faker';
import { buildEqualitySearchParams } from '../search-params.builder';

describe('buildEqualitySearchParams', () => {
  it('should build correct search params string to find a record that will be equal to provided condition', () => {
    const title = faker.lorem.word();

    const searchParams = buildEqualitySearchParams({ title, externalId: '123' });

    expect(searchParams).toBe(`filters[title][$eq]=${title}&filters[externalId][$eq]=123`);
  });
});
