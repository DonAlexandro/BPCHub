'use client';

import { EyeFilled } from '@ant-design/icons';
import { Divider, Space, Grid, Row, Col, Skeleton } from 'antd';
import React, { useMemo } from 'react';
import { routes } from '../../shared/constants';
import { Nullable } from '../../shared/types';
import { Button } from '../Button';
import { Text, Title, Link } from '../Typography';
import Styled from './article.styled';

const { useBreakpoint } = Grid;

interface ArticleProps {
  id: number;
  categoryId: number;
  title: string;
  image: string;
  description: string;
  category: string;
  views: Nullable<number>;
  loading: boolean;
}

export const Article: React.FC<Partial<ArticleProps>> = ({
  title,
  image,
  description,
  category,
  views,
  id,
  categoryId,
  loading,
}) => {
  const screens = useBreakpoint();

  const articleUrl = useMemo(() => (id ? routes.article.path.replace(':id', id.toString()) : ''), [id]);
  const categoryUrl = useMemo(
    () => routes.category.path.replace(':id', categoryId ? categoryId.toString() : ''),
    [categoryId],
  );

  return (
    <Styled.Article
      title={
        loading ? (
          <Skeleton.Button block active />
        ) : articleUrl ? (
          <Link href={articleUrl}>
            <Title
              level={2}
              style={{
                textAlign: screens.lg ? 'left' : 'center',
              }}
            >
              {title}
            </Title>
          </Link>
        ) : (
          <Title
            level={2}
            style={{
              textAlign: screens.lg ? 'left' : 'center',
            }}
          >
            {title}
          </Title>
        )
      }
    >
      <div style={{ padding: screens.md ? '0 48px' : 0 }}>
        <Styled.Image href={articleUrl} $loading={loading} $image={image} />
      </div>
      <div style={{ padding: screens.md ? '0 48px' : '0 24px' }}>
        {loading ? (
          <Skeleton title={false} active paragraph={{ rows: 4 }} style={{ marginBottom: 32 }} />
        ) : (
          <Text
            style={{
              marginBottom: 32,
              display: 'inline-block',
            }}
          >
            {description}
          </Text>
        )}
        {!loading && (
          <Row>
            <Col
              md={articleUrl ? { span: 12, order: 2 } : 24}
              sm={24}
              xs={24}
              style={{ marginBottom: screens.md ? 0 : 32 }}
            >
              <Styled.Meta $position={articleUrl ? 'end' : 'start'} split={<Divider type="vertical" />}>
                <Link $secondary href={categoryUrl}>
                  {category}
                </Link>
                <div>
                  <Styled.ViewsIcon />
                  <Styled.Views>{views || 0}</Styled.Views>
                </div>
              </Styled.Meta>
            </Col>
            {articleUrl && (
              <Col md={{ span: 12, order: 1 }} sm={24} xs={24}>
                <Link href={articleUrl}>
                  <Button block={!screens.md}>Читати далі</Button>
                </Link>
              </Col>
            )}
          </Row>
        )}
      </div>
    </Styled.Article>
  );
};
