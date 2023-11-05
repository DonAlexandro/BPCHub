'use client';

import { Article, Footer, Meta } from '@/components';
import { PathParams } from '@/shared/types';
import { viewsAdapter } from '@/storage';
import { articleAPI } from '@/store/api';
import React, { FC, useEffect, useMemo } from 'react';

type FullArticleProps = PathParams<{
  id: string;
}>;

const FullArticle: FC<FullArticleProps> = ({ params }) => {
  const articleId = params.id;

  const { data: article, isLoading: findOneLoading } = articleAPI.useFindOneQuery({ id: articleId });
  const [update, { isLoading: updateLoading }] = articleAPI.useUpdateMutation();

  const loading = useMemo(() => findOneLoading || updateLoading, [updateLoading, findOneLoading]);

  const category = article?.data.attributes.category?.data;
  const views = article?.data.attributes.views;

  useEffect(() => {
    const numberedArticleId = +articleId;

    const viewedArticleId = viewsAdapter.getViewedArticle(numberedArticleId);

    // The article hasn't been viewed yet
    if (!viewedArticleId) {
      const incrementedViews = views ? views + 1 : 1;

      update({ id: numberedArticleId, data: { views: incrementedViews } }).then(() => {
        viewsAdapter.setViewedArticle(numberedArticleId);
      });
    }
  }, [articleId, update, views]);

  return (
    <>
      <Meta title={article?.data.attributes.title} />
      <Article
        loading={loading}
        title={article?.data.attributes.title}
        description={article?.data.attributes.content ?? article?.data.attributes.description}
        category={category?.attributes.title}
        categoryId={category?.id}
        image={article?.data.attributes.image}
        views={views}
      />
      <Footer centered />
    </>
  );
};

export default FullArticle;
