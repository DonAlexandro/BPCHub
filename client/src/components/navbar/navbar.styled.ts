import { ButtonProps, Layout } from 'antd';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { colorBorder } from '../../theme';
import { breakpoints } from '../../shared/constants';
import { LinkProps } from '../Typography';
import ButtonStyled from '../Button/button.styled';
import Typography from '../Typography/typography.styled';

const { Header } = Layout;
const { Button } = ButtonStyled;
const { Link } = Typography;

const Navbar = styled(Header)<FC<PropsWithChildren>>`
  && {
    position: sticky;
    top: 0;
    z-index: 1;
    height: 45px;
    line-height: 45px;
    padding: 0;
    border-bottom: 1px solid ${colorBorder};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: ${breakpoints.md}) {
      height: 56px;
    }
  }
`;

const Brand = styled(Link)<LinkProps>`
  padding-left: 16px;

  @media screen and (min-width: ${breakpoints.md}) {
    padding-left: 24px;
  }
`;

const Burger = styled(Button)<ButtonProps>`
  && {
    height: 100%;
    width: 64px !important;
    border-bottom: none;
    border-top: none;

    &:hover {
      border-color: ${colorBorder} !important;
    }
  }
`;

const MenuLink = styled(Link)<LinkProps>`
  width: 100%;
  display: inline-block;
  border-bottom: 1px dotted ${colorBorder};
  padding: 24px 0;
`;

const Styled = { Navbar, Brand, Burger, MenuLink };

export default Styled;
