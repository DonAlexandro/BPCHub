import { stringify } from 'qs';

export const buildEqualitySearchParams = <C>(condition: C) => {
  let filters = {};

  for (const key of Object.keys(condition)) {
    filters = {
      ...filters,
      [key]: { $eq: condition[key] },
    };
  }

  return stringify({ filters }, { encodeValuesOnly: true });
};
