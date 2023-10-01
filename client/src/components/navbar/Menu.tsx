'use client';

import { navbarRoutes } from '../../shared/constants';
import { colorBorder } from '../../theme';
import { Drawer } from 'antd';
import React from 'react';
import { SearchForm } from './Search';
import Styled from './navbar.styled';

interface MenuProps {
  toggleDrawer: () => void;
  isDrawerOpened: boolean;
}

export const Menu: React.FC<MenuProps> = ({ toggleDrawer, isDrawerOpened }) => {
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
        <Styled.MenuLink $heading key={route.path} href={route.path}>
          {route.title}
        </Styled.MenuLink>
      ))}
    </Drawer>
  );
};
