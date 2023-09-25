'use client';
import { Article, Pagination } from '@/components';
import { HomeLayout } from '@/layouts';
import { useAppDispatch } from '@/hooks';
import { articleAPI } from '@/store/api';
import { config } from '@/utils';
import { Empty, Result } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function Home() {
  const dispatch = useAppDispatch();

  const [pagination, setPagination] = useState({ page: 1, pageSize: 6 });

  const [findAll, { data, isError, isLoading }] = articleAPI.useLazyFindAllQuery();

  useEffect(() => {
    findAll({ pagination });
  }, [pagination, findAll]);

  useEffect(() => {
    const socket = io(config.SCRAPPER_URL, {
      transports: ['websocket'],
    });

    socket.on('connection', () => {
      console.log('Okay, you are connected to websockets');
    });

    socket.on('articles', (articles) => {
      if (articles.length) {
        findAll({ pagination });
      }
    });

    return () => {
      socket.disconnect();
    };
  }, [pagination, dispatch, findAll]);

  const render = useCallback(() => {
    if (isLoading) {
      return [1, 2, 3].map((key) => <Article loading key={key} />);
    }

    if (isError) {
      return (
        // TODO: Move this to separate component in order to reuse it
        <Result
          status="500"
          title="На жаль, сталася помилка при завантаженні статей"
          subTitle="Повторіть спробу через деякий час, або повідомте, будь ласка, нам про проблему, якщо вона не зникає"
        />
      );
    }

    if (!data?.data.length) {
      return <Empty description="Статей поки що немає" />;
    }

    return (
      <>
        {data?.data.map((article) => (
          <Article
            categoryId={article.attributes.category.data.id}
            id={article.id}
            key={article.id}
            title={article.attributes.title}
            image={article.attributes.image}
            description={article.attributes.description}
            category={article.attributes.category.data.attributes.title}
            views={article.attributes.views}
          />
        ))}
        <Pagination pagination={pagination} setPagination={setPagination} totalPages={data?.meta.pagination?.pageCount} />
      </>
    );
  }, [isLoading, data, pagination, isError]);

  return <HomeLayout>{render()}</HomeLayout>;
}
