'use client';

import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';
import styled, { css } from 'styled-components';
import { LinkProps, TextProps } from './interface';
import { colorBorder, colorPrimary, colorSecondary, mainFont, paragraphColor, secondaryFont } from '../../theme';
import NextLink from 'next/link';

const { Title: AntTitle, Text: AntText } = Typography;
const paragraphFont = secondaryFont.style.fontFamily.startsWith("'")
  ? secondaryFont.style.fontFamily
  : `'${secondaryFont.style.fontFamily}'`;
const headingFont = mainFont.style.fontFamily.startsWith("'")
  ? mainFont.style.fontFamily
  : `'${mainFont.style.fontFamily}'`;

const Title = styled(AntTitle)<TitleProps>`
  ${(props) =>
    props.level === 2 &&
    css`
      && {
        font-size: 20px;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 900;
        margin: 0;
        line-height: 1.65;
      }
    `}
`;

const Text = styled(AntText)<TextProps>`
  font-family: ${paragraphFont};
  font-size: 16px;
  color: ${paragraphColor};
  line-height: 28px;

  ${(props) =>
    props.$lead &&
    css`
      font-family: ${headingFont};
      letter-spacing: 0.25em;
      text-transform: uppercase;
      font-size: 11.2px;
      color: ${colorSecondary} @media screen and (min-width: 1200px) {
        line-height: 2.5;
      }
    `}
`;

const Link = styled(NextLink)<LinkProps>`
  && {
    font-family: ${headingFont};
    color: inherit;

    ${(props) =>
      props.$heading &&
      css`
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        font-weight: 800;
      `}

    ${(props) =>
      props.$secondary &&
      css`
        color: ${colorSecondary};
        text-transform: uppercase;
        letter-spacing: 0.25em;
        border-bottom: 1px dotted ${colorBorder};
        font-size: 10px;

        &:hover {
          border-bottom-color: ${colorPrimary};
        }
      `}

    &:hover {
      transition: all 0.2s ease;
      color: ${colorPrimary};

      * {
        transition: all 0.2s ease;
        color: ${colorPrimary};
      }
    }
  }
`;

const Styled = { Title, Text, Link };

export default Styled;
