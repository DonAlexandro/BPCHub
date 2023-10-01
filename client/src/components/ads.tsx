'use client';
import { routes } from '@/shared/constants';
import { List } from 'antd';
import React from 'react';
import { Link, Text } from './Typography';

export const Ads = () => {
  return (
    <List
      dataSource={[{}, {}]}
      renderItem={(item) => (
        <List.Item style={{ padding: '24px 0' }}>
          <List.Item.Meta
            title={
              <Link $heading href={routes.article.path.replace(':id', '1')}>
                Розклад екзаменів на IІ семестр 2022 - 2023 н.р.
              </Link>
            }
            description={
              <Text $lead style={{ fontSize: 10 }}>
                20 червня 2023
              </Text>
            }
          />
        </List.Item>
      )}
    />
  );
};
