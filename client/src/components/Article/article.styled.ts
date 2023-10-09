import { Card, CardProps, Space, SpaceProps } from 'antd';
import styled from 'styled-components';
import { colorBorder, colorSecondary } from '../../theme';
import { breakpoints } from '../../shared/constants';
import { config } from '../../utils';
import { EyeFilled } from '@ant-design/icons';
import { Title as DefaultTitle } from '../Typography';
import { ArticleImageProps } from './interface';

const Article = styled(Card)<CardProps>`
  margin-bottom: 32px;
  padding-bottom: 32px;

  @media screen and (min-width: ${breakpoints.lg}) {
    margin-bottom: 48px;
    padding-bottom: 48px;
  }

  &.ant-card-bordered {
    border-top: 1px solid ${colorBorder};
    border-bottom: 1px solid ${colorBorder};
    border-left: none;
    border-right: none;

    @media screen and (min-width: ${breakpoints.lg}) {
      border: 1px solid ${colorBorder};
    }
  }

  & .ant-card-head {
    padding: 48px 24px 40px 24px;
    border-bottom: none;

    @media screen and (min-width: ${breakpoints.md}) {
      border-bottom: 1px solid ${colorBorder};
      padding: 60px 48px 53px 48px;
    }

    .ant-card-head-title {
      white-space: pre-wrap;
    }
  }

  & .ant-card-body {
    padding: 0;
  }
`;

const Image = styled.div<ArticleImageProps>`
  display: inline-block;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  margin: 0 0 24px 0;
  height: 152px;
  background-image: ${(props) =>
    props.$loading
      ? 'url(https://placehold.co/850x345?text=Завантаження...&font=roboto)'
      : `url(${config.BPC_URL + props.$image})`};

  @media screen and (min-width: ${breakpoints.md}) {
    height: 345px;
    margin: 48px 0;
  }
`;

const Views = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: ${colorSecondary};
`;

const ViewsIcon = styled(EyeFilled)`
  margin-right: 8px;
  font-size: 10px;
`;

const Meta = styled(Space)<SpaceProps & { $position?: 'start' | 'end' }>`
  width: 100%;
  height: 100%;
  justify-content: center;
  color: ${colorSecondary};

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: ${(props) => {
      const positions = { start: 'flex-start', end: 'flex-end' };

      return positions[props.$position ?? 'end'];
    }};
  }
`;

const Title = styled(DefaultTitle)`
  text-align: center;

  @media screen and (min-width: ${breakpoints.lg}) {
    text-align: left;
  }
`;

const Styled = { Article, Image, Views, Meta, ViewsIcon, Title };

export default Styled;
