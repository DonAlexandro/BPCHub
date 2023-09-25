'use client'

import styled, { css } from "styled-components"
import { LinkProps, TextProps } from "../Typography"
import Typography from '../Typography/typography.styled'
import { colorMuted } from "../../theme"

const {Link, Text} = Typography

const SocialLink = styled(Link)<LinkProps>`
  font-size: 20px;

  * {
    color: ${colorMuted};
  }
`

const Copyright = styled(Text)<TextProps>`
  ${props => props.$lead && css`
    font-size: 8px;

    && {
      * {
        font-size: 8px;
      }
    }
  `}
`

const Styled = {SocialLink, Copyright}

export default Styled
