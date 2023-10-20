import qs from 'qs';
import { APIResponse, Article, PaginationDTO } from '@/shared/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/utils';
import { ArticleDTO } from '@/shared/dto';

export const articleAPI = createApi({
  reducerPath: 'articles',
  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    prepareHeaders(headers) {
      headers.set('Authorization', `Bearer ${config.API_TOKEN}`);

      return headers;
    },
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    findAll: builder.query<APIResponse<Article[]>, { pagination: PaginationDTO }>({
      query: ({ pagination }) => {
        const searchParams = qs.stringify({ populate: '*', pagination, sort: ['externalPublishDate:desc'] });

        return `/articles?${searchParams}`;
      },
      providesTags: ['Articles'],
    }),
    findOne: builder.query<APIResponse<Article>, { id: string }>({
      query: ({ id }) => {
        const searchParams = qs.stringify({ populate: '*' });

        return `/articles/${id}?${searchParams}`;
      },
      providesTags: ['Articles'],
    }),
    update: builder.mutation<APIResponse<Article>, ArticleDTO>({
      query: (request) => ({
        url: `/articles/${request.id}`,
        body: { data: request.data },
        method: 'PUT',
      }),
      invalidatesTags: ['Articles'],
    }),
  }),
});
