'use client';

import { breakpoints } from '../../shared/constants';
import { Space, SpaceProps } from 'antd';
import styled from 'styled-components';

const Pagination = styled(Space)<SpaceProps>`
  padding: 0 24px;
  width: 100%;

  @media screen and (min-width: ${breakpoints.lg}) {
    padding: 0;
  }
`;

const Styled = { Pagination };

export default Styled;
