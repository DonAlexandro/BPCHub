import React, { FC, PropsWithChildren } from 'react';
import Styled from './typography.styled';
import { LinkProps } from './interface';

export const Link: FC<PropsWithChildren<LinkProps>> = (props) => {
  return <Styled.Link {...props} />;
};
