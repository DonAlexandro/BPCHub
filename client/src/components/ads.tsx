'use client';
import { routes } from '@/shared/constants';
import { headingLink } from '@/theme';
import { List, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Text } = Typography;

export const Ads = () => {
  return (
    <List
      dataSource={[{}, {}]}
      renderItem={(item) => (
        <List.Item style={{ padding: '24px 0' }}>
          <List.Item.Meta
            title={
              <Link style={headingLink} href={routes.article.path.replace(':id', '1')}>
                Розклад екзаменів на IІ семестр 2022 - 2023 н.р.
              </Link>
            }
            description={
              <Text type="secondary" style={{ fontSize: '10px !important' }}>
                20 червня 2023
              </Text>
            }
          />
        </List.Item>
      )}
    />
  );
};
