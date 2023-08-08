'use client';
import React from 'react';
import { Typography, Grid } from 'antd';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export const HeaderComponent = () => {
  const screens = useBreakpoint();

  return (
    <div
      style={{
        textAlign: screens.xl ? 'left' : 'center',
        padding: screens.xl ? 0 : '20px 0',
        marginBottom: screens.xl ? 0 : '24px',
      }}
    >
      <Title level={2}>ВП НУБіП БФК</Title>
      <Text type="secondary">БЕРЕЖАНСЬКИЙ ФАХОВИЙ КОЛЕДЖ</Text>
    </div>
  );
};
