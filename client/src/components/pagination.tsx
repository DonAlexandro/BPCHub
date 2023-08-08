import { Button, Space, Grid } from 'antd';
import React from 'react';

const { useBreakpoint } = Grid;

export const Pagination = () => {
  const screens = useBreakpoint();

  return (
    <Space
      direction={screens.md ? 'horizontal' : 'vertical'}
      style={{ padding: screens.lg ? 0 : '0 24px', width: '100%' }}
      size={16}
    >
      <Button size="large" block disabled>
        Попередня сторінка
      </Button>
      <Button size="large" block>
        Наступна сторінка
      </Button>
    </Space>
  );
};
