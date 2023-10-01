'use client';

import { Button as AntButton, ButtonProps } from 'antd';
import styled, { css } from 'styled-components';

const Button = styled(AntButton)<ButtonProps>`
  && {
    box-shadow: none;
    transition: all 0.2s ease;

    &.ant-btn-lg {
      font-weight: 800;
      font-size: 11.2px;
      text-transform: uppercase;
      letter-spacing: 0.25em;
      height: 4.8125em;
      padding: 0 35px;
    }

    &.ant-btn-default {
      background: transparent;
    }
  }
`;

const Styled = { Button };

export default Styled;
