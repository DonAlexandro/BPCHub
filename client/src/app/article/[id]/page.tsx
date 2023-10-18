'use client';

import { Article, Footer } from '@/components';
import { PathParams } from '@/shared/types';
import { articleAPI } from '@/store/api';
import React, { FC } from 'react';

type FullArticleProps = PathParams<{
  id: string;
}>;

const FullArticle: FC<FullArticleProps> = ({ params }) => {
  const articleId = params.id;

  const { data: article, isLoading } = articleAPI.useFindOneQuery({ id: articleId });

  const category = article?.data.attributes.category?.data;

  return (
    <>
      <Article
        loading={isLoading}
        title={article?.data.attributes.title}
        description={article?.data.attributes.content || article?.data.attributes.description}
        category={category?.attributes.title}
        categoryId={category?.id}
        image={article?.data.attributes.image}
      />
      <Footer centered />
    </>
  );
};

export default FullArticle;
