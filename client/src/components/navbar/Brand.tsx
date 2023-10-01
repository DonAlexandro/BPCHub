import React, { PropsWithChildren } from 'react';
import { LinkProps } from '../Typography';
import Styled from './navbar.styled';

export const Brand: React.FC<PropsWithChildren<LinkProps>> = (props) => {
  return <Styled.Brand $heading {...props} />;
};
