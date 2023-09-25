'use client'

import styled from "styled-components"
import { breakpoints } from "../../shared/constants"

const Header = styled.div`
  text-align: center;
  padding: 20px 0;
  margin-bottom: 24px;

  @media screen and (min-width: ${breakpoints.xl}) {
    text-align: left;
    padding: 0;
    margin-bottom: 0;
  }
`

const Styled = {Header}

export default Styled
