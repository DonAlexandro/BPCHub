'use client';
import React from 'react';
import { Button, Layout } from 'antd';
import Link from 'next/link';
import { routes } from '@/shared/constants';
import { MenuOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { colorBorder, headingLink } from '@/theme';
import { NavbarDrawer } from './navbar-drawer';

const { Header } = Layout;

export const Navbar: React.FC = () => {
  const [isDrawerOpened, { toggle: toggleDrawer }] = useBoolean();

  return (
    <>
      <Header
        style={{
          height: '45px',
          lineHeight: '45px',
          padding: 0,
          borderBottom: `1px solid ${colorBorder}`,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Link
          href={routes.home.path}
          style={{
            ...headingLink,
            paddingLeft: 16,
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
