'use client';
import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

export const HeaderComponent = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px 0', marginBottom: '24px' }}>
      <Title level={2}>ВП НУБіП БФК</Title>
      <Text type="secondary">БЕРЕЖАНСЬКИЙ ФАХОВИЙ КОЛЕДЖ</Text>
    </div>
  );
};
