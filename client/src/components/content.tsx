'use client';
import React, { PropsWithChildren } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export const ContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return <Content style={{ padding: '24px 0' }}>{children}</Content>;
};
