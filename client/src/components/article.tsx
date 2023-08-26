'use client';

import { routes } from '@/shared/constants';
import { Nullable } from '@/shared/types';
import { colorTextSecondary, secondaryFont, secondaryLink } from '@/theme';
import { config } from '@/utils';
import { EyeFilled } from '@ant-design/icons';
import { Button, Card, Divider, Space, Typography, Grid, Row, Col, Skeleton } from 'antd';
import Link from 'next/link';
import React, { useMemo } from 'react';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

interface ArticleProps {
  id?: number;
  categoryId?: number;
  title?: string;
  image?: string;
  description?: string;
  category?: string;
  views?: Nullable<number>;
  loading?: boolean;
}

export const Article: React.FC<ArticleProps> = ({
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

  const articleUrl = useMemo(() => routes.article.path.replace(':id', id ? id.toString() : ''), [id]);
  const categoryUrl = useMemo(
    () => routes.category.path.replace(':id', categoryId ? categoryId.toString() : ''),
    [categoryId],
  );

  return (
    <Card
      style={{ marginBottom: screens.lg ? 48 : 32, paddingBottom: screens.lg ? 48 : 32 }}
      title={
        <Title
          level={2}
          style={{
            textAlign: screens.lg ? 'left' : 'center',
            fontSize: 18,
            marginBottom: 0,
            lineHeight: '35px',
          }}
        >
          {loading ? <Skeleton.Button block active /> : <Link href={articleUrl}>{title}</Link>}
        </Title>
      }
    >
      <div style={{ width: '100%', padding: screens.md ? '0 48px' : 0 }}>
        <Link
          href={articleUrl}
          style={{
            margin: screens.md ? '48px 0' : '0 0 24px 0',
            display: 'inline-block',
            width: '100%',
            position: 'relative',
            height: screens.md ? 345 : 152,
            backgroundImage: loading
              ? `url(https://placehold.co/850x345?text=Завантаження...&font=roboto)`
              : `url(${config.BPC_URL + image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div style={{ padding: screens.md ? '0 48px' : '0 24px' }}>
        {loading ? (
          <Skeleton title={false} active paragraph={{ rows: 4 }} style={{ marginBottom: 32 }} />
        ) : (
          <Text
            style={{
              fontFamily: secondaryFont.style.fontFamily,
              fontSize: 16,
              color: colorTextSecondary,
              marginBottom: 32,
              display: 'inline-block',
            }}
          >
            {description}
          </Text>
        )}
        {!loading && (
          <Row>
            <Col md={{ span: 12, order: 2 }} sm={24} xs={24} style={{ marginBottom: screens.md ? 0 : 32 }}>
              <Space
                split={<Divider type="vertical" />}
                style={{
                  width: '100%',
                  justifyContent: screens.md ? 'right' : 'center',
                  fontSize: 10,
                  color: colorTextSecondary,
                  height: '100%',
                }}
              >
                <Link href={categoryUrl} style={secondaryLink}>
                  {category}
                </Link>
                <div>
                  <EyeFilled style={{ marginRight: 8 }} />
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.25em' }}>{views || 0}</span>
                </div>
              </Space>
            </Col>
            <Col md={{ span: 12, order: 1 }} sm={24} xs={24}>
              <Link href={articleUrl}>
                <Button key="read-more" size="large" block={!screens.md}>
                  Читати далі
                </Button>
              </Link>
            </Col>
          </Row>
        )}
      </div>
    </Card>
  );
};
