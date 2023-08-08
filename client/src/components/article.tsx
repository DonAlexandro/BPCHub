'use client';
import { routes } from '@/shared/constants';
import { colorBorder, colorTextSecondary, secondaryFont, secondaryLink } from '@/theme';
import { EyeFilled } from '@ant-design/icons';
import { Button, Card, Divider, Space, Typography, Grid, Row, Col } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

interface ArticleProps {
  title: string;
  image: string;
  description: string;
  category: string;
  views: string;
}

export const Article: React.FC<ArticleProps> = ({ title, image, description, category, views }) => {
  const screens = useBreakpoint();

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
          <Link href={routes.article.path.replace(':id', '1')}>{title}</Link>
        </Title>
      }
    >
      <div style={{ width: '100%', padding: screens.md ? '0 48px' : 0 }}>
        <Link
          href={routes.article.path.replace(':id', '1')}
          style={{
            margin: screens.md ? '48px 0' : '0 0 24px 0',
            display: 'inline-block',
            width: '100%',
            position: 'relative',
            height: screens.md ? 345 : 152,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      <div style={{ padding: screens.md ? '0 48px' : '0 24px' }}>
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
              <Link href={routes.category.path.replace(':id', '1')} style={secondaryLink}>
                {category}
              </Link>
              <div>
                <EyeFilled style={{ marginRight: 8 }} />
                <span style={{ textTransform: 'uppercase', letterSpacing: '0.25em' }}>{views}</span>
              </div>
            </Space>
          </Col>
          <Col md={{ span: 12, order: 1 }} sm={24} xs={24}>
            <Link href={routes.category.path.replace(':id', '1')}>
              <Button key="read-more" size="large" block={!screens.md}>
                Читати далі
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Card>
  );
};
