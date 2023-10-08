'use client';
import { Ads, Article, Footer, Header, Pagination } from '@/components';
import { useAppDispatch } from '@/hooks';
import { articleAPI } from '@/store/api';
import { config } from '@/utils';
import { Empty, Result, Grid, Row, Col, Divider } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const { useBreakpoint } = Grid;

export default function Home() {
  const dispatch = useAppDispatch();
  const screens = useBreakpoint();

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
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          totalPages={data?.meta?.pagination?.pageCount}
        />
      </>
    );
  }, [isLoading, data, pagination, isError]);

  return (
    <>
      {!screens.xl && <Header />}
      <Row gutter={48} style={{ marginRight: 0 }}>
        <Col xl={{ span: 17, order: 2 }} md={24} sm={24} xs={24} style={{ paddingRight: 0 }}>
          {render()}
        </Col>
        <Col xl={{ span: 7, order: 1 }} md={24} sm={24} xs={24}>
          <div style={{ padding: screens.lg ? 0 : '0 24px' }}>
            {screens.xl && <Header />}
            <Divider style={{ margin: '48px 0 24px 0' }} />
            <Ads />
            <Divider style={{ margin: '24px 0 48px 0' }} />
            <Footer />
          </div>
        </Col>
      </Row>
    </>
  );
}
