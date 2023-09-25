import React, { FC } from 'react'
import { TextProps } from './interface'
import Styled from './typography.styled'

export const Text: FC<TextProps> = (props) => {
  return (
    <Styled.Text {...props}/>
  )
}
