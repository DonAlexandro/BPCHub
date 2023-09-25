import { Card, CardProps, Space, SpaceProps } from "antd"
import styled from "styled-components"
import { colorBorder, colorSecondary } from "../../theme"
import { breakpoints } from "../../shared/constants"
import Link, { LinkProps } from "next/link"
import { config } from "../../utils"

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
`

type ArticleImageProps = {
  $image?: string
  $loading?: boolean
}

const Image = styled(Link)<LinkProps & ArticleImageProps>`
  display: inline-block;
  width: 100%;
  position: relative;
  background-size: cover;
  background-position: center;
  margin: 0 0 24px 0;
  height: 152px;
  background-image: ${props => props.$loading ? 'url(https://placehold.co/850x345?text=Завантаження...&font=roboto)' : `url(${config.BPC_URL + props.$image})`};

  @media screen and (min-width: ${breakpoints.md}) {
    height: 345px;
    margin: 48px 0;
  }
`

const Views = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: ${colorSecondary};
`

const Meta = styled(Space)<SpaceProps>`
  width: 100%;
  height: 100%;
  justify-content: center;
  color: ${colorSecondary};

  @media screen and (min-width: ${breakpoints.md}) {
    justify-content: flex-end;
  }
`

const Styled = {Article, Image, Views, Meta}

export default Styled
