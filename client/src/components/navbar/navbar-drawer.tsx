'use client';
import { navbarRoutes } from '@/shared/constants';
import { colorBorder, headingLink } from '@/theme';
import { Drawer } from 'antd';
import Link from 'next/link';
import React from 'react';
import { SearchForm } from './search-form';

interface NavbarDrawerProps {
  toggleDrawer: () => void;
  isDrawerOpened: boolean;
}

export const NavbarDrawer: React.FC<NavbarDrawerProps> = ({ toggleDrawer, isDrawerOpened }) => {
  return (
    <Drawer
      title={<SearchForm />}
      placement="right"
      onClose={toggleDrawer}
      open={isDrawerOpened}
      width={300}
      closeIcon={null}
      bodyStyle={{ padding: '0 24px' }}
      headerStyle={{ borderBottom: `1px solid ${colorBorder}` }}
    >
      {Object.values(navbarRoutes).map((route) => (
        <Link
          style={{
            ...headingLink,
            width: '100%',
            display: 'inline-block',
            borderBottom: `1px dotted ${colorBorder}`,
            padding: '24px 0',
          }}
          key={route.path}
          href={route.path}
        >
          {route.title}
        </Link>
      ))}
    </Drawer>
  );
};
