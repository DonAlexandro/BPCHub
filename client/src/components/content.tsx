'use client';
import React, { PropsWithChildren } from 'react';
import { Layout, Grid } from 'antd';

const { Content: AntContent } = Layout;
const { useBreakpoint } = Grid;

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  const screens = useBreakpoint();

  return (
    <AntContent style={{ padding: screens.lg ? 48 : '24px 0', margin: screens.xl ? '0 36px' : 0 }}>
      {children}
    </AntContent>
  );
};
