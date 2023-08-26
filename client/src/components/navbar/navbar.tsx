'use client';
import React, { useMemo } from 'react';
import { Button, Layout, Grid } from 'antd';
import Link from 'next/link';
import { routes } from '@/shared/constants';
import { MenuOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { colorBorder, headingLink } from '@/theme';
import { NavbarDrawer } from './navbar-drawer';

const { Header } = Layout;
const { useBreakpoint } = Grid;

export const Navbar: React.FC = () => {
  const screens = useBreakpoint();

  const [isDrawerOpened, { toggle: toggleDrawer }] = useBoolean();

  return (
    <>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          height: screens.md ? '56px' : '45px',
          lineHeight: '45px',
          padding: 0,
          borderBottom: `1px solid ${colorBorder}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href={routes.home.path}
          style={{
            ...headingLink,
            paddingLeft: screens.md ? 24 : 16,
          }}
        >
          Бережанський Коледж
        </Link>
        <Button
          onClick={toggleDrawer}
          icon={<MenuOutlined />}
          style={{ height: '100%', width: 64, borderBottom: 'none', borderTop: 'none' }}
        />
      </Header>
      <NavbarDrawer toggleDrawer={toggleDrawer} isDrawerOpened={isDrawerOpened} />
    </>
  );
};
