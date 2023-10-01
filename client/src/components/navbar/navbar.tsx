'use client';

import React from 'react';
import { routes } from '../../shared/constants';
import { MenuOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { Menu } from './Menu';
import Styled from './navbar.styled';
import { Brand } from './Brand';

export const Navbar: React.FC = () => {
  const [isDrawerOpened, { toggle: toggleDrawer }] = useBoolean();

  return (
    <>
      <Styled.Navbar>
        <Brand href={routes.home.path}>Бережанський Коледж</Brand>
        <Styled.Burger onClick={toggleDrawer} icon={<MenuOutlined />} />
      </Styled.Navbar>
      <Menu toggleDrawer={toggleDrawer} isDrawerOpened={isDrawerOpened} />
    </>
  );
};
