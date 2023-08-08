'use client';
import React, { PropsWithChildren } from 'react';
import { Layout, Grid } from 'antd';

const { Content } = Layout;
const { useBreakpoint } = Grid;

export const ContentWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const screens = useBreakpoint();

  return (
    <Content style={{ padding: screens.lg ? 48 : '24px 0', margin: screens.xl ? '0 36px' : 0 }}>{children}</Content>
  );
};
