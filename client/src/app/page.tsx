'use client';
import { Article, Pagination } from '@/components';
import { HomeLayout } from '@/components/layouts';
import { articleAPI } from '@/store/api';
import { config } from '@/utils';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function Home() {
  const { data, isLoading } = articleAPI.useFindAllQuery({ pagination: { page: 1, pageSize: 6 } });

  useEffect(() => {
    const socket = io(config.SCRAPPER_URL, {
      transports: ['websocket'],
    });

    socket.on('connection', () => {
      console.log('Okay, you are connected to websockets');
    });

    socket.on('articles', (articles) => {
      console.log(articles);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <HomeLayout>
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
      <Pagination />
    </HomeLayout>
  );
}
