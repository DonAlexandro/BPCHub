'use client'

import React, { FC } from 'react'
import { TitleProps } from 'antd/es/typography/Title'
import Styled from './typography.styled'

export const Title: FC<TitleProps> = (props) => {
  return (
    <Styled.Title {...props} level={2} />
  )
}
