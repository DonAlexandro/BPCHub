import qs from 'qs';
import { APIResponse, Article, PaginationDTO } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/utils';

export const articleAPI = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${config.API_TOKEN}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    findAll: builder.query<APIResponse<Article[]>, { pagination: PaginationDTO }>({
      query: ({ pagination }) => {
        const searchParams = qs.stringify({ populate: '*', pagination, sort: ['externalPublishDate:desc'] });

        return `/articles?${searchParams}`;
      },
    }),
  }),
});
