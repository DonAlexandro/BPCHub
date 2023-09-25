import React, { FC, PropsWithChildren } from 'react'
import Styled from './footer.styled'
import { TextProps } from '../Typography'

export const Copyright: FC<PropsWithChildren<TextProps>> = (props) => {
  return (
    <Styled.Copyright $lead {...props} />
  )
}
